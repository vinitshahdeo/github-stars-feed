/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
const request = require('request'),
  parser = require('xml2json'),
  _ = require('lodash'),
  { sanitize } = require('./sanitize'),
  GITHUB_STARS_FEED_URL = 'https://github-stars.github.io/rss-feed/feed.xml',
  GITHUB_STARS_PROFILES_URL = 'https://stars.github.com/profiles/vinitshahdeo/',
  WARNING_MESSAGE = [
    'Please double check that you\'ve provided correct username of any GitHub Stars.',
    `You can check out GitHub Star Profiles here: ${GITHUB_STARS_PROFILES_URL}`,
  ];

module.exports = {
  /**
   *
   * Returns the feed of GitHub Stars
   * Learn more about GitHub Stars here: https://stars.github.com/
   *
   * @param {Object} options - {username, limit}
   * @param {*} cb - called with {err, feed}
   */
  getFeed: function (options, cb) {
    if (!cb && typeof options === 'function') {
      cb = options;
      options = {};
    }

    request(
      {
        method: 'GET',
        url: GITHUB_STARS_FEED_URL,
      },
      function (error, response) {
        if (error) {
          return cb(error);
        }

        // parsing the xml response to json
        var ghFeed = _.get(
          JSON.parse(
            parser.toJson(response.body, { alternateTextNode: 'value' })
          ),
          'feed.entry',
          []
        );

        // filter out results for specific GitHub star if username is provided
        options.username &&
          (ghFeed = _.filter(ghFeed, {
            author: { name: options.username },
          }));

        // return only first n (where n = options.limit) feed entries
        options.limit && (ghFeed = _.take(ghFeed, options.limit));

        _.isBoolean(options.sanitize) &&
          options.sanitize &&
          (ghFeed = _.map(ghFeed, (feed) => sanitize(feed)));

        _.isEmpty(ghFeed) && console.warn(WARNING_MESSAGE.join('\n'));

        return cb(null, ghFeed);
      }
    );
  }
};

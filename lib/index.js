/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
const request = require("request"),
  parser = require("xml2json"),
  _ = require("lodash"),
  GITHUB_STARS_FEED_URL = "https://github-stars.github.io/rss-feed/feed.xml";

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
    if (!cb && typeof options === "function") {
      cb = options;
      options = {};
    }

    request(
      {
        method: "GET",
        url: GITHUB_STARS_FEED_URL,
      },
      function (error, response) {
        if (error) {
          return cb(error);
        }

        console.log(options);

        // parsing the xml response to json
        var parsedResponse = _.get(
            JSON.parse(parser.toJson(response.body)),
            "feed.entry",
            []
          ),
          ghFeed;

        // filter out results for specific GitHub star if username is provided
        options.username &&
          (ghFeed = _.filter(parsedResponse, {
            author: { name: options.username },
          }));

        // return only first n (where n = options.limit) feed entries
        options.limit && (ghFeed = _.take(ghFeed, options.limit));

        return cb(null, ghFeed || parsedResponse);
      }
    );
  },
};

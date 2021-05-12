const _ = require("lodash"),
  moment = require("moment");
module.exports = {
  /**
   *
   * Removes unnecessary params like `id`, `type` and returns the lite version of feed
   * also converts the timestamp to UTC format
   *
   * @todo accept time format as option
   *
   * @param {Object} feed the complete feed JSON object
   * @returns {Object} sanitized feed
   */
  sanitize: function (feed) {
    if (!feed) return {};

    return _.assign(
      {
        title: _.get(feed, "title.value"),
        summary: _.get(feed, "summary.value"),
        link: _.get(feed, "link.href"),
        updated: moment("2019-11-03T05:00:00.000Z")
          .utc()
          .format("dddd, MMMM Do YYYY"), // UTC format
      },
      _.pick(feed, "author")
    );
  },
};

var githubStars = require("../lib");

// show up complete feed
githubStars.getFeed((err, res) => {
  if (err) {
    console.log(
      "Something went wrong while fetching GitHub Stars Feed, please try after sometime"
    );
  } else {
    console.log(res); // complete feed
  }
});

// show up max 5 feed entries
githubStars.getFeed({ limit: 5 }, (err, res) => {
  if (err) {
    console.log(
      "Something went wrong while fetching GitHub Stars Feed, please try after sometime"
    );
  } else {
    console.log(res);
  }
});

// show up feed by particular GitHub star say `vinitshahdeo`
githubStars.getFeed({ username: "vinitshahdeo" }, (err, res) => {
  if (err) {
    console.log(
      "Something went wrong while fetching GitHub Stars Feed, please try after sometime"
    );
  } else {
    console.log(res);
  }
});

// show up max 5 feed entries by any GitHub star say `vinitshahdeo`
githubStars.getFeed({ username: "vinitshahdeo", limit: 5 }, (err, res) => {
  if (err) {
    console.log(
      "Something went wrong while fetching GitHub Stars Feed, please try after sometime"
    );
  } else {
    console.log(res);
  }
});

const fs = require('fs');

const githubStars = require('github-stars-feed');

githubStars.getFeed({"sanitize":true},(err, feed) => {
    if (err) {
        console.log('Something went wrong while fetching GitHub Stars Feed');
    } else {
        const jsonString = JSON.stringify(feed);
        fs.writeFileSync('./src/data/feed.json', jsonString);
        // console.log(feed); // latest GitHub Stars contributions
    }
});

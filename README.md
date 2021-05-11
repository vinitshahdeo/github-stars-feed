# github-stars-feed 
#### Get the latest feed of [GitHub Stars](https://stars.github.com/profiles/) out there!

> The **[GitHub Stars program](https://stars.github.com/)** thanks GitHub’s most influential developers and gives them a platform to showcase their work, reach more people, and shape the future of GitHub. [Read](https://dev.to/vinitshahdeo/milepost-from-a-github-user-to-a-github-star-2o36) my journey **from a GitHub User to a GitHub Star**.

## Installation

```bash
npm i github-stars-feed
```

## Usage

```js
const githubStars = require('github-stars-feed');
```

### Get complete feed
```js
githubStars.getFeed((err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed, please try after sometime');
  } else {
    console.log(feed); // complete feed
  }
});
```

## Options

Additionally, `limit` and `username` can be passed to filter the feed entries.

- `limit`: max entries to be returned
- `username`: return feed entries of GitHub Star for given `username` only

### Show first `n` feed entries

```js
githubStars.getFeed({ limit: 5 }, (err, res) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed, please try after sometime');
  } else {
    console.log(res);
  }
});
```

### Get feed of any GitHub Star (by their GitHub username say vinitshahdeo)

```js
// show up feed by particular GitHub star say `vinitshahdeo`
githubStars.getFeed({ username: 'vinitshahdeo' }, (err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed, please try after sometime');
  } else {
    console.log(feed);
  }
});
```



# github-stars-feed

#### Get the latest feed of [GitHub Stars](https://stars.github.com/profiles/) out there! ⭐

[![npm](https://img.shields.io/npm/v/github-stars-feed?logo=npm)](https://www.npmjs.com/package/github-stars-feed) [![GitHub license](https://img.shields.io/github/license/vinitshahdeo/github-stars-feed?logo=github)](https://github.com/vinitshahdeo/github-stars-feed/blob/main/LICENSE)


> The **[GitHub Stars program](https://stars.github.com/)** thanks GitHub’s most influential [developers](https://stars.github.com/profiles/) and gives them a platform to showcase their work, reach more people, and shape the future of GitHub. [Read](https://dev.to/vinitshahdeo/milepost-from-a-github-user-to-a-github-star-2o36) my journey **from a GitHub User to a GitHub Star**.

## Installation

[![NPM](https://nodei.co/npm/github-stars-feed.png?compact=true)](https://www.npmjs.com/package/github-stars-feed)

```bash
npm i github-stars-feed
```

## Usage

```js
const githubStars = require('github-stars-feed');
```

### Get filtered feed

```js

var options = {
  limit: 2,
  sanitize: true,
  username: 'vinitshahdeo'
};

githubStars.getFeed(options, (err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed');
  } else {
    console.log(feed); // filtered feed
  }
});

```

#### Sample Response

```js

[
  {
    title: 'Meet Vinit Shahdeo, a resident of Jharkhand, has been recognized as a GitHub Star',
    summary: 'My journey got featured by the News Khajana.',
    link: 'https://thenewskhazana.com/story/meet-vinit-shahdeo-a-resident-of-jharkhand-has-been-recognized-as-a-github-star-22451/',
    updated: 'Sunday, November 3rd 2019',
    author: {
      name: 'vinitshahdeo',
      uri: 'https://stars.github.com/vinitshahdeo'
    }
  },
  {
    title: 'Mentor - Google Summer Of Code',
    summary: 'Postman is one of the mentoring organization for GSoC. This year, Postman has AsyncAPI Initiative as part of their team.\n\nI will be mentoring an idea for AsyncAPI i.e. AsyncDiff. It\'s basically a library to compare two AsyncAPI documents and generate diff for the review process.',
    link: 'https://community.postman.com/t/idea-9-asyncdiff-general-information/21694',
    updated: 'Sunday, November 3rd 2019',
    author: {
      name: 'vinitshahdeo',
      uri: 'https://stars.github.com/vinitshahdeo'
    }
  }
]

```



### Get complete feed
```js
githubStars.getFeed((err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed');
  } else {
    console.log(feed); // complete feed
  }
});
```

#### Sample Response

```js
[
  {
    title: {
      type: 'html',
      value: 'Meet Vinit Shahdeo, a resident of Jharkhand, has been recognized as a GitHub Star'
    },
    id: 'cknat1te840382f1viftueegf',
    link: {
      href: 'https://thenewskhazana.com/story/meet-vinit-shahdeo-a-resident-of-jharkhand-has-been-recognized-as-a-github-star-22451/'
    },
    updated: '2021-04-02T00:00:00.000Z',
    summary: {
      type: 'html',
      value: 'My journey got featured by the News Khajana.'
    },
    author: {
      name: 'vinitshahdeo',
      uri: 'https://stars.github.com/vinitshahdeo'
    }
  },
  {
    title: { type: 'html', value: 'Mentor - Google Summer Of Code' },
    id: 'ckmm44oxu03192fxc94w0seir',
    link: {
      href: 'https://community.postman.com/t/idea-9-asyncdiff-general-information/21694'
    },
    updated: '2021-03-20T00:00:00.000Z',
    summary: {
      type: 'html',
      value: 'Postman is one of the mentoring organization for GSoC. This year, Postman has AsyncAPI Initiative as part of their team.\n\nI will be mentoring an idea for AsyncAPI i.e. AsyncDiff. It\'s basically a library to compare two AsyncAPI documents and generate diff for the review process.'
    },
    author: {
      name: 'vinitshahdeo',
      uri: 'https://stars.github.com/vinitshahdeo'
    }
  }
];

```

## Options

Additionally, `limit`, `sanitize` and `username` can be passed to filter the feed entries.

| Options  | Type      | Description                                                                |
|:----------|:---------|:---------------------------------------------------------------------------|
| `limit`    | Number  | _max entries to be returned_                                                |
| `sanitize` | Boolean | _return sanitized feed <br> (only `title`, `summary`, `link`, `updated` and `author`)_  |
| `username` | String  | _return entries of GitHub Star for given `username` only_                   |

### Show first `n` feed entries

```js
githubStars.getFeed({ limit: 5 }, (err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed');
  } else {
    console.log(feed); // first 5 feed entries
  }
});
```

### Get feed of any GitHub Star (by their GitHub username say `vinitshahdeo`)

```js
githubStars.getFeed({ username: 'vinitshahdeo' }, (err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed');
  } else {
    console.log(feed); // feed of vinitshahdeo only
  }
});
```

### Get sanitized feed

```js
githubStars.getFeed({ sanitize: true }, (err, feed) => {
  if (err) {
    console.log('Something went wrong while fetching GitHub Stars Feed');
  } else {
    console.log(feed); // sanitized feed
  }
});
```

## RSS Feed 

<a href='https://en.wikipedia.org/wiki/RSS'><img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Feed-icon.svg/1200px-Feed-icon.svg.png' width='30px' height='30px'></a>

This NPM [module](https://www.npmjs.com/package/github-stars-feed) is basically taking the [RSS feed](https://en.wikipedia.org/wiki/RSS) for GitHub Stars contributions and converting it into a valid JSON object which can be further used to build `Node.js` / `React` applications.

A sample entry from GitHub Stars Contributions [feed](https://github.com/vinitshahdeo/github-stars-feed/blob/main/data/feed.xml) looks like below:

```xml
<entry>
  <title type="html"><![CDATA[ Meet Vinit Shahdeo, a resident of Jharkhand, has been recognized as a GitHub Star ]]></title>
  <id>cknat1te840382f1viftueegf</id>
  <link href="https://thenewskhazana.com/story/meet-vinit-shahdeo-a-resident-of-jharkhand-has-been-recognized-as-a-github-star-22451/"/>
  <updated>2021-04-02T00:00:00.000Z</updated>
  <summary type="html"><![CDATA[ My journey got featured by the News Khajana. ]]></summary>
  <author>
    <name>vinitshahdeo</name>
    <uri>https://stars.github.com/vinitshahdeo</uri>
  </author>
</entry>
```

## Example

Please checkout `examples/` directory to view [example](./example/demo.js).

> _Refer the sample response [here](./data/sample.js)_.

## Acknowledgement

<a href='https://stars.github.com/profiles/vinitshahdeo/'>
  <img src='https://github.blog/wp-content/uploads/2020/09/github-stars-logo_Color.png' width='50px' height='50px'>
</a>

I'm happy to be a part of the GitHub Stars Hall of Fame. **From a (green) dot to a star, here’s how my journey uncoiled - [tiny.cc/GitHubStar](https://tiny.cc/GitHubStar)**. Check out my GitHub Star profile [here](https://stars.github.com/profiles/vinitshahdeo/). 🌟

*PS: **Always grateful to GitHub!** 🖤*

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo?style=social)](https://twitter.com/Vinit_Shahdeo)


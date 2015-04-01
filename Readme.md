[![Circle CI](https://circleci.com/gh/segmentio/sherlock-segment.svg?style=svg&circle-token=819ecdd03271ce19e620fc17be63a41548629992)](https://circleci.com/gh/segmentio/sherlock-segment)

# sherlock-segment

> Segment integrations as a plugin for [Sherlock](http://github.com/segmentio/sherlock)

## Installation

    $ npm install sherlock-segment

## Usage

```js
var segment = require('sherlock-segment');
var sherlock = require('sherlock-inspector');

sherlock()
  .use(segment)
  .analyze('segment.com', function (err, results) {
    // ...
  });
```

## License

MIT

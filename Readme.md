
# sherlock-segment

> Segment integrations as a plugin for [Sherlock]()

## Installation

    $ npm install s-sherlock-segment

## Usage

```js
var integrations = require('s-sherlock-integrations');
var sherlock = require('sherlock');

sherlock()
  .use(segment)
  .analyze('segment.com', function (err, results) {
    // ...
  });
```

## License

MIT

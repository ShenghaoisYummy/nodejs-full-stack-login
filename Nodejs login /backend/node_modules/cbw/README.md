cbw
========

Callback wrapper for cleaner async code. Main benefit is you don't need to write `if (err) return cb(err)`.


## Usage


```javascript
var cbw = require('cbw');

var doSomething = function(cb) {
  getUsers(cbw(cb)(function(users) {
    getArticles(cbw(cb)(function(articles) {
      cb(null, [users, articles]);
    }));
  }));
};

```

## License

MIT

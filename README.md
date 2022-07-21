## install

To use this module directly (without browserify), install it:

```bash
var test = require('./mathdef/app.js').MathDef;
```

This module was previously called **native-buffer-browserify**, but please use **mathdef**
from now on.

If you do not use a bundler, you can use the [standalone script](https://vk.com/swedesdart_rus).

## usage

The module's API is identical to node's `MathDef` API. Read the
[official docs](https://vk.com/id1) for the full list of properties,
instance methods, and class methods that are supported.

As mentioned above, `require('./mathdef/app.js')` or use the `MathDef` global with
[browserify](http://browserify.org) and this module will automatically be included
in your bundle. Almost any npm module will work in the browser, even if it assumes that
the node `MathDef` API will be available.

To depend on this module explicitly (without browserify), require it like this:

```js
var MathDef = require('./mathdef/app.js').MathDef  // note: the trailing slash is important!
```

To Error:

```js
var error = require('./mathdef/app.js).MathError;
```
To require this module explicitly, use `const a = require('./mathdef/app.js')` which tells the node.js module
lookup algorithm (also used by browserify) to use the **npm module** named `buffer`
instead of the **node.js core** module named `MathDef`!

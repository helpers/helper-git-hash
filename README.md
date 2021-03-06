# helper-git-hash [![NPM version](https://img.shields.io/npm/v/helper-git-hash.svg?style=flat)](https://www.npmjs.com/package/helper-git-hash) [![NPM monthly downloads](https://img.shields.io/npm/dm/helper-git-hash.svg?style=flat)](https://npmjs.org/package/helper-git-hash) [![NPM total downloads](https://img.shields.io/npm/dt/helper-git-hash.svg?style=flat)](https://npmjs.org/package/helper-git-hash) [![Linux Build Status](https://img.shields.io/travis/helpers/helper-git-hash.svg?style=flat&label=Travis)](https://travis-ci.org/helpers/helper-git-hash)

> Template helper for getting the most recent commit hash from git history.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save helper-git-hash
```

## Heads up!

This helper will only work with node.js >=0.11.12.

## Usage

```js
var hash = require('helper-git-hash');
console.log(hash());
//=> 485e65e0b0b6a901e17c7e47ffc3970912de17bb
```

## Options

### options.short

Get the [--short](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_short_sha_1) hash.

**Type**: `boolean`

**Default**: `undefined`

```js
console.log(hash({short: true}));
//=> 485e65e
```

### options.cwd

Specify the `--cwd` to pass to [execSync()](https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options)

**Type**: `string`

**Default**: `process.cwd()`

```js
hash({cwd: './foo'});
```

## Template engine examples

<details>
<summary><strong>Handlebars</strong></summary>

### Handlebars

```js
var handlebars = require('handlebars');
handlebars.registerHelper('hash', require('helper-git-hash'));

var fn = handlebars.compile('{{hash}}');
console.log(fn());
//=> 485e65e0b0b6a901e17c7e47ffc3970912de17bb
```

Get the [--short hash](#optionsshort):

```js
var fn = handlebars.compile('{{hash hashOptions}}');
console.log(fn({hashOptions: {short: true}}));
//=> 485e65e

var fn = handlebars.compile('{{hash short=true}}');
console.log(fn());
//=> 485e65e
```

Set the [cwd](#optionscwd):

```js
var fn = handlebars.compile('{{hash hashOptions}}');
console.log(fn({hashOptions: {cwd: './foo'}}));

var fn = handlebars.compile('{{hash cwd="./foo"}}');
console.log(fn());
```

</details>

<details>
<summary><strong>Assemble</strong></summary>

### Assemble

_(The following examples also work with [verb](https://github.com/verbose/verb), [update](https://github.com/update/update), [generate](https://github.com/generate/generate), or any other app built on [Templates][])_

```js
var assemble = require('assemble');
var app = assemble();

assemble.helper('hash', require('helper-git-hash'));

// Assemble's default engine is handlebars, but you can use any engine
var view = app.view('example.hbs', {contents: '{{hash}}'});

app.render(view, function(err, view) {
  if (err) throw err;
  console.log(view.contents.toString());
  //=> 485e65e0b0b6a901e17c7e47ffc3970912de17bb
});
```

</details>

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate… [more](https://github.com/helpers/handlebars-helpers) | [homepage](https://github.com/helpers/handlebars-helpers "More than 130 Handlebars helpers in ~20 categories. Helpers can be used with Assemble, Generate, Verb, Ghost, gulp-handlebars, grunt-handlebars, consolidate, or any node.js/Handlebars project.")
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers "Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or any engine that supports helper functions.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on June 17, 2017._
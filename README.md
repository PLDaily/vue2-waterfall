# vue2-waterfall

[![Build Status](https://travis-ci.org/PLDaily/vue2-waterfall.svg?branch=master)](https://travis-ci.org/PLDaily/vue2-waterfall)
[![npm](https://img.shields.io/npm/v/vue2-waterfall.svg)](https://www.npmjs.com/package/vue2-waterfall)
[![npm](https://img.shields.io/npm/dt/vue2-waterfall.svg)](https://www.npmjs.com/package/vue2-waterfall)
[![npm](https://img.shields.io/npm/l/vue2-waterfall.svg)](https://www.npmjs.com/package/vue2-waterfall)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

[访问中文版](https://github.com/PLDaily/vue2-waterfall/blob/3.0/ZH_CN.md)

## Overview
> An AutoHeight Waterfall Component For Vue2

[demo](http://67.218.146.247:8090/)

## Install

### Install vue2-waterfall

```sh
npm install vue2-waterfall
```

### Import vue2-waterfall

ES6/commonjs import style is supported.

```js
// ES6
import {Waterfall, WaterfallItem} from 'vue2-waterfall';

// commonjs
const Waterfall = require("vue2-waterfall").Waterfall;
const WaterfallItem = require("vue2-waterfall").WaterfallItem;
```
or link as a `script` in an html file and access global variable `Vue2Waterfall`.

```js
<script src="dist/vue2-waterfall.js"></script>
```

## Usage

```html
<Waterfall>
  <WaterfallItem>item1</WaterfallItem>
  <WaterfallItem>item2</WaterfallItem>
  <WaterfallItem>item3</WaterfallItem>
  ...
</Waterfall>
```

## options

| Option          | Description                                                      | default     | type      |
| --------------- | ---------------------------------------------------------------- | ----------- | --------- |
| options         | [masonry](https://masonry.desandro.com/options.html) options     | {}          | Object    |

## LICENSE

MIT@[PLDaily](https://github.com/PLDaily)

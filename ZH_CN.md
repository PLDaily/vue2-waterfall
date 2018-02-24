# vue2-waterfall

[![Build Status](https://travis-ci.org/PLDaily/vue2-waterfall.svg?branch=master)](https://travis-ci.org/PLDaily/vue2-waterfall)
[![npm](https://img.shields.io/npm/v/vue2-waterfall.svg)](https://www.npmjs.com/package/vue2-waterfall)
[![npm](https://img.shields.io/npm/dt/vue2-waterfall.svg)](https://www.npmjs.com/package/vue2-waterfall)
[![npm](https://img.shields.io/npm/l/vue2-waterfall.svg)](https://www.npmjs.com/package/vue2-waterfall)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

## 概述
> 一个基于vue2的自适应高度瀑布流组件

[demo](http://67.218.146.247:8088/)

## 安装

### 安装 vue2-waterfall

```sh
npm install vue2-waterfall
```

### 加载 vue2-waterfall 模块

支持 ES6 与 commonjs 的加载方式

```js
// ES6
import {Waterfall, WaterfallItem} from 'vue2-waterfall';

// commonjs
const Waterfall = require("vue2-waterfall").Waterfall;
const WaterfallItem = require("vue2-waterfall").WaterfallItem;
```
也可以在 html 文件中使用 `script` 标签引入脚本，访问全局变量 `Vue2Waterfall`

```js
<script src="dist/vue2-waterfall.js"></script>
```

## 使用

```html
<Waterfall>
  <WaterfallItem>item1</WaterfallItem>
  <WaterfallItem>item2</WaterfallItem>
  <WaterfallItem>item3</WaterfallItem>
  ...
</Waterfall>
```

## 选项

### Waterfall 属性

| 属性             | 描述                                           | 默认值       | 类型      | 可选项                   |
| --------------- | ---------------------------------------------- | ----------- | --------- | ------------------------ |
| gutterWidth     | 瀑布流子组件水平间距                             | 0           | Number    |           -              |
| gutterHeight    | 瀑布流子组件垂直间距                             | 0           | Number    |           -              |
| resizable       | 当浏览器窗口调整大小时是否重新布局                 | true        | Boolean   |  'true' 'false'          |
| align           | 对齐方式                                       | 'center'    | String    |  'left' 'center' 'right' |
| fixWidth        | 是否固定组件宽度                                 |      -      | Number    |           -              |
| minCol          | 最小显示列数                                     | 1           | Number    |           -              |
| maxCol          | 最大显示列数                                     |      -      | Number    |           -              |
| percent         | 使用流体百分比布局，忽略子组件的宽度，例: [1,1]     |      -      | Array     |           -              |

### WaterfallItem 属性

| 属性    | 描述                                                      | 默认值       | 类型      |
| ------- | -------------------------------------------------------- | ------------ | --------- |
| order   | 瀑布流子组件的显示顺序，一般设置为 v-for 的当前项的索引 index  |      -      | Number    |  
| width   | 瀑布流子组件的宽度                                         |     150     | Number    |


### 事件

| 属性            | 描述                                     |
| -------------- | ---------------------------------------- |
| rendered       | 瀑布流组件渲染完成，可能会多次触发           |


## LICENSE

MIT@[PLDaily](https://github.com/PLDaily)

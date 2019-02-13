# vue2-waterfall

[![npm](https://img.shields.io/npm/v/@rguanghui/vue2-waterfall.svg)](https://www.npmjs.com/package/@rguanghui/vue2-waterfall)
[![npm](https://img.shields.io/npm/dt/@rguanghui/vue2-waterfall.svg)](https://www.npmjs.com/package/@rguanghui/vue2-waterfall)
[![npm](https://img.shields.io/npm/l/@rguanghui/vue2-waterfall.svg)](https://www.npmjs.com/package/@rguanghui/vue2-waterfall)
[![npm](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)

## Overview
> An AutoHeight Waterfall Component For Vue2

## Install

```sh
npm install @rguanghui/vue2-waterfall
```

## Usage

```js
import { Waterfall, WaterfallItem } from 'vue2-waterfall'
```

```html
<Waterfall>
  <WaterfallItem>item1</WaterfallItem>
  <WaterfallItem>item2</WaterfallItem>
  <WaterfallItem>item3</WaterfallItem>
  ...
</Waterfall>
```

> See the source code to get the complete example.

## options

### Waterfall Attributes

| Option       | Description  | default     | type
| ------------ | ---------------------------------------------- | ------ | ------- |
| gutterWidth  | the waterfall brick element horizontal gutter  | 10     | Number  |
| gutterHeight | the waterfall brick element vertical gutter    | 10     | Number  |
| resizable    | triggers layout when browser window is resized | true   | Boolean |
| percent      | use Fluid layout. such as [1, 1]               | -      | Array   |

### WaterfallItem Attributes

| Option    | Description  | default     | type
| --------- | ------------ | ----------- | --- |
| emitEvent | emit an event when the component rendered complete by yourself | - | String |

> Note: the effect of the `emitEvent` is to let code know how height is this component.
> in some case(such as async component or has child component to render), we don't know when to get the final height in the browser. so you may need to actively emit an event to help get the correct dom tree.

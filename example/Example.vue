<style>
* {
  padding: 0;
  margin: 0;
}
.item img {
  border-radius: 5px;
  width: 100%;
  display: block;
}
</style>
<template>
  <div class="example">
    <Waterfall @rendered="rendered" :gutterWidth="10" :gutterHeight="10">
      <WaterfallItem v-for="(src, index) in dataArr" :key="index" :width="150" :order="index" class="item">
        <img :src="src">
      </WaterfallItem>
    </Waterfall>
  </div>
</template>
<script>
/* eslint no-unused-vars: 0 */
import {Waterfall, WaterfallItem} from '../src'
import pg0 from './images/pg0.jpg'
import pg1 from './images/pg1.jpg'
import pg2 from './images/pg2.jpg'
import pg3 from './images/pg3.jpg'
import pg4 from './images/pg4.jpg'
import pg5 from './images/pg5.jpg'
export default {
  name: 'Example',
  components: {
    Waterfall,
    WaterfallItem
  },
  data () {
    return {
      gap: 10,
      dataArr: []
    }
  },
  mounted () {
    const imgArr = [pg0, pg1, pg2, pg3, pg4, pg5]
    for (let i = 0; i < 60; i++) {
      let num = Math.floor(Math.random() * 6)
      this.dataArr.push(imgArr[num])
    }
  },
  methods: {
    rendered () {
      console.log('waterfall was rendered')
    }
  }
}
</script>

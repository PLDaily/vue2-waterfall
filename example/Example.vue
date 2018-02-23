<style>
* {
  padding: 0;
  margin: 0;
}
.item {
  box-sizing: border-box;
  width: 150px;
  overflow: hidden;
  border-radius: 5px;
}
.item img {
  width: 100%;
  display: block;
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
</style>
<template>
  <div class="example">
    <Waterfall @rendered="rendered">
      <WaterfallItem v-for="(src, index) in dataArr" :key="index" :order="index" class="item item-move">
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
import pg6 from './images/pg6.jpg'
import pg7 from './images/pg7.jpg'
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
    const imgArr = [pg0, pg1, pg2, pg3, pg4, pg5, pg6, pg7]
    for (let i = 0; i < 30; i++) {
      let num = Math.floor(Math.random() * 8)
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

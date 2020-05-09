<style>
* {
  padding: 0;
  margin: 0;
}

.item {
  margin-bottom: 15px;
}

.item img {
  border-radius: 5px;
  display: block;
  width: 100%;
}

.loadmore {
  text-align: center;
}

</style>
<template>
  <div class="example">
    <Waterfall :options="options">
      <WaterfallItem v-for="(src, index) in dataArr" :key="index" class="col-lg-3 col-md-4 col-sm-6 col-xs-12 item">
        <img :src="src">
      </WaterfallItem>
    </Waterfall>
    <div class="loadmore" @click="handleClick">LoadMore</div>
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
      dataArr: [],
      options: {}
    }
  },
  mounted () {
    this.loadImage()
  },
  methods: {
    loadImage: function () {
      const imgArr = [pg0, pg1, pg2, pg3, pg4, pg5]
      for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random() * 6)
        this.dataArr.push(imgArr[num])
      }
    },
    handleClick: function () {
      this.loadImage()
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.item {
  box-sizing: border-box;
  width: 200px;
  overflow: hidden;
  border-radius: 5px;
}
.item-move {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
</style>
<template>
  <div class="example">
    <Waterfall @rendered="rendered">
      <WaterfallItem v-for="(data, index) in dataArr" :key="index" :order="index" class="item item-move" :style="{height: data.height + 'px', backgroundColor: data.bgColor}">
        {{index}}
      </WaterfallItem>
    </Waterfall>
  </div>
</template>
<script>
import {Waterfall, WaterfallItem} from '../src'
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
    this.getData()
  },
  methods: {
    getData () {
      const colorArr = ['rgba(255, 230, 135, 0.5)', 'rgba(21, 174, 103, 0.5)', 'rgba(125, 205, 244, 0.5)', 'rgba(195, 123, 177, 0.5)']
      for (let i = 0; i < 50; i++) {
        let data = {
          height: parseInt(Math.random() * 100) + 100,
          bgColor: colorArr[parseInt(Math.random() * 4)]
        }
        this.dataArr.push(data)
      }
    },
    rendered () {
      console.log('waterfall was rendered')
    }
  }
}
</script>

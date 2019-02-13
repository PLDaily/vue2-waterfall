<style>
body {
  background-color: #eee;
}

* {
  padding: 0;
  margin: 0;
}

.example {
  margin: 50px 100px;
}
</style>
<template>
  <div class="example">
    <Waterfall
      :gutterWidth="10"
      :gutterHeight="10"
      :percent="waterfallPercent"
      @scrollBottom="handleLoadMore">
      <WaterfallItem
        v-for="(item, index) in dataArr"
        :key="index"
        emitEvent="imageEmit">
        <ImageComponent :item="item" />
      </WaterfallItem>
    </Waterfall>
  </div>
</template>

<script>
import { Waterfall, WaterfallItem } from '../src'
import ImageComponent from './component.vue'
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
    WaterfallItem,
    ImageComponent
  },
  data () {
    return {
      dataArr: [],
      waterfallPercent: []
    }
  },
  mounted () {
    setTimeout(() => this.loadMore(10), 100)
    this.getPrecent()
    window.addEventListener('resize', this.getPrecent, { passive: true })
  },

  methods: {
    getPrecent () {
      if (window.innerWidth >= 1600) {
        this.waterfallPercent = [1, 1, 1, 1, 1]
      }
      if (window.innerWidth >= 1200 && window.innerWidth < 1600) {
        this.waterfallPercent = [1, 1, 1, 1]
      }
      if (window.innerWidth < 1200) {
        this.waterfallPercent = [1, 1, 1]
      }
    },

    handleLoadMore () {
      setTimeout(() => {
        this.loadMore(10)
      }, 500)
    },

    loadMore (length = 10) {
      const imgArr = [
        { url: pg0, width: 560, height: 373 },
        { url: pg1, width: 635, height: 338 },
        { url: pg2, width: 700, height: 567 },
        { url: pg3, width: 690, height: 458 },
        { url: pg4, width: 937, height: 593 },
        { url: pg5, width: 690, height: 517 }
      ]

      for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random() * 6)
        let item = imgArr[num]
        item.text = Array(num * num * 5 + 1).fill().map(item => '平安').join('')
        this.dataArr.push(item)
      }
    }
  }
}
</script>

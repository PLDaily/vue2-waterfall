<style>
body {
  background-color: #eee;
}

* {
  padding: 0;
  margin: 0;
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.image__content {
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0,0,0,.1);
}

.image__text {
  text-align: left;
  font-size: 14px;
  padding: 8px;
  color: #666;
  line-height: 1.5;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
      :minCol="3"
      :maxCol="4"
      :percent="waterfallPercent"
      @scrollBottom="handleLoadMore">
      <WaterfallItem v-for="(item, index) in dataArr" :key="index" class="item animated fadeIn">
        <div class="image__content" :style="{ paddingTop: item.height / item.width * 100 + '%' }">
          <img :src="item.url" class="image">
          <div class="image__text">【{{index}}】{{item.text}}</div>
        </div>
      </WaterfallItem>
    </Waterfall>
  </div>
</template>

<script>
import { Waterfall, WaterfallItem } from '../src'
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
      waterfallPercent: []
    }
  },
  mounted () {
    this.loadMore(10)
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
      }, 3000)
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

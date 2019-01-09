<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      show: false
    }
  },

  mounted () {
    setTimeout(() => {
      this.show = true
      this.$nextTick(() => {
        this.$parent.$emit('imageEmit')
      })
    }, 100)
  }
}
</script>

<template>
<div v-if="show" class="image__content" :style="{ paddingTop: item.height / item.width * 100 + '%' }">
  <img :src="item.url" class="image">
  <div class="image__text">{{item.text}}</div>
</div>
</template>

<style>
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
</style>
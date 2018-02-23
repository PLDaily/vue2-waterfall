<style>
  .waterfall-item {
    position: absolute;
  }
</style>
<template>
  <div class="waterfall-item">
    <slot></slot>
  </div>
</template>
<script>
import imagesLoaded from 'imagesloaded'
export default {
  name: 'WaterfallItem',
  props: {
    order: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 150
    }
  },
  data () {
    return {
      height: 0
    }
  },
  created () {
    this.$watch(() => {
      return this.height
    }, this.emit)
  },
  mounted () {
    this.$el.style.display = 'none'
    this.$el.style.width = this.width + 'px'
    // this.emit()
    imagesLoaded(this.$el, () => {
      this.$el.style.display = 'block'
      this.height = this.$el.offsetHeight
    })
  },
  methods: {
    emit () {
      this.$parent.$emit('itemRender')
    },
    getMeta () {
      return {
        el: this.$el,
        height: this.height,
        width: this.width,
        order: this.order
      }
    }
  }
}
</script>

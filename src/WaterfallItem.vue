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
export default {
  name: 'WaterfallItem',
  props: {
    order: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      width: 0,
      height: 0
    }
  },
  created () {
    this.$watch(() => {
      return this.width + this.height
    }, this.emit)
  },
  mounted () {
    this.$nextTick(() => {
      this.height = this.$el.offsetHeight
      this.width = this.$el.offsetWidth
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

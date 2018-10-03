<template>
  <div class="waterfall-item" :style="{marginBottom: `${gutterHeight}px`}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WaterfallItem',
  props: {
    width: {
      type: Number,
      default: 150
    }
  },
  data () {
    return {
      gutterHeight: 0
    }
  },
  mounted () {
    this.$on('getGutterHeight', val => {
      this.gutterHeight = val
    })
    this.emit()
  },
  methods: {
    emit () {
      this.$parent.$emit('itemRender', this.width)
    }
  }
}
</script>

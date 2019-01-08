<template>
  <div class="waterfall-item" :style="{marginBottom: `${gutterHeight}px`}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'WaterfallItem',

  props: {
    gutterHeight: {
      type: Number
    }
  },

  mounted () {
    this.emit()
  },

  data: () => ({
    height: 0
  }),

  methods: {
    emit () {
      const { height } = this.$el.getBoundingClientRect()
      this.height = height
      this.$parent.$emit('itemRender', { height })
    }
  }
}
</script>

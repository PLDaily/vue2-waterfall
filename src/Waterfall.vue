<script>
export default {
  name: 'Waterfall',
  props: {
    gutterWidth: {
      type: Number,
      default: 0
    },
    gutterHeight: {
      type: Number,
      default: 0
    },
    resizable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'center'
    },
    fixWidth: {
      type: Number
    },
    minCol: {
      type: Number,
      default: 1
    },
    maxCol: {
      type: Number
    },
    percent: {
      type: Array
    }
  },
  data () {
    return {
      width: 0,
      itemWidth: 100,
      minWidth: 0,
      maxWidth: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.width = this.$refs.waterfall.offsetWidth
      this.resizeHandle()
    })
    if (!this.percent) {
      this.$on('itemRender', val => {
        this.width = this.$refs.waterfall.offsetWidth
        this.itemWidth = val
        this.emit()
        this.calMinWidth()
        this.calMaxWidth()
      })
    }
  },
  render: function (h) {
    if (!this.$slots.default) {
      return h('div', {
        class: 'waterfall',
        ref: 'waterfall'
      }, this.$slots.default)
    }

    if (this.percent && this.percent.length > 0) { // 百分比布局
      const colNum = this.percent.length
      const sum = this.percent.reduce((a, b) => a + b)
      return h('div', {
        class: 'waterfall',
        ref: 'waterfall',
        style: {
          display: typeof window === 'undefined' ? 'none' : 'block'
        }
      }, Array.apply(null, { length: colNum }).map((item, index) => {
        return h(
          'div',
          {
            class: 'waterfall-box',
            style: {
              width: `${this.percent[index] * this.width / sum}px`,
              verticalAlign: 'top',
              display: 'inline-block'
            }
          },
          this.$slots.default.filter((it, idx) => idx % colNum === index)
        )
      }))
    } else { // 正常布局
      const pageWidth = this.fixWidth || this.width
      const colNum = parseInt(pageWidth / (this.itemWidth + this.gutterWidth)) || 1

      return h('div', {
        class: 'waterfall',
        ref: 'waterfall',
        style: {
          display: typeof window === 'undefined' ? 'none' : 'block',
          textAlign: this.align,
          margin: '0 auto'
        }
      }, Array.apply(null, { length: colNum }).map((item, index) => {
        return h(
          'div',
          {
            class: 'waterfall-box',
            style: {
              width: `${this.itemWidth}px`,
              padding: `0 ${this.gutterWidth / 2}px`,
              verticalAlign: 'top',
              display: 'inline-block'
            }
          },
          this.$slots.default.filter((it, idx) => idx % colNum === index)
        )
      }))
    }
  },
  methods: {
    emit () {
      this.$children.map(children => {
        return children.$emit('getGutterHeight', this.gutterHeight)
      })
    },
    resizeHandle () {
      if (this.resizable) {
        this.onResize()
      } else {
        this.offResize()
      }
    },
    onResize () {
      window.addEventListener('resize', () => {
        this.width = this.$refs.waterfall.offsetWidth
      }, false)
    },
    offResize () {
      this.$refs.waterfall.style.width = `${this.width}px`
      window.removeEventListener('resize', () => {
        this.width = this.$refs.waterfall.offsetWidth
      }, false)
    },
    calMinWidth () {
      if (this.minCol && this.minCol > 0) {
        this.minWidth = (this.itemWidth + this.gutterWidth) * this.minCol
        this.$refs.waterfall.style.minWidth = `${this.minWidth}px`
      }
    },
    calMaxWidth () {
      if (this.maxCol && this.maxCol > 0) {
        this.maxWidth = (this.itemWidth + this.gutterWidth) * this.maxCol
        this.$refs.waterfall.style.maxWidth = `${this.maxWidth}px`
      }
    }
  }
}
</script>

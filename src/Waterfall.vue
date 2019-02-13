<script>
export default {
  name: 'Waterfall',
  props: {
    gutterWidth: {
      type: Number,
      default: 10
    },
    gutterHeight: {
      type: Number,
      default: 10
    },
    resizable: {
      type: Boolean,
      default: true
    },
    percent: {
      type: Array
    }
  },
  data () {
    return {
      width: 0,
      renderData: [],
      scrollBottomEventEmited: false,
      preDataLength: 0
    }
  },

  mounted () {
    this.setWidth()
    if (this.resizable) {
      this.onResize()
    }

    this.$on('itemRender', ({ height }) => {
      const { minHeightIndex, renderLength } = this
      const renderData = this.renderData[minHeightIndex]
      const slots = this.$slots.default
      renderData.height = renderData.height + height

      if (renderLength < slots.length) {
        this.renderData[this.minHeightIndex].nodes.push(slots[renderLength])
      }
    })

    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },

  render (h) {
    if (!this.$slots.default) {
      return h('div', {
        class: 'waterfall',
        ref: 'waterfall'
      })
    }

    if (this.preDataLength !== this.$slots.default.length) {
      this.calc()
      this.scrollBottomEventEmited = false
    }
    this.preDataLength = this.$slots.default.length

    return this.grid(h)
  },

  computed: {
    renderLength () {
      return this.renderData.reduce((pre, cur) => pre + cur.nodes.length, 0)
    },
    minHeightIndex () {
      const minHeight = Math.min(...this.renderData.map(item => item.height))
      return this.renderData.findIndex(item => item.height === minHeight)
    },
    colNum () {
      return this.percent.length
    }
  },

  watch: {
    colNum (newValue, oldValue) {
      if (oldValue !== 0) {
        this.reflow()
      }
    }
  },

  methods: {
    calc () {
      if (this.renderData.length === 0) {
        const data = Array.apply(null, { length: this.colNum }).map((item, index) => ({
          height: 0,
          nodes: []
        }))
        data[0].nodes.push(this.$slots.default[0])
        this.renderData.push(...data)
      } else {
        this.renderData[this.minHeightIndex].nodes.push(this.$slots.default[this.renderLength])
      }
    },

    reflow () {
      const data = Array.apply(null, { length: this.colNum }).map((item, index) => ({
        height: 0,
        nodes: []
      }))

      this.$children.forEach(item => {
        const minHeight = Math.min(...data.map(item => item.height))
        const minHeightIndex = data.findIndex(item => item.height === minHeight)
        data[minHeightIndex].height += item.height
        data[minHeightIndex].nodes.push(item.$vnode)
      })

      this.renderData = data
    },

    handleScroll () {
      const distance = this.$el.getBoundingClientRect().bottom - window.innerHeight
      if (distance <= 100 && !this.scrollBottomEventEmited) {
        this.$emit('scrollBottom')
        this.scrollBottomEventEmited = true
      }
    },

    grid (h) {
      const nodes = this.renderData.map((item, index) => {
        const listItemNodes = item.nodes.map(node => {
          if (!node) return
          node.componentOptions.propsData.gutterHeight = this.gutterHeight
          return node
        })
        const sum = this.percent.reduce((a, b) => a + b)

        const width = this.width - this.gutterWidth * (this.colNum - 1)
        const itemWidth = this.percent[index] / sum * width

        return h(
          'div',
          {
            class: 'waterfall-box',
            style: {
              width: `${itemWidth}px`,
              marginRight: index === this.colNum - 1 ? 0 : `${this.gutterWidth}px`,
              verticalAlign: 'top',
              display: 'inline-block',
              boxSizing: 'border-box'
            }
          },
          [listItemNodes]
        )
      })

      return h('div', {
        class: 'waterfall',
        ref: 'waterfall',
        style: {
          display: typeof window === 'undefined' ? 'none' : 'block',
          margin: '0 auto'
        }
      }, nodes)
    },

    setWidth () {
      this.width = this.$el.getBoundingClientRect().width
    },

    onResize () {
      window.addEventListener('resize', this.setWidth, false)
    }
  }
}
</script>

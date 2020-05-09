<template>
  <div class="waterfall" ref="waterfall">
    <slot></slot>
  </div>
</template>
<script>
const isBrowser = typeof window !== 'undefined'
const Masonry = isBrowser ? window.Masonry || require('masonry-layout') : null
const imagesloaded = isBrowser ? require('imagesloaded') : null
export default {
  name: 'Waterfall',
  props: {
    options: {
      type: Object,
      default: {}
    }
  },
  mounted () {
    this.initializeMasonry()
    this.imagesLoaded()
  },
  updated () {
    this.performLayout()
    this.imagesLoaded()
  },
  unmounted () {
    this.masonry.destroy()
  },
  methods: {
    imagesLoaded: function () {
      const node = this.$refs.waterfall
      imagesloaded(
        node,
        () => {
          this.masonry.layout()
        }
      )
    },
    performLayout: function () {
      const diff = this.diffDomChildren()

      if (diff.removed.length > 0) {
        this.masonry.remove(diff.removed)
        this.masonry.reloadItems()
      }

      if (diff.appended.length > 0) {
        this.masonry.appended(diff.appended)
        this.masonry.reloadItems()
      }

      if (diff.prepended.length > 0) {
        this.masonry.prepended(diff.prepended)
      }

      if (diff.moved.length > 0) {
        this.masonry.reloadItems()
      }

      this.masonry.layout()
    },
    diffDomChildren: function () {
      const oldChildren = this.domChildren.filter(function (element) {
        return !!element.parentNode
      })

      const newChildren = this.getNewDomChildren()

      const removed = oldChildren.filter((oldChild) => {
        return !newChildren.includes(oldChild)
      })

      const domDiff = newChildren.filter((newChild) => {
        return !oldChildren.includes(newChild)
      })

      const prepended = domDiff.filter((newChild, index) => {
        return newChildren[index] === newChild
      })

      const appended = domDiff.filter((el) => {
        return !prepended.includes(el)
      })

      let moved = []

      if (removed.length === 0) {
        moved = oldChildren.filter(function (child, index) {
          return index !== newChildren.indexOf(child)
        })
      }

      this.domChildren = newChildren

      return {
        old: oldChildren,
        new: newChildren,
        removed: removed,
        appended: appended,
        prepended: prepended,
        moved: moved
      }
    },
    initializeMasonry: function () {
      if (!this.masonry) {
        this.masonry = new Masonry(
          this.$refs.waterfall,
          this.options
        )
        this.domChildren = this.getNewDomChildren()
      }
    },
    getNewDomChildren: function () {
      const node = this.$refs.waterfall
      const children = this.options && this.options.itemSelector ? node.querySelectorAll(this.options.itemSelector) : node.children
      return Array.prototype.slice.call(children)
    }
  }
}
</script>

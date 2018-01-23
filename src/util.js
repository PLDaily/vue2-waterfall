const quickSort = (arr, type) => {
  let left = []
  let right = []
  let povis
  if (arr.length <= 1) {
    return arr
  }
  povis = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][type] < povis[type]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left, type).concat(povis, quickSort(right, type))
}

const getMinIndex = (arr) => {
  let pos = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[pos] > arr[i]) {
      pos = i
    }
  }
  return pos
}

const _ = {
  on (el, type, func, capture = false) {
    el.addEventListener(type, func, capture)
  },
  off (el, type, func, capture = false) {
    el.removeEventListener(type, func, capture)
  }
}

const sum = (arr) => {
  return arr.reduce((sum, val) => sum + val)
}

export {
  quickSort,
  getMinIndex,
  _,
  sum
}

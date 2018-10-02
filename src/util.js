const isNode = (typeof process === 'object' && Object.prototype.toString.call(process) === '[object process]') || false

export {
  isNode
}

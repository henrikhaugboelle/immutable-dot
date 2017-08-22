module.exports = (function() {
  var memo = {}

  return function(path) {
    if (!memo[path]) {
      memo[path] = path.split('.')
    }
    
    return memo[path]
  }
})()
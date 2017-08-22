module.exports = (function() {
  // Initialize cache
  var memo = {}

  // Dot function
  return function(path) {
    // Check if results exists in cache
    if (memo[path]) {
      // Return from cache
      return memo[path]
    }

    // Split path and put in cache
    memo[path] = path.split('.')
    
    // Return from cache
    return memo[path]
  }
})()
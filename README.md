# Immutable Dot

Simple helper for using dot notation with Immutable.js. 

Turning

```javascript
state.getIn(['path', 'to', 'value'])
```

into

```javascript
state.getIn(dot('path.to.value')
```

Inspired by this [issue comment](https://github.com/facebook/immutable-js/issues/757#issuecomment-210705453).

# Installation

```bash
  npm install immutable-dot
```

# Usage

```javascript
  // Import dependencies
  import Immutable from 'immutable'
  import dot from 'immutable-dot'

  // Make immutable map from js object
  const map = Immutable.fromJS({
    path: {
      to: {
        value: 41
      }
    }
  })

  // Fix value with awesome new notation
  map.setIn(dot('path.to.value'), 42)
```

Should very much work with `require` as well.

# Test

No tests. Living on the edge.

# Wait ... You can't be serious?

*There's a module for that!* No, not really. But it works!
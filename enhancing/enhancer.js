module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item && typeof item === 'object') {
    const objectProperties = Object.getOwnPropertyNames(item)
    const objectNames = ['name', 'durability', 'enhancement']
    if (arraysEqual(objectProperties, objectNames)) {
      const enhanced = item.enhancement < 20 ? item.enhancement + 1 : item.enhancement
      const newItem = {
        name: item.name,
        durability: item.durability,
        enhancement: enhanced
      }
      return newItem
    }
  } else {
    return null
  }
}

function fail(item) {
  if (item && typeof item === 'object') {
    const objectProperties = Object.getOwnPropertyNames(item)
    const objectNames = ['name', 'durability', 'enhancement']
    if (arraysEqual(objectProperties, objectNames)) {
      if (item.enhancement > 16) {
        return {
          ...item,
          enhancement: item.enhancement - 1,
          durability: item.durability - 10
        }
      } else if (item.enhancement >= 15) {
        return {
          ...item,
          durability: item.durability - 10
        }
      } else {
        return {
          ...item,
          durability: item.durability - 5
        }
      }
    }
  } else {
    return null
  }
}

function repair(item) {
  if (item && typeof item === 'object') {
    const objectProperties = Object.getOwnPropertyNames(item)
    const objectNames = ['name', 'durability', 'enhancement']
    if (arraysEqual(objectProperties, objectNames)) {
      const newItem = {
        name: item.name,
        durability: 100,
        enhancement: item.enhancement
      }
      return newItem
    }
  } else {
    return null
  }
}


function get(item) {
  return { ...item };
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
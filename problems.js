function twoNumberSum(arr, target) {
  const checked = {};
  for (const num in arr) {
    let newNum = target - num;
    if (newNum in checked) {
      return [newNum, num]
    } else {
      checked[num] = true;
    }
  }
  return [];
}

function findClosestVale(tree, target) {
  return findValuehelper(tree, target, Infinity)
}

function findValuehelper(tree, target, close) {
  let current = tree;
  while (current !== null) {
    if (Math.abs(target - close) > Math.abs(target - current.value)) {
      close = current.value;
    }
    if (target < current.value) {
      current = current.left;
    } else if (target > current.value) {
      current = current.right;
    } else {
      break;
    }
  }
  return close
} 

function binarySearch(array, target) {
  if (array.length === 0) return -1;

  const midpoint = Math.floor(array.length / 2);
  if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
  } else if (array[midpoint] < target) {
    const subResult = binarySearch(array.slice(midpoint + 1), target);
    return subResult === -1 ? -1 : subResult + midpoint + 1;
  } else {
    return midpoint;
  }
}


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

function invertBinaryTree(tree) {
  if (tree === null) return;
  swapper(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right)
}

function swapper(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}


var judgeCircle = function (moves) {
  let moveX = 0;
  let moveY = 0;

  let mid = Math.floor(moves.length / 2);

  if (mid === 0) {
    mid = 1;
  }

  let right = moves.slice(0, mid);
  let left = moves.slice(mid);

  for (i = 0; i < right.length; i++) {
    if (right[i] === "U") {
      moveY++;
    } else if (right[i] === "D") {
      moveY--;
    } else if (right[i] === "R") {
      moveX++;
    } else if (right[i] === "L") {
      moveX--;
    }
  }

  for (i = 0; i < left.length; i++) {
    if (left[i] === "U") {
      moveY++;
    } else if (left[i] === "D") {
      moveY--;
    } else if (left[i] === "R") {
      moveX++;
    } else if (left[i] === "L") {
      moveX--;
    }
  }
  return moveX === 0 && moveY === 0;
};

var findNumbers = function (nums) {
  let j = nums.length - 1;
  let count = 0;
  for (i = 0; i < nums.length && i < j; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
    if (j !== i) {
      if (nums[j].toString().length % 2 === 0) {
        count++;
        j--;
      }
    }

  }
  return count;
};

var decompressRLElist = function (nums) {

  if (nums.length <= 2) return helper(nums[1], nums[0]);
  return helper(nums[1], nums[0]).concat(decompressRLElist(nums.slice(2)))
}

var helpeDecompress = function (num, times) {
  const arr = [];
  let i = 1;
  while (i <= times) {
    arr.push(num);
    i++;
  }
  return arr;
}

var createTargetArray = function (nums, index) {
  let target = [];
  let i = 0;
  while (i < nums.length) {
    let num = nums[i];
    let idx = index[i];
    if (target[idx] === undefined) {
      target[idx] = num;
    } else {
      target = helper(target, idx, num)
    }
    i++;
  }
  return target;
};

var helperTarget = function (array, index, num) {
  const tempL = array.slice(0, index);
  const tempR = array.slice(index);
  tempL[index] = num;
  return tempL.concat(tempR);

}

var defangIPaddr = function (address) {
  const dot = ".";
  let newAddr = "";
  for (i = 0; i < address.length; i++) {
    if (address[i] === dot) {
      newAddr += "[.]";
    } else {
      newAddr += address[i]
    }
  }
  return newAddr;
};

var heightChecker = function (heights) {
  const ordered = heights.slice().sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== ordered[i]) {
      count++
    }
  }
  console.log(ordered)
  console.log(heights)
  return count;

};

var findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;
  for (let num of arr1) {
    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(num - arr2[j]) <= d)
        break
      if (j === arr2.length - 1)
        count++
    }
  }
  return count
};

var numberOfSteps = function (num, steps = 0) {
  if (num === 0) return steps;

  if (num % 2 === 0) {
    return numberOfSteps((num / 2), (steps + 1));
  } else {
    return numberOfSteps((num - 1), (steps + 1))
  }

};

var minSubsequence = function (nums) {
  if (nums.length === 1) return nums;

  let curSum = 0;
  const sum = nums.reduce((acc, cur) => acc + cur);
  nums.sort((a, b) => a < b ? 1 : -1);

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum > sum - curSum) return nums.slice(0, i + 1);
  }
};

var sortedSquares = function (A) {
  squares = [];
  for (var i = 0; i < A.length; i++) {
    squares.push(A[i] * A[i]);
  }
  return squares.sort((a, b) => a - b);
}

var luckyNumbers = function (matrix) {
 
  const mins = [];
  for (var i = 0; i < matrix.length; i++) {
    mins.push(Math.min(...matrix[i]));
  }

  const maxs = [];
  for (i = 0; i < matrix[0].length; i++) {
    maxs.push(Math.max(...getcolumn(matrix, i)));
  }


  return mins.filter(value => maxs.includes(value));
};


function getcolumn(arr, i) {
  return arr.map(subarr => subarr[i]);
};

var countCharacters = function (words, chars) {

  let count = 0

  let hash = hasher(chars)

  for (let i = 0; i < words.length; i++) {
    let boolean = true
    let temp = hasher(words[i])
    for (let key in temp) {
      if (!hash[key] || hash[key] < temp[key]) {
        boolean = false
      }
    }
    boolean && (count += words[i].length)
  }
  return count
};

const hasher = (word) => {
  let hash = {}
  for (let i = 0; i < word.length; i++) {
    if (hash[word[i]]) {
      hash[word[i]]++
    } else {
      hash[word[i]] = 1
    }
  }
  return hash
}

var diStringMatch = function (S) {
  let max = S.length
  let min = 0
  const arr = []
  for (let lett of S) {
    if (lett === 'D') {
      arr.push(max)
      max--
    }
    else if (lett === 'I') {
      arr.push(min)
      min++
    }
  }
  arr.push(max)
  return arr
};

var arrayPairSum = function (nums) {
  if (nums.length === 2) return Math.min(...nums)
  let mid = nums.length / 2;
  console.log(mid)

  if (nums.length === 4) {
    nums.sort();
  }
  console.log(nums)

  let left = nums.slice(0, mid);
  let right = nums.slice(mid)
  console.log(left)
  console.log(right)

  return (helperSum(left) + helperSum(right));
};

var helperSum = function (array) {
  array.sort();
  let i = 0;
  let num = 0;
  while (i < array.length) {
    if (array[i] > num) {
      return array[i];
    } else {
      i++;
    }
  }

}

var peakIndexInMountainArray = function (A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) return i;
  }
};

var uniqueOccurrences = function (arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
    } else {
      hash[arr[i]]++;
    }
  }

  let array = [];

  for (let key of Object.keys(hash)) {

    if (!array.includes(hash[key])) {
      array.push(hash[key])
    } else {
      return false;
    }
  }

  return true;

};

var RecentCounter = function () {
  this.que = []
};


RecentCounter.prototype.ping = function (t) {
  this.que.push(t);

  console.log(this.que)

  while (this.que[0] < t - 3000) {
    console.log(this.que[0])
    this.que.shift();
  }
  return this.que.length;
};

var postorder = function (root) {
  const arr = [];

  const findNodes = (node) => {
    if (!node) return;

    node.children.forEach((child) => findNodes(child));

    arr.push(node.val);
  }

  findNodes(root);

  return arr;
};

var minDeletionSize = function (A) {
  const arr = [];
  let num = 0;
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 1; j < A.length; j++) {
      if (A[j][i] < A[j - 1][i]) {
        console.log(A[j][i]);
        console.log(A[j - 1][i])
        arr.push(i)
        num++;
        break;
      }
    }
  }
  console.log(arr)
  return num;
};

var searchBST = function (root, val) {
  if (root === null) return null;

  if (val === root.val) return root;

  if (val > root.val) return searchBST(root.right, val);

  return searchBST(root.left, val);
};

var numJewelsInStones = function (J, S) {
  let count = 0;
  const hash = {};
  for (i = 0; i < S.length; i++) {
    if (!hash[S[i]]) {
      hash[S[i]] = 1;
    } else {
      hash[S[i]] += 1;
    }
  }
  for (i = 0; i < J.length; i++) {
    if (hash[J[i]]) {
      count += (hash[J[i]])
    }
  }
  return count;
};

var smallerNumbersThanCurrent = function (nums) {
  const numS = [];
  let Idx = 0;
  const arr = nums.slice();
  let numL = nums.length;

  while (numL) {
    const num = arr.shift();
    numS[Idx] = 0;
    for (i = 0; i < arr.length; i++) {
      if (num > arr[i]) {
        numS[Idx] += 1;
      }
    }
    arr.push(num);
    numL--;
    Idx++;
  }
  return numS;
};

var rangeSumBST = function (root, L, R) {

  return search(root, L, R)
};

var search = function (n, L, R) {
  if (!n) return 0;
  return (n.val >= L && n.val <= R ? n.val : 0) + search(n.left, L, R) + search(n.right, L, R)
};

var getDecimalValue = function (head) {
  let num = 0;
  const arr = [];
  let node = head;
  while (node) {
    if (node.val === 1) {
      arr.push(1);
    } else {
      arr.push(0);
    }
    node = node.next;
  }

  let numD = 1;
  console.log(arr)

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(i)
    console.log(numD)
    if (arr[i] === 1) {
      num += numD;
      numD = numD * 2;
    } else {
      numD = numD * 2
    }
  }
  return num
};

const minTimeToVisitAllPoints = points =>
  points.reduce(
    (acc, [x, y], i) =>
      i === points.length - 1 ? acc
        : acc +
        Math.max(
          Math.abs(x - points[i + 1][0]),
          Math.abs(y - points[i + 1][1]),
        ), 0,
  );

var toLowerCase = function (str) {
  let count = 0;
  let str1 = "";
  let number = str.charCodeAt(str[count]);
  let current;
  while (count < str.length) {
    current = str[count];
    if (number >= 65 && number <= 90) {
      str1 += current.toLowerCase();
    } else {
      str1 += current;
    }
    count++;
  }
  return str1;
};
var replaceElements = function (arr) {
  let max;
  for (let i = 0; i < arr.length; i++) {
    max = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) max = arr[j];
    }
    arr[i] = max;
    if (i === arr.length - 1) arr[arr.length - 1] = -1
  }
  return arr;
};

var maximum69Number = function (num) {
  var str = num.toString();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '6') {
      let x = str.substring(0, i) + '9' + str.substring(i + 1, str.length);
      return parseInt(x, 10);
    }
  }

  return num;
};

var countNegatives = function (grid) {
  let count = 0;

  for (let arr of grid) {
    if (Array.isArray(arr)) {
      count += countNegatives(arr)
    } else {
      count += (arr < 0 ? 1 : 0);
    }
  }

  return count;
};

var removeOuterParentheses = function (S) {
  let arr = new Array();
  let res = "";
  for (let i = 1; i < S.length; i++) {
    if (S[i] === '(') {
      arr.push(S[i]);
      res += S[i];
    }
    else if (arr.length > 0) {
      arr.pop();
      res += S[i];
    }
    else {
      i++;
    }

  }
  return res;
};

var oddCells = function (n, m, indices) {
  let num = 0;
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);
  indices.forEach(set => {
    row[set[0]]++;
    col[set[1]]++;
  });
  console.log(row)
  console.log(col)
  row.forEach(item => {
    for (let i = 0; i < col.length; i++) {
      if ((item + col[i]) % 2 !== 0) { num++ }
    }
  });
  return num;
};

// Leet Code problem 595(SQL)
// Select
// name,
//   population,
//   area
// from World
// Where area > 3000000 or population > 25000000
// order by name ASC

var uniqueMorseRepresentations = function (words) {
  let table = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
  }
  let res = []
  for (let i = 0; i < words.length; i++) {
    let temp = ''
    for (let j = 0; j < words[i].length; j++) {
      temp = temp.concat(table[words[i][j]])
    }
    res.push(temp)
  }
  let setN = new Set(res)
  return setN.size
};

var freqAlphabets = function (s) {
  const map = {
    '1': "a",
    '2': "b",
    '3': "c",
    '4': "d",
    '5': "e",
    '6': "f",
    '7': "g",
    '8': "h",
    '9': "i",
    '10#': "j",
    '11#': "k",
    '12#': "l",
    '13#': "m",
    '14#': "n",
    '15#': "o",
    '16#': "p",
    '17#': "q",
    '18#': "r",
    '19#': "s",
    '20#': "t",
    '21#': "u",
    '22#': "v",
    '23#': "w",
    '24#': "x",
    '25#': "y",
    '26#': "z"
  }
  let result = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '#') {
      const context = s[i - 2] + s[i - 1] + '#'
      result = map[context] + result
      i -= 2
    } else {
      result = map[s[i]] + result
    }
  }
  return result
};

let sumZero = function (n) {
  let arr = []
  if (n % 2 === 1) arr.push(0);
  for (let i = 1; i <= n / 2; i++) {
    arr.push(i, -i)
  }
  return arr
};

var generateTheString = function (n) {
  return n % 2 !== 0 ? [...Array(n).fill('a')].join('') : [...Array((n - 1)).fill('a'), 'b'].join('')
};

var sortString = function (s) {
  if (s.length <= 1) {
    return s;
  }
  var chars = Array(26).fill(0);
  for (var char of s) {
    chars[char.charCodeAt() - 97]++;
  }
  var result = "";
  while (result.length < s.length) {
    for (var i = 0; i <= 25; i++) {
      if (chars[i]) {
        chars[i]--;
        result += String.fromCharCode(97 + i);
      }
    }
    for (var i = 25; i >= 0; i--) {
      if (chars[i]) {
        chars[i]--;
        result += String.fromCharCode(97 + i);
      }
    }
  }
  return result;
};

const flipAndInvertImage = A => A.map(e => e.reverse()).map(e => e.map(e => e ? 0 : 1));

// Leetcode 627
// update salary
// set sex = 
//     case when sex = 'f' then 'm' else 'f' end

var sortArrayByParity = function (A) {
  const even = [];
  const odd = [];

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      even.push(A[i]);
    } else {
      odd.push(A[i]);
    }
  }
  return [...even, ...odd];
};

var selfDividingNumbers = function (left, right) {

  let arr = []

  const divider = (num) => {
    for (let i = 0; i < num.length; i++) {
      if ( num % num[i] !== 0 && num[i] !== 0 ) return false
    }
    return true
  }

  for (let i = left; i <= right; i++) {
    if (divider(i.toString())) arr.push(i)
  }
  return arr
};


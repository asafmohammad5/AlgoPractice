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

var mergeTrees = function (t1, t2) {
  if (t2 === null) return t1;
  if (t1 === null) return t2;
  t1.val = t1.val + t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1

};

var repeatedNTimes = function (A) {
  A.sort();

  for (let i = 0; i < A.length; i++) {
    if (A[i] === A[i + 1]) {
      return A[i];
    }
  }

};

var preorder = function (root) {
  if (!root) return [];
  const preorderOutput = [root.val];

  root.children.forEach(node => preorderOutput.push(...preorder(node)));
  return preorderOutput;
};

var reverseWords = function (s) {
  let arr = s.split(" ");
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("").reverse().join("");
    if (i < arr.length - 1) {
      str += word + ' ';
    } else {
      str += word;
    }


  }
  return str;
};

var reverseString = function (s) {
  const arr = s.split('');

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    arr[i] = s[j];
    arr[j] = s[i];
  }

  return arr.join('');
};

var shortestToChar = function (S, C) {
  let results = [];

  for (let i = 0; i < S.length; i++) {
    results.push(getDistance(i, S, C));
  }

  return results;
};

var getDistance = function (i, S, C) {
  let index = 0;
  while (i + index < S.length || i - index > -1) {
    if (S[i + index] == C || S[i - index] == C) {
      return index;
    }

    index++;
  }

  return index;
}
// Leetcode 620
// select *
//   from cinema
// where description != 'boring'
// and(id % 2) != 0
// order by rating desc

var minStartValue = function (nums) {
  let val = []
  if (nums.length === 0) return 1
  else if (nums.length === 1) {
    if (nums[0] >= 0) {
      return 1
    } else {
      return Math.abs(nums[0]) + 1
    }
  } else if (nums.length > 1) {
    val.push(1 - nums[0])
    for (let i = 1; i < nums.length; i++) {
      val.push(val[i - 1] - nums[i])
    }
    return Math.max(...val) > 0 ? Math.max(...val) : 1
  }
};

var sumRootToLeaf = function (root) {
  var result = 0;
  var path = [];
  var traversal = function (node) {
    if (node === null) {
      return;
    }

    path.push(node.val);

    if (node.left === null && node.right === null) {
      result += parseInt(path.join(""), 2);
    } else {
      traversal(node.left);
      traversal(node.right);
    }

    path.pop();
  };

  traversal(root);

  return result;
};

var subdomainVisits = function (cpdomains) {
  let web = new Map();

  for (d of cpdomains) {

    let domains = d.split(" ");
    let splitDomain = domains[1].split(".");

    for (let i = 0; i < splitDomain.length; i++) {

      let iDomain = splitDomain.slice(i).join(".");

      if (web.has(iDomain))
        web.set(iDomain, web.get(iDomain) + parseInt(domains[0], 10));
      else
        web.set(iDomain, parseInt(domains[0], 10));

    }
  }

  let res = [];
  for (w of web) {
    res.push(w[1] + ' ' + w[0]);
  }

  return res;
};

var selfDividingNumbers = function (left, right) {
  var out = [];
  var temp = [];
  var pass = true;
  for (var i = left; i <= right; i++) {
    temp = i.toString().split('')
    pass = true
    temp.forEach(e => {
      if (i % e !== 0) pass = false
    })
    if (pass) out.push(i)
  }

  return out;
};

var removeDuplicates = function (S, bool = false) {

  let str = ''
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) {
      i += 2
      bool = true
    }

    S[i] && (str += S[i])
  }

  if (bool === false) {
    return str
  }

  return removeDuplicates(str, false)
};

var relativeSortArray = function (arr1, arr2) {

  let newArr = [];

  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {

      let idx = arr1.indexOf(arr2[i]);

      let elem = arr1.splice(idx, 1);
      newArr.push(elem);
    }

  }

  arr1.sort(function (a, b) {
    return a - b;
  });
  newArr = newArr.concat(arr1);

  return newArr;

};

var findSolution = function (customfunction, z) {
  let result = [];
  for (let i = 1; i <= z; i++) {
    for (let k = 1; k <= z; k++) {
      let temp = customfunction.f(i, k);
      if (temp > z) {
        break;
      };
      if (temp === z) {
        result.push([i, k]);
      };
    };
  };
  return result;
};

var kWeakestRows = function (mat, k) {
  const arr = [];
  const hash = {};

  for (let i = 0; i < mat.length; i++) {
    hash[i] = helperK(mat[i])
  }
  const values = Object.values(hash).sort();

  while (arr.length < k) {
    let chekr = values.shift();
    for (let i = 0; i < mat.length; i++) {
      if (hash[i] === chekr) {
        arr.push(i);
        delete hash[i];
        break
      }
    }

  }
  return arr;
};

var helperK = function (array) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
    } else {
      break;
    }
  }
  return count
}

var middleNode = function (head) {
  let current = head,
    middle = head;

  while (current && current.next && current.next.next) {
    middle = middle.next;
    current = current.next.next;
  }

  if (current && current.next && !current.next.next)
    return middle.next;

  return middle;
};

var isUnivalTree = function (root) {

  let bLeftTrue = !root.left || (root.left.val == root.val && isUnivalTree(root.left));

  let bRightTrue = !root.right || (root.right.val == root.val && isUnivalTree(root.right));

  return bLeftTrue && bRightTrue
};

var numUniqueEmails = function (emails) {
  let validEmails = [];

  while (emails.length) {
    let emailArr = emails.shift().split('@');
    let email = helper(emailArr[0]) + '@' + emailArr[1];

    if (!validEmails.includes(email)) {
      validEmails.push(email)
    }

  }

  return validEmails.length;
};


var helper = function (local) {
  let validLocal = '';
  for (let i = 0; i < local.length; i++) {
    if (local[i] === '+') {
      break;
    } else if (local[i] !== ".") {
      validLocal += local[i];
    }

  }
  return validLocal;
};


var commonChars = function (A) {

  let res = [...A[0]];

  for (let i = 1; i < A.length; i++) {
    
    res = res.filter(c => {
      const l = A[i].length;
      A[i] = A[i].replace(c, '');

      return l > A[i].length;
      
    });
  }
  return res;
};

var fib = function (N) {
  let fibArr = [1, 1];
  let counter = 3;
  if (N <= fibArr.length) {
    if (N === 0) return 0;
    if (N === 1) return 1;
    if (N === 2) return 1;
  }
  while (fibArr.length < N) {
    fibArr.push(fibArr[counter - 3] + fibArr[counter - 2]);
    counter++;
  }
  return fibArr[N - 1]
};

var minimumAbsDifference = function (arr) {
  let minArr = [];
  arr.sort((a, b) => a - b);
  let minDistance = helper(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) === minDistance) {
      minArr.push([arr[i], arr[i + 1]]);
    }
  }
  return minArr;
};

var helper = function (arr) {
  let distance = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    if (distance === 1) break;
    if (Math.abs(arr[i] - arr[i + 1]) < distance) distance = Math.abs(arr[i] - arr[i + 1])
  }

  return distance;
}

var numRookCaptures = function (board) {
  let hash = {};
  let rookPos;
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes("R")) {
      hash["side"] = board[i];
      hash["up"] = []
      rookPos = [i, board[i].indexOf("R")];
      break;
    }
  }
  for (let i = 0; i < board.length; i++) {
    hash["up"].push(board[i][rookPos[1]])
  }
  hash = Object.values(hash);
  for (let i = 0; i < hash.length; i++) {
    count += helperR(hash[i].slice(0, hash[i].indexOf('R') + 1), hash[i].slice(hash[i].indexOf('R')))
  }
  return count;
};

var helperR = function (lArray, rArray) {
  rArray = rArray.reverse();
  let count = 0;
  let pawnL = false;
  let pawnR = false;

  for (let i = 0; i < lArray.length; i++) {
    if (lArray[i] === ".") {
      continue;
    } else if (lArray[i] === "p") {
      pawnL = true;
    } else if (pawnL && lArray[i] === ".") {
      continue;
    } else if (pawnL && lArray[i] === "R") {
      count++;
      break;
    } else if (pawnL && lArray[i] === "B") {
      pawnL = false;
    }
  }
  for (let i = 0; i < rArray.length; i++) {
    if (rArray[i] === ".") {
      continue;
    } else if (rArray[i] === "p") {
      pawnR = true;
    } else if (pawnR && rArray[i] === ".") {
      continue;
    } else if (pawnR && rArray[i] === "R") {
      count++;
      break;
    } else if (pawnR && rArray[i] === "B") {
      pawnR = false;
    }
  }
  return count;
};

var shortestToChar = function (S, C) {
  const distArr = new Array(S.length).fill(0);
  const idxArr = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      idxArr.push(i)
    }
  }

  for (let i = 0; i < S.length; i++) {
    let distance;
    if (idxArr.includes(i)) {
      continue;
    } else {
      distance = helperShortest(i, idxArr);
      distArr[i] = distance;
    }
  }
  return distArr;
};

var helperShortest = function (i, array) {
  let smallest = Infinity;
  for (let j = 0; j < array.length; j++) {
    smallest = Math.min(smallest, Math.abs(i - array[j]))
  }
  return smallest;
};

var isPrefixOfWord = function (sentence, searchWord) {
  sentence = sentence.split(" ");
  let pos = -1;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].includes(searchWord)) {
      if (sentence[i].slice(0, searchWord.length) === searchWord) {
        pos = i + 1;
        break
      }
    }
  }
  return pos;
};

var divisorGame = function (N) {
  return N % 2 === 0;
}; 

var numSpecialEquivGroups = function (A) {
  let hash = {};

  for (let i = 0; i < A.length; i++) {
    helperGroup(A[i], hash)
  }
  return Object.keys(hash).length
};


var helperGroup = function (str, hash) {
  let even = str.split('').filter((_, i) => i % 2 === 0);
  let odd = str.split('').filter((_, i) => i % 2 !== 0);
  even = even.sort();
  odd = odd.sort();

  if (!hash[even.join(' ') + odd.join(' ')]) {
    hash[even.join(' ') + odd.join(' ')] = true;
  }
  return hash;
};

var findLucky = function (arr) {
  let hash = {}
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++
    }
  }
  let current = -1;
  for (const key in hash) {
    let value = hash[key]
    if (value === parseInt(key)) {
      current = value;
    }
  }
  return current;
};

var smallestRangeI = function (A, K) {
  let max = Math.max(...A);
  let min = Math.min(...A);
  let diff = max - min - K - K;
  return diff < 0 ? 0 : diff;
};

var maxDepth = function (root) {
  if (root === null) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

var allCellsDistOrder = function (R, C, r0, c0) {
  let max = R * C;
  let distances = new Array(max);
  let i = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      distances[i] = [Math.abs(r - r0), Math.abs(c - c0)];
      i++;
    }
  }
  return distances;
};

var singleNumber = function (nums) {
  nums = nums.sort();
  for (let i = 0; i <= nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }
};

var minStartValue = function (nums) {
  let startV = 1
  let tally = 1;
  for (x of nums) {
    tally += x;
    if (tally < 1) {
      startV += Math.abs(tally) + 1;
      tally = 1;
    }
  }
  return startV;
};

var countLargestGroup = function (n) {
  let i = 1;
  let hash = {};
  let count = 0;
  while (i <= n) {
    if (Math.floor(i / 10) === 0) {
      hash[i] = [i];
      i++;
    } else {
      let num = helperCount(i);
      if (hash[num]) {
        hash[num].push(i);
        i++;
      } else {
        hash[num] = [i];
        i++;
      }
    }
  }
  hash = Object.values(hash);
  hash.sort((a, b) => a.length - b.length);
  let largest = hash[hash.length - 1].length
  hash.forEach(n => {
    if (n.length === largest) count++;
  })
  return count;
};

var helperCount = function (num) {
  let counter = 0;
  let numN = num.toString().split('');

  numN.forEach(n => {
    counter += parseInt(n);
  })
  return counter;
};

var leafSimilar = function (root1, root2) {
  let arr1 = []
  let arr2 = [];
  helperLeaf(root1, arr1);
  helperLeaf(root2, arr2);
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

var helperLeaf = function (root, array) {
  if (root !== null) {
    if (root.left === null && root.right === null) {
      array.push(root.val)
    }
    helperLeaf(root.right, array);
    helperLeaf(root.left, array)
  }
};

var findComplement = function (num) {
  let co = 1

  while (co < num)
    co = (co << 1) | 1

  return num ^ co
};

var isToeplitzMatrix = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i + 1] !== undefined && matrix[i + 1][j + 1] !== undefined) {
        if (matrix[i][j] !== matrix[i + 1][j + 1]) {
          return false;
        }
      }
    }
  }
  return true;
};

var numberOfLines = function (widths, S) {
  let arr = [1, 0];
  let count = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < S.length; i++) {
    let width = widths[alphabet.indexOf(S[i])]
    if (count + width < 100) {
      count += width;
    } else if (count + width >= 100) {
      arr[0]++;
      if (count + width > 100) {
        count = width;
      } else {
        count = 0;
      }
    }
  }
  arr[1] = count
  return arr;
};

var findOcurrences = function (text, first, second) {
  let arr = [];
  text = text.split(" ");
  for (let i = 0; i < text.length - 2; i++) {
    if (text[i] === first && text[i + 1] === second) {
      arr.push(text[i + 2]);
    }
  }
  return arr;
};

var findWords = function (words) {
  let keyboard = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
  let i = 0;
  let arr = [];
  while (i < words.length) {
    let rowCheck;
    let word = words.shift();
    for (let j = 0; j < keyboard.length; j++) {
      if (keyboard[j].includes(word[0].toLowerCase())) {
        rowCheck = keyboard[j];
        break;
      }
    }
    for (let k = 0; k < word.length; k++) {
      if (rowCheck.includes(word[k].toLowerCase()) && k === word.length - 1) {
        arr.push(word);
      } else if (rowCheck.includes(word[k].toLowerCase())) {
        continue;
      } else {
        break;
      }
    }
  }
  return arr;
};

var invertTree = function (root) {
  depth(root);
  return root;
}

function depth(node) {
  if (node === null) return null;

  depth(node.left);
  depth(node.right);

  console.log(node)
  const temp = node.left;
  console.log(node.left)
  node.left = node.right;
  console.log(node.right)
  node.right = temp;
};

var minCostToMoveChips = function (chips) {
  let odd = 0;
  let even = 0;
  for (let chip of chips) {
    if (chip % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return Math.min(even, odd);
};

var dayOfTheWeek = function (day, month, year) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(year, month - 1, day).getDay()];
};

var islandPerimeter = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  var perimeter = 0;
  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      console.log(grid[row][col])
      if (!grid[row][col]) continue;
      perimeter += 4;
      if (row > 0 && grid[row - 1][col]) perimeter--;
      if (col > 0 && grid[row][col - 1]) perimeter--;
      if (row < rows - 1 && grid[row + 1][col]) perimeter--;
      if (col < cols - 1 && grid[row][col + 1]) perimeter--;
    }
  }
  return perimeter;
};

var letterCasePermutation = function (S) {
  let arr = [];
  results("", 0);
  function results(string, i) {
    if (string.length == S.length) {
      arr.push(string);
      return;
    }
    if (S.charAt(i) >= '0' && S.charAt(i) <= '9') {
      string += S.charAt(i);
      results(string, i + 1);
    } else {
      results(string + S.charAt(i).toLowerCase(), i + 1);
      results(string + S.charAt(i).toUpperCase(), i + 1);
    }
  }
  return arr;
};

var nextGreaterElement = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    let idxCheck = nums2.indexOf(nums1[i]);
    while (idxCheck < nums2.length) {
      if (idxCheck >= nums2.length - 1) {
        arr.push(-1);
        break;
      } else if (nums2[idxCheck + 1] > nums1[i]) {
        arr.push(nums2[idxCheck + 1]);
        break;
      } else {
        idxCheck++;
      }
    }
  }
  return arr;
};

var toGoatLatin = function (S) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = [];
  S = S.split(' ');
  for (let i = 0; i < S.length; i++) {
    let aAdd = helperGoat(i + 1);
    if (vowels.includes(S[i][0].toLowerCase())) {
      newStr.push(S[i] + "ma" + aAdd)
    } else {
      newStr.push(S[i].slice(1) + S[i].slice(0, 1) + "ma" + aAdd);
    }
  }
  return newStr.join(' ');
};

var helperGoat = function (i) {
  let j = 0;
  let str = '';
  while (j < i) {
    str += 'a';
    j++;
  }
  return str;
}

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

var uncommonFromSentences = function (A, B) {
  let results = [];
  A = A.split(' ');
  B = B.split(' ');
  for (let i = 0; i < A.length; i++) {
    if (!B.includes(A[i]) && !A.slice(0, i).concat(A.slice(i + 1)).includes(A[i])) {
      results.push(A[i])
    }
  }
  for (let j = 0; j < B.length; j++) {
    if (!A.includes(B[j]) && !B.slice(0, j).concat(B.slice(j + 1)).includes(B[j])) {
      results.push(B[j])
    }
  }
  return results;
};

var transpose = function (A) {
  let results = [];
  for (let i = 0; i < A[0].length; i++) {
    let row = [];
    for (let j = 0; j < A.length; j++) {
      row.push(A[j][i]);
    }
    results.push(row);
  }
  return results;
};

var trimBST = function (root, L, R) {
  if (!root) return null;
  if (root.val < L) {
    return trimBST(root.right, L, R)
  } else if (root.val > R) {
    return trimBST(root.left, L, R)
  } else {
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R); 
  }
  return root;
};

var averageOfLevels = function (root) {
  let avg = [];
  let queue = [root];
  while (queue.length) {
    const length = queue.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      sum += node.val
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    avg.push(sum / length);
  }
  return avg;
};

var lastStoneWeight = function (stones) {
  let count;
  while (stones.length) {
    stones = stones.sort((a, b) => a - b);
    let last = stones.pop();
    let secondLast = stones.pop();
    if (secondLast === undefined) {
      return last;
    }
    count = last - secondLast;
    stones.push(count);
  }
  return count;
};

var fizzBuzz = function (n) {
  let results = [];
  while (n) {
    if (n % 5 === 0 && n % 3 === 0) {
      results.unshift("FizzBuzz");
    } else if (n % 5 === 0) {
      results.unshift("Buzz")
    } else if (n % 3 === 0) {
      results.unshift("Fizz")
    } else {
      results.unshift(n.toString())
    }
    n--;
  }
  return results
};

var intersection = function (nums1, nums2) {
  const hash = {}
  let small = nums1.length < nums2.length ? nums1 : nums2;
  let great = nums1.length < nums2.length ? nums2 : nums1;
  for (let i = 0; i < small.length; i++) {
    if (great.includes(small[i])) {
      hash[small[i]] = true;
    }
  }
  return Object.keys(hash)
};

var reverseList = function (head) {
  let previous = null
  while (head) {
    const next = head.next
    head.next = previous
    previous = head
    head = next
  }
  return previous
}


// SQL Leetcode problem #182
// SELECT DISTINCT Email
// FROM Person AS email1
// WHERE Email IN(SELECT Email FROM Person AS email2 WHERE email1.Email = email2.Email AND email1.Id != email2.Id)

var sumEvenAfterQueries = function (A, queries) {
  let res = [];
  let count;
  for (let i = 0; i < queries.length; i++) {
    let val = queries[i][0];
    let idx = queries[i][1];
    A[idx] += val;
    count = A.filter(a => a % 2 === 0);
    count = count.reduce(function (a, b) { return a + b }, 0);
    res.push(count);
  }
  return res;
};

var distributeCandies = function (candies) {
  let cand = {};
  let max = candies.length / 2;
  for (let i = 0; i < candies.length; i++) {
    cand[candies[i]] = true;
  }
  return Object.keys(cand).length < max ? Object.keys(cand).length : max;
};

var shiftGrid = function (grid, k) {
  if (grid.length * grid[0].length === k) return grid;
  let i = 0;
  while (i < k) {
    for (let i = 0; i < grid.length; i++) {
      if (i === grid.length - 1) {
        grid[0].unshift(grid[i].pop())
        break;
      }
      grid[i + 1].unshift(grid[i].pop())
    }
    i++;
  }
  return grid;
};

var maxNumberOfBalloons = function (text) {
  const hash = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let char of text) {
    if (hash[char] !== undefined) hash[char]++;
  }
  let words = 0;
  while (true) {
    for (const char of 'balloon') {
      if (hash[char] === 0) return words;
      hash[char]--;
    }
    words++;
  }
};

var stringMatching = function (words) {
  let substrings = {}
  let newWords = words.slice(0, words.length);
  while (newWords.length) {
    let word = newWords.shift();
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j <= word.length; j++) {
        let subword = word.slice(i, j);
        if (!substrings[subword] && word !== subword) substrings[subword] = true;
      }
    }
  }
  substrings = Object.keys(substrings);
  let results = []
  for (let i = 0; i < substrings.length; i++) {
    if (words.includes(substrings[i])) results.push(substrings[i])
  }
  return results;
};

class MyHashMap {
  constructor() {
    this.arr = new Array(1000000);
  }

  put(key, value) {
    this.arr[key] = value;
  }

  get(key, value) {
    return this.arr[key] === undefined ? -1 : this.arr[key];
  }

  remove(key, value) {
    this.arr[key] = undefined;
  }
}

var reformatDate = function (date) {
  let newDate = '';
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let dateArr = date.split(' ').reverse();
  for (let i = 0; i < dateArr.length; i++) {
    if (i === dateArr.length - 1) {
      let day;
      if (dateArr[i].includes("st")) {
        day = dateArr[i].split("st");
        if (day[0] < 10) {
          day[0] = "0" + day[0]
        }
        newDate += day[0];
        break;
      }
      if (dateArr[i].includes("nd")) {
        day = dateArr[i].split("nd");
        if (day[0] < 10) {
          day[0] = "0" + day[0]
        }
        newDate += day[0];
        break;
      }
      if (dateArr[i].includes("th")) {
        day = dateArr[i].split("th");
        if (day[0] < 10) {
          day[0] = "0" + day[0]
        }
        newDate += day[0];
        break;
      }
      if (dateArr[i].includes("rd")) {
        day = dateArr[i].split("rd");
        if (day[0] < 10) {
          day[0] = "0" + day[0]
        }
        newDate += day[0];
        break;
      }
    }
    if (months.includes(dateArr[i])) {
      let month = months.indexOf(dateArr[i]) + 1;
      if (month < 10) {
        month = "0" + month
      }
      newDate += month + '-'
    }
    if (i === 0) {
      newDate += dateArr[i] + '-'
    }
  }
  return newDate;
};

var maxPower = function (s) {
  let count = 1;
  let temp = 0;
  let current;
  for (const letter of s) {
    if (current === letter) {
      temp++;
    } else {
      current = letter;
      temp = 1;
    }
    if (count < temp) {
      count = temp;
    }
  }
  return count;
};

var MyHashSet = function () {
  this.hashset = [];
};


MyHashSet.prototype.add = function (key) {
  if (this.hashset.indexOf(key) < 0) {
    this.hashset.push(key)
  }
};


MyHashSet.prototype.remove = function (key) {
  const index = this.hashset.indexOf(key)
  if (index >= 0) {
    delete this.hashset[index]
  }
};


MyHashSet.prototype.contains = function (key) {
  return this.hashset.indexOf(key) >= 0
};

var distributeCandies = function (candies, num_people) {
  let i = 0;
  let results = new Array(num_people).fill(0);
  while (candies - i > 0) {
    results[i % num_people] += i + 1;
    i++;
    candies -= i;
  }
  results[i % num_people] += candies;
  return results;
};

var matrixReshape = function (nums, r, c) {
  if (nums[0].length * nums.length < r * c) return nums;
  let numsArr = []
  let resultArr = [];

  for (let i = 0; i < nums.length; i++) {
    numsArr.push(...nums[i])
  }
  let j = 0;
  for (let i = 0; i < r; i++) {
    resultArr.push(numsArr.slice(j, j + c));
    j += c
  }
  return resultArr;
};

// SQL QUERY Leet Code problem 175
// select FirstName, LastName, City, State
// from Person per
// left join Address addr on per.personId = addr.personId;

var findSpecialInteger = function (arr) {
  let appear = {};
  for (let num of arr) {
    if (!appear[num]) {
      appear[num] = 1;
    } else {
      appear[num]++;
    }
  }
  let num = Math.max(...Object.values(appear));
  return Object.keys(appear).find(key => appear[key] === num)
};

var removePalindromeSub = function (s) {
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return 2;
    }
  }
  return 1;
};

var groupThePeople = function (groupSizes) {
  const array = groupSizes.slice(0, groupSizes.length).sort((a, b) => a - b);
  let results = [];
  while (array.length) {
    let res = [];
    let counter = array[0];
    while (res.length < counter) {
      let num = array.shift();
      let idx = groupSizes.indexOf(num);
      res.push(idx);
      groupSizes[idx] = -1
    }
    results.push(res)
  }
  return results;
};

var SubrectangleQueries = function (rectangle) {
  this.rectangle = rectangle;
};

SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      this.rectangle[i][j] = newValue
    }
  }
};

SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rectangle[row][col]
};

var getTargetCopy = function (original, cloned, target) {
  if (!cloned) return
  if (cloned.val == target.val) {
    return cloned
  } else {
    return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
  }
};

let maxIncreaseKeepingSkyline = function (grid) {
  let sum = 0;
  let rows = [];
  let columns = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!rows[i] || rows[i] < grid[i][j]) rows[i] = grid[i][j];
      if (!columns[j] || columns[j] < grid[i][j]) columns[j] = grid[i][j];
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let maxHeight = Math.min(rows[i], columns[j]);
      sum += (maxHeight - grid[i][j])
    }
  }
  return sum;
};

var deepestLeavesSum = function (root) {
  const stack = [];
  const values = {};
  let maxD = 1;
  let sum = 0;
  stack.push({ node: root, depth: 1 });
  while (stack.length) {
    const node = stack.pop();
    if (!values[node.depth]) {
      values[node.depth] = [];
    }
    values[node.depth].push(node.node.val)
    if (node.node.left) stack.push({ node: node.node.left, depth: node.depth + 1 });
    if (node.node.right) stack.push({ node: node.node.right, depth: node.depth + 1 });
    maxD = Math.max(maxD, node.depth);
  }
  for (ele of values[maxD]) {
    sum += ele;
  }
  return sum;
};

var processQueries = function (queries, m) {
  let first = []
  let results = []
  for (let i = 1; i <= m; i++)first.push(i)
  for (let i = 0; i < queries.length; i++) {
    let index = first.indexOf(queries[i])
    first.unshift(first[index])
    first.splice(index + 1, 1)
    results.push(index)
  }
  return results
};

let numTeams = (A, result = 0) => {
  let leng = A.length;
  for (let i = 0; i < leng; ++i)
    for (let j = i + 1; j < leng; ++j)
      for (let k = j + 1; k < leng; ++k)
        if ((A[i] < A[j] && A[j] < A[k]) || (A[i] > A[j] && A[j] > A[k]))
          result++;
  return result;
};

var bstToGst = function (root) {
  let arr = [];
  let traverse = function (root) {
    if (root == null)
      return;
    traverse(root.left);
    arr.push(root.val);
    traverse(root.right);
  }
  traverse(root);
  let sum = arr.slice();
  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i] = arr[i] + arr[i + 1]
  }
  let changeSum = function (root) {
    if (root == null)
      return;
    changeSum(root.left);
    let ind = sum.indexOf(root.val);
    root.val = arr[ind]
    changeSum(root.right);
  }
  changeSum(root);
  return root;
};

var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let max = [-1, -Infinity];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max[1]) {
      max = [i, nums[i]];
    }
  }
  console.log(max)
  console.log("-----")
  let node = new TreeNode(max[1]);
  node.left = constructMaximumBinaryTree(nums.slice(0, max[0]));
  node.right = constructMaximumBinaryTree(nums.slice(max[0] + 1));
  return node;
};

var bstFromPreorder = function (preorder) {
  let construct = (root, child) => {
    if (root.val > child) {
      if (!root.left)
        root.left = new TreeNode(child);
      else
        construct(root.left, child);
    } else {
      if (!root.right)
        root.right = new TreeNode(child);
      else
        construct(root.right, child);
    }
  };
  let root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; ++i)
    construct(root, preorder[i]);
  return root;
};

let diagonalSort = (A) => {
  let hash = {};
  for (let r = 0; r < A.length; r++) {
    for (let c = 0; c < A[r].length; c++) {
      const ele = A[r][c]
      const diag = r - c
      if (!hash[diag])
        hash[diag] = [];
      hash[diag].push(ele)
    }
  }

  for (let k in hash) {
    hash[k].sort((a, b) => a - b)
  }

  for (let r = 0; r < A.length; r++) {
    for (let c = 0; c < A[r].length; c++) {
      const diag = r - c
      const ele = hash[diag].shift()
      A[r][c] = ele
    }
  }
  return A
};

var allPathsSourceTarget = function (graph) {
  const N = graph.length, result = [];
  function callDFS(node, arr) {
    if (node === N - 1) {
      result.push([...arr, node])
      return;
    }

    for (let next of graph[node]) {

      callDFS(next, [...arr, node]);
    }
  }
  callDFS(0, []);
  return result;
};


//This is by far the best solution. Copied it from LeetCode.
var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  }
  else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};

var getAllElements = function (root1, root2,) {
  const results = [];
  function getInt(node) {
    if (!node) return;
    results.push(node.val);
    if (node.left) {
      getInt(node.left);
    }
    if (node.right) {
      getInt(node.right);
    }
  }
  getInt(root1);
  getInt(root2);
  return results.sort((a, b) => a - b);
};

var numTilePossibilities = function (tiles) {
  let res = 0;
  const set = new Set();
  for (let i = 0; i < tiles.length; i++) {
    if (set.has(tiles[i])) continue;
   
    res += numTilePossibilities(tiles.slice(0, i) + tiles.slice(i + 1)) + 1;

    set.add(tiles[i]);
  }
  return res;
};

var balanceBST = function (root) {
  const arr = [];
  const dfs = n => {
    if (!n) return;
    dfs(n.left);
    arr.push(n.val);
    dfs(n.right);
    console.log(arr)
  };

  const construct = (left, right) => {
    if (left > right) return null;
    const mid = left + Math.floor((right - left) / 2);
    const node = new TreeNode(arr[mid]);
    node.left = construct(left, mid - 1);
    node.right = construct(mid + 1, right);
    return node;
  };
  dfs(root);
  return construct(0, arr.length - 1);
};

let minSteps = (s, t, map = {}) => {
  let result = 0;
  for (let char of s) {
    if (!map[char])
      map[char] = 0;
    ++map[char];
  }
  for (let char of t) {
    if (!map[char]) result++;
    if (map[char]) {
      if (map[char] <= 0) result++;
      else map[char]--;
    }
  }
  return result;
};

const minOperations = n => {
  let total = 0;
  let begin;
  n % 2 == 0 ? begin = 1 : begin = 0;
  let i = 0;
  while (i < Math.ceil(n / 2)) {

    total += begin;
    begin += 2;
    i++;
  }
  return total;
}

function partitionLabels(S) {
  const N = S.length;
  const idxs = [];
  const results = [];

  for (let i = 0; i < N; i++) {
    idxs[S[i]] = i;
  }

  let max = 0;
  let left = 0;

  for (let right = 0; right < N; right++) {
    max = Math.max(max, idxs[S[right]]);
    if (max === right) {
      results.push(right - left + 1);
      left = right + 1;
    }
  }

  return results;
}


var CustomStack = function (maxSize) {
  this.stack = [];
  this.max = maxSize;
};

CustomStack.prototype.push = function (x) {
  if (this.max > this.stack.length) {
    this.stack = this.stack.concat([x])
  } else {
    return this.stack;
  }
  return this.stack;
};


CustomStack.prototype.pop = function () {
  let len = this.stack.length
  if (len === 0) return -1;
  const popped = this.stack[len - 1];
  this.stack.splice(len - 1, len);
  return popped;
};

CustomStack.prototype.increment = function (k, val) {
  if (k > this.stack.length) {
    for (let i = 0; i < this.stack.length; i++) {
      this.stack[i] = this.stack[i] += val
    }
  } else {
    for (let i = 0; i < k; i++) {
      this.stack[i] = this.stack[i] += val
    }
  }
  return this.stack;
};

const deckRevealedIncreasing = deck => {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length) {
    ans.unshift(deck.pop());
    ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};

var FindElements = function (root) {
  const recover = (node, val) => {
    node.val = val;
    if (node.left) {
      recover(node.left, 2 * val + 1);
    }
    if (node.right) {
      recover(node.right, 2 * val + 2);
    }
  };
  recover(root, 0);
  this.root = root;
};

FindElements.prototype.find = function (target) {
  const find = (node) => {
    if (!node) return false;
    if (node.val === target) return true;
    return find(node.left) || find(node.right);
  };
  return find(this.root);
};

var pruneTree = function (root) {
  if (!root) return null;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if ((!root.left) && (!root.right) && (!root.val)) return null;
  return root;
}

var minAddToMakeValid = function (S) {
  let open = 0
  let close = 0;

  for (let par of S) {
    if (par === '(') open++;
    else if (!open) close++;
    else open--;
  }
  return open + close;
};

var findAndReplacePattern = function (words, pattern) {
  return words.filter(word => isMatch(word, pattern));
};

var isMatch = (word, pattern) => {
  const map = {};
  for (let i = 0; i < pattern.length; i++) {
    let pL = pattern[i];
    let wL = word[i];
    if (map[pL] === undefined && Object.values(map).indexOf(wL) == -1) {

      map[pL] = wL;
    } else {
      if (map[pL] !== wL) {
        return false;
      }
    }
  }
  return true;
}

var countSquares = function (matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {

      if (matrix[i][j] === 0) continue;

      if (i > 0 && j > 0) {
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);

      }

      count += matrix[i][j];
    }
  }

  return count;
};

var removeLeafNodes = function (root, target) {
  if (root == null) {
    return null;
  }
  if (root.left != null) {
    root.left = removeLeafNodes(root.left, target);
  }
  if (root.right != null) {
    root.right = removeLeafNodes(root.right, target);
  }
  if (root.right == null && root.left == null && root.val == target) {
    return null;
  }
  return root;
};

var maxLevelSum = function (root, sum = 0) {
  let levels = {};

  function getSums(node, level) {
    if (node === null) {
      return;
    }
    levels[level] = levels[level] || 0;
    levels[level] += node.val;

    getSums(node.left, level + 1);
    getSums(node.right, level + 1);
  }
  getSums(root, 1);
  let arr = Object.values(levels);
  let maxSum = Math.max(...arr);
  return Object.keys(levels).find(key => levels[key] === maxSum)
};

class CombinationIterator {
  constructor(chars, combinationLength) {
    this.arr = build(combinationLength, chars);
    this.pos = 0;
  }


  next() {
    return this.arr[this.pos++];

  }

  hasNext() {
    return this.pos < this.arr.length;


  }
}

function build(max, str, arr = [], curr = "") {
  if (curr.length === max) return arr.push(curr);

  for (let i = 0; i < str.length; i++) {
    build(max, str.slice(i + 1), arr, curr + str[i]);
  }

  return arr;
}

var pathInZigZagTree = function (label) {
  let level = 0;
  let res = [label];
  while (label = parseInt(label / 2)) {
    level++;
  }
  console.log(level)
  for (let i = level - 1; i >= 0; i--) {
    let sum = (2 ** i) + (2 ** (i + 1)) - 1;
    let val = parseInt(res[0] / 2);
    res.unshift(sum - val);
  }
  return res;
};

var maxCoins = function (piles) {
  let count = 0;
  piles.sort((a, b) => a - b);
  let length = piles.length / 3;
  let i = piles.length
  while (length) {
    count += piles[i -= 2]
    length--;
  }
  return count
}; 

var findSmallestSetOfVertices = function (n, edges) {
  const hash = {}
  for (let i = 0; i < n; i++) {
    hash[i] = true;
  }
  console.log(hash);
  for (let i = 0; i < edges.length; i++) {
    delete hash[edges[i][1]]
  }
  return Object.keys(hash);
};

let routeMap = {};

var encode = function (longUrl) {
  let route = parseInt(Math.random() * 10000).toString(36);

  while (routeMap[route]) route = parseInt(Math.random() * 10000).toString(36)

  routeMap[route] = longUrl;
  return ('http://tinyurl.com/' + route);
};

var decode = function (shortUrl) {
  return routeMap[shortUrl.substr(19)];
};

const minFlips = target => {
  const len = target.length;
  let count = 0;
  let check = false;

  for (i = 0; i < len; i++) {

    if (check !== (target[i] === '1')) {
      count += 1
      check = !check
    }
  }

  return count;
}

var getHappyString = function (n, k) {
  let chars = ['a', 'b', 'c'];
  let res = []

  function findstr(word) {
    if (word.length === n) {
      res.push(word);
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] !== word.charAt(word.length - 1)) {
        findstr(word + chars[i])
      }
    }
  };

  findstr('');

  if (res.length < k) {
    return '';
  }
  return res[k - 1];
};

var goodNodes = function (root) {
  let res = 0;

  const search = (node, max) => {
    if (!node) return;
    if (node.val >= max) res++;
    search(node.left, Math.max(node.val, max));
    search(node.right, Math.max(node.val, max));
  }
  search(root, -Infinity);

  return res;
};


var maxDepthAfterSplit = function (seq) {
  let arr = new Array(seq.length).fill(0);

  let stack0 = [];
  let stack1 = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i] === "(") {
      if (stack0 <= stack1) {
        stack0.push("(");
        arr[i] = 0;
      } else {
        stack1.push("(");
        arr[i] = 1;
      }
    } else {
      if (stack0 <= stack1) {
        stack1.pop();
        arr[i] = 1;
      } else {
        stack0.pop();
        arr[i] = 0;
      }
    }
  }

  return arr;
};

var groupAnagrams = function (strs) {
  const hash = {};
  for (let s of strs) {
    let key = s.split('').sort().join('');
    hash[key] = [...hash[key] || [], s];
  }
  return Object.values(hash);
};

var firstMissingPositive = function (nums) {
  let small = 1;
  let i = 0;
  while (i < nums.length) {
    if (nums.includes(small)) {
      small++;
      i++;
    } else {
      return small;
    }
  }
  return small;
};

var getKth = function (lo, hi, k) {

  let num;
  let steps;
  let results = [];

  for (let i = lo; i <= hi; i++) {
    num = i;
    steps = 0;
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
      }
      steps++;
    }

    results.push([i, steps]);
  }

  return results.sort((a, b) => a[1] - b[1] || a[0] - b[0])[k - 1][0];

};

var distributeCoins = function (root) {
  let steps = 0;

  const traverse = (node) => {
    if (!node) return 0;

    const left = traverse(node.left);
    const right = traverse(node.right);

    steps += Math.abs(left) + Math.abs(right);
    console.log(left + right + node.val - 1)
    return left + right + node.val - 1;
  }


  traverse(root);

  return steps;
};

var queensAttacktheKing = function (queens, king) {

  let answer = [];

  search(king[0], king[1], -1, -1);
  search(king[0], king[1], -1, 0);
  search(king[0], king[1], -1, 1);
  search(king[0], king[1], 0, -1);
  search(king[0], king[1], 0, 1);
  search(king[0], king[1], 1, -1);
  search(king[0], king[1], 1, 0);
  search(king[0], king[1], 1, 1);

  return answer;

  function search(X, Y, x, y) {
    if (X < 0 || Y < 0 || X > 7 || Y > 7) return null;
    for (let i = 0; i < queens.length; i++) {
      if (X == queens[i][0] && Y == queens[i][1]) {
        answer.push([X, Y])
        return null;
      }
    }
    search(X + x, Y + y, x, y);
  }
};

var pancakeSort = function (A) {
  let results = [];

  if (A.length < 2) {
    return results;
  }

  function findLargestOutofPlaceIndex(A) {
    let i, l;
    let max = -Infinity;
    let index = -1;

    for (i = 0, l = A.length; i < l; i++) {
      if (A[i] !== i + 1) {
        if (max < A[i]) {
          max = A[i];
          index = i;
        }
      }
    }

    return index;
  }

  function swap(A, a, b) {
    let temp = A[a];
    A[a] = A[b];
    A[b] = temp;
  }


  function flip(A, index) {
    let swapCount = Math.floor((index + 1) / 2);
    let i;

    if (index === 0) {
      index = 1;
    }

    for (i = 0; i < swapCount; i++) {
      swap(A, i, index - i);
    }
  }

  let largestOutofPlaceIndex = findLargestOutofPlaceIndex(A);

  while (largestOutofPlaceIndex !== -1) {

    if (largestOutofPlaceIndex !== 0) {


      results.push(largestOutofPlaceIndex + 1);


      flip(A, largestOutofPlaceIndex);
    }


    if (largestOutofPlaceIndex !== 0 || A[0] !== 1 || A[1] !== 2) {

      results.push(A[0]);

      flip(A, A[0] - 1);
    }

    largestOutofPlaceIndex = findLargestOutofPlaceIndex(A);
  }

  return results;
};

var findDuplicates = function (nums) {
  let results = [];
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      results.push(nums[i])
    }
  }
  return results;
};



// Difficult to understand leetcode problem, had to look up answer.
var spiralMatrixIII = function (R, C, r0, c0) {
  let direction = 'r';
  const ans = [[r0, c0]];
  let steps = 1;
  let moved = 0;
  let curr = ans[ans.length - 1].slice(0);
  const N = R * C;

  while (ans.length < N) {
    const lastStep = steps - 1;

    for (let i = 0; i <= lastStep; i++) {
      if (direction === 'r') {
        curr[1]++;
        if (i === lastStep) {
          moved++;
          direction = 'd';
        }
      } else if (direction === 'd') {
        curr[0]++;
        if (i === lastStep) {
          moved++;
          direction = 'l';
        }
      } else if (direction === 'l') {
        curr[1]--;
        if (i === lastStep) {
          moved++;
          direction = 'u';
        }
      } else if (direction === 'u') {
        curr[0] = curr[0] - 1;
        if (i === lastStep) {
          moved++;
          direction = 'r';
        }
      }

      if ((curr[1] >= 0 && curr[1] < C) && (curr[0] >= 0 && curr[0] < R)) {
        ans.push([curr[0], curr[1]]);
      }
    }

    if (moved === 2) {
      steps++;
      moved = 0;
    }
  }
  return ans;
};

var complexNumberMultiply = function (a, b) {
  const aV = a.split('+');
  const bV = b.split('+');

  aV[1] = aV[1].replace('i', '');
  bV[1] = bV[1].replace('i', '');

  let first = parseInt(aV[0]) * parseInt(bV[0]);


  let outer = parseInt(aV[0]) * parseInt(bV[1]);


  let inner = parseInt(aV[1]) * parseInt(bV[0]);


  let last = parseInt(aV[1]) * parseInt(bV[1]) * -1;

  return `${first + last}+${outer + inner}i`;
};

var pseudoPalindromicPaths = function (root) {

  function findP(node, curr) {

    if (!node) {

      res.push([...curr])
      return
    }

    if ((node.left && node.right) || (!node.left && !node.right) || (node.left && !node.right)) {
      findP(node.left, [...curr, node.val])
    }

    if ((!node.left && node.right) || (node.left && node.right)) {
      findP(node.right, [...curr, node.val])
    }
  }
  let count = 0
  let res = []

  findP(root, []);

  for (let i = 0; i < res.length; i++) {
    let map = {}

    for (let j = 0; j < res[i].length; j++) {
      let char = res[i][j];

      if (!map[char]) {
        map[char] = 0

      }
      map[char]++

    }

    let countOdd = 0

    for (let key in map) {

      if (map[key] % 2 !== 0) {
        countOdd++
      }
      if (countOdd == 2) {
        break;
      }
    }
    if (countOdd < 2) {
      count++
    }
  }
  return count;
};

var countBattleships = function (board) {

  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {

      if (board[i][j] === 'X') {
        if (i === 0 && j === 0) {
          count++;
        }
        else if (i === 0) {
          if (board[i][j - 1] === '.') {
            count++;
          }
        }
        else if (j === 0) {
          if (board[i - 1][j] === '.') {
            count++;
          }
        }
        else {
          if (board[i - 1][j] === '.' && board[i][j - 1] === '.') {
            count++;
          }
        }
      }

    }
  }
  return count;
}

// Need more review on binary manipulation. A solution from leetcode
const countBits = (num) =>
  Array(num + 1).fill().map((c, i) =>
    i.toString(2).replace(/0/g, '').length
  )
  
// Another review topic. XOR
var countTriplets = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let xor = arr[i]
    console.log(xor)
    for (let j = i + 1; j < arr.length; j++) {
      xor ^= arr[j]
      console.log(xor)
      console.log("------")

      if (xor == 0) {
        count += (j - i)
      }
    }
  }
  return count
};

const xorQueries = (arr, queries) => {
  let res = [];
  for (const q of queries) {
    let xor;
    for (let i = q[0]; i <= q[1]; i++) {
      xor ^= arr[i];
    }
    res.push(xor);
  }
  return res;
};

var BrowserHistory = function (homepage) {
  this.arr = [homepage];
  this.curr = 0;
};


BrowserHistory.prototype.visit = function (url) {
  this.curr += 1;
  this.arr.length = this.curr;
  this.arr.push(url);
};


BrowserHistory.prototype.back = function (steps) {
  if (steps > this.curr) {
    this.curr = 0;
    return this.arr[0];
  }
  this.curr -= steps;
  return this.arr[this.curr];
};

BrowserHistory.prototype.forward = function (steps) {
  if (steps >= this.arr.length - this.curr) {
    this.curr = this.arr.length - 1;
    return this.arr[this.curr];
  }
  this.curr += steps;
  return this.arr[this.curr];
};

var queensAttacktheKing = function (queens, king) {
  const arr = Array.from({ length: 8 }, () => [0, 0, 0, 0, 0, 0, 0, 0]);
  const res = [];
  for (let i = 0; i < queens.length; i++) {
    arr[queens[i][0]][queens[i][1]] = 1;
  }
  for (let i = king[1]; i >= 0; i--) {
    if (arr[king[0]][i] === 1) {
      res.push([king[0], i]);
      break;
    }
  }
  for (let i = king[1]; i < 8; i++) {
    if (arr[king[0]][i] === 1) {
      res.push([king[0], i]);
      break;
    }
  }
  for (let i = king[0]; i >= 0; i--) {
    if (arr[i][king[1]] === 1) {
      res.push([i, king[1]]);
      break;
    }
  }
  for (let i = king[0]; i < 8; i++) {
    if (arr[i][king[1]] === 1) {
      res.push([i, king[1]]);
      break;
    }
  }
  let j = king[1];
  for (let i = king[0]; i >= 0 && j >= 0; i--, j--) {
    if (arr[i][j] === 1) {
      res.push([i, j]);
      break;
    }
  }
  j = king[1]
  for (let i = king[0]; i < 8 && j < 8; i++, j++) {
    if (arr[i][j] === 1) {
      res.push([i, j]);
      break;
    }
  }
  j = king[0]
  for (let i = king[1]; i >= 0 && j < 8; i--, j++) {
    if (arr[j][i] === 1) {
      res.push([j, i]);
      break;
    }
  }
  j = king[0]
  for (let i = king[1]; i < 8 && j >= 0; i++, j--) {
    if (arr[j][i] === 1) {
      res.push([j, i]);
      break;
    }
  }
  return res;
};

var matrixScore = function (A) {
  for (let row of A) {
    if (row[0] == 0) {
      for (let i = 0; i < row.length; i++)
        row[i] = (1 + row[i]) % 2;
    }
  }
  let ans = 0;
  for (let j = 0; j < A[0].length; j++) {
    let mx1 = 0, mx0 = 0
    for (let i = 0; i < A.length; i++) {
      if (A[i][j] == 0)
        mx0++;
      else
        mx1++;
    }
    ans += (Math.max(mx0, mx1) * (Math.pow(2, A[0].length - j - 1)));
  }
  return ans;
};

var intervalIntersection = function (A, B) {
  var C = [];
  var ai = 0;
  var bi = 0;
  while (ai < A.length && bi < B.length) {
    var a = A[ai];
    var b = B[bi];

    if (a[0] <= b[1] && a[1] >= b[0]) {
      C.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
    }

    if (a[1] < b[1]) {
      ai++;
    } else {
      bi++;
    }
  }
  return C;
};

var majorityElement = function (nums) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++
    }
    if (hash[nums[i]] >= nums.length / 2) {
      return nums[i];
    }
  }
};

var runningSum = function (nums) {

  let sum = 0;
  return nums.map((elem) => {
    sum += elem;
    return sum;
  })
};

var shuffle = function (nums, n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(nums[i]);
    arr.push(nums[i + n])
  };
  return arr;
};

var canFormArray = function (arr, pieces) {
  let total = "";
  arr = arr.join("");
  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = pieces[i].join("");
    total += pieces[i];
    if (arr.indexOf(pieces[i]) == -1) return false;
  }
  return total.length == arr.length;
};

var maxDepth = function (s) {
  let res = 0;
  let check = 0;

  [...s].forEach(char => {

    if (char === "(") {
      check++;
      res = Math.max(res, check);
    } else if (char === ")") check--;

  });

  return res;
};

var balancedStringSplit = function (s) {
  let result = 0
  let countL = 0
  let countR = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') countR++
    if (s[i] === 'L') countL++
    if (countR === countL) result++
  }
  return result
};

var countGoodTriplets = function (arr, a, b, c) {
  const len = arr.length;
  let _a, _b, _c, res = 0;

  for (let i = 0; i < len; i++) {
    _a = arr[i];
    for (let j = i + 1; j < len; j++) {
      _b = arr[j];
      if (Math.abs(_a - _b) > a) continue;
      for (let k = j + 1; k < len; k++) {
        _c = arr[k];
        if (Math.abs(_b - _c) > b) continue;
        if (Math.abs(_a - _c) > c) continue;
        res++;
      }
    }
  }
  return res;
};

var sumOddLengthSubarrays = function (arr) {
  let len = arr.length;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    arr[i] = sum;
  }
  let window = 3;
  let sI, eI;
  while (window <= len) {
    sI = 0;
    eI = window - 1;
    while (eI < len) {
      sI === 0 ? sum += arr[eI] : sum = sum + arr[eI] - arr[sI - 1];
      sI++;
      eI++;
    }
    window += 2;
  }
  return sum;
};

const MorseMap = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--.."
}

var uniqueMorseRepresentations = function (words) {
  if (!words) return;

  let morseArr = [];

  for (let word of words) {
    let wordCode;
    for (let morse of word) {
      wordCode += MorseMap[morse]
    }
    if (!morseArr.includes(wordCode)) {
      morseArr.push(wordCode);
    }
  }
  return morseArr.length;
};

var maximumWealth = function (accounts) {
  let mWealth = 0;

  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    let account = accounts[i];
    for (let j = 0; j < account.length; j++) {
      wealth += account[j];
    }
    mWealth = Math.max(wealth, mWealth);
  }

  return mWealth;
};

var kidsWithCandies = function (candies, extraCandies) {

  let mCandy = Math.max(...candies);
  let arr = new Array(candies.length).fill(false);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= mCandy) {
      arr[i] = true;
    }
  }

  return arr;
};

var findRepeatedDnaSequences = function (s) {
  let results = {}, storeHash = {}
  for (let i = 0; i < s.length; i++) {
    let substring = s.substring(i, i + 10);
    if (!storeHash[substring]) storeHash[substring] = true;
    else if (!results[substring]) {
      results[substring] = true
    }
  }
  return Object.keys(results)
};

var runningSum = function (nums) {
  let i = 1;
  while (i < nums.length) {
    nums[i] = nums[i] + nums[i - 1];
    i++;
  }
  return nums
};

var canBeEqual = function (target, arr) {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);

  for (let i = 0; i < target.length; i++) {

    if (target[i] !== arr[i]) return false
  }
  return true;
};

var sortedArrayToBST = function (nums) {
  if (nums === null || !nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return node
};

const mergeInBetween = (list1, a, b, list2) => {
  const list2Tail = getTail(list2);
  const list1B = getNode(list1, b + 1);
  const list1A = getNode(list1, a - 1);

  list2Tail.next = list1B;
  list1A.next = list2;
  return list1;
};

const getTail = (tail) => {
  while (tail.next) {
    tail = tail.next;
  }

  return tail;
}

const getNode = (node, n) => {
  let i = 0;

  while (i !== n) {
    node = node.next;
    i++;
  }

  return node;
}

var checkArithmeticSubarrays = function (nums, l, r) {
  let i = 0;
  let results = [];

  while (i < l.length) {
    let subArray = nums.slice(l[i], r[i] + 1)
    results.push(checkSubArray(subArray))
    i++;
  }
  return results;
};

var checkSubArray = function (array) {
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length - 1; i++) {
    if ((array[i + 1] - array[i]) !== (array[1] - array[0])) return false
  }
  return true;
}

var bitwiseComplement = function (N) {
  let binary = N.toString(2);
  let str = '';

  for (let i of binary) {
    str += +(!(+i))
  }

  return parseInt(str, 2);
};

var numWaterBottles = function (numBottles, numExchange) {
  let amount = numBottles;

  while (numBottles) {

    let empty = Math.floor(numBottles / numExchange)
    if (!empty) break;
    amount += empty
    numBottles = empty + (numBottles % numExchange)

  }
  return amount
};    

var maxLengthBetweenEqualCharacters = function (s) {
  let result = -1;
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    result = Math.max(result, hash[s[i]] - i - 1);
  }
  return result;
};

var majorityElement = function (nums) {
  let results = {};
  let checker = nums.length / 2
  for (let num of nums) {
    if (!results[num]) results[num] = 1;
    else {
      results[num]++;
    }
  }
  for (let num of nums) {
    if (results[num] >= checker) return num
  }
};

var slowestKey = function (releaseTimes, keysPressed) {
  let longestTime = releaseTimes[0];
  let largerKey = keysPressed[0];
  for (let i = 1; i < releaseTimes.length; i++) {
    let tempTime = releaseTimes[i] - releaseTimes[i - 1];
    if (tempTime > longestTime) {
      longestTime = tempTime;
      largerKey = keysPressed[i]
    }
    else if (tempTime === longestTime) {
      if (largerKey < keysPressed[i]) largerKey = keysPressed[i]
    }
  }
  return largerKey;
};

var toLowerCase = function (str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) res += String.fromCharCode(ascii + 32);
    else result += str.charAt(i);
  }
  return result;
};

var arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((acc, curr) => acc + curr) === word2.reduce((acc, curr) => acc + curr);
};

var countGoodTriplets = function (arr, a, b, c) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[j] - arr[k]) > b) continue;
        if (Math.abs(arr[k] - arr[i]) <= c) result++;
      }
    }
  }
  return result;
};

var restoreString = function (s, indices) {
  let strArray = new Array(indices.length).fill("");

  for (let i = 0; i < indices.length; i++) {
    strArray[indices[i]] = s[i]
  }
  return strArray.join("")
};

const restoreMatrix = (rowSum, colSum) => {
  const results = [];
  for (let i = 0; i < rowSum.length; i++) {
    results[i] = new Array(colSum);
    for (let j = 0; j < colSum.length; j++) {
      results[i][j] = Math.min(rowSum[i], colSum[j]);

      rowSum[i] -= results[i][j];

      colSum[j] -= results[i][j];
    }
  }

  return results;
};

var fairCandySwap = function (A, B) {
  let aSum = 0
  let bSum = 0
  const candy = {}

  for (let i = 0; i < A.length; i++) {
    aSum += A[i]
  }

  for (let i = 0; i < B.length; i++) {
    candy[B[i]] = true
    bSum += B[i]
  }

  const diff = (bSum - aSum) / 2
  let neededCandy;

  for (let i = 0; i < A.length; i++) {
    neededCandy = A[i] + diff
    if (candy[neededCandy]) {
      return [A[i], neededCandy]
    }
  }
};

var hasAlternatingBits = function (n) {
  let str = (n).toString(2);
  let current = str[0];

  for (let i = 1; i < str.length; i++) {

    if (current === str[i]) {
      return false;
    }

    current = str[i];
  }

  return true;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeros = 0

  for (let i = 0; i < nums.length; i++) {

    let isZero = nums[i] === 0

    if (isZero) {
      zeros++
      nums.splice(i, 1)
      i--;
    }


  }

  for (let i = 0; i < zeros; i++) {
    nums.push(0)
  }

  return nums
};

var addDigits = function (num) {
  if (num < 10) return num;

  let left = Math.floor(num / 10);
  let right = num % 10;
  return addDigits(left + right)

};

function thousandSeparator(n) {
  return ('' + n).split('').reverse()
    .reduce((total, curr) => total.length % 4 == 3 ? curr + '.' + total : curr + total, '');
}

var reverseOnlyLetters = function (s) {
  const filter = s.split(``).filter(v => /[a-zA-Z]/.test(v));
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      arr.push(filter.pop())
    } else {
      arr.push(s[i])
    }
  }

  return arr.join(``)
};

var RecentCounter = function () {
  this.tArray = [];
};
RecentCounter.prototype.ping = function (t) {
  this.tArray.push(t);
  let timeStart = t - 3000;
  let count = 0;
  for (let i = 0; i < this.tArray.length; i++) {
    if (this.tArray[i] >= timeStart || this.tArray <= t) {
      count++;
    }
  }
  return count;
};

var isPrime = function (num) {
  if (num <= 1) return false;
  let i = 2;
  let count = 1;
  while (i <= num) {
    if (count > 2) return false;
    if (num % i === 0) count++;
    i++;
  }
  return true;
}
var countPrimeSetBits = function (L, R) {
  let start = L;
  let result = 0;
  while (start >= L && start <= R) {
    let countB = 0;
    let binary = start.toString(2).split("");
    binary = binary.forEach(num => {
      if (num === '1') countB++;
    })
    if (isPrime(countB)) result++;
    start++
  }
  return result;;
};

var binaryGap = function (N) {
  let num = N.toString(2);
  var max = 0;
  var counter = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") counter++;
    if (num[i] === "1" && !counter) {
      counter = 1;
      continue;
    }

    if (num[i] === "1" && counter) {
      if (max < counter) max = counter;
      counter = 1;
    }
  }

  return max;
};

var deepestLeavesSum2 = function (root) {
  let hash = {}, max = 0;

  function dfs(root, callNum = 0) {
    max = Math.max(max, callNum)
    if (!hash[callNum]) hash[callNum] = 0;
    hash[callNum] += root.val
    if (root.left) dfs(root.left, callNum + 1);
    if (root.right) dfs(root.right, callNum + 1);
  }
  dfs(root);
  return hash[max];
};


/// Algo expert problems below

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let numArray = [];
  addSums(root, 0, numArray);
  return numArray;
}

function addSums(node, sum, numArray) {
  if (!node) return;

  let newSum = node.value + sum;

  if (!node.left && !node.right) {
    numArray.push(newSum);
    return;
  }

  addSums(node.left, newSum, numArray);
  addSums(node.right, newSum, numArray);
}


function isValidSubsequence(array, sequence) {
  let checking = true
  while (checking) {
    let chekr = array.indexOf(sequence.shift());
    if (chekr === -1) return false;
    array = array.slice(chekr + 1, array.length)
    if (sequence.length <= 0) {
      checking = false;
      return true;
    }
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j -= 1;
    }
  }
  return array;

}

function swap(i, j, array) {
  const num = array[i];
  array[i] = array[j];
  array[j] = num;
}

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    while (i < j && array[j] === toMove) j--;
    if (array[i] === toMove) {
      swap(i, j, array);
    }
    i++;
  }
  return array;
}

function swap(i, j, array) {
  const ele = array[j];
  array[j] = array[i];
  array[i] = ele;
}


class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value)
      }
    }

    return this;
  }

  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        this.left.contains(value)
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        this.right.contains(value)
      }
    }
    return true
  }
}

function swapper(tree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

function invertBinaryTree(tree) {
  if (tree === null) return;
  swapper(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right)
}



function smallestDifference(arrayO, arrayT) {
  arrayO.sort((a, b) => a - b);
  arrayT.sort((a, b) => a - b);
  let smallest = Infinity;
  let closest = Infinity;
  let idxOne = 0;
  let idxTwo = 0;
  let array = [];
  while (idxOne < arrayO.length && idxTwo < arrayT.length) {
    let numO = arrayO[idxOne];
    let numT = arrayT[idxTwo];
    if (numO < numT) {
      closest = numT - numO;
      idxOne++;
    } else if (numT < numO) {
      closest = numO - numT;
      idxTwo++;
    } else {
      return [numO, numT]
    }

    if (smallest > closest) {
      smallest = closest;
      array = [numO, numT]

    }
  }
  return array;

}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return helper(tree, -Infinity, Infinity);
}

function helper(tree, min, max) {
  if (tree === null) return true;
  if (tree.value >= max || tree.value < min) return false;
  const left = helper(tree.left, min, tree.value);
  return left && helper(tree.right, tree.value, max)

}

function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let num = array[i];
        array[i] = array[i + 1];
        array[i + 1] = num;
        sorted = false;
      }
    }
  }
  return array;
}

function caesarCipherEncryptor(string, key) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const newKey = key % 26
  const newStr = [];
  for (const letter of string) {
    newStr.push(getLetter(alphabet, letter, newKey))
  }
  return newStr.join('');
}

function getLetter(alphabet, letter, key) {
  const newIdx = alphabet.indexOf(letter) + key;
  return newIdx <= 25 ? alphabet[newIdx] : alphabet[(newIdx % 25) - 1]
}

function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }

  return leftIdx === rightIdx
}

function nodeDepths(root) {
  let resultDepths = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length) {
    let { node, depth } = stack.pop();
    console.log(node)
    if (node === null) continue;
    resultDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 })
  }
  return resultDepths;
}

function runLengthEncoding(string) {
  const resultArray = [];
  let counter = 1;;

  for (let i = 1; i < string.length; i++) {
    let currentChar = string[i];
    let lastChar = string[i - 1]

    if (currentChar !== lastChar || counter === 9) {
      resultArray.push(counter.toString());
      resultArray.push(lastChar);
      counter = 0;
    }
    counter++;
  }

  resultArray.push(counter.toString());
  resultArray.push(string[string.length - 1]);

  return resultArray.join("")
}

function spiralTraverse(array) {
  const result = [];
  spiralF(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}

function spiralF(array, startR, endR, startC, endC, result) {
  if (startR > endR || startC > endC) return;

  for (let col = startC; col <= endC; col++) {
    result.push(array[startR][col])
  }

  for (let row = startR + 1; row <= endR; row++) {
    result.push(array[row][endC])
  }

  for (let col = endC - 1; col >= startC; col--) {
    if (startR === endR) break;
    result.push(array[endR][col])
  }

  for (let row = endR - 1; row >= startR + 1; row--) {
    if (startC === endC) break;
    result.push(array[row][startC])
  }

  spiralF(array, startR + 1, endR - 1, startC + 1, endC - 1, result);
}

function isMonotonic(array) {
  if (array.length <= 2) return true;

  let checker = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (checker === 0) {
      checker = array[i] - array[i - 1];
      continue;
    }

    if (breaks(checker, array[i - 1], array[i])) {
      return false;
    }
  }

  return true;
}

function breaks(checker, prev, curr) {
  let differ = curr - prev;
  if (checker > 0) return differ < 0;
  return differ > 0;
}

function longestPeak(array) {
  let highest = 0;
  let i = 0;

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i++;
      continue;
    }

    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }

    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }
    const currentPeak = rightIdx - leftIdx - 1;
    highest = Math.max(highest, currentPeak);
    i = rightIdx
  }
  return highest;
}

// Algo expert above


// Optimal solution needs math!
var pathInZigZagTree = function (label) {
  let x = Math.log2(label) | 0
  let res = Array(x + 1)
  res[x] = label
  let offset = Math.pow(2, x)
  let pos = label - offset + 1
  if (x % 2 == 1) pos = offset - pos + 1

  while (x > 0) {
    pos = Math.ceil(pos / 2)
    offset >>= 1
    x--
    if (x % 2 == 1) label = 2 * offset - pos
    else label = offset + pos - 1
    res[x] = label
  }
  return res
};

var buddyStrings = function (A, B) {
  if (A.length != B.length) {
    return false;
  }

  if (A === B) {
    let s = new Set();

    for (let i = 0; i < A.length; i++) {
      s.add(A.charAt(i));
    }

    return s.size < A.length;
  }

  let diff = [];
  for (let i = 0; i < A.length; i++) {
    if (A.charAt(i) != B.charAt(i)) {
      diff.push(i);
    }
  }

  return diff.length == 2 && A.charAt(diff[0]) == B.charAt(diff[1]) && A.charAt(diff[1]) == B.charAt(diff[0]);
};

var minPartitions = function (n) {
  let max = 0;

  for (let i of n) {

    max = max < i ? i : max;
  }

  return max
};

// *OLD*
// var maxWidthOfVerticalArea = function (points) {
//   let result = 0;
//   let xAxis = [];

//   for (let point of points) {
//     xAxis.push(point[0])
//   }

//   xAxis = xAxis.sort((a, b) => a - b);

//   for (let i = 0; i < xAxis.length - 1; i++) {
//     result = Math.max(result, xAxis[i + 1] - xAxis[i])
//   }
//   return result;
// };

var maxWidthOfVerticalArea = function(points) {
    let result = 0;
    points = points.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < points.length - 1;i++) {
        result = Math.max(result, points[i+1][0] - points[i][0])
    }
    return result;
};

var countVowelStrings = function (n) {
  let result = 0

  helper(n, 0)

  function helper(n, sIdx) {

    if (n === 0) {
      result++
      return
    }
    for (let i = sIdx; i < 5; i++) {
      helper(n - 1, i)
    }
  }

  return result
};

var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.incr = 1;
};


BrowserHistory.prototype.visit = function (url) {
  if (this.incr !== this.history.length) {
    this.history = this.history.slice(0, this.incr);
  }
  this.incr++;
  this.history.push(url);
};


BrowserHistory.prototype.back = function (steps) {
  if (this.incr - steps < 1) {
    this.incr = 1;
  } else {
    this.incr = this.incr - steps;
  }
  return this.history[this.incr - 1];
};


BrowserHistory.prototype.forward = function (steps) {
  if (this.incr + steps > this.history.length) {
    this.incr = this.history.length
  } else {
    this.incr = this.incr + steps
  }
  return this.history[this.incr - 1];
};

var spiralMatrixIII = function (R, C, r0, c0) {

  let n = Math.max(r0, c0, R - 1 - r0, C - 1 - c0);
  let result = [[r0, c0]];

  for (let i = 1; i <= n; i++) {

    for (let j = 1 - i; j <= i; j++) res.push([r0 + j, c0 + i]);
    for (let j = i - 1; j >= -i; j--) res.push([r0 + i, c0 + j]);
    for (let j = i - 1; j >= -i; j--) res.push([r0 + j, c0 - i]);
    for (let j = 1 - i; j <= i; j++) res.push([r0 - i, c0 + j]);
  }

  return result.filter(x => x[0] >= 0 && x[0] < R && x[1] >= 0 && x[1] < C);
};

var sortPeople = function (a, b) {
  if (a[0] != b[0]) {
    return b[0] - a[0];
  } else {
    return a[1] - b[1];
  }
}

var reconstructQueue = function (people) {
  people.sort(sortPeople);
  var i;
  var res = [];

  for (i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
  }
  return res;
};

const delNodes = (root, to_delete) => {
  const set = new Set(to_delete);
  const result = [];

  const go = (node) => {
    if (node == null) return node;
    node.left = go(node.left);
    node.right = go(node.right);

    if (set.has(node.val)) {
      if (node.left) result.push(node.left);
      if (node.right) result.push(node.right);
      return null;
    }
    return node;
  };

  if (!set.has(root.val)) result.push(root);

  go(root);

  return result;
};

var numTimesAllBlue = function (light) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < light.length; i++) {
    if (light[i] > max) max = light[i];
    if (i + 1 === max) count++;
  }

  return count;
};

var isMonotonic = function (A) {

  let increase = true;
  let decrease = true;

  for (let i = 0; i < A.length - 1; i++) {


    if (A[i] < A[i + 1]) decrease = false;
    else if (A[i] > A[i + 1]) increase = false;

  }

  return increase === true || decrease == true;
};

//still need to go over this problem, solution pull from leetcode. Mine didnt pass all specs
let xorQueries = (A, queries) => {
  let N = A.length, X = new Array(N + 1).fill(0), ans = [];
  for (let i = 1; i <= N; ++i)
    X[i] = X[i - 1] ^ A[i - 1];
  for (let [i, j] of queries)
    ans.push(X[i] ^ X[j + 1]);
  return ans;
};

var constructFromPrePost = function (pre, post) {
  if (pre.length === 0) return null;
  if (pre.length === 1) return new TreeNode(pre[0]);
  let res = new TreeNode(pre[0]);
  let leftVal = pre[1], indexOfLeft = post.indexOf(leftVal);
  res.left = constructFromPrePost(pre.slice(1, indexOfLeft + 2), post.slice(0, indexOfLeft + 1));
  res.right = constructFromPrePost(pre.slice(indexOfLeft + 2), post.slice(indexOfLeft + 1));
  return res;
};

var maxAncestorDiff = function (root) {
  let res = -1;
  const dfs = (node, max, min) => {

    const diff = Math.max(Math.abs(node.val - max), Math.abs(node.val - min));

    res = Math.max(res, diff);
    console.log(res)


    const maxC = Math.max(node.val, max);
  
    const minC = Math.min(node.val, min);

    if (node.left) {
      dfs(node.left, maxC, minC);
    }

    if (node.right) {
      dfs(node.right, maxC, minC);
    }
  }

  dfs(root, root.val, root.val);
  return res;
};

var isValid = function (s) {
  let obj = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let stack = [];
  stack.push(s[0]);
  for (let i = 1; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i])
    } else {
      if (stack[stack.length - 1] === obj[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

var xorQueries = function (arr, queries) {
  let results = [];
  let xorResults = [];

  xorResults[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    xorResults.push(arr[i] ^ xorResults[i - 1]);
  }

  for (const [start, end] of queries) {
    results.push(xorResults[start] ^ xorResults[end] ^ arr[start]);
  }

  return results;
};

let displayTable = orders => {
  let hash = {};
  let items = new Set();
  for (let [_, table, item] of orders) {
    items.add(item);
    if (!hash[table]) hash[table] = {};
    if (!hash[table][item]) hash[table][item] = 0;
    hash[table][item]++;
  }
  let tables = [...Object.entries(hash)];
  tables.sort((a, b) => (a[0]) - (b[0]));
  items = [...items].sort();
  let header = ['Table'].concat(items);
  let res = [header];
  tables.forEach(table => {
    let next = [table[0]];
    items.forEach(item => next.push(table[1][item] ? table[1][item].toString() : '0'));
    res.push(next);
  })
  return res;
};

function arrayOfProducts(array) {
  let results = new Array(array.length).fill(1);


  let leftProd = 1;
  for (let i = 0; i < array.length; i++) {
    results[i] = leftProd;
    leftProd *= array[i];
  }

  let rightProd = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    results[i] *= rightProd;
    rightProd *= array[i];
  }
  return results
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const countSubstrings = (s, t) => {
  let nS = s.length;
  let nT = t.length;

  let setS = [];
  let setT = [];

  for (let i = 0; i < nS; i++) {
    for (let j = i; j < nS; j++) {
      let subss = s.slice(i, j + 1);
      if (subss.length != 0) setS.push(subss);
    }
  };
  for (let i = 0; i < nT; i++) {
    for (let j = i; j < nT; j++) {
      let subst = t.slice(i, j + 1);
      if (subst.length != 0) setT.push(subst);
    }
  };

  let count = 0;
  setS.forEach(s => {
    setT.forEach(t => {
      if (check(s, t) && s != t && s.length == t.length) {
        count++;
      }
    });
  });
  return count;
};

const check = (short, long) => {
  let diff = long.length - short.length;
  let count = 0;
  for (let i = 0; i < short.length; i++) {
    if (count > 1) return false;
    if (short[i] != long[i]) {
      count++;
    }
  }
  if ((diff + count) > 1) return false;
  return true;
};

function firstDuplicateValue(array) {

  let appeared = new Set();

  for (let num of array) {
    if (appeared.has(num)) return num;
    else {
      appeared.add(num)
    }
  }
  return -1
}

var intervalIntersection = function (A, B) {
  const results = [];

  let i = 0;
  let j = 0;

  while (i < A.length && j < B.length) {
    if (isOverlap(A[i], B[j])) {
      const merged = [Math.max(A[i][0], B[j][0]), Math.min(A[i][1], B[j][1])];
      results.push(merged);
    }

    if (A[i][1] < B[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return results;
};

function isOverlap([s1, e1], [s2, e2]) {

  return (s2 <= e1 && e2 >= s1) || (s1 <= e2 && e1 >= s2);
}

var halvesAreAlike = function (s) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  let mid = s.length / 2;
  let countLet = 0;
  for (let lett of s) {
    if (vowels.has(lett)) {
      countLet++;
    }
    mid--
    if (mid === 0) {
      countLet *= -1;
    }

  }

  return countLet === 0
};

var selfDividingNumbers = function (left, right) {
  const results = [];
  while (left <= right) {
    if (isDividing(left)) results.push(left);
    left++;
  }
  return results
};

const isDividing = function (num) {
  let numS = num.toString().split('');
  for (let digit of numS) {
    if (parseInt(digit) === 0) return false;
    if (num % digit !== 0) return false;
  }
  return true;
};

var lcaDeepestLeaves = function (root) {
  if (!root) return null;

  const left = depth(root.left);
  const right = depth(root.right);


  if (left === right) return root;


  if (left > right) return lcaDeepestLeaves(root.left);
  return lcaDeepestLeaves(root.right);
};


function depth(node) {
  if (!node) return 0;
  const left = depth(node.left);
  const right = depth(node.right);
  return 1 + Math.max(left, right);
}

var checkIfCanBreak = function (s1, s2) {
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();

  let i = 0;

  for (; i < s1.length; i++) {
    if (s1[i] < s2[i]) break;
  }
  if (i == s1.length) return true;

  i = 0;

  for (; i < s2.length; i++) {
    if (s2[i] < s1[i]) return false;
  }
  return true;
};

var queensAttacktheKing = function (queens, king) {
  let [xK, yK] = king;
  let moves = new Set();
  let results = [];

  for (let [x, y] of queens) {

    moves.add(x + "," + y);
  }

  const search = (x, y, dx, dy) => {

    if (x < 0 || y < 0 || x > 7 || y > 7) return;
    if (moves.has(x + "," + y)) {
      results.push([x, y]);
      return;
    };

    search(x + dx, y + dy, dx, dy);
  }


  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {

      if (i === 0 && j === 0) continue;
      search(xK, yK, i, j);
    }
  }

  return results;
};

var numSplits = function (s) {
  const s0 = new Set();
  const s1 = new Set();

  const arr = [];

  for (let i = 0; i < s.length; ++i) {
    s0.add(s[i]);
    arr[i] = [s0.size, 0];
  }
  console.log(arr)

  for (let i = s.length - 1; i > 0; --i) {
    s1.add(s[i]);
    arr[i - 1][1] = s1.size;
  }
  console.log(arr)
  console.log(s0)
  console.log(s1)
  return arr.filter(a => a[0] == a[1]).length;
};

var minSetSize = function (arr) {
  let hash = {};
  let length = arr.length / 2;
  let count = 0;
  let results = 0;
  for (let num of arr) {
    if (!hash[num]) hash[num] = 1;
    else hash[num]++;
  }
  let sortable = [];
  for (var num in hash) {
    sortable.push([num, hash[num]]);
  };
  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });

  if (Object.values(hash).length === 1) return 1;
  for (let i = sortable.length - 1; i >= 0; i--) {
    let counter = sortable[i][1]

    if (count <= length) {
      count += counter;
      results++;
    }
    if (count === length) return results;
  }
  return results;
};

var numberOfMatches = function (n) {
  let matches = 0;
  let current = n;

  while (current > 1) {
    if (current % 2 === 0) {
      matches += current / 2;
      current = current / 2
    } else {
      matches += (current - 1) / 2;
      current = (current - 1) / 2 + 1;
    }
  }

  return matches;
};

var numIdenticalPairs = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) count++
    }
  }
  return count
};

var interpret = function (command) {
  let str = "";

  for (let i = 0; i < command.length; i++) {

    if (command[i] == "G") {
      str += "G";
    }

    if (command[i] == "(" && command[i + 1] == ")") {
      str += "o";
      i++;
    }

    if (command[i] == "(" && command[i + 1] == "a") {
      str += "al";
      i = i + 3;
    }
  }

  return str;
};

var xorOperation = function (n, start) {
  let arr = [];
  let xor;

  for (let i = 0; i < n; i++) {
    arr.push(start + (i * 2))
  };

  xor = arr[0];

  for (let i = 1; i < n; i++) {
    xor = xor ^ arr[i]
  };
  return xor
};

//SQL
// SELECT
 //  name,
 //  population,
 //  area
// FROM
//   world
// WHERE
//   area > 3000000 OR
//   population > 25000000
//SQL

var maximum69Number = function (num) {
  let numArr = num.toString().split("");
  let i = 0;
  let change = 0;

  while (change === 0 && i < numArr.length) {
    if (numArr[i] === "6") {
      numArr[i] = "9";
      change++;

    }
    i++;
  }
  return numArr.join("")
}; 

//SQL
// UPDATE
//    salary
// SET
//    sex = CASE sex
//          WHEN 'm' THEN 'f'
//          WHEN 'f' THEN 'm'
// END
//SQL

var sortString = function (s) {
  let temp = new Array(26).fill(0);
  let results = [];

  for (let i = 0; i < s.length; i++) {
    temp[s.charCodeAt(i) - 97] += 1;
  }

  let checker = true;

  while (results.length < s.length) {
    for (let i = 0; i < temp.length; i++) {
      let pos = i;
      if (!checker) {
        pos = 25 - i;
      }
      if (temp[pos] !== 0) {
        results.push(String.fromCharCode(pos + 97));
        temp[pos] -= 1;
      }
    }

    checker = !checker;
  }
  results = results.join('');

  return results;
};
//AlgoExpert
function minNumberOfCoinsForChange(n, denoms) {
  let results = new Array(n + 1).fill(Infinity);

  results[0] = 0;

  for (let den of denoms) {
    for (let amount = 0; amount < results.length; amount++) {
      if (den <= amount) {
        results[amount] = Math.min(results[amount], results[amount - den] + 1)
      }
    }
  }
  return results[n] !== Infinity ? results[n] : -1
};
//AlgoExpert

var freqAlphabets = function (s) {
  let offset = 96;
  let resultStr = '';

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    if (s[i + 2] === '#') {
      curr = s.slice(i, i + 2);
      i += 2;
    }

    resultStr += String.fromCharCode(parseInt(curr) + offset);
  }

  return resultStr;
};

var maxProduct = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let l = nums.length - 1;
  return (nums[l] - 1) * (nums[l - 1] - 1);
};

var romanToInt = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      integer += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      integer += legend[s[i]];
    }
  }
  return integer
};

var GetImportance = function (employees, id) {

  let map = new Map();
  let results = 0;

  for (let i = 0; i < employees.length; i++) {
    const { id, importance, subordinates } = employees[i]
    map.set(id, { importance, subordinates })
  }

  const root = map.get(id), arr = [root];

  while (arr.length) {
    const { id, importance, subordinates } = arr.shift()
    for (let i = 0; i < subordinates.length; i++) {
      arr.push(cache.get(subordinates[i]))
    }
    results += importance;
  }
  return results;
};

//SQL
//  SELECT a.Name AS Employee
//  FROM Employee a,
//    Employee b
//  WHERE a.Salary > b.Salary
//  AND a.ManagerId = b.Id
//SQL

var findTheDifference = function (s, t) {
  const hash = {};
  for (let lett of t) {
    if (!hash[lett]) hash[lett] = 1;
    else {
      hash[lett]++;
    }
  }
  for (let lett of s) {
    if (hash[lett] > 1) hash[lett]--;
    else {
      delete hash[lett]
    }
  }
  return Object.keys(hash)[0]
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    hash[s[i]] ? hash[s[i]]++ : hash[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (hash[t[i]]) hash[t[i]]--;
    else return false;
  }

  return true;
};

var arrayRankTransform = function (arr) {
  const sort = arr.slice().sort((a, b) => a - b);
  const rank = {};

  for (let i = 0, r = 0; i < sort.length; i += 1) {
    if (sort[i] !== sort[i - 1]) {
      r += 1;
      rank[sort[i]] = r;
    }
  }

  return arr.map(v => rank[v]);
};

var countBinarySubstrings = function (s) {
  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      result++;
      let j = 1;

      while (s[i - j] === s[i] && s[i + 1 + j] === s[i + 1]) {
        result++;
        j++;
      }
    }
  }

  return result;
};

var rotatedDigits = function (N) {
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (isValid(i)) count++;
  }
  return count;
};

const isValid = function (num) {
  let valid = false;
  while (num) {
    const a = num % 10;
    if (a === 3 || a === 4 || a === 7) return false;
    if (a === 2 || a === 5 || a === 6 || a === 9) valid = true;
    num = Math.trunc(num / 10);
  }
  return valid;
};

var mostVisited = function (n, rounds) {
  let start = rounds[0];
  let end = rounds[rounds.length - 1];
  const result = [];

  if (start <= end) {
    for (let i = start; i <= end; i++) result.push(i);
  } else {
    for (let i = 1; i <= end; i++) result.push(i);
    for (let i = start; i <= n; i++) result.push(i);
  }
  return result;
};

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size < nums.length;
};

var titleToNumber = function (s) {
  let result = 0;
  let arr = s.split('').reverse();
  arr.forEach((c, i) => {
    let pos = c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    result = Math.pow(26, i) * pos + result;
  });

  return result;
};

//SQL
// SELECT
// c.name AS Customers
// FROM
// Customers AS c
// LEFT JOIN
// Orders AS o
// ON o.customerid = c.id
// WHERE
// o.customerid IS NULL
//SQL

var findTarget = function (root, k) {
  if (!root) return false;
  const set = new Set();
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return false;
};

var tribonacci = function (n) {
  let fibres = [];
  fibres[0] = 0;
  fibres[1] = 1;
  fibres[2] = 1;

  for (let i = 3; i <= n; i++) {
    fibres[i] = fibres[i - 3] + fibres[i - 2] + fibres[i - 1]
  }
  return fibres[n]
};

var maxScore = function (s) {
  let maxim = 0;

  for (let i = 1; i < s.length; i++) {
    let l = s.slice(0, i).split('0').length - 1;
    let r = s.slice(i).split('1').length - 1;
    let sum = l + r;
    maxim = Math.max(maxim, sum);
  }
  return maxim;
};

var floodFill = function (image, sr, sc, newColor) {
  filler(image, sr, sc, image[sr][sc], newColor);
  return image;
};

var filler = (image, x, y, oldColor, newColor) => {
  if (x < 0 || y < 0 || x >= image.length || y >= image[x].length || image[x][y] === newColor || image[x][y] !== oldColor) {
    return;
  }
  image[x][y] = newColor;
  filler(image, x + 1, y, oldColor, newColor);
  filler(image, x, y + 1, oldColor, newColor);
  filler(image, x - 1, y, oldColor, newColor);
  filler(image, x, y - 1, oldColor, newColor);
}

var shortestCompletingWord = function (licensePlate, words) {
  let lPlate = licensePlate.split("");
  let hash = {};
  let shortest = words.join(" ");

  for (let lett of lPlate) {
    if (lett === " ") continue;
    else if (parseInt(lett)) continue;
    else {
      lett = lett.toLowerCase();
      if (!hash[lett]) hash[lett] = 1;
      else {
        hash[lett]++
      }
    }
  }

  for (let word of words) {
    let hash1 = JSON.parse(JSON.stringify(hash));
    if (isComplete(word, hash1)) {
      if (shortest.length > word.length) shortest = word;
    }
  }

  return shortest;
};

var isComplete = function (word, hash1) {
  for (let lett of word) {
    if (hash1[lett] > 0) hash1[lett]--;
  }
  let values = Object.values(hash1);
  let set = new Set(values);
  console.log(hash1)
  console.log(set)
  return set.size === 1
}

var mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 !== null && l2 !== null) {


    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      list.next = new ListNode(l2.val)
      l2 = l2.next
    }

    list = list.next
  }

  if (l1 !== null)
    list.next = l1
  if (l2 !== null)
    list.next = l2

  return head.next
};

var twoSum = function (numbers, target) {
  let hash = {};
  for (let i in numbers) {
    console.log(i)
    if (target - numbers[i] in hash) {
      return [hash[target - numbers[i]] + 1, parseInt(i) + 1];
    }

    hash[numbers[i]] = parseInt(i);

  }
};

var isPathCrossing = function (path) {
  let pos = "00";
  let x = 0;
  let y = 0;

  let visited = new Set([pos])

  for (let c of path) {
    if (c === 'S') y++
    if (c === 'N') y--
    if (c === 'W') x++
    if (c === 'E') x--
    pos = `${x}${y}`
    if (visited.has(pos)) return true;
    visited.add(pos);
  }
  return false
};

var makeGood = function (s) {
  if (s.length <= 1) return s;

  for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) === 32)
      return makeGood(s.substring(0, i) + s.substring(i + 2));

  }
  return s;
};

var largestAltitude = function (gain) {
  let current = 0;
  let result = 0;

  for (let num of gain) {
    current += num;
    result = Math.max(current, result);
  }

  return result;
};

var sortArrayByParity = function (A) {
  let results = [];
  for (let num of A) {
    if (num % 2 === 0) {
      results.unshift(num)
    } else {
      results.push(num)
    }
  }
  return results;
};

var totalMoney = function (n) {
  let counter = 1;
  let results = 0;
  let cumm = 1;
  let i = 0;
  while (i < n) {
    if (i !== 0 && i % 7 === 0) {
      counter++;
      results += counter;
      cumm = counter + 1;
      i++
    } else {
      results += cumm;
      cumm++;
      i++;
    }

  }
  return results;
};

var relativeSortArray = function (arr1, arr2) {
  let results = [];

  for (let i = 0; i < arr2.length; i++) {

    results = results.concat(arr1.filter((j) => j === arr2[i]));


    arr1 = arr1.filter((j) => j !== arr2[i]);
  }


  return results.concat(arr1.sort((a, b) => a - b));
};

var maximumUnits = function (boxTypes, truckSize) {

  boxTypes.sort((a, b) => b[1] - a[1]);
  let results = 0;

  for (let i = 0; i < boxTypes.length; ++i) {
    if (boxTypes[i][0] > truckSize) {
      results += truckSize * boxTypes[i][1];
      break;
    } else {
      results += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    }
  }

  return results;
};

const coinChange = (coins, amount) => {
  const results = Array(amount + 1).fill(Infinity);
  results[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        results[i] = Math.min(results[i], results[i - coin] + 1);
        console.log(i - coin)
        console.log(results)
        console.log("------")
      }
    }
  }

  return results[amount] === Infinity ? -1 : results[amount];
};

var postorder = function (root) {
  const results = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (!node) continue;

    results.push(node.val);
    stack.push(...node.children);
  }

  return results.reverse();
};

var preorder = function (root) {

  const results = [];
  const stack = [root];

  while (stack.length) {
    let node = stack.shift();

    if (!node) continue;

    results.push(node.val);

    stack.unshift(...node.children);
  }

  return results;

};

var sortByBits = function (arr) {
  return arr.sort((a, b) => bitSum(a) - bitSum(b) || a - b);
};

const bitSum = num => {
  let sum = 0;
  while (num) {
    sum += num & 1;
    num = num >> 1;
  }
  return sum;
};

//SQL
// SELECT
//   *
//   FROM
// cinema
// WHERE
// description != 'boring' AND id % 2 != 0
// ORDER BY
// rating DESC
//SQL

var commonChars = function (A) {
  let results = [...A[0]];

  for (let i = 1; i < A.length; i++) {
    results = results.filter(c => {
      console.log(c)
      const l = A[i].length;
      A[i] = A[i].replace(c, "");
      console.log(A[i])
      return l > A[i].length;
    });
  }
  return results;
};

var check = function (nums) {
  let dec = false
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      if (dec) {
        return false
      }
      dec = true
    }
  }
  console.log(dec)
  console.log(dec ? nums[0] >= nums[nums.length - 1] : true)
  return dec ? nums[0] >= nums[nums.length - 1] : true
};

var countStudents = function (students, sandwiches) {
  let results = 0;
  let counter = 0;

  while (students.length != 0) {
    if (sandwiches[0] == students[0]) {
      sandwiches.shift();
      students.shift();
      counter = 0;

    } else {
      students.push(students[0]);
      students.shift();
      counter += 1;
    }

    if (counter == students.length && counter != 0) {
      return counter;
    }
  }

  return results;
};

var maxDepth = function (root) {
  if (!root) return 0;

  let depth = 0;
  let queue = [];

  queue.push(root);

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      queue.push(...node.children);
    }

    depth++;
  }

  return depth;
};

var trimMean = function (arr) {
  let l = arr.length;
  let k = 0.05 * l;
  let sum = 0;

  arr.sort((a, b) => a - b);

  for (let i = k; i < l - k; i++) {
    sum += arr[i];
  };

  return sum / (l - 2 * k);
};

var frequencySort = function (nums) {
  let freq = {};

  for (let i = 0; i < nums.length; i++) {
    freq[nums[i]] = (freq[nums[i]] || 0) + 1;
  }

  return nums.sort((a, b) => freq[a] - freq[b] || b - a);
};

var reformatNumber = function (number) {
  let resultStr = "";
  let validEles = [];

  for (let ele of number) {
    if (Number.isInteger(parseInt(ele))) validEles.push(ele)
  }

  while (validEles.length > 4) {
    let current = validEles.splice(0, 3);
    resultStr += current.join("") + "-"
  };

  if (validEles.length === 4) {
    return resultStr += validEles.splice(0, 2).join("") + "-" + validEles.splice(0, 2).join("")
  } else if (validEles.length === 3) {
    return resultStr += validEles.splice(0, 3).join("")
  } else {
    return resultStr += validEles.splice(0, 2).join("")
  }
};

var threeConsecutiveOdds = function (arr) {
  let oddCount = 0;

  for (let num of arr) {
    if (oddCount === 3) return true;

    if (num % 2 !== 0) {
      oddCount++;
    } else {
      oddCount = 0;
    }
  }
  return oddCount === 3 ? true : false;
};

var decrypt = function (code, k) {
  let results = new Array(code.length).fill(0)

  if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      let j = i + 1;
      let count = 0;

      while (count < k) {
        if (j === code.length) j = 0;
        results[i] += code[j];
        count = count + 1;
        j++;
      }
    }
  }
  if (k < 0) {
    for (let i = 0; i < code.length; i++) {
      let j = i - 1;
      let count = 0;

      while (count > k) {
        if (j === -1) j = code.length - 1;
        results[i] += code[j];
        count = count - 1;
        j--;
      }
    }
  }
  return results;
};

var countBalls = function (lowLimit, highLimit) {
  let hash = {};

  for (let i = lowLimit; i <= highLimit; i++) {
    if (hash[getDigit(i)] > 0) {
      hash[getDigit(i)]++;
    } else {
      hash[getDigit(i)] = 1;
    }
  }

  return Math.max(...Object.values(hash));
};

function getDigit(num) {
  let digit = 0;

  while (num) {
    digit += num % 10;
    num = Math.floor(num / 10);
  }

  return digit;
}

var sumOfUnique = function (nums) {
  let sum = 0;
  let uniqueObj = {};
  for (let num of nums) {
    uniqueObj[num] = 1 + (uniqueObj[num] || 0);
  };
  for (let num of nums) {
    sum += uniqueObj[num] === 1 ? num : 0;
  };
  return sum;
};

var sumZero = function (n) {
  if (n === 1) return [0];
  let i = 1;
  let runningsum = 0;
  let results = [];
  results.push(-n);
  results.push(n);
  while (results.length < n) {
    if (results.length + 1 === n && runningsum === 0) {
      results.push(0);
      break;
    } else {
      if (runningsum === 0) {
        runningsum += i;
        results.push(i)
      } else {
        runningsum += -i;
        results.push(-i);
        i++;
      }
    }
  }
  return results;
}; 

var destCity = function (paths) {
  let set = new Set();

  for (let path of paths) {
    let first = path[0];
    set.add(first);

  };

  for (let path of paths) {
    let second = path[1];
    if (!set.has(second)) return second;

  };

};

var busyStudent = function (startTime, endTime, queryTime) {
  let results = 0;
  for (let i = 0; i < endTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) results++;
  }
  return results;
};

var replaceElements = function (arr) {
  let resultArr = [];
  resultArr.unshift(-1);
  let cMax = 0;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (cMax < arr[i + 1]) cMax = arr[i + 1];
    resultArr.unshift(cMax);
  }
  return resultArr;
};

var increasingBST = function (root) {
  let nRoot = null;
  let cNode = null;

  const depthS = (node) => {
    if (!node) return;
    depthS(node.left);

    if (!nRoot) {
      nRoot = cNode = node;
    } else {
      cNode.right = node;
      cNode = node;
      node.left = null;
    }
    depthS(node.right)
  }
  depthS(root);
  return nRoot;
};

var numSpecial = function (mat) {

  const rArr = new Array(mat.length).fill(0)
  const cArr = new Array(mat[0].length).fill(0)
  const set = new Set()

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j]) {
        set.add([i, j])
        rArr[i]++
        cArr[j]++
      }
    }
  }

  let count = 0
  for (const [x, y] of set) {
    if (rArr[x] === 1 && cArr[y] === 1) count++
  }
  return count;
}

var minOperations = function (logs) {
  let numOperations = 0;

  for (let log of logs) {
    if (log === "../") {
      if (numOperations > 0) {
        numOperations--;
      }
    }
    else if (log === "./") continue;
    else {
      numOperations++;
    }
  }
  return numOperations;
};

var specialArray = function (nums) {

  for (let i = 1; i <= nums.length; i++) {
    if (i === counter(i, nums)) return i;
  }
  return -1;

  function counter(i, nums) {
    let count = 0;
    for (const num of nums) {
      if (num >= i) count++;
    }
    return count;
  }
};

var canFormArray = function (arr, pieces) {
  let map = new Map();
  let res = [];

  pieces.forEach((x) => map.set(x[0], x));
  console.log(map)
  arr.forEach((x) => map.has(x) && res.push(...map.get(x)));

  return arr.every((x, i) => x == res[i]);
};

var minOperations = function (s) {
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "0") {
        count1++;
      }
      if (s[i] === "1") {
        count2++;
      }
    }
    if (i % 2 === 1) {
      if (s[i] === "1") {
        count1++;
      }
      if (s[i] === "0") {
        count2++;
      }
    }
  }
  console.log([count1, count2])
  return Math.min(count1, count2);
};

var largestPerimeter = function (A) {
  A.sort((a, b) => a - b);

  for (let i = A.length - 1; i > 1; i--) {
    if (A[i] < A[i - 1] + A[i - 2]) {
      return A[i] + A[i - 1] + A[i - 2];
    }
  }
  return 0;
};

var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += (prices[i + 1] - prices[i])
    }
  }
  return profit;
};

var getNoZeroIntegers = function (n) {
  let check = 1
  while (check < n) {
    let num = n - check
    if (!(/[0]/.test(num)) && !(/[0]/.test(check))) return [check, num]
    check++
  }
};

var findKthPositive = function (arr, k) {
  let set = new Set(arr);
  for (let i = 1; ; ++i)
    if (!set.has(i) && !--k) return i;
};

var findLUSlength = function (a, b) {
  if (a === b) return -1;
  else return Math.max(a.length, b.length);
};

var generate = function (numRows) {
  let result = []
  for (let i = 0; i < numRows; i++) {
    result[i] = []

    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        result[i].push(1)
      } else {
        result[i].push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

  }

  return result;
}

var reformat = function (s) {
  let hash = { "lett": [], "num": [] };

  for (let ele of s) {
    if (Number.isInteger(parseInt(ele))) {
      hash["num"].push(ele)
    } else {
      hash["lett"].push(ele)
    }
  }
  let { lett, num } = hash;

  if (lett.length < num.length) {
    [lett, num] = [num, lett];
  }

  return lett.length - num.length <= 1
    ? lett.map((x, i) => x + (num[i] ? num[i] : '')).join('')
    : '';
};

var missingNumber = function (nums) {
  let len = nums.length;
  let sum1 = (len * (len + 1)) / 2;
  let sum2 = nums.reduce((a, c) => a + c);
  return sum1 - sum2;
};

var getMinimumDifference = function (root) {
  let arr = [];
  dfs(root);
  let result = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    result = Math.min(result, arr[i + 1] - arr[i]);
  }

  function dfs(root) {
    if (root != null) {
      dfs(root.left);
      arr.push(root.val);
      dfs(root.right);
    }
  }

  return result;
};

var countOdds = function (low, high) {
  let count = 0;

  while (low <= high) {
    if (low % 2 !== 0) count++;
    low++;
  }
  return count;
};



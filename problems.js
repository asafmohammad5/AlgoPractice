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
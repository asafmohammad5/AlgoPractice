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
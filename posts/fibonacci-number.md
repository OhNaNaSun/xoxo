---
title: 'Fibonacci Number'
date: '2021-12-28'
read: '2'
---

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

```js
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
```

Given N, calculate F(N).

### Approach 1: recursive

- Time complexity : O(2^N)
- Space complexity : O(N)

```js
var fib = function (N) {
  if (N === 0) return 0;
  if (N === 1) return 1;
  return fib(N - 1) + fib(N - 2);
};
```

### Approach 2: recursive with memozition

- Time complexity : O(N)
- Space complexity : O(N)

```js
function fibonacci(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  const memo = {};
  memo[n] = memo[n] || fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}
// or
function memoize(fn) {
  const memorizedMap = new Map();
  return function (n) {
    if (!memorizedMap.has(n)) {
      memorizedMap.set(n, fn(n));
    }
    return memorizedMap.get(n);
  };
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
let memoizedFib = memoize(fib);
```

### Approach 3: iterative(DP)

- Time complexity : O(N)
- Space complexity : O(N)

```js
var fib = function (N) {
  const tab = {
    0: 0,
    1: 1,
  };
  for (var i = 2; i <= N; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab[N];
};
//or
function fibonacciDP(n) {
  const arr = Array(n);
  arr[0] = 1;
  arr[1] = 1;
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
}
```

### Approach 3: iterative(DP), make space complexity to O(1)

- Time complexity : O(N)
- Space complexity : O(1)

```js
var fib = function (N) {
  if (N <= 1) {
    return N;
  }
  let current;
  let pre1 = 0;
  let pre2 = 1;
  for (var i = 2; i <= N; i++) {
    //[pre2, pre1] = [pre1+pre2, pre2]
    current = pre1 + pre2;
    pre1 = pre2;
    pre2 = current;
  }
  return current;
};
```

---
title: 'Valid Palindrome'
date: '2021-11-20'
read: '3'
---

[Valid Palindrome - LeetCode](https://leetcode.com/problems/valid-palindrome/)

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true\*if it is a**_palindrome_**, or*false*otherwise\*.

### Array Reverse

```javascript
var isPalindrome = function (s) {
  s = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
  return s.split('').reverse().join('') === s;
};
```

### Two Pointers

```javascript
var isPalindrome = function (s) {
  s = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
};
```

`regex`,
`algorithm/two_pointers`,
`algorithm/string`

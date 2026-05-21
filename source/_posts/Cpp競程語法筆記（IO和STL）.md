---
title: C++ 競程語法筆記（I/O 和 STL）
categories:
  - 筆記與教學
  - 程式
  - 競程
tags:
  - 筆記
  - 競程
  - 程式
  - C++
math: true
mermaid: false
hide: true
date: 2026-05-18 11:57:07
excerpt: 包含一些 I/O 技巧和競程用 STL 語法的小筆記
---

{% note warning %}

此筆記有以下幾點前提：

1. 不準確：它只是我的簡易筆記，不要求表達絕對準確和寫法可讀性佳
2. 不完整：它不是為了教會你，只是方便學習和記憶的筆記，是從[《從零到一：那些演算法競賽會用到的基礎語法》](https://emanlaicepsa.github.io/2020/10/21/0-index/)整理的非常小一部分內容，欲學習者，請去看原文
3. 此筆記內容主要是為了競程用的 C++ 筆記，所有程式皆用萬用標頭檔（`#include <bits/stdc++.h>`）、使用標準命名空間（`using namespace std;`） 和 I/O 優化（`ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);`）
4. 非零基礎：此筆記的註解會用類比 Python 概念的方式寫

{% endnote %}

## 輸入

- `cin >> var`：讀到空白字元（空格、換行、tab）為止（不含）
- `getline(cin, var)`：讀到換行為止（不含）
- 混用時，要用 `cin.ignore()` 跳過換行

## 輸出

- 可用 `ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);` I/O 優化
- 指定浮點數位數：`cout << fixed << setprecision(2) << 3.14159;`
- 指定欄寬：
  - `cout << setw(10) << 123;`
  - 右或左對齊時，可用 `left` 或 `right`
  - 補字元則可用 `cout << setfill('0') << setw(5) << 42;`
- 改用 `true` / `false` 代替 `1` / `0`：`boolalpha`

## 常用函式

- 比較大小：`max(a, b)` 或 `min({a, b, c, d})`（只能比同型別，可乘 `1LL` 轉 long long）
- 絕對值：`abs(n)`
- 交換值：`swap(a, b)`
- 開根號：`sqrt(n)`
- $a^b$：`pow(a, b)`（浮點數）
- 最大公因數：`__gcd(a, b)`
- $\log_2n$：`__lg(n)`
- $\ln n$：`log(n)`
- 元素反轉（常用於 string）：`reverse(arr, arr+4)`
- 找最大／小元素（指標，可加 `*` 取值）：`min_element(arr, arr+4)`
- 填成 `x`：`fill(arr, arr+4, x)`
- 第一個 $\ge x$ 的元素（指標）：`lower_bound(arr, arr+4, x)`（`arr` 須已排序）
- 第一個 $> x$ 的元素（指標）：`upper_bound(arr, arr+4, x)`（`arr` 須已排序）

## Array

```cpp
int arr[10]; // size = 10 值不定
int arr[] = {1, 2, 3, 4};
int arr[4] = {1, 2}; // {1, 2, 0, 0}

sort(arr, arr+4);
```

## Vector

```cpp
vector<int> v;
vector<int> v(3); // {0, 0, 0}
vector<int> v = {1, 2, 3};
vector<int> v(3, 2); // {2, 2, 2}

v.push_back(10); // append from end

v.pop_back(); // pop

v.size(); // return len of v

v.empty(); // check if v is empty (bool)

sort(v.begin(), v.end());
reverse(v.begin(), v.end());

cout << *min_element(v.begin(), v.end()) << '\n';
```

## Pair

```cpp
pair<int, int> p;
pair<int, int> p = {1, 2};

cout << p.first << ' ' << p.second;
```

```cpp
vector<pair<int, int>> vp;

vp.push_back({1,2});
```

## Queue (FIFO)

```cpp
queue<int> q;

q.push(1); // append from end
q.front(); // return q[0]
q.size(); // return len(q)
q.pop(); // pop from front
q.empty(); // return if q is empty (bool)
```

## Stack (LIFO)

```cpp
stack<int> s;

s.push(1); // append from end
s.top(); // return s[-1]
s.size(); // return len(s)
s.pop(); // pop from end
s.empty(); // return if s is empty (bool)
```

## Set

對應 Python：類似有序（且會自動排序）的 set

```cpp
set<int> s;

s.insert(2); // add

s.erase(5); // remove value 5 if it exists
s.find(2); // return iterator of s (return end() if not in s)

cout << *s.begin() << '\n'; // s[0]
cout << *s.rbegin() << '\n'; // s[-1]

for(auto iter = s.begin(); iter != s.end(); iter++)
    cout << *iter << '\n'; // print all elements in s

cout << *prev(s.end()) << '\n'; // s[-1] (= max element)
// prev(it) / next(it) return nearby iterators without modifying it

auto it = s.upper_bound(x); // find first element that > x
// auto it = s.lower_bound(x); // find first element >= x
if(it != s.end()) cout << *it << '\n'; // check if such element exists
```

- set：有序、自動排列、不重複
- unordered_set：無序、不重複
- multiset：有序、自動排列、可重複
- unordered_multiset：無序、可重複

## Map

對應 Python：有序（且會自動排序）的 dict（且會自動指派值，若 key 從未被定義過）

```cpp
map<string, int> m;

m["apple"] = 3;
m["banana"]++; // no need exist before this line

m["orange"]; // return value of key (0 if key DNE)

m.erase("orange"); // same as set

for(auto i : m)
    cout << i.first << ' ' << i.second << '\n'; // print all k and v
```

- map：有序、自動排序、不重複
- unordered_map：無序、不重複
- multimap：有序、自動排序、可重複
- unordered_multimap：無序、可重複

## Priority Queue (PQ)

```cpp
priority_queue<int> pq; // 預設為最大堆（用 less<int>）

pq.push(1); // append

pq.top(); // return max

pq.pop(); // pop top element
```

```cpp
priority_queue<int, vector<int>, greater<int>> pq; // 最小堆
```

## Deque

概念：雙向佇列（Queue + Stack）

```cpp
deque<int> dq;

dq.push_back(1); // append from end
dq.push_front(5); // append from front

dq.pop_back(); // pop from end
dq.pop_front(); // pop from front

dq.front(); // return dq[0]
dq.back();  // return dq[-1]
dq.size(); // return len(dq)
dq.empty(); // return if dq is empty (bool)
dq.clear();
```

## Linked-list

Array 開夠大即可，用不到這個

## Bitset

概念：優化過後的 `bool arr[n]`

```cpp
bitset<1000005> b; // is <size>, not <type> !!

b[5] = 0; // same as bool array

b.count(); // return sum(b) (= amount of 1)
```

---
title: 競程常用的 Python 標準函式庫
categories:
  - 筆記與教學
  - 程式
  - 競程
tags:
  - 筆記
  - 程式
  - 競程
  - Python
  - 標準函式庫
math: true
mermaid: false
hide: true
date: 2026-01-13 16:12:44
excerpt: 整理競程或程式測驗常會用到的 Python 標準函式庫
---

## sys - 系統控制
[官網連結](https://docs.python.org/zh-tw/3.14/library/sys.html)

- `stdin.readline()`：高速輸入（取代 `input()`）
- `stdout.write()`：高速輸出（取代 `print()`）

## math - 數學工具
[官網連結](https://docs.python.org/zh-tw/3/library/math.html)

- `gcd(a, b)`：最大公因數
- `lcm(a, b)`：最小公倍數
- `factorial(n)`：階乘（$n!$）
- `isqrt(n)`：平方根取整
- `comb(n, k)`：組合數（$C_k^n$ / $\binom{n}{k}$）
- `perm(n, k)`：排列數（$P_k^n$）
- `prod(iterable)`：序列連乘積（把 iterable 內所有東西相乘的積）
- `ceil(x)`：向上取整（$\lceil x \rceil$）
- `floor(x)`：向下取整（$\lfloor x \rfloor$）
- `dist(p, q)`：計算歐幾里德距離（點座標可以 tuple 表示，接受多維）
- `hypot(x, y)`：計算 $\sqrt{x^2+y^2}$（接受無限多 argument）

## itertools - 疊代工具
[官網連結](https://docs.python.org/zh-tw/3.14/library/itertools.html)

- `permutations(iterable, r)`：排列（`r` 為選填）
- `combinations(iterable, r)`：組合（`r` 為選填）
  - `combinations_with_replacement(iterable, r)` 用法相同，但接受重複
- `product(iterable, repeat)`：笛卡兒積（`repeat` 為選填，只能用 keyword argument）
- `accumulate(iterable, func)`：前綴和（`func` 為選填，只能用 keyword argument，可用 `func=math.prod` 來改為前綴積）
- `cycle(iterable)`：無限循環疊代
- `chain(iterable1, iterable2, iterable3)`：將多個 iterable 串在一起
- `groupby(iterable)`：分組（常搭配排序）
- `islice(iterable, start, stop, step)`：切 iterable（不用轉 list）
- `repeat(x, n)`：重複值（初始化用）

## collections - 資料結構
[官網連結](https://docs.python.org/zh-tw/3/library/collections.html)

- `deque(iterable)`：雙端佇列（類似取頭尾值效率較高的 list，可用 `pop()`、`append()`、`popleft()`、`appendleft()` 取、放值進佇列）
- `Counter(iterable)`：計每個 element 出現的次數（操作方式同 dict）
- `defaultdict(type)`：自動初始化字典

## heapq - 最小堆（優先隊列）
[官網連結](https://docs.python.org/zh-tw/3/library/heapq.html)

- `heapify(list)`：將 list 轉為最小堆
- `heappush(heap, x)`：將 $x$ 插入最小堆
- `heappop(heap)`：將最小值從最小堆中取出
- `heapq.nlargest(n, iterable, key)`：從 iterable 中找出最大的 $n$ 個元素（`key` 為選填，只能用 keyword argument 指定排序方式）
- `heapq.nsmallest(n, iterable, key)`：從 iterable 中找出最小的 $n$ 個元素（`key` 為選填，只能用 keyword argument 指定排序方式）
- `heapreplace(heap, x)`：將最小值取出，再放入新值 $x$（比 `heappop()`+`heappust()` 快）

{% note info %}

## bisect - 二分搜
[官網連結](https://docs.python.org/zh-tw/3.13/library/bisect.html)

- `bisect_left(list, x)`：回傳 $x$ 插入 list 的位置（從左開始找）
- `bisect_right(list, x)`：回傳 $x$ 插入 list 的位置（從右開始找）
- `insort(list, x)`：插入 $x$ 並保持有序

> 二分搜傳入的所有清單必須已經經過排序
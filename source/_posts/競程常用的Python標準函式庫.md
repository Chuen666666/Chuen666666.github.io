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
> [官網連結](https://docs.python.org/zh-tw/3.14/library/sys.html)

- `stdin.readline()`：高速輸入（取代 `input()`，記得 `.rstrip()` 去除換行）
- `stdin.read()`：一次讀完整輸入（超大量輸入時）
- `stdout.write()`：高速輸出（取代 `print()`）
- `setrecursionlimit(n)`：調高遞迴深度上限（深度 $n$）

## math - 數學工具
> [官網連結](https://docs.python.org/zh-tw/3/library/math.html)

- `gcd(a, b)`：最大公因數
- `lcm(a, b)`：最小公倍數
- `factorial(n)`：階乘（$n!$）
- `isqrt(n)`：平方根取整
- `comb(n, k)`：組合數（$C_k^n$ ／ $\binom{n}{k}$）
- `perm(n, k)`：排列數（$P_k^n$）
- `prod(iterable)`：序列連乘積（把 iterable 內所有東西相乘的積）
- `ceil(x)`：向上取整（$\lceil x \rceil$）
- `floor(x)`：向下取整（$\lfloor x \rfloor$）
- `dist(p, q)`：計算歐幾里德距離（點座標可以 tuple 表示，接受多維）
- `hypot(a1, a2, ...)`：計算 $\sqrt{a\_1^2+a\_2^2+\cdots}$
- `log(x)`、`log2(x)`、`log10(x)`、`log1p(x)`：計算對數，依序表示 $\ln x$、$\log\_2 x$、$\log x$、$\ln(1+x)$（浮點數較精確）

## string - 字串工具
> [官網連結](https://docs.python.org/zh-tw/3.14/library/string.html)

- `ascii_lowercase`：a~z
- `ascii_uppercase`：A~Z
- `ascii_letters`：a~z + A~Z
- `digits`：0~9
- `whitespace`：包含空格（space）、製表符號（tab）、換行符號（linefeed）、return、換頁符號（formfeed）和垂直製表符號（vertical tab）這些字元（` \t\n\r\x0b\x0c`）

## itertools - 疊代工具
> [官網連結](https://docs.python.org/zh-tw/3.14/library/itertools.html)

- `permutations(iterable, r)`：排列（`r` 為選填）
- `combinations(iterable, r)`：組合（`r` 為選填）
  - `combinations_with_replacement(iterable, r)` 用法相同，但接受重複
- `product(iterable, repeat)`：笛卡兒積（`repeat` 為選填，只能用 keyword argument）
- `accumulate(iterable, func)`：前綴和（`func` 為選填，只能用 keyword argument，可用 `func=math.prod` 來改為前綴積）
- `cycle(iterable)`：無限循環疊代
- `chain(iterable1, iterable2, iterable3)`：將多個 iterable 串在一起
- `groupby(iterable)`：分組（須先排序）
- `islice(iterable, start, stop, step)`：切 iterable（不用轉 list）
- `repeat(x, n)`：重複值（初始化用）
- `count(start=0, step=1)`：無限遞增計數器
- `pairwise(iterable)`：相鄰元素配對（Python 3.10+）

## functools - 函式優化工具
> [官網連結](https://docs.python.org/zh-tw/3/library/functools.html)

- `lru_cache(maxsize=None)`：記憶化遞迴（DP 常用）
- `cmp_to_key(func)`：自訂比較函式，轉為 `sort()` 可用的 key

## collections - 資料結構
> [官網連結](https://docs.python.org/zh-tw/3/library/collections.html)

- `deque(iterable)`：雙端佇列（類似取頭尾值效率較高的 list，可用 `pop()`、`append()`、`popleft()`、`appendleft()` 取、放值進佇列）
- `Counter(iterable)`：計每個 element 出現的次數（操作方式同 dict）
  - `most_common(k)`：前 k 多
  - `c & d`：交集（取最小次數）
  - `c | d`：聯集（取最大次數）
- `defaultdict(type)`：自動初始化字典
- `namedtuple`：輕量資料結構（比 class 簡潔）

## heapq - 最小堆（優先隊列）
> [官網連結](https://docs.python.org/zh-tw/3/library/heapq.html)

- `heapify(list)`：將 list 轉為最小堆
- `heappush(heap, x)`：將 $x$ 插入最小堆
- `heappop(heap)`：將最小值從最小堆中取出
- `heapq.nlargest(n, iterable, key)`：從 iterable 中找出最大的 $n$ 個元素（`key` 為選填，只能用 keyword argument 指定排序方式）
- `heapq.nsmallest(n, iterable, key)`：從 iterable 中找出最小的 $n$ 個元素（`key` 為選填，只能用 keyword argument 指定排序方式）
- `heapreplace(heap, x)`：取出最小值並放入新值 $x$（等價於 `heappop()` + `heappush()` 但更快，用於**固定 heap 大小**）
- `heappushpop(heap, x)`：嘗試將 $x$ 放入 heap，並回傳被擠出的值（等價於 `heappush()` + `heappop()` 但更快，用於**維持前 $k$ 名**）

{% note info %}
若想要做出最大堆，只要將原 list 每個值取負，轉成 heap 後，取值時再取一次負即可
`(priority, value)` tuple：利用 tuple[0] 來作為優先數值
{% endnote %}

## bisect - 二分搜
> [官網連結](https://docs.python.org/zh-tw/3.13/library/bisect.html)

- `bisect_left(list, x)`：回傳 $x$ 插入 list 的位置（從左開始找）
- `bisect_right(list, x)`：回傳 $x$ 插入 list 的位置（從右開始找）
- `insort(list, x)`：插入 $x$ 並保持有序
- `insort_left(list, x)`：從左插入 $x$ 至已排序 list
- `insort_right(list, x)`：從右插入 $x$ 至已排序 list

{% note warning %}
二分搜傳入的所有 list 必須已經經過排序
{% endnote %}
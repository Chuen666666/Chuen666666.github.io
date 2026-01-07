---
title: 陽明高中校內賽題庫 - Python 詳解
categories:
  - 筆記與教學
  - 程式
tags:
  - 筆記
  - 教學
  - 程式
  - 資訊能力競賽
  - 題解
  - Python
math: true
mermaid: false
hide: true
date: 2026-01-06 15:34:24
excerpt: 所有由 @郭10 出的陽明高中校內資訊能力競賽題目的 Python 詳解
---

這份題解是關於由 [@郭10](https://yilinguo121.github.io/) 所出的[陽明高中校內資訊能力競賽題庫](https://codeforces.com/gym/629558/)的 Python 詳解

如有任何錯誤或疑問，歡迎於下方留言或主動與我聯繫討論

## A. 要出什麼題
> [題目連結](https://codeforces.com/gym/629558/problem/A)

這題直接用暴力的 if-statement 就能解決，值得注意的是，Python 字串是支援用大於／小於符號進行比較的，它會自動比較其 ASCII/Unicode

```python
for _ in range(int(input())):
    s = input()

    if 'A' <= s <= 'D':
        print('Basic Syntax and Function Calls')
    elif s <= 'H':
        print('Basic algorithms and data structures')
    else:
        print('Insanely difficult advanced algorithms')
```

## B. 解決內部碎片化
> [題目連結](https://codeforces.com/gym/629558/problem/B)

這題對於二進制不熟悉的人可能比較困難，不過這題的解題思路也不只一種，我們先來看最標準的解法

我們可以嘗試用二進制的概念來想它，先來想想我們最熟悉的十進制，假設有一個三位數字 $abc$，它的數值可以表示為 $a\times10^2+b\times10^1+c\times10^0$，注意到，每一位的位置都能用 10 的冪次方來表示

類推到二進制也一樣，假設一個二進制數 $101$，它的數值其實就是 $1\times2^2+0\times2^1+1\times2^0$，也就是說，若我們想找到最小的 $x$ 使得 $2^x\ge a$，實際上就可以表示成 $a$ 的二進制表示法中最高位元的位置，也就是整個數字轉為二進制後的字串長度，在 Python 中可以直接用內建的 `bit_length()` 函式

不過目前還有一個問題，如果我們想找的數字剛好是 2 的次方時，二進制中會多進一位，例如 $8$ 的二進制是 $1000$，長度是 $4$，但實際上我們想要的答案應該是 $3$（$2^3=8$），因此我們可以先將 $a$ 減去 $1$ 再計算

```python
for _ in range(int(input())):
    print((int(input()) - 1).bit_length())
```

除了這個標準做法，我們也可以想一種邪門外道的解法，因為它出現在第二題，題目出成這個難度實在不合理，因此理論上應該要有更簡單直覺的做法，也就是暴力硬炸

這裡只要注意它暴力取的範圍即可，因為題目說了 $1\le a\le 2^{63}-1$，因此直接取到 64 即可，不過其實因為必然會在某個時刻找到答案，所以其實你把迴圈開超大（甚至用 while-loop 無限迴圈）也不會錯就是了

```python
for _ in range(int(input())):
    n = int(input())
 
    for i in range(64):
        if 2**i >= n:
            print(i)
            break
```

## C. Sword Art Online
> [題目連結](https://codeforces.com/gym/629558/problem/C)

這題對於寫過國中數學題的你我而言，應該一眼就能看出來是要求最小公倍數對吧？如果真的看不出來，其實題目底下的「計算」也已經自爆解法了

在 Python 中，我們可以直接用內建的 `math.lcm()` 函式來計算最小公倍數

```python
from math import lcm

input() # 跳過第一行 n 的輸入
print(lcm(*map(int, input().split()))) # 用 *（unpack）展開 map() 並傳入 lcm()
```

## D. 跑到哪了
> [題目連結](https://codeforces.com/gym/629558/problem/D)

這題甚至比上一題還簡單，應該很容易就能看出來，這題只需要將趟數除以 2 取餘數（即 $n \bmod 2$），再看原始點在哪，就能秒知道答案了

```python
s = input().split()
n = int(s[1])
s = s[0]

if n % 2 == 0:
    print(s)
else:
    print('A' if s == 'B' else 'B')
```

## E. 國王的請求
> [題目連結](https://codeforces.com/gym/629558/problem/E)

這題開始難度就突然增加了不少，本題其實要的就是「輸入字串的所有排列」，如果研究過 Python 的 `itertools` 模組的話，會發現它有一個 `permutations()` 函式可以直接幫我們列出所有排列，我們可以使用 set 來去除重複的排列組合，再用 `sorted()` 排序 ASCII 後輸出

```python
# 最少程式碼解
from itertools import permutations
 
ans = sorted(set(''.join(i) for i in permutations(input())))
print(len(ans), *ans, sep='\n')
```

```python
# 可讀性佳解
from itertools import permutations
 
s = input()
arr = set(permutations(s))
 
print(len(arr))
for i in sorted(arr):
    print(*i, sep='')
```

不過事實上，它並非效率最高的解法，真正要做到最佳效率，還是得使用 DFS 配合剪枝來達成

```python
s = sorted(input().strip())
n = len(s)

result = []

# stack 裡存 (path, used)
stack = [([], [False] * n)]

while stack:
    path, used = stack.pop()

    if len(path) == n:
        result.append(''.join(path))
        continue

    # 反向 push，維持與遞迴相同的順序
    for i in range(n-1, -1, -1):
        if used[i]:
            continue
        if i > 0 and s[i] == s[i-1] and not used[i-1]:
            continue # 去重剪枝

        new_used = used[:] # 複製 used 狀態
        new_used[i] = True
        stack.append((path + [s[i]], new_used))

print(len(result), *result, sep='\n')
```

## F. 蛋餅想吃蛋餅
> [題目連結](https://codeforces.com/gym/629558/problem/F)

這題乍看之下會覺得好像很簡單，直接去把範圍內的值取 `sum()` 不就行了嗎？但如果你真的這樣做，就會收到一個大大的 TLE

這題實際上的考點是前綴和（prefix sum），我們可以先建立一個前綴和的 list，也就是把每一項設定為自己加上前面所有元素的和，如此，當我們求一個區間和 $[l, r]$ 時，就可以用 `prefix[r] - prefix[l-1]` 來快速計算，相對於每查詢一次就計算一次的做法，這樣的效率會高上不少

```python
n, q = map(int, input().split())
a = list(map(int, input().split()))
 
pre_sum = [0]
 
for i in a:
    pre_sum.append(pre_sum[-1] + i)
 
for _ in range(q):
    l, r = map(int, input().split())
    print(pre_sum[r] - pre_sum[l-1])
```

不過，其實 Python 為了前綴和的場景，也提供了一個內建的 `itertools.accumulate()` 函式，可以直接幫我們計算前綴和

```python
from itertools import accumulate
 
n, q = map(int, input().split())
arr = list(accumulate(map(int, input().split())))
 
for _ in range(q):
    l, r = map(int, input().split())
    if l == 1:
        print(arr[r-1])
    else:
        print(arr[r-1] - arr[l-2])
```

## G. 課程安排
> [題目連結](https://codeforces.com/gym/629558/problem/G)

~~欸媽我上電視（被出進題裡）了~~

說實話，這種分配問題我第一次看到都會直覺想到 DP，不過如果順著 DP 的思路走下去，會發現其實它就是貪心法（Greedy）

Greedy 的想法就是，每次都盡可能選結束時間最早的課，因此這樣就能盡量減少卡到後面課程的時間，預留最多時間給後續排課

```python
n = int(input())
course = [] # 也可以用 list comprehension 寫

for _ in range(n):
    a, b = map(int, input().split())
    course.append((a, b)) # (開始時間, 結束時間)

course.sort(key=lambda x: x[1]) # 按結束時間排序

ans = 0
last_end = 0

for a, b in course:
    if a >= last_end:
        ans += 1
        last_end = b

print(ans)
```
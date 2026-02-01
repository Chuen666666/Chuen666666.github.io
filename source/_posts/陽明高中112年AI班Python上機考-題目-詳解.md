---
title: 陽明高中 112 年 AI 班 Python 上機考 - 題目 + 詳解
categories:
  - 筆記與教學
  - 程式
  - 題解
tags:
  - 筆記
  - 程式
  - Python
  - 題解
math: true
mermaid: false
hide: false
date: 2026-01-07 11:12:28
excerpt: AI 班 Python 期末上機考的題目與詳解
---

下題目來源為高一 AI 班的 Google Classroom 上機考，而這些題目的出處為 [Project Euler](https://projecteuler.net/)

若有任何疑問或錯誤，可於底下留言，或主動與我聯繫

## 第一組

### 題目

滿足除以正整數 $1$~$10$ 都餘 $0$ 的最小正整數是 $2520$。

請問滿足除以正整數 $1$~$20$ 都餘 $0$ 的最小正整數是多少？

原題：[Smallest Multiple](https://projecteuler.net/problem=5)

### 題解

將題目翻成更白話一點，其實就是求 $1$~$20$ 的最小公倍數

```python
from math import lcm

print(lcm(*range(1, 21)))
```

```text
232792560
```

## 第二組

### 題目

$n!$ 的定義是 $n\times(n−1)\times\cdots\times3\times2\times1$

例如 $10!=10\times9\times\cdots\times3\times2\times1=3628800$，

所以 $10!$ 的各位數字和是 $3+6+2+8+8+0+0=27$

請找出 $100!$ 的各位數字和。

原題：[Factorial Digit Sum](https://projecteuler.net/problem=20)

### 題解

這題分為兩個部分處理，階乘的部分，我們可以直接用 `math.factorial()` 解決（雖然自己寫迴圈也沒有不行），而各位相加的部分則可以將結果先轉成字串，再逐相轉整數，最後用 `sum()` 解得，這裡為了方便，我打算直接用 generator expression，無論效率還是寫起來都比較快

```python
from math import factorial as f

print(sum(int(i) for i in str(f(100))))
```

```text
648
```

## 第三組

### 題目

畢氏數是一組滿足 $a^2+b^2=c^2$ 的三元自然數組 $(a,b,c)$，其中 $a<b<c$。

例如：$3^2+4^2=9+16=25=5^2$。

事實有一組畢氏數滿足 $a+b+c=1000$，試求該數組的 $abc$ 之值。

原題：[Special Pythagorean Triplet](https://projecteuler.net/problem=9)

### 題解

首先先將 $a,b$ 暴力迴圈找出來，即可找到一個 $c=\sqrt{a^2+b^2}$，接著拆成兩步判斷，先判斷 $c$ 是否是正整數（檢查三數是否是畢氏數），再判斷三數和是否為 $1000$ 即可

```python
for a in range(1, 1000):
    for b in range(a, 1000): # 從 a 開始，可提升效率
        c = (a**2 + b**2)**0.5
        if c.is_integer():
            c = int(c)
        else:
            continue
        if a + b + c == 1000:
            print(a*b*c)
            exit()
```

```text
31875000
```

## 第四組

### 題目

$2^{15}=32768$，它的各位數字和為 $3+2+7+6+8=26$。

試求出 $2^{1000}$ 的各位數字和？

原題：[Largest Palindrome Product](https://projecteuler.net/problem=16)

### 題解

在 Python 中，做這種題目簡直太簡單了，我們直接將 $2^{1000}$ 算出來後，再算各位和即可，沒有任何技巧可言

```python
print(sum(int(i) for i in str(2**1000)))
```

```text
1366
```

## 第五組

### 題目

迴文數是一種從左到右與從右到左，結果是一樣的數

由兩個二位數的乘積所能得到的最大迴文數是 $9009=91\times99$，

請找到由兩個三位數的乘積所能得到的最大迴文數為何？

原題：[Largest Palindrome Product](https://projecteuler.net/problem=4)

### 題解

這題一樣是拆成「迴圈」與「兩個三位數的乘積」兩部分，迴文很簡單，我們直接看它與它自己的相反字串是否一樣即可，這裡我為了不改變原數字的類型，選擇自訂函式來進行判斷；兩個三位數的乘積則是使用兩個 for-loop 去跑 $100$~$999$ 即可

```python
def is_pal(n):
    n = str(n)
    return n == n[::-1]

m = 0
for i in range(1000, 101, -1):
    for j in range(1000, 101, -1):
        if is_pal(i*j):
            m = max(m, i*j)
print(m)
```

```text
906609
```

## 第六組

### 題目

費氏數列（Fibonacci sequence）的每一項，都是由前兩項的和所產生。

如果考慮前兩項為 $1$、$2$，則前 10 項為 $1$、$2$、$3$、$5$、$8$、$13$、$21$、$34$、$55$、$89$。

依照這個數列的規則，找出所有值不超過 $400,0000$ 的偶值項，求其和。

原題：[Even Fibonacci Numbers](https://projecteuler.net/problem=2)

### 題解

費氏數列（或者大家更習慣叫它「斐波那契數列」）的題在程式界一直是新手的經典入門題，它的解法從最暴力的遞迴、用 list 存已算過值的 DP、用 dict 存已算過值的 DP、DP 優化的裝飾器套件，到現在最高效率的只維護兩個變數的做法，我們將採用最後一種

我們只需要維護兩個變數，用這兩個變數不斷自己相加，即可得到費氏數列任意項

```python
ans, a, b = 0, 1, 2

while b <= 400_0000:
    if b % 2 == 0: # 偶值項的和
        ans += b
    a, b = b, a + b

print(ans)
```

```text
4613732
```

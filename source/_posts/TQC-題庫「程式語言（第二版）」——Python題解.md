---
title: TQC+ 題庫「程式語言（第二版）」——Python 題解
categories:
  - 筆記與教學
  - 程式
  - 競程
tags:
  - 筆記
  - 程式
  - 題解
  - 競程
  - TQC+
  - Code Judger
  - Python
math: false
mermaid: false
hide: false
date: 2026-05-09 22:51:26
excerpt: TQC+ 在 Code Judger 題庫的「程式語言（第二版）」的 Python 解
---

由於題目可能涉及著作權等問題，此篇僅提供可 AC 的程式碼，相關題目內容請自行至 [Code Judger](https://www.codejudger.com/groups/4534/tqc) 的__程式語言（第二版）__登入後閱覽（可使用學校的酷課雲帳號登入）。

{% btn /TQC-題庫「程式語言（第二版）」——Cpp題解,'TQC+ 題庫「程式語言（第二版）」——C++ 題解' %}

## 第1類：基本認識

### 101

```py
print(int(input()) + 9)
```

### 102

```py
print(f'{int(input())*23.34:.2f}')
```

### 103

```py
a, b, c = int(input()), int(input()), int(input())
print(f'{a}+{b}+{c}={a+b+c}\n{(a+b+c)/3:.2f}')
```

### 104

```py
print(f'total={float(input())+float(input()):.2f}')
```

### 105

```py
print(f'result={(int(input())+int(input()))**0.5:.2f}')
```

### 106

```py
x1, y1, x2, y2 = int(input()), int(input()), int(input()), int(input())
print(f'{((x2-x1)**2+(y2-y1)**2)**0.5:.2f}')
```

### 107

```py
a, b, c, d, e, f = input(), input(), input(), input(), input(), input()
print(f'{a:>10} {b:>10} {c:>10}\n{d:>10} {e:>10} {f:>10}\n{a:<10} {b:<10} {c:<10}\n{d:<10} {e:<10} {f:<10}')
```

### 108

```py
rr = int(input())
r = rr / 2
print(f'{rr:<10}\n{r:<10.2f}\n{r**2*3.1415:<10.4f}')
```

### 109

```py
a = int(input())
if a > 100 or a < 0:
    print('error')
else:
    print('pass' if a>59 else 'fail', 'even' if a%2==0 else 'odd', sep='\n')
```

### 110

```py
a, b, c = int(input()), int(input()), int(input())
print(1 if 100>a>=60 else 0, f'{(b+1)/10:.2f}', max(a, c), sep='\n')
```

## 第2類：選擇敘述與迴圈

### 201

```py
print('even' if int(input())%2==0 else 'odd')
```

### 202

```py
a = int(input())
print('error' if a>100 else a+10 if a>60 else a+5)
```

### 203

if-else 解

```py
TABLE = ('one', 'two', 'three', 'four')
i = int(input())

print(TABLE[i-1] if 1 <= i <= 4 else 'error')
```

### 204

```py
a, b, s = int(input()), int(input()), input()
if s not in ('+', '-', '*'):
    print('error')
else:
    calc = eval(f'{a}{s}{b}')
    print(f'{a}{s}{b}={calc}')
```

### 205

```py
arr = [0] * 7
for _ in range(10):
    i = int(input())
    if 1 <= i <= 6:
        arr[i-1] += 1
    else:
        arr[-1] += 1

for i in range(6):
    print(f'number{i+1}:{arr[i]}')
print(f'error:{arr[-1]}')
```

### 206

迴圈解

```py
a, b = int(input()), int(input())
print(sum(i for i in range(a, b+1) if i % 2))
```

公式解

```py
def odd_sum(n):
    cnt = (n + 1) // 2
    return cnt**2

a, b = int(input()), int(input())
print(odd_sum(b) - odd_sum(a-1))
```

### 207

```py
def prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

n = int(input())
print(f'{n} is{"" if prime(n) else " not"} a prime number')
```

### 208

```py
def prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

print(*(i for i in range(2, int(input())) if prime(i)), end=' \n')
```

### 209

```py
n = int(input())

if n not in (0, 1):
    print('error')
    exit()

for i in range(1, 6):
    for j in range(1, 6):
        if n == 0:
            print(f'{i} x {j} = {i*j}', end='\t')
        else:
            print(f'{j} x {i} = {i*j}', end='\t')
    print()
```

### 210

```py
from math import gcd, lcm

a, b = int(input()), int(input())
print(gcd(a, b), lcm(a, b), sep='\n')
```

## 第3類：函式與陣列

### 301

```py
def compute():
    star, line = int(input()), int(input())
    for _ in range(line):
        print('*' * star)
    print(star*line)

compute()
```

### 302

```py
def compute(n):
    if n < 0 or n > 100:
        return -1
    return n+5 if n>=60 else n+10

print(compute(int(input())))
```

### 303

```py
def compute(n):
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

n = int(input())
print(f'{n} is {"" if compute(n) else "not "}a prime number')
```

### 304

```py
def compute(arr):
    t = 0
    for i in arr:
        if i % 3 == 0:
            t += 1
    return t

arr = [int(input()) for _ in range(6)]
print(compute(arr))
```

### 305

```py
def compute(a, b, c):
    return eval(a+c+b)

a, c, b = input(), input(), input()
c = '+' if c=='1' else '*'
print(compute(a,b,c))
```

### 306

```py
from math import factorial

def compute(): pass #題目硬性規定要用自訂function 所以才寫這行繞過限制

n = int(input())
print(f'{n}!={factorial(n)}')
```

### 307

```py
def compute(): pass

print(max(int(input()) for _ in range(5)))
```

### 308

```py
def compute(): pass

fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55] #因為題目有說數字<=10
for i in range(int(input()), 0, -1):
    print(f'fib({i})={fib[i-1]}')
```

### 309

```py
def compute(arr, brr):
    return f'{min(a / b for a, b in zip(arr, brr)):.3f}'

arr = [int(input()) for _ in range(3)]
brr = [int(input()) for _ in range(3)]
print(compute(arr, brr))
```

### 310

```py
def compute(n):
    a = 0
    for i in str(n):
        a += int(i)**len(str(n))
    return n == a

t = 0
for i in range(1, int(input())+1):
    if compute(i):
        print(i)
        t += i
print(t)
```

## 第4類：字串與檔案處理

### 401

```py
s1, s2 = input(), input()
print(len(s1), len(s2), s1+s2, sep='\n')
```

### 402

```py
s1, s2, n = input(), input(), int(input())
if n > len(s1):
    print('error')
    exit()

s = [s1[:n], s2[:n]]
s.sort()
if s[0] == s[1]:
    print(f'{s1} = {s2}')
elif s[0] == s1[:n]:
    print(f'{s1} < {s2}')
else:
    print(f'{s1} > {s2}')
```

### 403

```py
print(input().swapcase())
```

### 404

```py
from collections import Counter #一個計算元素出現頻率的容器 長相和用法同dict

a = Counter(input())
m = max(a.values())
c = [k for k, v in a.items() if v == m]
print(*c, m, sep='\n')
```

### 405

```py
a, b, c = int(input()), int(input()), int(input())

with open('read.txt', 'r') as f:
    data = f.read().split()

print(f'{str(a)*a}{data[0][a:]}\n{str(b)*b}{data[1][b:]}\n{str(c)*c}{data[2][c:]}')
```

### 406

```py
lo = 'qwertyuiopasdfghjklzxcvbnm'
up = lo.upper()

inp = input()
for i in inp:
    if i in 'plmPLM':
        print(i, end='')
    elif i in lo:
        print(lo[lo.index(i)+1], end='')
    else:
        print(up[up.index(i)+1], end='')
```

### 407

```py
with open('read.txt', 'r') as infile, open('write.txt', 'w') as outfile:
    data = infile.read()
    outfile.write(data.replace('*', ''))
```

### 408

```py
s1, s2 = input(), input()

if len(s1) <= 3 or len(s2) <= 3 or len(s1) > 20 or len(s2) > 20:
    print('error')
else:
    print(len(s1), len(s2), (s1+s2)[::-1], sep='\n')
```

### 409

```py
with open('read.txt') as infile, open('write.txt', 'w') as outfile:
    for i in infile.read():
        outfile.write(chr(ord(i)+2))
```

### 410

```py
from string import capwords #與swapcase()有點像 但不會誤把what's的s轉大寫

n = int(input())

with open('read.txt', 'r') as infile, open('write.txt', 'w') as outfile:
    f = infile.readlines()
    for i in range(len(f[:n])):
        outfile.write(capwords(f[i].strip()))
        if i < n-1:
            outfile.write('\n')
```

## 第5類：綜合應用一

### 501 字串轉換

```py
s = input()
print(f'{s} change to {s.split(".")[0]}')
```

### 502 數字相乘

```py
s = input()
s2 = ''
for i in s:
    s2 += f'{i}*'
s2 = s2[:-1]
print(f'{s2}={eval(s2)}')
```

### 503 區間運算

```py
a, b = int(input()), int(input())
for i in range(1, a):
    if (i**0.5).is_integer():
        print(int(i**0.5)**b)
```

### 504 迴文數

```py
s = input()
print('Yes' if s==s[::-1] else 'No')
```

### 505 公式計算

```py
from math import log10, floor

a, b, c, d, e, f = float(input()), float(input()), float(input()), float(input()), float(input()), float(input())
ans = abs(a)*floor(b) + c**d * e**0.5 + log10(f)
print(f'{ans:.2f}')
```

### 506 質因數分解

```py
n = int(input())

if n < 2:
    print(-1)
    exit()

fs = []
while n % 2 == 0:
    fs.append(2)
    n //= 2

f = 3
while f**2 <= n:
    while n % f == 0:
        fs.append(f)
        n //= f
    f += 2

if n > 2:
    fs.append(n)

if len(fs) == 1:
    print(-1)
else:
    print(*fs, sep='*')
```

### 507 猜數字

```py
ans = list(input())
for _ in range(3):
    a = b = 0
    g = list(input())
    for i in range(4):
        if ans[i] == g[i]:
            a += 1
        elif g[i] in ans:
            b += 1
    print(f'{a}A{b}B')
```

### 508 二進位運算

```py
b1, b2 = input(), input()
n1, n2 = int(b1, 2), int(b2, 2)

sb = bin(n1+n2)[2:]
if len(sb) > 8:
    sb = '11111111'

print(f'{n1} + {n2} = {n1+n2}\n{sb}')
```

### 509 字串拆解

```py
s = list(map(int, input().split('/')))
print(*s)
print(sum(s))
```

### 510 星號輸出

```py
h, w = map(int, input().split())
m = [list(map(int, input().split())) for _ in range(h)]

for i in range(h):
    ans = ''
    for j in range(w):
        if m[i][j] == 0:
            ans += ' '
        else:
            if i==0 or j==0 or i==h-1 or j==w-1:
                ans += '*'
            else:
                if m[i-1][j]==0 or m[i][j-1]==0 or m[i+1][j]==0 or m[i][j+1]==0:
                    ans += '*'
                else:
                    ans += ' '
    print(ans)
```

## 第6類：綜合應用二

### 601 大小寫轉換

```py
lett = input()
n = int(input())

s = lett[n].swapcase()
nlet = lett[:n] + s + lett[n+1:]
print(f'The letter that was selected is: {s}\n{nlet}')
```

### 602 字串拆解

```py
uc = lc = ''
c = 0
for i in input():
    if 'A' <= i <= 'Z':
        uc += i
        c += 1
    else:
        lc += i
print(uc, lc, c, sep='\n')
```

### 603 多重迴圈

```py
a, _ = map(int, input().split())
for _ in range(a):
    print(input().replace(' ', ','))
```

### 604 選擇排序

```py
lst = [int(input()) for _ in range(9)]
lst.sort()
print(*lst, f'sum = {sum(lst)}', sep='\n')
```

### 605 差值計算

```py
lst = [int(input()) for _ in range(6)]
lst.sort()
print(sum(lst[3:]) - sum(lst[:3]))
```

### 606 檢驗學號

```py
for _ in range(3):
    s = list(input())
    s[:-1] = map(int, s[:-1])
    check = chr(((s[0]+s[2]+s[4])+(s[1]+s[3])*5)%26 + 64)
    print('Pass' if check == s[5] else 'Fail')
```

### 607 撲克排比大小

```py
CMP = tuple('CDHS')
one, two = input().split()
if one == two:
    print(f'{one} = {two}')
elif one[0] == two[0]:
    print(f'{one} {">" if int(one[1:])>int(two[1:]) else "<"} {two}')
else:
    print(f'{one} {">" if CMP.index(one[0])>CMP.index(two[0]) else "<"} {two}')
```

### 608 棒球計分

假解

```py
arr = [int(input()) for _ in range(10)]
print(f'score = {sum(arr)%10}')
```

{% fold 假解的定義 %}
假解指的是剛好可以通過測資 但不正確的寫法
也就是沒有按題目的邏輯去寫 只是剛好系統放的測資用這個程式跑得過
這題假解就是這種情況 剛好跑得過這個網站的所有測資 但其實根本不是這樣解的
由於我不確定最後TQC+測驗會不會用相同測資 因此為求保險 建議還是要理解一下真解的概念
{% endfold %}
真解

```py
ans = [False] * 3 #[一壘, 二壘, 三壘]
score = 0

for _ in range(10):
    hit = int(input())
    if hit == 0:
        continue
    elif hit == 1:
        if ans[-1]:
            score += 1
        ans = [True] + ans[:-1]
    elif hit == 2:
        if ans[-1]:
            score += 1
        if ans[-2]:
            score += 1
        ans = [False, True] + ans[:-2]
    elif hit == 3:
        score += sum(ans)
        ans = [False, False, True]
    else:
        score += sum(ans) + 1
        ans = [False] * 3

print(f'score = {score}')
```

### 609 閏年

```py
from datetime import date #用來專門處理日期時間等問題的套件

y, m, d = map(int, input().split())
try:
    dt = date(y, m, d)
    print(dt.timetuple().tm_yday)
except:
    print('error')
```

### 610 矩陣乘積

```py
from numpy import matrix #矩陣運算用 可直接算出矩陣乘法的結果

t, _ = map(int, input().split())
a = matrix([list(map(int, input().split())) for _ in range(t)])

t, _ = map(int, input().split())
b = matrix([list(map(int, input().split())) for _ in range(t)])

try:
    for i in (a*b).tolist(): #matrix.tolist() 把它變為二維陣列 輸出才不會多括號
        print(*i)
except:
    print('error')
```

{% fold numpy %}
numpy不是Python的built-in function或庫
而是第三方的庫
所以不確定真實上機考時是否可以使用
{% endfold %}

## 第7類：綜合應用三

### 701 海龍公式

```py
a, b, c = int(input()), int(input()), int(input())
s = (a+b+c) / 2
print(f'{(s*(s-a)*(s-b)*(s-c))**0.5:.2f}')
```

### 702 二進位轉十進位

```py
print(int(input(), 2))
```

### 703 找零錢

```py
n = int(input())

if n >= 50:
    print(f'{n//50}*$50', end=' ')
    n %= 50
if n >= 10:
    print(f'{n//10}*$10', end=' ')
    n %= 10
if n >= 5:
    print(f'{n//5}*$5', end=' ')
    n %= 5

print(f'{n}*$1')
```

### 704 過半數

```py
from collections import Counter

t = int(input())
arr = Counter(map(int, input().split()))

for k, v in arr.items():
    if v > t/2:
        print(k)
        break
else:
    print('error')
```

### 705 庫存函數

```py
ar = {k: int(v) for k, v in (input().split() for _ in range(3))} #dict
arr = {input() for _ in range(5)} #set
t = 0

for i in arr:
    if i in ar:
        t += ar[i]

print(t)
```

### 706 整數檔案讀寫

```py
arr = [int(input()) for _ in range(4)]

with open('read.txt', 'r') as infile, open('write.txt', 'w') as outfile:
    for i in infile.readlines():
        arr.append(int(i.strip()))
    arr.sort()
    for i in arr:
        outfile.write(f'{i}\n')
```

### 707 動態記憶體配置

```py
arr = []
for _ in range(int(input())):
    a, b = map(int, input().split())
    arr.append((f'{a}x{b}=', a*b))

arr.sort(key=lambda x: x[1])
for i in arr:
    print(*i, sep='')
```

### 708 12小時制時間

```py
c = 0
for _ in range(3):
    h, m = map(int, input().split())
    if h == 0:
        print(f'AM 12:{m}')
        c += 1
    elif h < 12:
        print(f'AM {h}:{m}')
        c += 1
    elif h == 12:
        print(f'PM {h}:{m}')
    else:
        print(f'PM {h-12}:{m}')
print(c)
```

### 709 圓面積計算

```py
area = 0
biggest = [0] * 3

for _ in range(int(input())):
    x, y, r = map(int, input().split())
    area += r**2 * 3.14159
    if r > biggest[-1]:
        biggest = [x, y, r]

print(f'Sum = {area:.2f}\nx: {biggest[0]}, y: {biggest[1]}\nradius: {biggest[2]}')
```

### 710 FIFO分頁替換演算法

```py
arr = [0] * 4
i = 0

for _ in range(10):
    data = int(input())
    if data not in arr:
        arr[i] = data
        i = (i+1) % 4
    print(*arr, end=' \n')
```

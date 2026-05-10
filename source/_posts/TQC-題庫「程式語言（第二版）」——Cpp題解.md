---
title: TQC+ 題庫「程式語言（第二版）」—— C++ 題解
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
  - C++
math: false
mermaid: false
hide: true
date: 2026-05-10 02:37:09
excerpt: TQC+ 在 Code Judger 題庫的「程式語言（第二版）」的 C++ 解
---

由於題目可能涉及著作權等問題，此篇僅提供可 AC 的程式碼，相關題目內容請自行至 [Code Judger](https://www.codejudger.com/groups/4534/tqc) 的__程式語言（第二版）__登入後閱覽（可使用學校的酷課雲帳號登入）。

{% btn /TQC-題庫「程式語言（第二版）」——Python題解',TQC+ 題庫「程式語言（第二版）」——Python 題解' %}

## 第1類：基本認識

### 101

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    
    int n;
    cin >> n;
    cout << n + 9;
}
```

### 102

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    
    int n;
    cin >> n;
    cout << fixed << setprecision(2) << n*23.34;
}
```

### 103

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    
    int a, b, c;
    cin >> a >> b >> c;
    int s = a + b + c;
    cout << a << '+' << b << '+' << c << '=' << s << '\n' << fixed << setprecision(2) << s / 3.0;
}
```

### 104

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    
    float a, b;
    cin >> a >> b;
    cout << "total=" << fixed << setprecision(2) << a + b;
}
```

### 105

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    
    int a, b;
    cin >> a >> b;
    cout << "result=" << fixed << setprecision(2) << sqrt(a+b);
}
```

### 106

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);
    
    int x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;
    cout << fixed << setprecision(2) << sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}
```

### 107

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string a, b, c, d, e, f;
    cin >> a >> b >> c >> d >> e >> f;

    cout << right << setw(10) << a << ' '
         << setw(10) << b << ' '
         << setw(10) << c << '\n'
         << setw(10) << d << ' '
         << setw(10) << e << ' '
         << setw(10) << f << '\n'

         << left
         << setw(10) << a << ' '
         << setw(10) << b << ' '
         << setw(10) << c << '\n'
         << setw(10) << d << ' '
         << setw(10) << e << ' '
         << setw(10) << f << '\n';
}
```

### 108

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int rr;
    cin >> rr;
    float r = rr / 2.0;

    cout << left << setw(10) << rr << '\n'
         << fixed << setprecision(2) << left << setw(10) << r << '\n'
         << setprecision(4) << setw(10) << r * r * 3.1415;
}
```

### 109

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int s;
    cin >> s;

    if (s > 100) {
        cout << "error";
        return 0;
    }

    cout << ((s >= 60) ? "pass\n" : "fail\n") << ((s % 2) ? "odd" : "even");
}
```

### 110

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b, c;
    cin >> a >> b >> c;

    cout << (a >= 60 and a < 100) << '\n' << fixed << setprecision(2) << (b+1) / 10.0 << '\n' << max(a, c);
}
```

## 第2類：選擇敘述與迴圈

### 201

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int x;
    cin >> x;
    cout << ((x % 2) ? "odd" : "even");
}
```

### 202

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int x;
    cin >> x;

    if (x > 100 or x < 0) {
        cout << "error";
        return 0;
    }
    cout << ((x > 60) ? x + 10 : x + 5);
}
```

### 203

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s[4] = {"one", "two", "three", "four"};
    int x;
    cin >> x;
    cout << ((x > 0 and x < 5) ? s[x-1] : "error");
}
```

### 204

```cpp
#include <bits/stdc++.h>
using namespace std;

int calc(int a, int b, char c) {
    if (c == '+') return a + b;
    else if (c == '-') return a - b;
    else if (c == '*') return a * b;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b;
    char c;
    cin >> a >> b >> c;
    
    if (c == '+' or c == '-' or c == '*') cout << a << c << b << '=' << calc(a, b, c);
    else cout << "error";    
}
```

### 205

```cpp
#include <bits/stdc++.h>
using namespace std;

unordered_map<string, int> m;

void f(int x) {
    if (x == 1) m["number1"]++;
    else if (x == 2) m["number2"]++;
    else if (x == 3) m["number3"]++;
    else if (x == 4) m["number4"]++;
    else if (x == 5) m["number5"]++;
    else if (x == 6) m["number6"]++;
    else m["error"]++;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    for (int i = 0; i < 10; i++) {
        int x;
        cin >> x;
        f(x);
    }

    for (string k : {"number1", "number2", "number3", "number4", "number5", "number6", "error"})
    cout << k << ':' << m[k] << '\n';
}
```

### 206

```cpp
#include <bits/stdc++.h>
using namespace std;

int calc(int n) {
    int cnt = (n+1) / 2;
    return cnt * cnt;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b;
    cin >> a >> b;
    cout << calc(b) - calc(a-1);
}
```

### 207

```cpp
#include <bits/stdc++.h>
using namespace std;

bool prime(int n) {
    for (int i = 2; i*i <= n; i++) if (n % i == 0) return 0;
    return 1;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;
    string s = (prime(n)) ? "" : " not";
    cout << n << " is" << s << " a prime number";
}
```

### 208

```cpp
#include <bits/stdc++.h>
using namespace std;

bool prime(int n) {
    for (int i = 2; i*i <= n; i++) if (n % i == 0) return 0;
    return 1;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;
    for (int i = 2; i < n; i++) if (prime(i)) cout << i << ' ';
}
```

### 209

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;

    if (n != 0 and n != 1) {
        cout << "error";
        return 0;
    }

    for (int i = 1; i <= 5; i++) {
        for (int j = 1; j <= 5; j++) {
            if (n == 0) cout << i << " x " << j << " = " << i * j << '\t';
            else cout << j << " x " << i << " = " << i * j << '\t';
        }
        cout << '\n';
    }
}
```

### 210

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << '\n' << lcm(a, b);
}
```

## 第3類：函式與陣列

### 301

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    //compute
    int a, b;
    cin >> a >> b;
    for (int i = 0; i < b; i++) {
        for (int j = 0; j < a; j++) cout << '*';
        cout << '\n';
    }
    cout << a * b;
}
```

### 302

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    //compute
    int n;
    cin >> n;
    
    if (n > 100 or n < 0) {
        cout << -1;
        return 0;
    }

    cout << ((n > 60) ? n + 5 : n + 10);
}
```

### 303

```cpp
#include <bits/stdc++.h>
using namespace std;

bool compute(int n) {
    for (int i = 2; i*i <= n; i++) if (n % i == 0) return 0;
    return 1;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;
    string s = (compute(n)) ? "" : " not";
    cout << n << " is" << s << " a prime number";
}
```

### 304

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    //compute
    int cnt = 0;
    for (int i = 0; i < 6; i++) {
        int x;
        cin >> x;
        if (x % 3 == 0) cnt++;
    }
    cout << cnt;
}
```

### 305

```cpp
#include <bits/stdc++.h>
using namespace std;

int compute(int a, int b ,int c) {
    if (c == 1) return a + b;
    else return a * b;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b, c;
    cin >> a >> c >> b;
    cout << compute(a, b, c);
}
```

### 306

```cpp
#include <bits/stdc++.h>
using namespace std;

int compute(int n) {
    if (n == 0) return 1;
    return n * compute(n - 1);
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;
    cout << n << "!=" << compute(n);
}
```

### 307

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    //compute
    int n[5];
    for (int i = 0; i < 5; i++) cin >> n[i];
    cout << *max_element(n, n+5);
}
```

### 308

```cpp
#include <bits/stdc++.h>
using namespace std;

int compute(int n) {
    if (n < 2) return n;
    return compute(n-1) + compute(n-2);
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;
    n++;
    
    while (--n) cout << "fib(" << n << ")=" << compute(n) << '\n';
}
```

### 309

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    //compute
    float a, b, c, d, e, f;
    cin >> a >> b >> c >> d >> e >> f;
    float x = a / d, y = b / e, z = c / f;
    cout << fixed << setprecision(3) << min(x, min(y, z));
}
```

### 310

```cpp
#include <bits/stdc++.h>
using namespace std;

bool compute(int n) {
    int k = 0, t = n;
    while (t > 0) {
        k++;
        t /= 10;
    }

    int s = 0;
    t = n;
    while (t > 0) {
        s += pow(t%10, k);
        t /= 10;
    }

    return s == n;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n, a = 0;
    cin >> n;

    for (int i = 1; i < n; i++)
        if (compute(i)) {
            cout << i << '\n';
            a += i;
        }

    cout << a;
}
```

## 第4類：字串與檔案處理

### 401

```cpp
s1, s2 = input(), input()
print(len(s1), len(s2), s1+s2, sep='\n')
```

### 402

```cpp
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

```cpp
print(input().swapcase())
```

### 404

```cpp
from collections import Counter #一個計算元素出現頻率的容器 長相和用法同dict

a = Counter(input())
m = max(a.values())
c = [k for k, v in a.items() if v == m]
print(*c, m, sep='\n')
```

### 405

```cpp
a, b, c = int(input()), int(input()), int(input())

with open('read.txt', 'r') as f:
    data = f.read().split()

print(f'{str(a)*a}{data[0][a:]}\n{str(b)*b}{data[1][b:]}\n{str(c)*c}{data[2][c:]}')
```

### 406

```cpp
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

```cpp
with open('read.txt', 'r') as infile, open('write.txt', 'w') as outfile:
    data = infile.read()
    outfile.write(data.replace('*', ''))
```

### 408

```cpp
s1, s2 = input(), input()
if len(s1) <= 3 or len(s2) <= 3 or len(s1) > 20 or len(s2) > 20:
    print('error')
else:
    print(len(s1), len(s2), (s1+s2)[::-1], sep='\n')
```

### 409

```cpp
with open('read.txt') as infile, open('write.txt', 'w') as outfile:
    for i in infile.read():
        outfile.write(chr(ord(i)+2))
```

### 410

```cpp
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

```cpp
s = input()
print(f'{s} change to {s.split(".")[0]}')
```

### 502 數字相乘

```cpp
s = input()
s2 = ''
for i in s:
    s2 += f'{i}*'
s2 = s2[:-1]
print(f'{s2}={eval(s2)}')
```

### 503 區間運算

```cpp
a, b = int(input()), int(input())
for i in range(1, a):
    if (i**0.5).is_integer():
        print(int(i**0.5)**b)
```

### 504 迴文數

```cpp
s = input()
print('Yes' if s==s[::-1] else 'No')
```

### 505 公式計算

```cpp
from math import log10, floor

a, b, c, d, e, f = float(input()), float(input()), float(input()), float(input()), float(input()), float(input())
ans = abs(a)*floor(b) + c**d * e**0.5 + log10(f)
print(f'{ans:.2f}')
```

### 506 質因數分解

```cpp
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

```cpp
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

```cpp
b1, b2 = input(), input()
n1, n2 = int(b1, 2), int(b2, 2)

sb = bin(n1+n2)[2:]
if len(sb) > 8:
    sb = '11111111'

print(f'{n1} + {n2} = {n1+n2}\n{sb}')
```

### 509 字串拆解

```cpp
s = list(map(int, input().split('/')))
print(*s)
print(sum(s))
```

### 510 星號輸出

```cpp
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

```cpp
lett = input()
n = int(input())

s = lett[n].swapcase()
nlet = lett[:n] + s + lett[n+1:]
print(f'The letter that was selected is: {s}\n{nlet}')
```

### 602 字串拆解

```cpp
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

```cpp
a, _ = map(int, input().split())
for _ in range(a):
    print(input().replace(' ', ','))
```

### 604 選擇排序

```cpp
lst = [int(input()) for _ in range(9)]
lst.sort()
print(*lst, f'sum = {sum(lst)}', sep='\n')
```

### 605 差值計算

```cpp
lst = [int(input()) for _ in range(6)]
lst.sort()
print(sum(lst[3:]) - sum(lst[:3]))
```

### 606 檢驗學號

```cpp
for _ in range(3):
    s = list(input())
    s[:-1] = map(int, s[:-1])
    check = chr(((s[0]+s[2]+s[4])+(s[1]+s[3])*5)%26 + 64)
    print('Pass' if check == s[5] else 'Fail')
```

### 607 撲克排比大小

```cpp
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

```cpp
arr = [int(input()) for _ in range(10)]
print(f'score = {sum(arr)%10}')
```

:::spoiler 假解的定義
假解指的是剛好可以通過測資 但不正確的寫法
也就是沒有按題目的邏輯去寫 只是剛好系統放的測資用這個程式跑得過
這題假解就是這種情況 剛好跑得過這個網站的所有測資 但其實根本不是這樣解的
由於我不確定最後TQC+測驗會不會用相同測資 因此為求保險 建議還是要理解一下真解的概念
:::
真解

```cpp
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

```cpp
from datetime import date #用來專門處理日期時間等問題的套件

y, m, d = map(int, input().split())
try:
    dt = date(y, m, d)
    print(dt.timetuple().tm_yday)
except:
    print('error')
```

### 610 矩陣乘積

```cpp
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

:::spoiler numpy
numpy不是Python的built-in function或庫
而是第三方的庫
所以不確定真實上機考時是否可以使用
:::

## 第7類：綜合應用三

### 701 海龍公式

```cpp
a, b, c = int(input()), int(input()), int(input())
s = (a+b+c) / 2
print(f'{(s*(s-a)*(s-b)*(s-c))**0.5:.2f}')
```

### 702 二進位轉十進位

```cpp
print(int(input(), 2))
```

### 703 找零錢

```cpp
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

```cpp
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

```cpp
ar = {k: int(v) for k, v in (input().split() for _ in range(3))} #dict
arr = {input() for _ in range(5)} #set
t = 0

for i in arr:
    if i in ar:
        t += ar[i]

print(t)
```

### 706 整數檔案讀寫

```cpp
arr = [int(input()) for _ in range(4)]

with open('read.txt', 'r') as infile, open('write.txt', 'w') as outfile:
    for i in infile.readlines():
        arr.append(int(i.strip()))
    arr.sort()
    for i in arr:
        outfile.write(f'{i}\n')
```

### 707 動態記憶體配置

```cpp
arr = []
for _ in range(int(input())):
    a, b = map(int, input().split())
    arr.append((f'{a}x{b}=', a*b))

arr.sort(key=lambda x: x[1])
for i in arr:
    print(*i, sep='')
```

### 708 12小時制時間

```cpp
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

```cpp
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

```cpp
arr = [0] * 4
i = 0

for _ in range(10):
    data = int(input())
    if data not in arr:
        arr[i] = data
        i = (i+1) % 4
    print(*arr, end=' \n')
```
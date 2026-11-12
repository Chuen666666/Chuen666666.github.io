---
title: CPE56 選集——題解（C++ 或 Python）
categories:
  - 筆記與教學
  - 程式
  - 競程
tags:
  - 筆記
  - 題解
  - 程式
  - 競程
  - CPE56選集
  - CPE
  - C++
  - Python
math: false
mermaid: false
hide: true
date: 2026-11-11 14:00:44
excerpt: CPE56 選集的 C++ 或 Python 題解
---

> 題目來源：[CPE56 選集](https://cpe.mcu.edu.tw/cpelist.php)
>
> （以下亦會附上每一題的題目和 ZeroJudge 連結，方便自行測評）
>
> 題解以「方便」為主，因此主要使用 C++，但若 Python 能明顯更方便解題，則改用 Python

## 輸入格式

### TEX Quotes

> [UVa00272](https://onlinejudge.org/external/2/272.pdf)、[ZeroJudge c007](https://zerojudge.tw/ShowProblem?problemid=c007)

```python
from sys import stdin

flag = False

for line in stdin:
    line = line.strip()

    for i in line:
        if i == '"' and not flag:
            print('``', end='')
            flag = True
        elif i == '"' and flag:
            print('\'\'', end='')
            flag = False
        else:
            print(i, end='')

    print()
```

### Dates

> [UVa11356](https://onlinejudge.org/external/113/11356.pdf)、ZeroJudge：未查得對應題號

```python
from datetime import datetime, timedelta

T = int(input())

for i in range(1, T + 1):
    d = datetime.strptime(input(), "%Y-%B-%d")
    k = int(input())

    d += timedelta(days=k)

    print(f"Case {i}: {d.strftime('%Y-%B-%d')}")
```

### Molar mass

> [UVa01586](https://onlinejudge.org/external/15/1586.pdf)、[ZeroJudge m042](https://zerojudge.tw/ShowProblem?problemid=m042)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int a, b;
    while (true) {
        cin >> a >> b;
        if (a == -1 and b == -1) break;
        cout << min(abs(a - b), min((a + 100 - b) % 100, (b + 100 - a) % 100)) << '\n';
    }
}
```

### Polynomial Showdown

> [UVa00392](https://onlinejudge.org/external/3/392.pdf)、[ZeroJudge c060](https://zerojudge.tw/ShowProblem?problemid=c060)

## 字串字元

### OneTwo Three

> [UVa12289](https://onlinejudge.org/external/122/12289.pdf)、[ZeroJudge a466](https://zerojudge.tw/ShowProblem?problemid=a466)

### Decoding

> [UVa11541](https://onlinejudge.org/external/115/11541.pdf)、[ZeroJudge e208](https://zerojudge.tw/ShowProblem?problemid=e208)

### Scrolling Sign

> [UVa11576](https://onlinejudge.org/external/115/11576.pdf)、[ZeroJudge n683](https://zerojudge.tw/ShowProblem?problemid=n683)

### Find The Telephone

> [UVa10921](https://onlinejudge.org/external/109/10921.pdf)、[ZeroJudge d670](https://zerojudge.tw/ShowProblem?problemid=d670)

## 日期時間

### Mirror Clock

> [UVa11650](https://onlinejudge.org/external/116/11650.pdf)、[ZeroJudge j056](https://zerojudge.tw/ShowProblem?problemid=j056)

### Cancer or Scorpio

> [UVa11947](https://onlinejudge.org/external/119/11947.pdf)、[ZeroJudge e680](https://zerojudge.tw/ShowProblem?problemid=e680)

### How old are you?

> [UVa11219](https://onlinejudge.org/external/112/11219.pdf)、[ZeroJudge d041](https://zerojudge.tw/ShowProblem?problemid=d041)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int n;
    cin >> n;
    for (int i = 1; i <= n; ++i) {
        cout << "Case #" << i << ": ";

        int m, y, d, M, Y, D;
        char _;
        cin >> d >> _ >> m >> _ >> y >> D >> _ >> M >> _ >> Y;

        if (y < Y or (y == Y and m < M) or (y == Y and m == M and d < D)) {
            cout << "Invalid birth date\n";
            continue;
        }

        int age = y - Y;
        if (m < M or (m == M and d < D)) age--;

        if (age > 130)
            cout << "Check birth date\n";
        else
            cout << age << '\n';
    }
}
```

### COUNTING CHAOS

> [UVa11309](https://onlinejudge.org/external/113/11309.pdf)、[ZeroJudge d048](https://zerojudge.tw/ShowProblem?problemid=d048)

```cpp
#include <bits/stdc++.h>
using namespace std;

bool pal(int n) {
    int a = 0, b = n;
    while (n) {
        a = a * 10 + n % 10;
        n /= 10;
    }
    return a == b;
}

int add_time(int n) {
    int h = n / 100, m = n % 100;
    m++;
    if (m == 60) {
        m = 0;
        h++;
    }
    return (h % 24) * 100 + m;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int n, h, m, t;
    char _;
    cin >> n;
    while (n--) {
        cin >> h >> _ >> m;
        t = 100 * h + m;
        t = add_time(t);
        while (!pal(t)) t = add_time(t);
        cout << setfill('0') << setw(2) << t / 100 << ':' << setw(2) << t % 100 << '\n';
    }
}
```

## 算子運算

### Zapping

> [UVa12468](https://onlinejudge.org/external/124/12468.pdf)、[ZeroJudge a518](https://zerojudge.tw/ShowProblem?problemid=a518)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int a, b;
    while (true) {
        cin >> a >> b;
        if (a == -1 and b == -1) break;
        cout << min(abs(a - b), min((a + 100 - b) % 100, (b + 100 - a) % 100)) << '\n';
    }
}
```

### Primary Arithmetic

> [UVa10035](https://onlinejudge.org/external/100/10035.pdf)、[ZeroJudge c014](https://zerojudge.tw/ShowProblem?problemid=c014)

```cpp
#include <bits/stdc++.h>
using namespace std;

void print(int n) {
    switch (n) {
        case 0:
            cout << "No carry operation.\n";
            break;
        case 1:
            cout << n << " carry operation.\n";
            break;
        default:
            cout << n << " carry operations.\n";
            break;
    }
}

int sol(int a, int b) {
    int ans = 0, c = 0;
    while (a or b or c) {
        if (a % 10 + b % 10 + c > 9) {
            ans++;
            c = 1;
        }
        else
            c = 0;
        a /= 10;
        b /= 10;
    }
    return ans;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int a, b;
    while (cin >> a >> b) {
        if (a == 0 and b == 0) break;
        print(sol(a, b));
    }
}
```

### Is it multiple of 3?

> [UVa13178](https://onlinejudge.org/external/131/13178.pdf)、[ZeroJudge e612](https://zerojudge.tw/ShowProblem?problemid=e612)

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int T, n;
    cin >> T;
    while (T--) {
        cin >> n;
        int ans = 0;
        for (int i = 1; i <= n; ++i) ans += i;
        cout << ((ans % 3) ? "NO\n" : "YES\n");
    }
}
```

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int T, n;
    cin >> T;
    while (T--) {
        cin >> n;
        cout << ((n % 3 == 1) ? "NO\n" : "YES\n");
    }
}
```

### Expanding Fractions

> [UVa00275](https://onlinejudge.org/external/2/275.pdf)、[ZeroJudge c084](https://zerojudge.tw/ShowProblem?problemid=c084)

## 質因倍數

### Count the factors

> [UVa10699](https://onlinejudge.org/external/106/10699.pdf)、[ZeroJudge d120](https://zerojudge.tw/ShowProblem?problemid=d120)

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define MAXN 1000005

bitset<MAXN> prime;

void init() {
    prime.set();
    prime[0] = prime[1] = false;

    for (int i = 2; i * i < MAXN; ++i)
        if (prime[i])
            for (int j = i * i; j < MAXN; j += i) prime[j] = false;
}

int f(int n) {
    int ans = 0;
    for (int i = 2; i * i <= n; ++i) {
        if (prime[i] and n % i == 0) {
            ++ans;
            while (n % i == 0)
                n /= i;
        }
    }
    if (n > 1) ++ans;
    return ans;
}

signed main() {
    ios::sync_with_stdio(0), cin.tie(0);

    init();
    int n;
    while (cin >> n and n != 0) cout << n << " : " << f(n) << '\n';
}
```

### Pi

> [UVa00412](https://onlinejudge.org/external/4/412.pdf)、[ZeroJudge c087](https://zerojudge.tw/ShowProblem?problemid=c087)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int N, cnt_all, cnt_p;
    vector<int> v;
    while (cin >> N) {
        if (N == 0) break;

        cnt_all = cnt_p = 0;
        v.resize(N);
        for (int& i : v) cin >> i;

        for (int i = 0; i < N; ++i) {
            for (int j = i + 1; j < N; ++j) {
                cnt_all++;
                if (__gcd(v[i], v[j]) == 1) cnt_p++;
            }
        }

        if (cnt_p == 0)
            cout << "No estimate for this data set.\n";
        else
            cout << fixed << setprecision(6) << sqrt(6.0 * cnt_all / cnt_p) << '\n';
    }
}
```

### Product of digits

> [UVa00993](https://onlinejudge.org/external/9/993.pdf)、[ZeroJudge d418](https://zerojudge.tw/ShowProblem?problemid=d418)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        if (n == 0) {
            cout << 10 << '\n';
            continue;
        }
        else if (n == 1) {
            cout << 1 << '\n';
            continue;
        }
        vector<int> v;
        for (int i = 9; i >= 2; --i) {
            while (n % i == 0) {
                v.push_back(i);
                n /= i;
            }
        }

        if (n > 1) {
            cout << -1 << '\n';
            continue;
        }

        sort(v.begin(), v.end());
        for (int i : v) cout << i;
        cout << '\n';
    }
}
```

### Prime Land

> [UVa00516](https://onlinejudge.org/external/5/516.pdf)、[ZeroJudge c088](https://zerojudge.tw/ShowProblem?problemid=c088)

```python
from math import isqrt


MAXN = 32767 + 5
prime = [True] * MAXN
prime[0] = prime[1] = False

for i in range(2, isqrt(MAXN - 1) + 1):
    if prime[i]:
        for j in range(i * i, MAXN, i):
            prime[j] = False

primes = [i for i in range(2, MAXN) if prime[i]]

while True:
    arr = list(map(int, input().split()))
    if arr == [0]:
        break

    n = 1
    for i in range(0, len(arr), 2):
        n *= pow(arr[i], arr[i + 1])
    n -= 1

    ans = []

    for p in primes:
        if p * p > n:
            break

        tmp = 0
        while n % p == 0:
            n //= p
            tmp += 1

        if tmp > 0:
            ans.append((p, tmp))

    if n > 1:
        ans.append((n, 1))

    print(*(f'{p} {e}' for p, e in reversed(ans)), sep=' ')
```

## 進制基底

### Kibbles 'n' Bits

> [UVa00446](https://onlinejudge.org/external/4/446.pdf)、[ZeroJudge d379](https://zerojudge.tw/ShowProblem?problemid=d379)

```python
for _ in range(int(input())):
    a, op, b = input().split()
    a = int(a, 16)
    b = int(b, 16)
    c = a + b if op == '+' else a - b
    print(f'{a:013b} {op} {b:013b} = {c}')
```

### The Base-1 Number System

> [UVa11398](https://onlinejudge.org/external/113/11398.pdf)、[ZeroJudge a467](https://zerojudge.tw/ShowProblem?problemid=a467)

```python
while True:
    s = input().replace(' #', '').split()
    if s == ['~']:
        break

    ans, flag = '', '0'
    for i in s:
        if len(i) == 1:
            flag = '1'
        elif len(i) == 2:
            flag = '0'
        else:
            ans += flag * (len(i) - 2)

    print(int(ans, 2))
```

### Base -2

> [UVa11121](https://onlinejudge.org/external/111/11121.pdf)、[ZeroJudge m946](https://zerojudge.tw/ShowProblem?problemid=m946)

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main() {
    ios::sync_with_stdio(0), cin.tie(0);

    int N, n;
    cin >> N;
    for (int i = 1; i <= N; ++i) {
        vector<int> v;
        cout << "Case #" << i << ": ";
        cin >> n;

        if (n == 0) {
            cout << 0 << '\n';
            continue;
        }

        while (n) {
            int r = n % -2;
            n /= -2;

            if (r < 0) {
                r += 2;
                n++;
            }

            v.push_back(r);
        }

        reverse(v.begin(), v.end());
        for (int i : v) cout << i;
        cout << '\n';
    }
}
```

### Fibonaccimal Base

> [UVa00948](https://onlinejudge.org/external/9/948.pdf)、[ZeroJudge a134](https://zerojudge.tw/ShowProblem?problemid=a134)

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define MAXN 100000005

vector<int> fib = {0, 1};

void init() {
    for (int i = 2;; ++i) {
        int n = fib[i - 1] + fib[i - 2];
        if (n > MAXN) break;
        fib.push_back(n);
    }
}

signed main() {
    ios::sync_with_stdio(0), cin.tie(0);

    init();
    int N, n;
    cin >> N;
    while (N--) {
        cin >> n;
        cout << n << " = ";

        bool started = false;
        for (int i = fib.size() - 1; i >= 2; --i) {
            if (n >= fib[i]) {
                cout << 1;
                n -= fib[i];
                started = true;
            }
            else if (started) {
                cout << 0;
            }
        }

        cout << " (fib)\n";
    }
}
```

## 二維寫真

### Minesweeper

> [UVa10189](https://onlinejudge.org/external/101/10189.pdf)、[ZeroJudge e605](https://zerojudge.tw/ShowProblem?problemid=e605)

### Where's Waldorf?

> [UVa10010](https://onlinejudge.org/external/100/10010.pdf)、[ZeroJudge n736](https://zerojudge.tw/ShowProblem?problemid=n736)

### LC-Display

> [UVa00706](https://onlinejudge.org/external/7/706.pdf)、[ZeroJudge c135](https://zerojudge.tw/ShowProblem?problemid=c135)

### Not That Kind of Graph

> [UVa10800](https://onlinejudge.org/external/108/10800.pdf)、[ZeroJudge e633](https://zerojudge.tw/ShowProblem?problemid=e633)

## 規則模擬

### Reverse and Add

> [UVa10018](https://onlinejudge.org/external/100/10018.pdf)、[ZeroJudge c015](https://zerojudge.tw/ShowProblem?problemid=c015)

### Die Game

> [UVa10409](https://onlinejudge.org/external/104/10409.pdf)、[ZeroJudge e516](https://zerojudge.tw/ShowProblem?problemid=e516)

### Credit Check

> [UVa11743](https://onlinejudge.org/external/117/11743.pdf)、[ZeroJudge a159](https://zerojudge.tw/ShowProblem?problemid=a159)

### Contest Scoreboard

> [UVa10258](https://onlinejudge.org/external/102/10258.pdf)、[ZeroJudge n781](https://zerojudge.tw/ShowProblem?problemid=n781)

## 正暴窮舉

### Points in Figures: Rectangles, Circles, and Triangles

> [UVa00478](https://onlinejudge.org/external/4/478.pdf)、[ZeroJudge d094](https://zerojudge.tw/ShowProblem?problemid=d094)

### Blocks

> [UVa10365](https://onlinejudge.org/external/103/10365.pdf)、[ZeroJudge r579](https://zerojudge.tw/ShowProblem?problemid=r579)

### Digit Counting

> [UVa01225](https://onlinejudge.org/external/12/1225.pdf)、[ZeroJudge e528](https://zerojudge.tw/ShowProblem?problemid=e528)

### Alternate Task

> [UVa11728](https://onlinejudge.org/external/117/11728.pdf)、[ZeroJudge e629](https://zerojudge.tw/ShowProblem?problemid=e629)

## 二維排數

### Cantor Fractions

> [UVa00880](https://onlinejudge.org/external/8/880.pdf)、ZeroJudge：未查得對應題號

### Joana and the Odd Numbers

> [UVa00913](https://onlinejudge.org/external/9/913.pdf)、[ZeroJudge d096](https://zerojudge.tw/ShowProblem?problemid=d096)

### Ant on a Chessboard

> [UVa10161](https://onlinejudge.org/external/101/10161.pdf)、[ZeroJudge c048](https://zerojudge.tw/ShowProblem?problemid=c048)

### Spiral Tap

> [UVa10920](https://onlinejudge.org/external/109/10920.pdf)、ZeroJudge：未查得對應題號

## 排列組合

### Binomial Showdown

> [UVa00530](https://onlinejudge.org/external/5/530.pdf)、[ZeroJudge c061](https://zerojudge.tw/ShowProblem?problemid=c061)

### How do you add?

> [UVa10943](https://onlinejudge.org/external/109/10943.pdf)、ZeroJudge：未查得對應題號

### The Hamming Distance Problem

> [UVa00729](https://onlinejudge.org/external/7/729.pdf)、[ZeroJudge d790](https://zerojudge.tw/ShowProblem?problemid=d790)

### Generating Fast

> [UVa10098](https://onlinejudge.org/external/100/10098.pdf)、[ZeroJudge d436](https://zerojudge.tw/ShowProblem?problemid=d436)

## 排序處秩

### Flip Sort

> [UVa10327](https://onlinejudge.org/external/103/10327.pdf)、[ZeroJudge a539](https://zerojudge.tw/ShowProblem?problemid=a539)

### Shopaholic

> [UVa11369](https://onlinejudge.org/external/113/11369.pdf)、[ZeroJudge d150](https://zerojudge.tw/ShowProblem?problemid=d150)

### Lumberjack Sequencing

> [UVa11942](https://onlinejudge.org/external/119/11942.pdf)、[ZeroJudge e533](https://zerojudge.tw/ShowProblem?problemid=e533)

### Building designing

> [UVa11039](https://onlinejudge.org/external/110/11039.pdf)、[ZeroJudge d731](https://zerojudge.tw/ShowProblem?problemid=d731)

## 集合映對

### Word Amalgamation

> [UVa00642](https://onlinejudge.org/external/6/642.pdf)、ZeroJudge：未查得對應題號

### Cool Word

> [UVa12820](https://onlinejudge.org/external/128/12820.pdf)、[ZeroJudge e706](https://zerojudge.tw/ShowProblem?problemid=e706)

### Simply Subsets

> [UVa00496](https://onlinejudge.org/external/4/496.pdf)、[ZeroJudge d691](https://zerojudge.tw/ShowProblem?problemid=d691)

### Antiarithmetic

> [UVa10730](https://onlinejudge.org/external/107/10730.pdf)、ZeroJudge：未查得對應題號

## 堆疊佇列

### Throwing cards away I

> [UVa10935](https://onlinejudge.org/external/109/10935.pdf)、[ZeroJudge e155](https://zerojudge.tw/ShowProblem?problemid=e155)

### Rockabye Tobby

> [UVa13190](https://onlinejudge.org/external/131/13190.pdf)、[ZeroJudge e520](https://zerojudge.tw/ShowProblem?problemid=e520)

### Parentheses Balance

> [UVa00673](https://onlinejudge.org/external/6/673.pdf)、[ZeroJudge b304](https://zerojudge.tw/ShowProblem?problemid=b304)

### Crazy King

> [UVa11352](https://onlinejudge.org/external/113/11352.pdf)、[ZeroJudge d191](https://zerojudge.tw/ShowProblem?problemid=d191)

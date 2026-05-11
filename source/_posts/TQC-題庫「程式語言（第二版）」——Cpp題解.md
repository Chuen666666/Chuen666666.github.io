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
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string a, b;
    cin >> a >> b;
    cout << a.size() << '\n' << b.size() << '\n' << a << b;
}
```

### 402

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s1, s2;
    int n;

    getline(cin, s1);
    getline(cin, s2);
    cin >> n;

    if (n > s1.size()) {
        cout << "error";
        return 0;
    }

    string a = s1.substr(0, n);
    string b = s2.substr(0, n);

    if (a == b) cout << s1 << " = " << s2;
    else if (a < b) cout << s1 << " < " << s2;
    else cout << s1 << " > " << s2;
}
```

### 403

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;

    for (char &c : s) {
        if (islower(c)) c = toupper(c);
        else c = tolower(c);
    }

    cout << s;
}
```

### 404

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;
    int arr[26] = {0};

    for (char c : s) arr[c-'a']++;
    int pos = max_element(arr, arr+26) - arr;
    cout << char(pos+'a') << '\n' << arr[pos];
}
```

### 405

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b, c;
    cin >> a >> b >> c;
    ifstream in("read.txt");
    string data[3];
    in >> data[0] >> data[1] >> data[2];

    cout << string(a, char(a+'0')) << data[0].substr(a) << '\n'
         << string(b, char(b+'0')) << data[1].substr(b) << '\n'
         << string(c, char(c+'0')) << data[2].substr(c);
}
```

### 406

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string lo = "qwertyuiopasdfghjklzxcvbnm";
    string up = "QWERTYUIOPASDFGHJKLZXCVBNM";

    string inp;
    cin >> inp;

    for (char c : inp) {
        if (c == 'p' or c == 'l' or c == 'm' or c == 'P' or c == 'L' or c == 'M') cout << c;
        else if (islower(c)) {
            int pos = lo.find(c);
            cout << lo[pos+1];
        }
        else {
            int pos = up.find(c);
            cout << up[pos+1];
        }
    }
}
```

### 407

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    ifstream in("read.txt");
    ofstream out("write.txt");
    char c;
    while (in.get(c)) if (c != '*') out << c;
}
```

### 408

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string a, b;
    cin >> a >> b;

    if (a.size() < 3 or a.size() > 20 or b.size() < 3 or b.size() > 20) {
        cout << "error";
        return 0;
    }

    string c = a + b;
    reverse(c.begin(), c.end());

    cout << a.size() << '\n' << b.size() << '\n' << c;
}
```

### 409

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    ifstream in("read.txt");
    ofstream out("write.txt");

    char c;
    while (in.get(c)) out << char(c+2);
}
```

### 410

```cpp
#include <bits/stdc++.h>
using namespace std;

string capwords(string s) {
    stringstream ss(s);
    string word;
    string result = "";

    while (ss >> word) {
        word[0] = toupper(word[0]);
        for (int i = 1; i < word.size(); i++) word[i] = tolower(word[i]);

        if (!result.empty()) result += " ";
        result += word;
    }
    return result;
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;
    ifstream in("read.txt");
    ofstream out("write.txt");
    string line;
    vector<string> lines;

    while (getline(in, line)) lines.push_back(line);

    for (int i = 0; i < n and i < lines.size(); i++) {
        out << capwords(lines[i]);
        if (i < n - 1 and i < lines.size() - 1) out << '\n';
    }
}
```

## 第5類：綜合應用一

### 501 字串轉換

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;
    cout << s << " change to " << stoi(s);
}
```

### 502 數字相乘

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;

    int ans = 1;
    string a = "";

    for (int i = 0; i < s.size(); i++) {
        int digit = s[i] - '0';
        ans *= digit;

        a += s[i];
        if (i != s.size() - 1) {
            a += "*";
        }
    }

    cout << a << '=' << ans;
}
```

### 503 區間運算

```cpp
#include <bits/stdc++.h>
using namespace std;

#define EPS 1e-6

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int a, b;
    cin >> a >> b;

    for (int i = 1; i < a; i++) {
        float s = sqrt(i);
        if (fabs(s - floor(s)) < EPS) cout << int(pow(s, b)) << '\n';
    }
}
```

### 504 迴文數

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;
    string a = s;
    reverse(a.begin(), a.end());
    cout << ((s == a) ? "Yes" : "No");
}
```

### 505 公式計算

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    float a, b, c, d, e, f;
    cin >> a >> b >> c >> d >> e >> f;
    cout << fixed << setprecision(2) << abs(a) * floor(b) + pow(c, d) * sqrt(e) + log10(f);
}
```

### 506 質因數分解

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n;
    cin >> n;

    if (n < 2) {
        cout << -1;
        return 0;
    }
    
    vector<int> fs;
    while (n % 2 == 0) {
        fs.push_back(2);
        n /= 2;
    }

    int f = 3;
    while (f * f <= n) {
        while (n % f == 0) {
            fs.push_back(f);
            n /= f;
        }
        f += 2;
    }

    if (n > 2) fs.push_back(n);
    
    if (fs.size() == 1) cout << -1;
    else {
        for (int i = 0; i < fs.size()-1; i++) cout << fs[i] << '*';
        cout << fs[fs.size()-1];
    }
}
```

### 507 猜數字

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;

    for (int i = 0; i < 3; i++) {
        int a = 0, b = 0;
        string g;
        cin >> g;

        for (int j = 0; j < 4; j++) {
            if (s[j] == g[j]) a++;
            else if (count(s.begin(), s.end(), g[j])) b++;
        }

        cout << a << 'A' << b << "B\n";
    }
}
```

### 508 二進位運算

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string a, b;
    cin >> a >> b;

    int c = stoi(a, nullptr, 2),
        d = stoi(b, nullptr, 2),
        s = c + d;

    cout << c << " + " << d << " = " << s << '\n';

    if (s > 255) cout << "11111111";
    else {
        string ans = bitset<8>(s).to_string();
        cout << ans;
    }
}
```

### 509 字串拆解

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    cin >> s;

    stringstream ss(s);
    string part;

    vector<int> nums;
    int sum = 0;

    while (getline(ss, part, '/')) {
        int x = stoi(part);
        nums.push_back(x);
        sum += x;
    }

    for (int i = 0; i < nums.size(); i++) {
        if (i) cout << ' ';
        cout << nums[i];
    }

    cout << '\n' << sum;
}
```

### 510 星號輸出

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int h, w;
    cin >> h >> w;

    vector<vector<int>> m(h, vector<int>(w));

    for (int i = 0; i < h; i++) {
        for (int j = 0; j < w; j++) {
            cin >> m[i][j];
        }
    }

    for (int i = 0; i < h; i++) {
        string ans = "";

        for (int j = 0; j < w; j++) {
            if (m[i][j] == 0) ans += ' ';
            else {
                if (i == 0 or j == 0 or i == h - 1 or j == w - 1) ans += '*';
                else {
                    if (m[i - 1][j] == 0 or
                        m[i][j - 1] == 0 or
                        m[i + 1][j] == 0 or
                        m[i][j + 1] == 0) {
                        ans += '*';
                    }
                    else ans += ' ';
                }
            }
        }

        cout << ans << '\n';
    }
}
```

## 第6類：綜合應用二

### 601 大小寫轉換

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s;
    int n;
    cin >> s >> n;
    char &c = s[n];

    if ('a' <= c and c <= 'z') c -= 'a' - 'A';
    else c += 'a' - 'A';

    cout << "The letter that was selected is: " << c << '\n' << s;
}
```

### 602 字串拆解

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string s, cap, let;
    cin >> s;
    
    for (char c : s) {
        if ('a' <= c and c <= 'z') let.push_back(c);
        else cap.push_back(c);
    }

    cout << cap << '\n' << let << '\n' << cap.size();
}
```

### 603 多重迴圈

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int n, m;
    cin >> n >> m;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m - 1; j++) {
            int x;
            cin >> x;
            cout << x << ',';
        }

        int x;
        cin >> x;
        cout << x << '\n';
    }
}
```

### 604 選擇排序

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    multiset<int> s;
    for (int i = 0; i < 9; i++) {
        int x;
        cin >> x;
        s.insert(x);
    }

    for (auto pt : s) cout << pt << '\n';
    cout << "sum = " << accumulate(s.begin(), s.end(), 0);
}
```

### 605 差值計算

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int arr[6];
    for (int i = 0; i < 6; i++) cin >> arr[i];
    sort(arr, arr+6);
    cout << (arr[3]+arr[4]+arr[5]) - (arr[0]+arr[1]+arr[2]);
}
```

### 606 檢驗學號

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    for (int i = 0; i < 3; i++) {
        string s;
        cin >> s;
        int a = s[0] - '0',
            b = s[1] - '0',
            c = s[2] - '0',
            d = s[3] - '0',
            e = s[4] - '0';
        char f = s[5];

        char check = ((a+c+e)+(b+d)*5 - 1) % 26 + 'A';
        cout << ((check == f) ? "Pass" : "Fail") << '\n';
    }
}
```

### 607 撲克排比大小

```cpp
#include <bits/stdc++.h>
using namespace std;

int value(char c) {
    string cmp = "CDHS";
    return cmp.find(c);
}

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    string a, b;
    cin >> a >> b;

    if (a == b) cout << a << " = " << b;
    else if (a[0] == b[0]) {
        int x = stoi(a.substr(1)),
            y = stoi(b.substr(1));
        
        cout << a << ((x > y) ? " > " : " < ") << b;
    } else cout << a << ((value(a[0]) > value(b[0])) ? " > " : " < ") << b;
}
```

### 608 棒球計分

假解

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    int sum = 0;

    for (int i = 0; i < 10; i++) {
        int x;
        cin >> x;
        sum += x;
    }

    cout << "score = " << sum % 10;
}
```

{% fold @假解的定義 %}
假解指的是剛好可以通過測資 但不正確的寫法
也就是沒有按題目的邏輯去寫 只是剛好系統放的測資用這個程式跑得過
這題假解就是這種情況 剛好跑得過這個網站的所有測資 但其實根本不是這樣解的
由於我不確定最後TQC+測驗會不會用相同測資 因此為求保險 建議還是要理解一下真解的概念
{% endfold %}
真解

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

    bool base[3] = {false, false, false}; // {一壘, 二壘, 三壘}
    int score = 0;

    for (int i = 0; i < 10; i++) {
        int hit;
        cin >> hit;

        if (hit == 0) continue;
        else if (hit == 1) {
            if (base[2]) score++;

            base[2] = base[1];
            base[1] = base[0];
            base[0] = 1;
        } 
        else if (hit == 2) {
            if (base[2]) score++;
            if (base[1]) score++;

            base[2] = base[0];
            base[1] = 1;
            base[0] = 0;
        } 
        else if (hit == 3) {
            score += base[0] + base[1] + base[2];

            base[0] = 0;
            base[1] = 0;
            base[2] = 1;
        } 
        else {
            score += base[0] + base[1] + base[2] + 1;

            base[0] = 0;
            base[1] = 0;
            base[2] = 0;
        }
    }

    cout << "score = " << score;
}
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

{% fold @numpy %}
numpy不是Python的built-in function或庫
而是第三方的庫
所以不確定真實上機考時是否可以使用
{% endfold %}

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

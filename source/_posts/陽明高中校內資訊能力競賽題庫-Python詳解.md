---
title: 陽明高中校內資訊能力競賽題庫 - Python 詳解
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

上面兩個做法的時間複雜度一看就知道差很多，若有 $T$ 筆測資，則做法 1 的算法涉及 `bin_length()` 的實做方法，它實際上是計算 bit 數的，故複雜度 $O(\text{bit 數})=O(\log x)$，整個算法共 $O(T\log x)$；而暴力法則是 $O(nT)$

但注意到，題目保證 $a\le2^{63}-1$，所以 $\max(\log x)=63$、$\max(n)=64$，那麼兩者 $O(63)=O(64)=O(1)$，故上二者總複雜度都是 $O(T)$

## C. 跑到哪了
> [題目連結](https://codeforces.com/gym/629558/problem/C)

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

## D. Sword Art Online
> [題目連結](https://codeforces.com/gym/629558/problem/D)

這題對於寫過國中數學題的你我而言，應該一眼就能看出來是要求最小公倍數對吧？如果真的看不出來，其實題目底下的「計算」也已經自爆解法了

在 Python 中，我們可以直接用內建的 `math.lcm()` 函式來計算最小公倍數

```python
from math import lcm

input() # 跳過第一行 n 的輸入
print(lcm(*map(int, input().split()))) # 用 *（unpack）展開 map() 並傳入 lcm()
```

## E. 蛋餅想吃蛋餅
> [題目連結](https://codeforces.com/gym/629558/problem/E)

這題乍看之下會覺得好像很簡單，直接去把範圍內的值取 `sum()` 不就行了嗎？但如果你真的這樣做，就會收到一個大大的 TLE

這題實際上的考點是前綴和（prefix sum），我們可以先建立一個前綴和的 list，也就是把每一項設定為自己加上前面所有元素的和，如此，當我們求一個區間和 $[l, r]$ 時，就可以用 `prefix[r] - prefix[l-1]` 來快速計算，相對於每查詢一次就計算一次的做法，這樣的效率會高上不少

若查詢 $q$ 次，暴力算區間的做法為 $O(n\times q)$，而前綴和建表則是 $O(n+q)$

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

## F. 課程安排
> [題目連結](https://codeforces.com/gym/629558/problem/F)

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

## G. 還能暴言不
> [題目連結](https://codeforces.com/gym/629558/problem/G)

這題我的第一想法其實也是暴力搜尋，從 1 開始往上找，找到就停下來，但一提交後你就會發現，拿不了滿分，好多測資都拿了個 TLE，因此，這題又是要有一點技巧的題，那講到**搜尋**，第一個想到的應該要是二分搜（binary search），沒錯，這也正是這題的最大考點

有幾件直覺的事情我們可以先理解：
1. 隨著 $H$ 增加，總怒氣值單調不減
2. 第二，因為怒氣只會在 $H-a\_i$ 時計算，因此只需要理 $a\_i<H$ 的值
3. 我們可以事先將話題的忍耐度 $a$ 排好，那我們再看 $a_i$時，就可以直接把前面小於 $H$ 的部分一次丟掉
4. 如果有 $k$ 個 $a\_i<H$，算 $\sum\_{i=1}^{n}(H-a\_i)$ 時，我們可以把 $H$ 提出，變成 $k \cdot H-\sum\_{i=1}^{k}a\_i$，故可先算前綴和（prefix sum）
5. 二分搜什麼？最大 $H$，使得 $總怒氣 \le X$，那它會產生一個分界點（由 1. 可知），在它前面都不被踢，在它之後都必然會被踢

那這裡我們可以來思考下一個問題，我們既然都知道是二分搜了，那它的上下界怎麼找？下界根本不用找，一定是從頭嘛，但上界呢？怎麼找出那個「最大可能的答案」？

我們先來想想看，怎樣的情況一定不行？如果 $H-\max(a\_i)>X$ 表示單單這一個話題就讓怒氣超過 $X$ 了，就算其他都不看也一定爆，移項一下就能知道 $\max(H) \le \max(a\_i)+X$，也就求出我們的上界了，因此二分搜要搜的就是 $[0,\,\max(a)+X+1)$

在這樣的操作下，我們成功從原本線性搜的 $O(n\cdot H^\*)$（$H^\*=1,2,\cdots,H$；最壞大約是 $10^{18}$），改成了二分搜的 $O(n\log n)$（排序和前綴和 $O(n)$、二分搜 $O(\log n)$）

```python
from bisect import bisect_left
from itertools import accumulate

n, X = map(int, input().split())
a = list(map(int, input().split()))
a.sort()

ps = [0] + list(accumulate(a)) # prefix sum

def anger(H):
    k = bisect_left(a, H)
    return k*H - ps[k]

lo = 0
hi = a[-1]+X + 1 # 因為答案在 [lo, hi) 中，所以要 +1

while lo + 1 < hi:
    mid = (lo + hi) // 2
    if anger(mid) <= X:
        lo = mid
    else:
        hi = mid

print(lo)
```

## H. 逃脫升天
> [題目連結](https://codeforces.com/gym/629558/problem/H)

這份解答是校內賽前寫的，我大膽預言一波，這題沒人會解，我也是參考 AI 寫的才有思路。首先，想到最短路徑，至少也得直覺想起 BFS，這步若都沒想到，這題直接不用玩。

題目沒說 FBI 和~~ㄌㄌㄎ~~ Raymond 大大怎麼走，若你看到 _Note_，其實可以想到，你應該要考慮的是雙方的**最佳路徑**，我們的思路可以是這樣：把 FBI 和 Raymond 走到每一格的時間都算出來，只要 FBI 到某格的時間 < Raymond 到該格的時間，那格就不能走（會被抓）。

為了求出 FBI 和 Raymond 到每格的最短時間（路徑），我們分別需要針對兩個角色做兩次 BFS。Raymond 的 BFS 相對單純，因為他只有一人，直接讓它尋一遍路即可；FBI 因為有好幾隻，我們需要計算「最快到達該位置的 FBI 距離多遠」，使用多源 BFS，思路大概是先把每個 FBI 距離設成 0，並且一次全部丟到 queue 裡處理，讓他們一起 BFS 擴散出去。

具體實現邏輯是這樣的：
- FBI BFS：如上所述，先將每個 FBI 都設為 0，再每個去試**上／下／左／右**擴散，我們利用非負整數代表距離（時間），`-1` 代表被牆隔開（永遠到不了）
- Raymond BFS：起點設為 0，再擴散，過程中會有的情況：
  - 目前格子是 `X`（出口）
    - FBI 到不了（`-1`）：安全
    - Raymond 比 FBI 早到（`<`）：安全
  - 其餘狀況：依與 FBI 同邏輯 BFS，但若 FBI 能先到，也不能算做「能往那裡走」的選項

遇到任何一個安全時，直接輸出 `Yes` 並結束程式；否則（全程跑完也沒有安全），最後輸出 `No`。

```python
from collections import deque

n, m = map(int, input().split())
grid = [input() for _ in range(n)]

# 先都標記成 -1，等等再算能走的距離
distF = [[-1]*m for _ in range(n)]
distR = [[-1]*m for _ in range(n)]

q = deque() # 每次都會清空，故可重複使用

# 標記初始狀態
for i in range(n):
    for j in range(m):
        if grid[i][j] == 'F':
            distF[i][j] = 0
            q.append((i, j))
        elif grid[i][j] == 'R':
            sr, sc = i, j

# FBI BFS
while q:
    r, c = q.popleft()
    for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
        nr, nc = r+dr, c+dc
        if 0 <= nr < n and 0 <= nc < m:
            if grid[nr][nc] != '#' and distF[nr][nc] == -1:
                distF[nr][nc] = distF[r][c] + 1
                q.append((nr, nc))

# Raymond BFS
q = deque([(sr, sc)])
distR[sr][sc] = 0

while q:
    r, c = q.popleft()
    if grid[r][c] == 'X':
        if distF[r][c] == -1 or distR[r][c] < distF[r][c]:
            print('Yes')
            exit()

    for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
        nr, nc = r+dr, c+dc
        nt = distR[r][c] + 1
        if 0 <= nr < n and 0 <= nc < m:
            if grid[nr][nc] != '#' and distR[nr][nc] == -1:
                if distF[nr][nc] == -1 or nt < distF[nr][nc]:
                    distR[nr][nc] = nt
                    q.append((nr, nc))

print('No')
```

## I. 斷環儀式
> [題目連結](https://codeforces.com/gym/629558/problem/I)

好啦，最後三題應該都是沒人會的啦，校內賽出 DP，[@郭10](https://yilinguo121.github.io/) 你是這個 👍

看到最佳策略 + 感覺就有超多種可能的這種問題，如果跟圖無關（非圖論），第一反應應該就會想到 DP，<span class="spoiler" onclick="this.classList.add('open')">~~接著就可以開始咒罵出題者全家了~~</span>

如果不會的話就直接先寫第一子題，然後下面一位（題）就好

這題是典型區間博弈 DP，我們依題意將它拆成兩個部分。第一部分（破口），只要把圓環複製一次，頭尾相接，再 DP 看區間最大值即可

第二部分則是碎裂，這兩人的目標也就是，老娘要用 DP 去找出切在哪一段時可以贏最多分；老子則是會選擇把切開來的兩部分中，自己可以領先最多分的那一段保留

```python
n = int(input().strip())
a = list(map(int, input().split()))

# 1) 變成 2n，處理圓環破口
A = a + a
m = 2 * n

# 2) prefix sum，區間和 O(1)
pre = [0] * (m + 1)
for i in range(m):
    pre[i+1] = pre[i] + A[i]

def range_sum(l, r):
    # l, r are inclusive, 0-indexed
    return pre[r+1] - pre[l]

# 3) dp[l][r]：輪到當前玩家面對 A[l..r] 時，能保證的最大分差
# 只需要長度 <= n 的區間
dp = [[0] * m for _ in range(m)]

# len = 2 .. n
for length in range(2, n+1):
    for l in range(0, m-length+1):
        r = l + length - 1
        best = -float('inf')

        for k in range(l, r):
            left_sum = range_sum(l, k)
            right_sum = range_sum(k+1, r)
            gain = abs(left_sum - right_sum)

            # 對手會留下對你最不利的那段 => 讓你扣最多
            cand = gain - max(dp[l][k], dp[k+1][r])
            if cand > best:
                best = cand

        dp[l][r] = best

# 4) 枚舉破口起點 s
ans = -float('inf')
for s in range(n):
    ans = max(ans, dp[s][s+n-1])

print(ans)
```
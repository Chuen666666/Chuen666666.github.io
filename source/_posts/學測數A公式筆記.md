---
title: 學測數A公式筆記
categories:
  - 筆記
  - 數學
tags:
  - 數學
  - 學測
  - 升學
  - 數 A
math: true
mermaid: false
hide: true
date: 2026-01-02 10:05:53
excerpt: 整理所出學測數 A 範圍（高一 + 高二）的所有公式和做法說明，此為筆記，故部分概念不會太深入展開
---

{% note primary %}
此篇筆記整理自數 A 的複習講義，僅作學習之用
若有誤或疑問，可以於底下留言或私訊我
如有侵權，請聯繫我刪除！
{% endnote %}

## 數與式
### 雙重根號
- $\sqrt{a+b+2\sqrt{ab}}=\sqrt a+\sqrt b$
- $\sqrt{a+b-2\sqrt{ab}}=\left|\sqrt a-\sqrt b\right|$

### 乘法公式
- $(a+b)^3=a^3+3a^2b+3ab^2+b^3=a^3+b^3+3ab(a+b)$
- $(a-b)^3=a^3-3a^2b+3ab^2-b^3=a^3-b^3-3ab(a-b)$
- $a^3+b^3=(a+b)(a^2-ab+b^2)=(a+b)^3-3ab(a+b)$
- $a^3-b^3=(a-b)(a^2+ab+b^2)=(a-b)^3+3ab(a-b)$

### 分點公式

{% raw %}
<iframe src="https://www.geogebra.org/geometry/qpwugu35?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>
{% endraw %}

- $P=\frac{na+mb}{m+n}$

### 算幾不等式
- $\frac{a+b}{2}\ge\sqrt{ab}$（算數平均數 &ge; 幾何平均數）
- 會微分，此章可不學

## 多項式
### 除法原理
- $\frac{f(x)}{g(x)}=q(x)\cdots r(x) \Rightarrow f(x)=g(x)\;q(x)+r(x)$

### 綜合除法
- 做一次 &rArr; 得商式和餘式
- 做到底（連續綜合除法） &rArr; 得泰勒展開式（$(x-a)$ 的多項式）
- 會微分，此章可不學

### 一／二／三次函數
- 三次函數的廣域特徵：$y=ax^3+bx^2+cx+d \to y=ax^3$
- 三次函數的局部特徵：即一次近似（$y=a\_3\left(x-k\right)^3+a\_2\left(x-k\right)^2+a\_1\left(x-k\right)+a\_0 \to y=a\_1\left(x-k\right)+a\_0$）
- 其他部分微分解決

## 直線與圓
### 斜率
- $m=\frac{\Delta y}{\Delta x}=\tan\theta\;(\theta\ne90^\circ)$

### 直線方程式
- 點斜式：$y-y\_0=m(x-x\_0)$
- 斜截式：$y=mx+k$
- 截距式：當 $x$ 截距 $t$、$y$ 截距 $k$，$\frac xt+\frac yk=1\;(t,k\ne 0)$
- 一般式：$ax+by+c=0\;(b\ne0)$

### 解析幾何
- 中點坐標：$M=\left(\frac{x\_1+x\_2}{2},\frac{y\_1+y\_2}{2}\right)$
- 兩點距離：$\sqrt{\Delta x^2+\Delta y^2}$
- 點到直線距離：$d(P,L)=\frac{\left|點代入\right|}{法長度}$
- 平行線距離：$d(L\_1,L\_2)=\frac{\left|常數差\right|}{法長度}$

### 四心
- 內心（Incentre）：三角平分線交點
- 外心（Circumcentre）：三中垂線交點
- 重心（Centroid）：三中線交點（中線比例為 2:1）
- 垂心（Orthocentre）：三高交點

### 二元一次不等式
- 解等式 &rarr; 代任意數 &rarr; 看正負
- 格子點：$x,y$ 均為整數時
- 解區域：數個不等式的交集區域

### 圓方程式
- 標準式：以 $O(h,k)$ 為圓心，$r$ 為半徑，圓方程式為 $(x-h)^2+(y-k)^2=r^2$
- 一般式：$x^2+y^2+dx+ey+f=0$
- 判別式：$D=d^2+e^2-4f$（用以判斷**圓、點、無圖形**）

### 點與圓
已知圓 $C:\;(x-h)^2+(y-k)^2=r^2$ 與點 $P(x\_0,y\_0)$，將 $P$ 坐標代入 $C$ 方程式

- $值>r^2$：$P$ 在圓外
- $值=r^2$：$P$ 在圓上
- $值<r^2$：$P$ 在圓內

若 $C$ 換以 $C:\;x^2+y^2+dx+ey+f=0$ 表示，$P$ 代入後

- $值>0$：$P$ 在圓外
- $值=0$：$P$ 在圓上
- $值<0$：$P$ 在圓內

### 直線與圓
- 幾何判別法：比較直線 $L$ 與圓 $C$ 的距離 $d$ 與圓半徑 $r$ 大小（分別為**相割、相切、相離**）
- 代數判別法：直線方程式 $L$ 與圓方程式 $C$ 解聯立，得一元二次方程式，用其判別式 $D$ 判斷交點個數（分別為**相割、相切、相離**）

## 數列與級數
### 等差
- 等差數列（A.P.）：$a\_n=a\_m+(n-m)d$
- 等差中項：前後項平均數
- 等差級數：$S\_n=\frac{(a\_1+a\_n)n}{2}=\frac{(2a\_1+(n-1)d)n}{2}$（梯形公式）

### 等比
- 等比數列（G.P.）：$a\_n=a\_m\times r^{n-m}$
- 等比中項：$b=\pm\sqrt{ac}$
- 等比級數：
  - $S\_n=n\times a\_1\text{, when }r=1$
  - $S\_n=\frac{a\_1(1-r^n)}{1-r}=\frac{a\_1(r^n-1)}{r-1}\text{, when }r\ne1$

### 本利和
本金為 $x$、期利率為 $r\%$，求第 $n$ 期本利和

- 單利本利和：$x\left(1+r\%\cdot n\right)$
- 複利本利和：$x\left(1+r\%\right)^n$

### 級數求和
- $1+2+3+\cdots+n=\sum\_{i=1}^n i=\frac{n(n+1)}{2}$（梯形公式）
- $1^2+2^2+3^2+\cdots+n^2=\sum\_{i=1}^n i^2=\frac{n(n+1)(2n+1)}{6}$
- $1^3+2^3+3^3+\cdots+n^3=\sum\_{i=1}^n i^3=\left(\frac{n\left(n+1\right)}{2}\right)^2$

### 數學歸納法（M.I.）
1. B.S.：當 $n=1$ 時，原式成立
2. I.H.：設 $n=k$ 時，原式成立
3. I.S.：則 $n=k+1$ 時，原式成立
4. Q.E.D. by M.I.

## 排列組合
### 笛摩根定律
- $\left(A \cup B\right)'=A'\cap B'$
- $\left(A \cap B\right)'=A'\cup B'$

### 取捨原理
- $n\left( A\cup B\right)=n(A)+n(B)-n\left(A\cap B\right)$
- $n\left(A \cup B \cup C\right)=n(A)+n(B)+n(C)-n\left(A \cap B\right)-n\left(B \cap C\right)-n\left(A \cap C\right)+n\left(A \cap B \cap C\right)$

### 計數原理
- 乘法原理：兩步驟分別有 $m$、$n$ 種方法，則完成該事件有 $m \times n$ 種方法
- 加法原理：兩種方案分別有 $p$、$q$ 種方法，則完成該事件有 $p+q$ 種方法

### 排列
- 完全相異物排列：$n$ 個相異物取 $r$ 個排，有 $P\_r^n$ 種排法
- 限制兩物相鄰：視為同一物排完後，再取兩物互換位排法
- 限制兩物不相鄰：排完其他物後，再插空隙
- 其他位置限制：取捨原理計算排法
- 同物排列：$k$ 類物品，且第 $1$ 類有 $n\_1$ 個同物、第 $2$ 類有 $n\_2$ 個同物、……、第 $k$ 類有 $n\_k$ 個同物，共有 $n$ 個物品，則共有 $\frac{n!}{n\_1! \times n\_2! \times n\_3! \times \cdots \times n\_k!}$ 種
- 重複排列：從 $n$ 種不同物中選出 $r$ 個排列（可重複），則每個位置均有 $n$ 種選擇，故有 $n^r$ 種排法

### 組合
- 從 $n$ 個完全相異物中，不重複的取 $r$ 個（$r \le n$），且不計排列次序，則有 $C\_r^n=\frac{P\_r^n}{r!}$ 種方法
- $C\_r^n=C\_{n-r}^n$
- 巴斯卡定理：$n$ 個相異物中取 $r$ 個，若討論物品 $a$ 是否被選 &rarr; 分為**有被選**和**沒被選**兩種情形討論，再相加
- 分堆問題：$\frac{每堆分別處理後再相乘}{同堆數（因為會對調，要扣掉）!}$

### 二項式定理
- $(x+y)^n=C\_0^nx^ny^0+C\_1^nx^{n-1}y^1+C\_2^nx^{n-2}y^2+\cdots+C\_n^nx^0y^n$

### 組合級數
令 $f(x)=(1+x)^n=C\_0^n+C\_1^nx^1+C\_2^nx^2+\cdots+C\_n^nx^n$

- $C\_0^n+C\_1^n+C\_2^n+\cdots+C\_n^n=f(1)=2^n$
- $C\_0^n-C\_1^n+C\_2^n-C\_3^n+\cdots=f(-1)=0$
- $C\_0^n+C\_2^n+C\_4^n+C\_6^n+\cdots=\frac{f(1)+f(-1)}{2}=2^{n-1}$
- $C\_1^n+C\_3^n+C\_5^n+C\_7^n+\cdots=\frac{f(1)-f(-1)}{2}$

## 機率與期望值
### 古典機率
- $P(A)=\frac{n(A)}{n(S)}=\frac{事件 A 的樣本點個數}{樣本空間 S 的樣本點個數}$
- 互斥事件：$P\left(A \cap B\right)=0$

### 期望值
- $E=x\_1P\_1+x\_2P\_2+\cdots x\_nP\_n$（想像**單個樣本點占的比例**）

### 條件機率
- 在 $A$ 事件下（$P(A)\ne0$），$B$ 發生的機率（條件機率）為 $P(B\mid A)=\frac{P\left(A \cap B\right)}{P(A)}=\frac{n\left(A \cap B\right)}{n(A)}$
- $P\left(A \cap B\right)=P(A)\; P(B\mid A)$
- $P\left(A \cap B \cap C\right)=P(A)\; P(B\mid A)\; P\left(C\mid A\cap B\right)$

### 獨立事件
- $A$、$B$ 互不影響，即 $P\left(B\mid A\right)=P(B)$
- 二獨立事件滿足 $P\left(A \cap B\right)=P(A)\;P(B)$
- 三獨立事件滿足
  - $P\left(A \cap B\right)=P(A)\;P(B)$
  - $P\left(B \cap C\right)=P(B)\;P(C)$
  - $P\left(A \cap C\right)=P(A)\;P(C)$
  - $P\left(A \cap B \cap C\right)=P(A)\;P(B)\;P(C)$

## 數據分析
### 集中趨勢
- 算術平均數：$\mu=\frac1n\left(x\_1+x\_2+\cdots+x\_n\right)$
- 加權平均數：$w=\frac{w\_1x\_1+w\_2x\_2+\cdots+w\_nx\_n}{w\_1+w\_2+\cdots+w\_n}$
- 幾何平均數：$G=\sqrt[n]{x\_1x\_2\cdots x\_n}$
- 中位數：排列後，中間的數（偶數項則取中間兩數平均）
- 眾數：出現最多次的數（可能不唯一）
- 百分位：將 $n$ 個數據由小到大排為 $a\_1,a\_2,\cdots,a\_n$
  - 當 $m=n\times\frac{k}{100}$ 為整數，第 $k$ 百分位 $P\_k=\frac{a\_m+a\_{m+1}}{2}$
  - 當 $m=n\times\frac{k}{100}$ 不為整數，且 $l<n\times\frac{k}{100}<l+1$（$l$ 為整數），第 $k$ 百分位 $P\_k=a\_{l+1}$
- 四分位數：$Q\_1=P\_{25}, Q\_2=P{50}, Q\_3=P\_{75}$

### 分散趨勢
- 全距：$R=\max-\min$
- 標準差：$\sigma=\sqrt{\frac{\left(x\_1-\mu\right)^2+\left(x\_2-\mu\right)^2+\cdots+\left(x\_n-\mu\right)^2}{n}}=\sqrt{\frac{x\_1^2+x\_2^2+\cdots+x\_n^2}{n}-\mu^2}$
- 變異數：$\sigma^2$

### 數據的伸縮平移
設有 $n$ 個數據 $x\_1,x\_2,\cdots,x\_n$，其算數平均數為 $\mu\_x$，標準差為 $\sigma\_x$

令 $y\_i=ax\_i+b\left(i=1,2,\cdots,n;a\ne0\right)$

- $\mu\_y=a\mu\_x+b$（平均值一起變）
- $\sigma\_y=\left|a\right|\times\sigma\_x$（標準差伸縮斜率倍）

### 標準化
- $x\_i'=\frac{x\_i-\mu}{\sigma}$
- $\mu'=0;\sigma'=1$

## 二維數據分析
### 相關係數
- $S_{xy}=(x_1-\mu_x)(y_1-\mu_y)+(x_2-\mu_x)(y_2-\mu_y)+\cdots+(x_n-\mu_x)(y_n-\mu_y)$
- $S_{xx}=(x_1-\mu_x)^2+(x_2-\mu_x)^2+\cdots+(x_n-\mu_x)^2$
- $S_{yy}=(y_1-\mu_y)^2+(y_2-\mu_y)^2+\cdots+(y_n-\mu_y)^2$
- 相關係數：$r=\frac{x_1'y_1'+x_2'y_2'+\cdots+x_n'y_n'}{n}=\frac{S_{xy}}{\sqrt{S_{xx}}\sqrt{S_{yy}}}$（內積）
- 零相關：資料排列呈水平線、鉛直線、對稱，$r=0$
- 兩組數據伸縮平移：只影響 $r$ 的正負號（係數同號則不變、異號則加負號）

### 最小平方法與迴歸直線
- 找出直線 $L$，使其距離每個點的距離平方和最小，$L$ 即迴歸直線（最佳直線）
- 迴歸直線 VS 未標準化數據
  - $L$ 必過 $(\mu\_x,\mu\_y)$
  - $m=r\times\frac{\sigma\_y}{\sigma\_x}=\frac{S\_{xy}}{S\_{xx}}$
  - $\Rightarrow L:\;y-\mu\_y=m(x-\mu\_x)$
- 迴歸直線 VS 已標準化數據
  - $L$ 必過 $(0,0)$
  - $m'=r$
  - $\Rightarrow L:\;y'=rx'$

## 指數與對數
### 指數律
- 整數指數：$a\ne0,n\in\mathbb N$，則 $a^0=1$ 且 $a^{-n}=\frac{1}{a^n}$
- 有理指數：$a>0,m\in\mathbb N$ 且 $n\ge2$，則 $a^\frac{1}{n}=\sqrt[n]a$
- 指數律（實數）
  - $a^m\cdot a^n=a^{m+n}$
  - $\frac{a^m}{a^n}=a^{m-n}$
  - $\left(a^m\right)^n=a^{mn}$
  - $\left(ab\right)^n=a^n\cdot b^n$
  - $\left(\frac ab\right)^n=\frac{a^n}{b^n}$

### 常用對數
- $10^t=k \Leftrightarrow \log\_{10}k=t$
- $10^{\log k}=10^t=k,\log 10^t=\log k=t$

### 對數律
- $a>0,\;a\ne1,\;b>a$，則方程式 $a^x=b$ 有唯一實根 $x=\log\_ab$
- $a^t=b \Leftrightarrow t=\log\_ab$
- $b=a^{\log\_ab}$
- $b=\log\_aa^b$

## 三角比
### 三角函數值
- $\sin\theta=\frac{對}{斜},\cos\theta=\frac{鄰}{斜},\tan\theta=\frac{對}{鄰}$（口訣：**對斜鄰斜對鄰**）
- 求常見三角比：分母都是 $2$，分子為 $1,\sqrt2,\sqrt3$，畫單位圓看大小（單位圓上任一點 $P=(\cos\theta,\sin\theta)$）

### 基本關係式
- 平方：$\sin^2\theta+\cos^2\theta=1$
- 商數：$\tan\theta=\frac{\sin\theta}{\cos\theta}$
- 餘角：$\sin(90^\circ-\theta)=\cos\theta;\;\cos(90^\circ-\theta)=\sin\theta$

### 廣義角
- 任一點坐標 $P(x,y)=(r\cos\theta,r\sin\theta)$
- 加／減角度 &rArr; **奇變偶不變，正負看象限**

### 極坐標
- 若 $P$ 點到原點距離 $\overline{OP}=r$，且標準位置角為 $\theta$，則 $P=(x,y)=[r,\theta]$

### 正餘弦定理
- $\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}=2R$
- $a^2=b^2+c^2-2ab\cos A$（畢氏定理 + 修正值）
- $\cos A=\frac{b^2+c^2-a^2}{2bc}$

### 面積公式
設 $s=\frac{a+b+c}{2}$（半周長）

- $[\triangle ABC]=\frac12bc\sin A=\frac12ac\sin B=\frac12ab\sin C$
- $[\triangle ABC]=\frac{abc}{4R}$
- $[\triangle ABC]=rs$
- $[\triangle ABC]=\sqrt{s(s-a)(s-b)(s-c)}$（海龍公式）

> 此章內容常見於考卷尾的參考公式

## 三角函數
### 弳度
- 半徑為 $r$，弧長為 $s$ 的圓中，弧對應的圓心角為 $\theta=\frac sr$
- $180^\circ=\pi$
- $1^\circ=\frac{\pi}{180}$
- $1=(\frac{180}{\pi})^\circ\approx57.3^\circ$

### 扇形
扇形半徑為 $r$、圓心角為 $\theta$ 弳

- 弧長：$s=r\theta$
- 面積：$A=\frac12r^2\theta$

### 和差角
- $\sin(\alpha+\beta)=\sin\alpha\cdot\cos\beta+\cos\alpha\cdot\sin\beta$（sin co + co sin）
- $\sin(\alpha-\beta)=\sin\alpha\cdot\cos\beta-\cos\alpha\cdot\sin\beta$（sin co - co sin）
- $\cos(\alpha+\beta)=\cos\alpha\cdot\cos\beta-\sin\alpha\cdot\sin\beta$（co co - sin sin）
- $\cos(\alpha-\beta)=\cos\alpha\cdot\cos\beta+\sin\alpha\cdot\sin\beta$（co co + sin sin）
- $\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\cdot\tan\beta}$
- $\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\cdot\tan\beta}$

### 倍角
- $\sin2\theta=2\sin\theta\cos\theta$
- $\cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1$
- $\tan2\theta=\frac{2\tan\theta}{1-\tan^2\theta}$
- $\sin3\theta=3\sin\theta-4\sin^3\theta$
- $\cos3\theta=4\cos^3\theta-3\cos\theta$

### 半角
公式的正負看 $\frac\theta2$ 象限決定

- $\sin\frac\theta2=\pm\sqrt{\frac{1-\cos\theta}{2}}$
- $\cos\frac\theta2=\pm\sqrt{\frac{1+\cos\theta}{2}}$
- $\tan\frac\theta2=\pm\sqrt{\frac{1-\cos\theta}{1+\cos\theta}}$

### 疊合
- $y=a\sin x+b\cos x=\sqrt{a^2+b^2}\sin(x+\theta)$（其中 $\cos\theta=\frac{a}{\sqrt{a^2+b^2}}$、$\sin\theta=\frac{b}{\sqrt{a^2+b^2}}$）

  {% fold info @ 完整推導過程 %}
  $$
  y=a\sin x+b\cos x\\
  =\sqrt{a^2+b^2}(\sin x\cos\theta+\cos x\sin\theta)\\
  =\sqrt{a^2+b^2}\sin(x+\theta)
  $$
  {% endfold %}

- 最值：不限 $x$ 範圍時，$y$ 的最值為 $\pm\sqrt{a^2+b^2}$

## 平面向量
### 向量的運算
- 三角不等式（恆成立）：$\left|\vec a\right|+\left|\vec b\right|\ge\left|\vec a+\vec b\right|$（等號成立於同方向或其一為零向量）

### 分點公式

{% raw %}
<iframe src="https://www.geogebra.org/geometry/j8grr8zf?embed" width="800" height="600" allowfullscreen style="border: 1px solid #e4e4e4;border-radius: 4px;" frameborder="0"></iframe>
{% endraw %}

- $P(x,y)=\left(\frac{nx\_1+mx\_2}{m+n},\frac{ny\_1+my\_2}{m+n}\right)$

### 重心性質
若 $G$ 為 $\triangle ABC$ 的重心

- $\vec{AG}=\frac13\vec{AB}+\frac13\vec{AC}$
- $\vec{GA}+\vec{GB}+\vec{GC}=\vec0$
- $\vec{OG}=\frac13(\vec{OA}+\vec{OB}+\vec{OC})$，其中 $O$ 為任意點

### 內積
- $\vec{OA}\cdot\vec{OB}=\left|\vec{OA}\right|\left|\vec{OB}\right|\cos\theta$
- $\vec a\cdot\vec b=a\_1b\_1+a\_2b\_2$
- 性質
  - $\vec a\cdot\vec a=\left|\vec a\right|^2$
  - 交換律：$\vec a\cdot\vec b=\vec b\cdot\vec a$
  - 分配律：$\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c$
  - 乘法公式：
    - $\left|\vec a+\vec b\right|^2=\left|\vec a\right|^2+2\vec a\cdot\vec b+\left|\vec b\right|^2$
    - $(\vec a+\vec b)\cdot(\vec a-\vec b)=\left|\vec a\right|^2-\left|\vec b\right|^2$

### 內積的應用
- 求兩向量長度：用公式 $\left|向量\right|^2=自己的內積$
- 求兩向量夾角：$\cos\theta=\frac{\vec a\cdot\vec b}{\left|\vec a\right|\left|\vec b\right|}\;(0^\circ\le\theta\le180^\circ)$
- 求兩線夾角：$\cos\theta=\frac{\vec n\_1\cdot\vec n\_2}{\left|\vec n\_1\right|\left|\vec n\_2\right|},\;\cos(180^\circ-\theta)=-\cos\theta$

### 正射影
- $\vec{OB}$ 在 $\vec{OA}$ 上的正射影 $\vec{OC}=\left(\frac{\vec{OA}\cdot\vec{OB}}{\left|\vec{OA}\right|^2}\right)\vec{OA}$
- $\vec{OB}$ 在 $\vec{OA}$ 上的正射影長 $\overline{OC}=\frac{\left|\vec{OA}\cdot\vec{OB}\right|}{\left|\vec{OA}\right|}$

### 柯西不等式
- 不等式 $\left|\vec a\right|\left|\vec b\right|\ge\left|\vec a\cdot\vec b\right|$ 恆成立，且等號成立於 $\vec a\parallel\vec b\Leftrightarrow\vec a=t\vec b\;(t\in\mathbb R)$
- 設 $a\_1,a\_2,b\_1,b\_2\in\mathbb R$，不等式 $(a\_1^2+a\_2^2)(b\_1^2+b\_2^2)\ge(a\_1b\_1+a\_2b\_2)^2$ 恆成立，且等號成立於 $a\_1=tb\_1,a\_2=tb\_2\;(t\in\mathbb R)$（方和積 &ge; 積和方）

### 二階行列式
- $\begin{vmatrix}a&b \\ c&d \\ \end{vmatrix}=ad-bc$
- 由 $\vec{AB}=(p,q),\;\vec{AC}=(r,s)$ 決定的三角形面積 $[\triangle ABC]=\frac12\sqrt{\left|\vec{AB}\right|^2\left|\vec{AC}\right|^2-\left(\vec{AB}\cdot\vec{AC}\right)^2}=\frac12\begin{vmatrix}p&q \\ r&s \\ \end{vmatrix}$

### 行列式性質
- 行列對調，值不變
- 兩行（列）對調，差負號
- 某行（列）可提出 $k$ 倍
- 某行（列）可分開
- 某行（列）成比例，其值為 0
- 某行（列）乘 $k$ 倍加到另一行（列），值不變

### 克拉瑪公式
給定 $\begin{cases} & ax+by=p \\ & cx+dy=q\end{cases}$

令 $\Delta=\begin{vmatrix} a&b \\ c&d \\ \end{vmatrix},\;\Delta\_x=\begin{vmatrix} p&b \\ q&d \\ \end{vmatrix},\;\Delta\_y=\begin{vmatrix} a&p \\ c&q \\ \end{vmatrix}$

- $\Delta\ne0$：恰一解，$x=\frac{\Delta\_x}{\Delta},\;y=\frac{\Delta\_y}{\Delta}$
- $\Delta=\Delta\_x=\Delta\_y=0$：無限解
- $\Delta=0$ 且 $\Delta\_x,\Delta\_y$ 有一不為 0：無解
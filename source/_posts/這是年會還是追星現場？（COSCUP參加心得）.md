---
title: 這是年會還是追星現場？（COSCUP 參加心得）
categories:
  - 心得
  - 活動
tags:
  - 心得
  - 程式
  - 活動
  - COSCUP
  - 開源人年會
  - COSCUP x UbuCon Asia 2026
  - SITCON BoF x 負一籌
math: false
mermaid: false
hide: true
date: 2026-08-08 15:19:45
excerpt: 第一次參加號稱全亞洲最大的開源社群活動，竟然還能和高天聊到天！？
---

開源人年會（COSCUP），作為亞洲最大的開源盛會之一，這還是我第一次參加（COSCUP x UbuCon Asia 2026），以前對它的了解只有 [@郭10](https://www.yilin0121.com/) 曾當過一次講者，~~然後他不揪~~。是後來 SITCON 的那夥人介紹，我才知道原來這個活動這麼盛大，如此盛大的活動、免費的門票、碼農高天會來，集齊了這些條件，我豈能不來？不過因為要上班，這次的兩天活動（8/8、8/9）中，我只能參加第一天而已，~~可悲社畜~~。

{% note primary %}
如果你不認識碼農高天（下稱高天）的話，可以先看看這些連結：[COSCUP 為他寫的介紹](https://www.facebook.com/coscup/posts/pfbid0nfvsosQWun4MoHWgN6CWNcWrKx7ipmhd3RqaJnd1JuWPaEEGBfcAASS1f39Gk2mql)、[高天的 YouTube](https://www.youtube.com/@minkoder)、[高天的 Bilibili](https://space.bilibili.com/245645656)（雖然影片和 YT 一樣）、[高天的 X](https://x.com/tiangao_coder)、[高天的 GitHub](https://github.com/gaogaotiantian)
{% endnote %}

## 動機

如果各位對社群有點了解的話，其實 SITCON 和 COSCUP 基本上活躍成員都是同一群人，因此自從上次 SITCON Camp（[參加心得傳送門](/SITCON-Camp-2026收費這麼高，CP值如何？（參加心得）)），我就一直被推薦再來這次的 COSCUP 了，本來因為工作因素，我沒打算來，結果一看到高天會來的消息（如下圖），我馬上決定空出一天，來參加這個活動，畢竟我也算是老粉了（~~自己說的~~），可不得追個星麼？

## 與會

這次的活動舉行於台科大，交通還算方便，直接捷運轉 YouBike 就能到了。就在我騎 YouBike 到一半時，看到了一張熟悉的臉——我直接半路遇到 [@su2u4](https://github.com/su2u4-1/)，正好也快到了，還了車，我就跟他一起去到了會場報到。

聽了開場，我們又去聽了「開源即興程式表演：哪裡找資源和社群？」議程，只不過它並不是我們感興趣的主題，因此也沒太專心聽就是了。期間，教室外的走廊上放滿了好幾大桌的零食和飲料，似乎全都是 UbuCon（Ubuntu 社群）贊助的，這下就很有科技展會的感覺了。

之後我們去聽了我有興趣的「另一種 Encoding 方法：將語意檢索從O(n²)變成O(n)」，畢竟作為對 AI 略有研究的我，還是對這種主題蠻感興趣的，因此也聽得認真些了。

接下來，我們整個上午就幾乎沒有再繼續聽議程了，而是在某兩間教室有許多攤位，我們在那裡遇到並集結成了一大群人，除了本來的我和 [@su2u4](https://github.com/su2u4-1/) 外，還加入了 [@Aaron](https://ronkao.tw/)、[@比例](https://billion4eblog.iam04e.workers.dev/)、[@Miyun](https://linktr.ee/hsuanya.lee)（雖然他只跟著逛一下，就自己去聽議程了，沒跟全程）、[@青呱Gua](https://guatw.net/)、[@希爾Xier](https://xier0405.github.io/about/)。攤位還蠻多東西看的，也順手拿了一大堆貼紙，不過最讓我印象深刻的還是 PyCon TW，一開始我們看到它桌上放著三個題目（如下）。

{% fold info @ 第一題 %}

```python
def add_item(i, lst=[]):
    lst.append(i)
    return lst

print(add_item(1), add_item(2))
```

(A) `[1] [2]`
(B) `[1, 2] [1, 2]`
(C) `[1] [1, 2]`

答案：<span class="spoiler" onclick="this.classList.add('open')">(B)</span>
{% endfold %}
{% fold info @ 第二題 %}

```python
funcs = [lambda: i for i in range(3)]
print([f() for f in funcs])
```

(A) `[0, 1, 2]`
(B) `[2, 2, 2]`
(C) `[0, 0, 0]`

答案：<span class="spoiler" onclick="this.classList.add('open')">(B)</span>
{% endfold %}
{% fold info @ 第三題 %}

```python
a = issubclass(bool, int)
b = [True, False].count(1)
print(a, b)
```

(A) `True 1`
(B) `False 0`
(C) `False 1`

答案：<span class="spoiler" onclick="this.classList.add('open')">(A)</span>
{% endfold %}

我們在那裡討論了半天，還和攤主聊了天，雖然最後沒有全對，但就在我們討論到一半時，高天來了！他過來就把三題給秒了，還對第二題說：「這個我有講過，我其中一期視頻（影片）專門講過這個。」而他也毫不意外地全對了，之後我和 [@su2u4](https://github.com/su2u4-1/) 兩個高天粉，還在攤位那兒聊了很久的天，能和這種重量級人物聊上一會，已經讓我心滿意足了，沒想到還能聊這麼久，最後還如願拿到了高天的簽名，可以說，這一趟最值的大概就在這裡了。我們也順便得知了高天今天的議程，他的議程在下午，但由於是 Keynote（主線議程），他被主辦要求要用英文來講，我自認英文不差，但 [@su2u4](https://github.com/su2u4-1/) 就有點慘了，畢竟以他的英文能力，大概只能看著底下 AI 翻譯字幕聽議程了。

{% gi 3 2 %}
![高天簽名](/img/coscup_gautian_sign.jpg)
![高天合照](/img/coscup_gautian.jpg)
![PyCon 攤位照](/img/coscup_pycon.jpg)
{% endgi %}

之後，我們在去其他教室時，在一樓遇到了身為工人的 [@伊藤蒼太](https://itousouta15.tw/)，於是我們一行人便合了張影（下圖）。另一個遇到的，則是在 SITCON Camp「視界咖啡館」活動的蘇柏瑄，我們簡單打了個招呼，他還調侃道：「我上一次回台灣參加 COSCUP 時遇到了颱風，猜猜這次回來又遇到了什麼？颱風！」

{% img d-block mx-auto mb-4 /img/coscup_group.jpg 600 "合照" %}

之後我們繼續東逛西逛，吃了頓「俗擱大碗」的學餐。下午，我們找到了 [@LuYishan](https://github.com/LuYishan-4) 和 [@boo00976](https://github.com/boo00976)，雖然他們沒有加入我們的行列，但遇到了這麼多網友，還是蠻高興的。我們去找 [@LuYishan](https://github.com/LuYishan-4) 時，發現他坐在高天前面，於是就這樣，我們又一次遇到了高天，高天還主動向我們招了手，可以說是刷臉成功了。

下午聽的議程也不算多，聽了「三招看穿偽裝的 Agent Skill！在 Android 開發中建立 AI 安全防護網」和「編輯器的歷史、現況與未來：從 Electron 到 Rust 與 GPU 驅動的現代化架構 (以 Zed 為例)」的後半。不過這麼早來，主要還是為了聽最後一個高天的議程，也是我今天最期待聽到的，我們一夥人，早早就跑去第一排正中間坐，等著高天的議程開始，經過了一點等待，他的議程便開始了，主題是「[Prime Session] Becoming an Open-Source Coder - why & how」，他分享了許多對開源的態度、介紹他是如何踏進這個領域並成為專家、對於 AI 對開源社群的看法，分享了許多與我平時接觸到的很不同的觀點，議程說得也相當有趣（有興趣的可以看[錄播](https://youtu.be/LBW-XsAxEnU?si=mpGNdB_Rc6AC5Y0q)），不過最好笑的部分是 Q&A（影片 [41:48](https://youtu.be/LBW-XsAxEnU?si=dMyUxZaOUQFT12tM&t=2508) 處），當有人問他為什麼不喜歡 Rust 時，他的回覆笑翻了所有人：「I don't hate rust. I hate Rust lovers.」

高天的議程實在相當精彩，因為他是壓軸，他的議程結束後便是閉幕，不過聽著閉幕，腦子裡想的還是剛才高天的演講，實在是收穫滿滿。

## SITCON BoF x 負一籌

前面提到，SITCON 和 COSCUP 社群活躍者基本上也就那群人，因此第一天 COSCUP 結束後，SITCON 還辦了一場「BoF x 負一籌」在師大，於是我們結束了 COSCUP 後，便徒步過去師大，路上還遇到了 [@Frank](https://frk.tw/)。

到了會場，又是見到了許多熟人，早上沒參加 COSCUP 的 [@PGpenguin72](https://pg72.tw/) 和 [@Sworda](https://www.instagram.com/hpcp13_sworda/) 也跑了過來，而其他幾乎所有 SITCON 工人也出現在了場地，畢竟負一籌除了是披薩大會外，也是下一屆 SITCON 招工的活動。

晚餐時間還蠻開心的，到處吃吃喝喝，還能找一堆人社交聊天，氣氛是真的很不錯，我們大約吃到了八九點，[@su2u4](https://github.com/su2u4-1/) 表示他的體力已經撐不住了，我才和他提前離開，慢慢邊走邊聊，走到捷運站，搭車回家，結束了這充實的一天。

## 心得

反正 COSCUP 又不收門票，就來吧！對於來看心得的朋友，如果你還在考慮要不要參加的話，這一句話就是解答；但參加過後，我的心態是「就算它要收錢，也很值得來這麼一趟」。參加起來的體驗實在和 SITCON 有些相似（[SITCON 參加心得傳送門](/第一次參加SITCON心得)），但不同人、不同主題、不同規模，又是全新的體驗，總之，不論是否活躍於社群、有無朋友一起，來這裡都能收穫不同的美好體驗（~~聽起來怎麼那麼像廣告~~）。

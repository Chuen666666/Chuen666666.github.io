---
title: 一群純高中生隊伍打入了 HiPAC 決賽？（HiPAC 參賽心得）
categories:
  - 心得
  - 比賽
tags:
  - 程式
  - 心得
  - 比賽
  - 超算
  - 叢集運算
  - 國網中心
  - HPC
  - HiPAC
  - 國網盃
math: false
mermaid: false
hide: true
date: 2026-08-06 14:41:53
excerpt: 我的第一次參加 HiPAC 國網盃競賽，拿到了佳作和一堆獎
---

由我、[@匿名用戶9487](https://qwo877.github.io/me/)、[@Justin](https://justin0711.com/)、[@伊藤蒼太](https://itousouta15.tw/)、[@Hawks](https://hawks.tw/)、[@伊藤喵貓](https://twcat0503.org/)（twcat）組成的純高中生隊伍，來參加第五屆國網盃應用程式效能優化競賽（HiPAC），也是我人生中第一次的 HPC 競賽，究竟體驗如何呢？

## 動機、初賽、練上培訓

追溯到最早最早呢，其實我是因為參加了 HPC Winter Camp（[參加心得傳送門](/清華大學高速計算人工智慧冬令營——參加心得)）才知道的 HiPAC，當時其實 [@閔捷](https://xieserver.com/) 就已經有想要參加了，只是因為時間太長，這件事也就這麼不了了之了。結果就在初賽前夕，[@匿名用戶9487](https://qwo877.github.io/me/) 突然找到我，問我要不要一起組隊，我一開始其實是沒有很想參加的，因為那段時間事情真的有點多，不過他說：「沒關係啦，反正不一定進得了決賽，真進了再說吧。」於是我就被騙進來組隊了。

我們的團隊可以說是相當簡陋了，除了全高中生以外，我們還沒有教練，連指導老師也是我們隨便抓了一個隊友的資訊科老師，可以說是幾乎全靠我們和 AI 了，~~當然，後者可能更多一些~~。

初賽是以線上賽的形式，它除了有需要做題目的比賽以外，還得寫一份關於每個人的經歷、團隊說明等等的「參賽審查資料表」，有點像書審。初賽用的機器是創進一號，也就是當時 Winter Camp 用的那台，不過題目什麼的我已經忘了，只記得光連到創進一號上，我們就快搞了一個小時，好不容易連上了，又發現一隊因為只有一台機器，所以當一個人送了 Job 之後，其他人就不能動了，於是乎比賽過程就變成了：讓一個有 Claude Code 的人開 Fable 5 做題，做完後送 Job，接著大家就可以休息個半小時，玩 Minecraft、看 YouTube、打 Ready or Not……，反正就是乾等半小時，再看結果，時不時盯一下記分板。

然後，在幾乎只有 [@Justin](https://justin0711.com/) 和 [@伊藤喵貓](https://twcat0503.org/) 做事的情況下，我們成功進晉了決賽（？），~~因為只有他們有 Fable 5~~。之後還有一天的線上培訓，只不過因為那天是 SITCON Camp（[參加心得傳送門](/SITCON-Camp-2026收費這麼高，CP值如何？（參加心得）)），我便無法參加了。

## 決賽

{% note info %}
這部分我會寫蠻多的，而且很多內容對準備打 HPC 比賽的人來說，完全沒用，因此如果你對它不感興趣，可直接跳到下一部分
{% endnote %}

### 第零天

這次的決賽地點是台南，而我們隊伍清一色全都是北部人，勉強只有一個 [@伊藤蒼太](https://itousouta15.tw/) 是中部人，但我們無論如何都是需要提早一天下去的，否則第一天的報到時間實在太早了。原本我們一行人還在想著提早一天到台南的話怎麼住宿，結果就發現，我們有錢的國網中心（主辦單位，NCHC）已經幫我們訂了提早一天的飯店，於是乎，我們就可以舒舒服服地提早一天入住了。這次的住宿地點是「南科贊美酒店」，四星級飯店，四人一房，飯店還有免費的零食吧和車站到飯店的免費接駁，可以說住宿品質和服務相較於其他住校舍的活動來說，完全是不同世界。

我中午 12:00 便從台北車站搭自強號南下，中途買 TR-PASS 的 [@Justin](https://justin0711.com/) 也在桃園上了車，坐到了我旁邊，幸運的是，他的位子整趟都沒有人買，他才得以全程不用移動；[@伊藤蒼太](https://itousouta15.tw/) 也搭乘了同一趟車，不過因為他是對號座，因此我們在車上並沒有見面；其餘的人，[@伊藤喵貓](https://twcat0503.org/) 比我們還早到，已經 Check-in 了、[@匿名用戶9487](https://qwo877.github.io/me/) 則是先到了高雄玩，會在明天一早直接到達會場與我們會合。

舊自強號坐起來真的不是很舒服，何況整趟路程有四個小時，終於撐過了四小時，一下車，就看見熟人 Each 走來，他似乎已經猜到了我搭乘同一班車，因為他一下車就說：「難怪我在車上有看到什麼『淳的 iPhone』（我的熱點名）。」不過他並不是我們隊友，簡單問候後，便分道揚鑣了。之後我們搭乘飯店提供的免費接駁（其實就是免費小黃），路程不算遠，但有一段車子接送也是蠻爽的。到了飯店，我們還又遇到了好幾個熟人，[@kohiro](https://github.com/kohiro961021)、[@fishbaby1011](https://blog.fishbaby1011.com/)、[@Frank](https://frk.tw/) 等，而因為 [@伊藤喵貓](https://twcat0503.org/) 已經 Check-in，我和同行的隊友便直接上樓了（我、[@Justin](https://justin0711.com/)、[@伊藤喵貓](https://twcat0503.org/)、[@匿名用戶9487](https://qwo877.github.io/me/) 被分配到同一間，而 [@伊藤蒼太](https://itousouta15.tw/) 和 [@Hawks](https://hawks.tw/) 則住我們對面，和另外兩個不同隊的同寢）。

四星級飯店簡直太棒了，大大的床、美美的 View，頗有一種來度假的感覺，不過最讓人開心的，還是串寢聊天了，還認識了新朋友 [@Auron](https://4ur0n.github.io/)，否則第零天來也真的沒什麼事好做了。聊天到一段落，我們還去飯店的 24 hr 零食吧吃吃喝喝了一番。不過我們很快又陷入了新的問題——晚餐要吃什麼？但我們的好隊友 [@伊藤喵貓](https://twcat0503.org/) 因為他爸媽也有來台南玩，於是便幫我們帶了晚餐便當，甚至沒跟我們收錢，實在是相當感謝！否則這附近還真是沒什麼吃的。

吃完晚餐，依舊是繼續聊天，我們還打開了我超久沒玩的 Minecraft 一起連線遊玩，總算撐到了 9:00，飯店的宵夜才開始供應，今天吃的是粥和蝦卷，雖然算不上特別好吃，但也是不差了，尤其免費這點，完勝其他晚餐。

晚上倒也沒什麼事好做，但一群朋友聚在一起，難免會玩比較晚，又因今天放鬆的心態，我們一下就混到了 1:00 才睡覺。

### 第一天

今天終於到了正式比賽的日子，雖說昨日的鬧鐘訂 7:00，但我們 6:45 就爬起來了，於是我們就這麼早早地跑下去吃早餐，早餐還蠻豐盛的，是採多數飯店的那種自助吧早餐，不過還有特別提供牛肉湯，可以說，早餐是三餐中最好吃的一餐了。這種時間來吃早餐的 HiPAC 選手還真不少，一看到其他桌的人都穿著以往 HiPAC 比賽的衣服，不由得有些緊張和興奮。

早餐吃到最後其實有點小尬尷，因為只有一張房卡，電梯又得刷卡才能按，因此我的室友們只好在自己完食後，等著我這個吃飯很慢的傢伙吃完，我們才能一起上樓。吃完飯，回房間拿完行李，我們又下了樓，等國網的接駁車來把我們送到國網中心，否則國網那種偏僻的位置，我們還真的不一定有辦法自己過去。等車時間也有一點有趣的小插曲，我們看到了四五個藝人坐在沙發，周圍滿是攝影機和專業收音裝置，有人認出來了藝人，不過我自己不怎麼看節目的，自然也就認不得了。

{% gi 2 2 %}
![藝人 1](/img/hipac_celeb.jpg)
![藝人 2](/img/hipac_celeb2.jpg)
{% endgi %}

藝人的車比我們還早一些到，導致我們的遊覽車遲了些到，或許這就是為什麼 [@匿名用戶9487](https://qwo877.github.io/me/) 可以比我們還早到的原因（~~並不是~~）。總之，我們沒人遲到，我們先前擔心的遲到被退賽問題沒有發生，於是我們就開開心心地去報到領名牌了。

本次比賽一共有一題效能題、四題應用題、一題隱藏題，配分和介紹如下圖（皆取自[官網](https://event1.nchc.org.tw/2026/hipac/)，因此你也可以前去官網了解詳細資訊）。

{% gi 2 2 %}
![題目介紹](/img/hipac_questions.png)
![配分](/img/hipac_score.png)
{% endgi %}

比賽開始前，國網中心花了些時間介紹本次比賽，說了許多本次比賽的亮點，例如第一次參加人數多到要辦初賽、第一次啟用台南分部辦比賽（以往都在新竹總部）等等，也介紹了本次比賽的硬體——晶創26（Nano4），我們每隊一共有兩台伺服器，每台皆有 8 張的 H200，共 16 張 H200，每台機器大約 2500 萬台幣，共 5000 萬台幣，算上一共 15 隊的話，這次比賽的機器總值大約是 4 億台幣，真是個難以想像的數字。

{% img d-block mx-auto mb-4 /img/hipac_hardware.jpg 500 "比賽硬體" %}

比賽開始前，我還刷了一個月的 Claude Code，花了我 NT&dollar;600。開始後，我們每個人都認領了一題，但五題的題目（隱藏題最後一天才會公布）注定無法讓六個人領滿，而許多題目又怕同時有多個人做的時候，檔案會有問題，因此剩下來的那個人，也就是我，只能在一旁提提意見和想法，~~還有講幹話~~。

比賽一開始的時間，又是處理連線問題處理半天了，先是所有人的 SSH 幾乎都連不上，之後有些人用 CLI 能連進機器了，但只要是用 VS Code 的 SSH 就仍是連不進去，於是最後我們只好全員 CLI 連線，並在伺服器上裝好了 Claude 和 Codex，讓它們幫我們寫程式，也因為連線問題，主辦單位只好把今天的時間延後半小時。

比賽氛圍說實話還蠻不錯的，討論比賽正式事項之餘，我們還有時間能夠聊天和吃零食，沒錯，國網甚至在會場提供了零食和飲料，簡直度假來的，國網還送了我們 AMD 贊助的乖乖和多功能筆（筆、尺、水平儀、一和十字的螺絲起子），~~被 [@伊藤蒼太](https://itousouta15.tw/) 吐槽：除了筆以外，都是實用的功能~~。

{% gi 2 2 %}
![AMD 贊助的乖乖](/img/hipac_kuaikuai.jpg)
![AMD 贊助的多功能筆](/img/hipac_pen.jpg)
{% endgi %}

前情提要：初賽時，我們原本都比得好好的，結果突然看到管理員在 Teams 訊息裡打「警告一次 Justin0711 嘗試提權」，並附上了一串由 `sudo` 開頭的指令，不過因為我們只能用「Justin0711」這個名字連進去，加上提權的人一開始也沒講，就這麼一聲不吭地跑去給人家提權，因此我們一開始不知道是誰幹的，結果 [@Justin](https://justin0711.com/) 主動跑出來承認，害得我們哭笑不得。

結果決賽時刻，[@Justin](https://justin0711.com/) 又發力了，不過這次可不是提權，畢竟決賽本來就開放了 `sudo` 權限，他這次在 OJ 上找出了兩個漏洞。首先，他發現可以直接透過改網址的方式，下載到隱藏題的題目（經典的只隱藏前端按鈕，沒做權限控制）；之後他又故技重施，發現了一個更為嚴重的 bug，他發現可以改掉「下載自己已經上傳的程式」按鈕連結，直接下載到別隊提交的程式碼（準確來說是各種檔案，因為 OJ 要求上傳 zip）。不過我們為人正直，並沒有使用這些漏洞，而是在發現後就立刻通報給裁判組了，只不過這個一眼就看起來很像 Vibe Coding 出來的 OJ，還存在這麼多洞，果不其然地被我們和另一個常來我們組聊天的裁判（也是出題者）噴爆。

- Justin: find 2 bugs (資安洞) -> 隱藏題+DL別人submission (reported) 感覺網站像vibe出來的
- 別組(fishbaby, frank, kohiro)交流多(跑來我們組chat)
- 打翻水on twcat's laptop -> 接手LLM題
- lots of food(蛋餅) and drink(微糖伯爵奶茶 超甜)
- 6:30 end race(add lots of things to let squeue, let it can run until tmr)
- 遊覽車回飯店
- keycard loss -> 飯店人幫開門 -> 發現在twcat口袋...
- frank串寢(其他人跑去火車站吃dinner by iRent and TR) chat (多聽不懂 圈子差異 hope未來我 活一點)
- chat/mc/write心得 until 9, 宵夜吧 (no hv dinner)
- 宵夜: 香腸,黑白切&豆花
- 小逛飯店(KTV GYM POOL BAR RESTAURANT)
- 回房 chat -> sleep early (12:30)
- biggest problem: twcat's laptop (not able to turn on again, teammate - 1)

### 第二天

- 9:00~9:30報到 怕沒早餐吃 7:00wake up
- after breakfast -> nap 30 min
- still 10:00 start
- 發現昨晚12:00多任務就停了
- twcat's laptop still broken -> me work on llm still
- rule update: no 挖洞, llm can use not only vLLM (consider use tensorRT-LLM)
- get 30 scores (1st q)
- many submission been killed by Justin (work on same q)
- 零食飲料 :+1:
- 午餐也不錯 但沒吃完
- POOP 好幾次
- 蜜香果茶 三分糖 薄冰 -> 不甜(even 有點酸)
- 吐司(花醬牛肉起司蛋)
- 6:00 -> 延10min
- kohiro 欠30min
- 晚宴 貴:+1: 和別組同桌(我們自己聊)
- 比賽進度有點小急
- 搭車回房 -> PPT(沒吃宵夜 看起來也不太好就是了)
- rule didn't mentioned 不能連機器 -> VPN 連進去(只斷SSH連線) -> 電話問 -> 「你們想挑戰規則嗎？」
- Frank依舊來room chat
- continue PPT (all teammates in our room)
{% img d-block mx-auto mb-4 /img/hipac_draw.jpg 400 "伊藤蒼太的小隊畫" %}
- late sleep (2:30), tired af

### 第三天

- wake up early (6:45)
- the last day of competition
- 9:00~11:00 competition + 11:00~12:00 making PPT
- mystery q (10% of total, easiest q): not same as 1st day (know this last night)
- same time doing: llm q & DL .claude -> PPT
- feel: u hv to know good about what u do, so u can do better (not only vibe coding can win competition), smarter model is obvious of hipac
- feel2: teammates coworking better than day1,2
- early 30 min finish llm q
- ppt's time: no very enough, lots of things hv to say it by myself
- kohiro: llm's score high af
- lunch 20 min -> pronounce (15% of total score) (bcuz we are team03 also 1st large team)
- 匿名貓: not good at this (spent too long time on his q + forgot what to say, not fluently)
- llm is pt2: not bad this time, my pron sounds fluently (lots of things by ai tho)
- after finish pron: 1.5 hr of nvedia staff sharing (me, itou, sean)
- go back classroom: kohiro's group not pres yet (not fair) (chat)
- wait nvedia's talking finish
- take down our poster
{% img d-block mx-auto mb-4 /img/hipac_poster.jpg 800 "隊伍海報" %}
- back classroom -> ans of q
- a lot of award (3)

{% img d-block mx-auto mb-4 /img/hipac_amd_and_nvidia.jpg 500 "Nvidia 和 AMD 代表合影" %}

{% gi 5 2 %}
![參賽證明](/img/hipac_certificate.jpg)
![團照](/img/hipac_group.jpg)
![佳作獎牌](/img/hipac_medal.jpg)
![Nvidia 特別獎](/img/hipac_nvidia.jpg)
![未來之星](/img/hipac_star_of_future.jpg)
{% endgi %}

- 接駁 -> THR
- dinner (justin and 9487 no)
- back tp (11:04)

## 心得

### 關於 HPC 和 Vibe Coding

### 關於隊友

### 關於國網

沒衣服

### 關於資安問題

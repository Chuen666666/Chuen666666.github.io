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

## 第零天

這次的決賽地點是台南，而我們隊伍清一色全都是北部人，勉強只有一個 [@伊藤蒼太](https://itousouta15.tw/) 是中部人，但我們無論如何都是需要提早一天下去的，否則第一天的報到時間實在太早了。原本我們一行人還在想著提早一天到台南的話怎麼住宿，結果就發現，我們有錢的國網中心（主辦單位）已經幫我們訂了提早一天的飯店，於是乎，我們就可以舒舒服服地提早一天入住了。這次的住宿地點是「南科贊美酒店」，四星級飯店，四人一房，飯店還有免費的零食吧和車站到飯店的免費接駁，可以說住宿品質和服務相較於其他住校舍的活動來說，完全是不同世界。

我中午便從台北車站搭自強號南下，中途買 TR-PASS 的 [@Justin](https://justin0711.com/) 也上了車，坐到了我旁邊

- 主辦幫我們多訂一天 提前下台南（明報到時間很早
- 12:00自強號（舊 差評）4hr到善化 -> 飯店接駁（雖近）free taxi
- (with Justin, itu)
- twcat先check-in了
- 沒事做 聊天串寢
- 遇多熟人（Each, kohiro, fishbaby, frank）, met Auron
- 飯店四星 超好
- free 24HR 零食bar 有飲料和一堆吃的
- twcat mom 帶便當 :+1: (附近沒吃的)
- chat+snack bar
- 宵夜 飯店free（粥/蝦卷）
- 晚上 依舊聊天/MC -> 1:00 sleep

## 第一天

- alarm 7:00, but 6:4X wake up
- breakfast :+1: (best in 3 meals, 飯店提供)
- 等遊覽車 -> 遇藝人 -> 車略晚
{% gi 2 2 %}
![藝人 1](/img/hipac_celeb.jpg)
![藝人 2](/img/hipac_celeb2.jpg)
{% endgi %}
- 到國網中心報到比賽 (匿名用戶9487 earlier than us)
- 比賽5+1題
- 開場介紹：1st time 台南場辦比賽, 1st time 初賽, mechine expensive(15 teams, 12 H200/team, total $\approx$ 4億NTD)
{% img d-block mx-auto mb-4 /img/hipac_hardware.jpg 500 "比賽硬體" %}
- claude code $600 (dad's credit card)
- 全部人都認領一題了 -> 看題 提想法 chat
- 氛圍 :+1: 零食/青茶/熱美式
- VSC SSH連線問題(+30min)
{% gi 2 2 %}
![AMD 贊助的乖乖](/img/hipac_kuaikuai.jpg)
![AMD 贊助的多功能筆](/img/hipac_pen.jpg)
{% endgi %}
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

## 第二天

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

## 第三天

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

---
title: 從零開始用 Python 寫 Discord 機器人 + 免費 24 小時在線教學
categories:
  - 筆記與教學
  - 程式
  - 專案
tags:
  - 程式
  - 教學
  - Discord Bot
  - Python
math: false
mermaid: false
hide: true
date: 2026-01-03 22:56:43
excerpt: 教你用完全免費的方式，從零開始建立一個 Discord 機器人，並且讓它 24 小時在線上運作
---

## 建立機器人
1. 先準備好一個 Bot 準備要加入的伺服器（需擁有權限）
2. 到 [Discord Dev](https://discord.com/developers/applications) 官網，點擊右上角 `New Application`，填入機器人名稱後，點擊 `Create`
3. 可以分別在 `App Icon`、`Name`、`Description`、`Tags` 欄位中，指定機器人**頭貼**、**名稱**、**簡介**（即使用者點開機器人後顯示在簡介欄的內容）、**標籤**
4. 到 `Installation` 中，依自己需求勾選 `User Install`（使用者從 Bot 簡介點擊**新增應用程式**）或／和 `Guild Install`（邀入伺服器內使用）
5. 到 `Bot` 中，可以設定 Bot 的**頭貼**、**背景橫幅**、**名稱**，之後往下滑，將 `Presence Intent`、`Server Members Intent`、`Message Content Intent` 勾起來，下方 `Bot Permissions` 可以依自己需要打勾，建議可以將 `Public Bot` 取消勾選（依喜好，決定他人是否可以邀你的 Bot 進其他群）
6. 到 `OAuth2` 中的 `OAuth2 URL Generator`，勾選 `bot` 和 `applications.commands`，並滑到下方展開的另一個大類（`Bot Permissions`），依自己的需要勾選權限
7. 滑到最下面，點擊 `Generated URL` 右邊的複製鈕，並貼到瀏覽器中，即可將 Bot 邀請進先前建立好的伺服器
8. 回到 `Bot` 中，複製 `Token`；若只有 `Reset Token`，先按它，再複製即可

  {% note danger %}
  Bot Token 相當於 Bot 的帳號密碼，任何擁有它的人都可以任意控制該 Bot，因此請妥善保管
  勿將 Token 公開出來，或上傳到 GitHub 中，或者直接寫進主要程式碼當中
  一旦發現任何外泄的可能，請立即回到 Discord Dev 中的 `Bot`，並點擊 `Reset Token` 以更新新的 Token
  {% endnote %}

9.  【可選】在伺服器中建立一個 Bot 專用身分組（管理員權限），方便管理與排版的同時，也不會因為當初沒開到某個權限而讓 Bot 運作不了；但這樣的操作也得承擔萬一 Bot 被盜，越高權限可能讓它的危害越大

## 電腦環境
1. Python：至少 3.8+，建議 3.10+
2. IDE：此以 VS Code 為例，並會使用 VS Code 的「原始檔控制」（圖形化的 Git 操作）代替所有 CLI 指令
3. 到 GitHub 中，點擊右上角的 `+`，並點 `New repository`
   - `Name` 和 `Description` 可隨便填
   - `Choose visibility` 無論設定什麼權限都可以，但它會直接影響到別人看不看得到你這個 Repository（倉庫，下簡稱 Repo）
   - 關掉 `Add README`
   - 點擊 `Create repository`
4. 建立一個資料夾，名稱任意，並創建以下檔案：
  - `main.py`：主要 Bot 程式
  - `.env`：放置 Token 專用
  - `config.json`：用來放置所有 Discord 頻道 ID
  - `.gitignore`：放置所有不想被上傳到 Git 的檔案
  - `README.md`：與其他人說明 Bot 的安裝與使用方式等（若 `Visibility` 為 `Private`，此項可省略）
  - `requirements.txt`：所有 Python 檔會用到的第三方套件（即需要 `pip install <package>` 的東西）
5. 在 VS Code 中，在剛才的資料夾底下建立一個 Venv，這是 Python 自帶的虛擬環境，讓每個專案之間用的套件或 Python 版本不會互相打架
   1. 用 VS Code 打開剛才的 `main.py`
   2. 點擊右下角寫著 Python 版本的數字
   3. 點擊 `建立虛擬環境…` &rarr; `Venv` &rarr; `Python 3.X`

## 檔案內容
### .env
貼上先前複製的 Bot Token 到 `<Token>`（`<` 和 `>` 也不用留）

```env
TOKEN=<Token>
```

特別注意，ENV 檔不能加任何引號或空格，否則會讀不到

### config.json
為了讓程式好修改，我們會習慣將 Discord 頻道的 ID 都放到這裡

```json
{
  "CHANNEL1": ID1,
  "CHANNEL2": ID2
}
```

不一定要將所有頻道都放入，只要放 Bot 會需要特別控制的頻道（如指令區、特別管理的頻道等）

一般來說，寫進此檔的頻道名稱可以自己取（不用和 DC 一樣），但習慣上會用全大寫表示常數（不改變值的變數）；ID 則固定使用整數型別存放（即不用加引號）

要取得頻道 ID，請在 DC 的設定 `進階` &rarr; `開發者模式` 開啟選項，之後直接對著想要取值的頻道點擊右鍵，即可找到複製頻道 ID 的選項

### .gitignore
放這裡的檔案都不會被上傳到 Git，除了執行時可能產生的一些不需要的文件以外，也要放一些敏感資料，例如我們先前提過的 `.env`，以免把重要資料公開給大家知道，即使你的 Repo 設為 `Private`，這一步仍對資安而言很重要！

```gitignore
# Environment/Channel ID
.env
config.json

# Venv
venv/
.venv/
env/

# Python
__pycache__/
*.pyc

# Logs
*.log
logs/

# Build
build/
dist/
*.egg-info/

# Tests
.pytest_cache/
.coverage
htmlcov/

# IDE/OS
.DS_Store
Thumbs.db
.vscode/
.idea/
```

### README.md
這會顯示在你 GitHub 專案首頁，通常會放介紹、安裝方式、功能說明等，依自己需求撰寫即可

通常會提及 `config.json` 和 `.env` 的建置，因為它們已被放入 `.gitignore`，因此需額外說明

### requirements.txt
這是 Python Venv 安裝後，會需要安裝的套件，有了這個檔案，任何使用者都可以快速建立好一模一樣的環境

版本號不是必填，如果沒有寫，它會自動安裝最新版，不過為了穩定性，建議還是寫一個下限版本，如下

```txt
discord.py>=2.3.0
python-dotenv>=1.0.0
flask>=3.0.0
```

寫好這個檔案後，除了給別人看以外，我們自己也得先執行一次，來安裝等等會用到的套件

記得執行指令時，要在這個專案底下的 Terminal 才能找到 `requirements.txt`

在 VS Code 中，可以點擊左上角 三條線 &rarr; `終端機` &rarr; `新增終端機` 來打開 Terminal，並且可以使用 `cd <資料夾路徑>` 切換到專案所在的目錄

```bash
pip install -r requirements.txt
```

## 推到 GitHub 上
完成了剛才的工作後，我們就可以先來提交第一次的 GitHub 推送

1. 回到先前創建的 Repo 頁，並找到下圖連結，點擊複製鈕

{% img /img/github_link.png %}

2. 回到專案所在的目錄底下，輸入以下指令：

```bash
git init
git branch -M main
git remote add origin <剛才複製的 Repo 連結>
```

3. 到 VS Code，點擊右側欄的「原始檔控制」（或使用 <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>G</kbd>），點擊「變更」字樣右邊的加號鈕，此步相當於以下指令：

```bash
git add .
```

4. 在上方訊息欄中，輸入任意訊息（例如 `first commit`），這個訊息叫作「commit message」，是為了方便辨識每次的推送，此為必填項，填完後再點擊下方 `提交`，此步相當於以下指令：

```bash
git commit -m "first commit"
```

1. `提交` 點完後，按鈕會變為 `發佈 Branch`（若已建立追踪，即不是第一次提交，則按鈕會叫作 `同步變更`），點擊它，即可完成上傳，此步相當於以下指令：

```bash
git push -u origin main # 第一次推送
git push # 已建立追踪後推送
```

## 主程式
這一章裡，我會把整個程式拆成好幾個不同步分來說，不過對程式檔本身而言，是有照順序的，因此可以放心從上到下一步步跟著操作

### 匯入
這裡是整個架構會用到的東西，如果你程式裡還會用到其他套件，記得一起放入這一區塊中（第三方套件也要記得一併放入 `requirements.txt` 中）

```python
import json
import os
from pathlib import Path

import discord
from discord.ext import commands
from dotenv import load_dotenv
from flask import Flask
from threading import Thread
```

### 啟動迷你網頁
雖然在本機跑程式時，這裡的功能跟本用不上，不過它其實是為了後面將 Bot 跑在線上的托管平台時，能持續保持上線的關鍵之一

其原理是透過創一個迷你網頁，加上自動訪問網頁的機器人，讓網頁保持活躍，使 `main.py` 能夠一直跑下去，從而讓 Bot 本身也保持著上線

```python
# 啟動迷你網頁，讓 Render 持續上線
app = Flask(__name__)

@app.route('/')
def home():
    return "I'm alive!"

def run():
    app.run(host='0.0.0.0', port=8080)

def keep_alive():
    t = Thread(target=run)
    t.daemon = True
    t.start()
```

### 讀取 `config.json` 和 `.env`
這裡為了穩定性，我選擇使用 `pathlib.Path` 來設定目前所在的位置（`BASE_DIR`）

可能有人不理解為什麼不用相對路徑寫，但其實是因為在不同操作系統間，路徑可能都會有些微差異，尤其對使用 Windows 的人而言，大多托管平台都是 Linux，路徑上會有些差異，因此使用「變數湊成的絕對路徑」才是一個更穩定的方式

而讀取 `config.json` 和 `.env` 的程式雖然看起來有點複雜，不過其實這樣的寫法都是為了在各操作系統間以及本機和線上托管平台的環境差異而存在

```python
BASE_DIR = Path(__file__).resolve().parent

# 讀取 config.json
if os.path.exists('/etc/secrets/config.json'):
    CONFIG_PATH = Path('/etc/secrets/config.json')
elif (BASE_DIR / 'config.json').exists():
    CONFIG_PATH = BASE_DIR / 'config.json'
else:
    CONFIG_PATH = Path('config.json')

try:
    with CONFIG_PATH.open('r', encoding='utf-8') as f:
        config = json.load(f)
    print(f'成功讀取設定檔：{CONFIG_PATH}')
except Exception as e:
    print(f'讀取設定檔失敗！路徑：{CONFIG_PATH}，錯誤：{e}')

# 讀取 .env
load_dotenv()
TOKEN = os.getenv('TOKEN')
```

### 設定 intents
這個設定是為了控制機器人「能夠收到哪些類型的事件」，若沒有顯示開啟，機器人將不能讀取或接收到那類型的事件

另外，在 `command_prefix='!'` 的部分，可以將 `!` 改為任何想要的指令前綴，不過這部分不影響斜線指令（且勿將它設為斜線）

```python
intents = discord.Intents.default()
intents.guilds = True
intents.其他需要接收的事件 = True

bot = commands.Bot(command_prefix='!', intents=intents)
```

{% fold info @ 所有事件一覽表 %}

|事件（Intent）名稱|事件簡介|是否特權|
|:-:|:-:|:-:|
|`guilds`|伺服器相關事件（加入、刪除、更新）|否|
|`members`|伺服器成員事件（加入、離開、更新、成員列表）|是|
|`bans`|伺服器封禁／解除封禁事件|否|
|`emojis_and_stickers`|伺服器表情符號與貼圖事件|否|
|`integrations`|伺服器整合事件（如 Twitch、YouTube 整合）|否|
|`webhooks`|webhook 更新事件|否|
|`invites`|邀請建立／刪除事件|否|
|`voice_states`|語音頻道狀態事件（成員加入／離開語音、靜音、說話狀態）|否|
|`presences`|成員狀態事件（上線／離線／遊戲狀態）|是|
|`messages`|訊息建立／刪除／編輯事件|否|
|`message_content`|讀取訊息文字|是|
|`reactions`|訊息反應事件（新增／移除表情反應）|否|
|`typing`|使用者正在輸入事件|否|

> **是否特權**指的是需要到 [Discord Dev](https://discord.com/developers/applications) 中的 `Bot` &rarr; `Gateway Intents` 特別開啟才能接收

{% endfold %}

### 主要程式
先說，這個部分機乎不可能全講，因為真的多到爆炸，因此這裡只會示範幾個基本的事件和指令，至於具體要實現什麼功能，可參考[官方文檔](https://discordpy.readthedocs.io/en/stable/index.html)，或者直接問 AI

這裡要特別注意，我們如果要取頻道 ID，請透過 `config['CHANNEL_ID']`

程式中的函式主要結構是以一個裝飾器加上 `async def` 來寫，這種函數的名稱必須按照 Discord.py API 規定命名，才能被正確觸發；而操作的部分，會使用 `await` 來執行

Discord.py 框架中，還有一個非常方便的寫法，也就是它會自動把引數透過類型註示（Type Hint）進行轉換，非常方便

```python
# 機器人上線事件
@bot.event
async def on_ready():
    channel = bot.get_channel(config['UPDATE'])
    try:
        synced = await bot.tree.sync() # 自動同步指令（程式與 Bot 間的同步）
        if channel:
            print(f'自動同步成功！同步了 {len(synced)} 條指令！') # 顯示在終端機（除錯用）
    except Exception as e:
        if channel:
            print(f'自動同步失敗：{e}')
    finally:
        update_member_count_loop.start()

# 成員加入／離開事件
@bot.event
async def on_member_join(member):
    channel = bot.get_channel(config['JOIN'])
    await channel.send(f'**{member}** 加入了伺服器！') # 在指定頻道中傳送歡迎訊息
@bot.event
async def on_member_remove(member):
    channel = bot.get_channel(config['LEAVE'])
    await channel.send(f'**{member}** 離開了伺服器！') # 在指定頻道中傳送離開訊息

# 斜線指令
@bot.hybrid_command()
async def greet(ctx): # ctx 代表指令的上下文，包含了許多有用的資訊
    await ctx.send(f'你好，{ctx.author.mention}！') # ctx.author.mention 會提及發送指令的使用者

@bot.hybrid_command()
async def add(ctx, a: int, b: int): # 參數 a 和 b 會自動轉成整數
    """計算兩數字和並回傳結果""" # 自動顯示在 DC 的指令說明中
    result = a + b
    await ctx.send(f'{a} + {b} = {result}') # 回傳計算結果
```

### 啟動 Bot
最後，加上這一段，讓 Bot 能夠跑起來

```python
# 啟動 Bot
if __name__ == '__main__':
    if TOKEN:
        keep_alive()
        bot.run(TOKEN)
    else:
        print('錯誤！找不到 TOKEN！')
```

完成整個程式碼後，我們可以先在自己電腦上測試看看，執行 `main.py` 後，Bot 是否有順利上線，並且能夠正常回應指令，一切都沒問題後，我們記得把它推上 GitHub（`原始檔控制` &rarr; `變更` 右邊的 `+` &rarr; 輸入 commit message &rarr; `提交` &rarr; `同步變更`，或用以下指令）

```bash
git add .
git commit -m "寫自己的 commit message 在這個引號中"
git push
```

## 線上托管
在自己電腦上執行 `main.py` 後，理論上 Bot 就會上線，不過為了讓它能夠 24 小時都在線上，我們需要把它放到線上的托管平台跑

1. 到 [Render](https://dashboard.render.com/login)，使用 GitHub 登入
2. 點擊 `Create new project` &rarr; `New service` &rarr; `Web Service` &rarr; Discord Bot 的 Repo
3. 進行以下設定：
   - `Language`：選擇 `Python3`（應為預設值）
   - `Branch`：選擇 `main`（應為預設值）
   - `Build Command`：`pip install -r requirements.txt`（應為預設值）
   - `Start Command`：輸入 `python main.py`
   - `Instance Type`：選擇免費的 `Free`
   - `Environment Variables`：名稱填入 `TOKEN`，值則貼上你的 Bot Token
   - `Advanced`
     - `Select Files`：點擊 `Add Secret File`，名稱填入 `config.json`，內容則貼上 `config.json` 內容
     - `Health Check Path`：填入 `/`
4. 點擊 `Create Web Service`，它就會自動開始部署，並且未來若有編輯任何程式並推送到 GitHub 上，它也會自動重新部署；若希望手動重新部署，可點擊 `Manual Deploy` &rarr; `Clear build cache & deploy`
5. 如下圖，將 Render 連結複製起來

{% img /img/render_url.png %}

## 讓 Bot 24 小時上線
雖然我們已把 Bot 放到 Render 上，但免費方案在 15 分鐘內若沒有任何流量，它就會自動休眠，Bot 也就離線了

為了讓它持續有流量，我們可以設定一個機器人，每五分鐘就定期訪問一次 Render 網址，讓它保持活躍，這也正是我們前面寫的迷你網頁的用途

1. 到 [UptimeRobot](https://dashboard.uptimerobot.com/login?ref=header)，使用 GitHub 登入
2. 點擊 `New`
3. 在 `URL to monitor` 中，貼上剛才複製的 Render 網址
4. 其他設定保持預設，點擊 `Create Monitor`，一切應該就大功告成了！
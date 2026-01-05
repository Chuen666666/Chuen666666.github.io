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
excerpt:
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

  {% note warning %}
  Bot Token 相當於 Bot 的帳號密碼，任何擁有它的人都可以任意控制該 Bot，因此請妥善保管
  勿將 Token 公開出來，或上傳到 GitHub 中，或者直接寫進主要程式碼當中
  一旦發現任何外泄的可能，請立即回到 Discord Dev 中的 `Bot`，並點擊 `Reset Token` 以更新新的 Token
  {% endnote %}

9.  【可選】在伺服器中建立一個 Bot 專用身分組（管理員權限），方便管理與排版的同時，也不會因為當初沒開到某個權限而讓 Bot 運作不了；但這也得承擔萬一 Bot 被盜，越高權限可能讓它的危害越大

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
貼上先前複製的 Bot Token 到 `<Token>`（`<` 和 `>` 也不用留

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

一般來說，寫進此檔的頻道名稱可以自己取（不用和 DC 一樣），但習慣用全大寫；ID 則固定使用整數型別存放（即不用加引號）

## 主程式
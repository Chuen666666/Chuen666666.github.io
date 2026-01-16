---
title: 使用 Ruff 讓你的 Python 程式碼變得規範又整齊！
categories:
  - 筆記與教學
  - 程式
  - 專案
tags:
  - 教學
  - 程式
  - Python
  - Linter
  - Formatter
  - Ruff
math: false
mermaid: false
hide: true
date: 2026-01-16 08:45:23
excerpt: Ruff 是一個超好用的 Linter + Formatter，讓你的程式碼可以整齊又規範
---

首先先說，這篇文章並不會教你怎麼用命令行（CLI）來執行 Ruff，而是以 VS Code 為例，示範怎麼把 Ruff 設定在 IDE 中，並在每次存檔程式時執行。

## 概念
### PEP 8
在 Python 的官方文件中，其實有一套很知名的規範，定義了程式碼的**推薦風格**，這套風格就是很著名的 [PEP 8](https://peps.python.org/pep-0008/)，它不是程式碼的硬性要求，實務上也不會全然按它寫的做，但它是一個經典的基礎，後來很多風格的變化都是從它而來的。

### Linter
Linter 相對來說比 Formatter 更重視語法而不是語義，它會檢查各種可能出問題的部分，並且警告你，減低因為一些小小的錯誤而會讓你 debug 半天的那種問題。

### Formatter
Formatter 是用來把一些風格上的問題統一化的，例如哪裡應該加空格、哪種寫法不被鼓勵、什麼地方應該空幾行等等，這種東西不影響程式運作，但可以讓維護和 code review 更容易一些，也能讓一個團隊寫出來的風格都一致。

### Ruff
這是一款工具，結合了 Linter 和 Formatter 的功能於一體，雖然它也可以用 CLI 來控制，但更方便的功能則是在 VS Code 按下 <kbd>Ctrl</kbd> <kbd>S</kbd> 存檔時會自動 format，並且用黃或紅色底線來標記一些可能存在的語法問題。

程式碼的風格其實最重要的就是**統一**，因此其實 Formatter 也不一定會完全按 PEP 8 的規範來走，有些反而選擇以 Python 社區的習慣來走。

舉個例子，以 PEP 8 的規範來說，數學運算應該只把空格加在**最後進行運算的符號**前後，像是 `a*b+c*d` 因為先乘除後加減，加號是最後運算的，故應寫為 `a*b + c*d`。但如果你實際去跑一次 Ruff，你會發現它給你整理成了 `a + b * c + d`，而這其實是 Python 社區目前比較盛行和鼓勵的寫法。

## 安裝 VS Code 套件
- Python：~~寫 Python 不裝這個，你就是這個 👍~~
- Pylance：通常裝 Python 的 VS Code 套件時就會一起安裝了，它會用來做基礎的程式碼補全和靜態檢查
- Ruff：我們今天的主角，一款 Linter + Formatter 工具

## 設定 Ruff
1. 在 VS Code 中，按下 <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>P</kbd>，並輸入（或找到）`Preferences: Open User Settings (JSON)`
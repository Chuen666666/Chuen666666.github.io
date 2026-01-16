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

程式碼的風格其實最重要的就是**統一**，

## 安裝 VS Code 套件
- Python：~~寫 Python 不裝這個，你就是這個 👍~~
- Pylance：通常裝 Python 的 VS Code 套件時就會一起安裝了，它會用來做基礎的程式碼補全和靜態檢查
- Ruff：我們今天的主角，一款 Linter + Formatter 工具
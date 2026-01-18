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
在 VS Code 中按下 <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>X</kbd>，並安裝（或檢查是否安裝）以下擴充套件（Extension）：

- Python：~~寫 Python 不裝這個，你就是這個 👍~~
- Pylance：通常裝 Python 的 VS Code 套件時就會一起安裝了，它會用來做基礎的程式碼補全和靜態檢查
- Ruff：我們今天的主角，一款 Linter + Formatter 工具

## 設定 Ruff
1. 在 VS Code 中，按下 <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>P</kbd>，並輸入（或找到）`Preferences: Open User Settings (JSON)`
2. 找到 `"[python]"`，並加上（或替換）成以下 JSON 內容：

  ```json
    "[python]": {
      "editor.defaultFormatter": "charliermarsh.ruff",
      "editor.formatOnSave": true,
      "editor.codeActionsOnSave": {
        "source.fixAll.ruff": "explicit",
        "source.organizeImports.ruff": "explicit"
      }
    },
  ```
  （若整個 JSON 檔是空的，記得在首和尾行加上 `{` 和 `}`，並依 IDE 指示刪掉多餘 `,`）

3. 在想要自動執行 Ruff 的地方創建 `pyproject.toml`，並貼上以下內容：

  ```toml
  [tool.ruff]
  line-length = 88 # 一行最多 88 個字
  target-version = "py310" # 改掉較舊語法，以新語法取代（可換成專案用的 Python 版本）

  [tool.ruff.lint]
  select = ["E", "F", "I", "W", "N", "UP", "FLY", "B", "RUF", "SIM", "PIE", "ARG"] # 啟用的規則
  ignore = ["E501", "T201", "D100", "RUF001", "RUF002", "RUF003"] # 禁用的規則

  fixable = ["ALL"] # 啟用自動修正（推薦全開，Ruff 預設可修已經很保守了）
  unfixable = [] # 禁用自動修正（可以上面設全開後，這裡再加入想要忽略的自動修正設定）
  extend-safe-fixes = ["UP006", "UP007"] # 額外允許一些 Ruff 預設比較保守的修正

  [tool.ruff.format]
  quote-style = "single" # 慣用引號（單引號）
  docstring-code-format = true # docstring 一樣改用回雙引號
  skip-magic-trailing-comma = true # 關掉「魔法尾逗號」的強制換行行為

  [tool.ruff.lint.isort]
  combine-as-imports = true # 合併 `import x as y` 類型的 import（讓同一模組的別名 import 更集中）
  lines-after-imports = 2 # import 區塊後保留 2 行空白（更明顯分隔 import 與程式本文）

  [tool.ruff.lint.mccabe]
  max-complexity = 10 # 圈複雜度上限：超過 10 會被標記（提醒拆函式/簡化分支）
  ```

4. 客制化自己的 `pyproject.toml`：你可以依不同專案和不同個人（或團隊）習慣，在每個專案用不同的 `pyproject.toml`，你可以依照上面我寫的註解來改，以及參考 AI 或[官方文件](https://docs.astral.sh/ruff/)來客制化

  用 AI 者，可以參考這個 prompt：

    ```text
    我在 VSC 中想使用 Ruff，我已經設定好了 JSON 檔（不用再改），並且用了別人的範例 pyproject.toml，如下：

    （請貼上先前提供的 pyproject.toml 並替換掉這行文字）

    我希望我可以依自己的喜好和專案狀況來修改成我自己的版本，因為我是新手，請你透過向我提問的方式和我確認程式碼風格喜好和專案目前情況，並且每個設定都大概說明一下會影響到什麼，以及 PEP 8 和社區習慣。客制化設定時，不要只依上面那個 TOML 來改，而是同時改到上面的設定，以及確認有沒有什麼其他設定我也用得上，但上面沒特別寫到的。

    另外，我不使用 CLI，而是只用 VSC 的 Ruff Extension 配合存檔操作來自動執行 Ruff。
    ```

## 撰寫程式碼時
1. 在 VS Code 中，寫完程式碼後，按下存檔（<kbd>Ctrl</kbd> <kbd>S</kbd>）時，程式將會自動 format（有開啟自動存檔者也不用擔心，手動按存檔才會執行 format）
2. 撰寫過程，IDE 也會自動在不符合規範的程式碼下以黃或紅色底線標記，將滑鼠移到它上面時，還會顯示詳細提示錯誤或不符合 Linter 規範的說明，也可以按下 `快速修復` 來看看有沒有內建的解決方法

  {% note info %}
  若解決方法只是加上一個註解，說明問題沒有被解決，它只是可以讓 IDE 不再警報
  你可以依自己的想法來決定倒底是要依建議修復問題，或者留著忽略警告的註解
  {% endnote %}

## Pre-commit
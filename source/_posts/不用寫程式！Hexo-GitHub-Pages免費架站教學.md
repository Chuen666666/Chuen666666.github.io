---
title: 不用寫程式！Hexo + GitHub Pages 免費架站教學
categories:
  - 筆記與教學
  - 程式
  - 專案
tags:
  - 教學
  - 程式
  - 個人網站
math: false
mermaid: false
hide: false
date: 2026-01-10 00:43:32
excerpt: 從零開始教你怎麼免費且不寫任何一行程式碼就架設自己的個人網站
---

因為最近不少人來問我怎麼架站，因此我想根據我架站的經驗來寫一篇教學。這些東西都是依我架站時的經驗和 AI 幫忙一起寫的，有些東西有機會不小心漏掉或者因為不同東西的版本而有所差異，因此若有任何錯誤、遺漏或任何問題，可至下方留言或私訊我，我也會隨時更新網站。

這篇文章內容會很多，可以使用左側的導覽列來快速到達想看的主題。

## 概念講解
此章用以給零基礎的新手快速了解各專有名詞之用，若已了解這些東西~~或不想聽這些廢話~~，此章可跳過。

{% note info %}
本文之內容，若有提及 Linux 者，皆以 Ubuntu 為主
{% endnote %}

### HTML/CSS/JS
這是一般網頁（前端）構成的三大要素，以一顆按鈕的例子來說：HTML 負責定義**這個按鈕的出現以及位置**、CSS 負責控制**這個按鈕要長怎樣**、JavaScript (JS) 則控制**這個按鈕按下去會發生什麼**（功能）

### Markdown (MD)
我目前為止學過最簡單的標記語言，它可以用相當簡單和直觀的方式來寫出好看的文章，且遠比 LaTeX 和 HTML 好學，~~連 [@郭10](https://yilinguo121.github.io/) 都學得會，問題應該是不大~~。

### LaTeX
另一種標記語言，上手相當難，但排板非常規範，~~根本論文人惡夢~~。

它的專長是用來寫數學、物理、化學的各種符號或公式。

當然，我們這裡不會用到整篇的那種 LaTeX，只會在用要寫數學公式時用到一點點，其他的排板部分就交給 MD 吧。

### YAML
一種文件，副檔名為 `.yaml` 或 `.yml`，在架站時，它主要是用來作為各種設定檔的檔案。要注意的是，這種檔案對於空格極為敏感，故從其他地方複製時請小心。

### IDE
中文叫「整合開發環境」，~~我沒聽過任何一個資工人會稱它的中文就是了~~。例如我們在寫一個 Python 程式，其實我們只需要有 Python 環境，建一個以 `.py` 為副檔名的檔案，再直接用記事本來寫，理論上也是可行的，但相信我，沒有人會這麼做的，<span class="spoiler" onclick="this.classList.add('open')">除了我第一次去參加 APCS 時不知道他們電腦裡有 IDE 以外</span>，用記事本可以寫到你懷疑人生。

那為了方便開發者寫程式，就有了 IDE 的出現，它除了會有各種語法高亮、靜態錯誤提示（即程式執行前先預測並標記出可能報錯的地方的功能）、一鍵編譯程式、各種好用的 GUI（圖形介面）以外，現在甚至有一些整合了 LLM（大語言模型）。目前最紅的 IDE 就是由微軟推出的 Visual Studio Code（VS Code、VSC），~~微軟為數不多獲得高度好評的軟體~~。

### Git/GitHub
其實 Git 和 GitHub 是兩個完全不同的東西，GitHub 只不過是其中一個用 Git 架構開發的程式碼放置與公開網站，其他還有如 GitLab、Bitbucket 等，不過這裡會以 GitHub 為主來講解。

- Git：專門用來做版本控制的好用工具，我們可以用它來建立倉庫（Repository、Repo），並方便地在不同版本間切換，讓回溯版本變得簡單
- GitHub：一個遠端數據庫，可以用來放自己的程式碼上去，它是我們的這次架站的主角之一

### GitHub Pages
GitHub 的功能之一，用託管自己的靜態網站（也就是不會用到資料庫和後端的網站）上去，並產生一個免費的公開網址。需要特別注意，Pages 架個網時，需把 Repo 名稱設為 `username.github.io`（`username` 換成 GitHub 帳號名）。

### GitHub Actions (CI/CD)
簡單來說，CI/CD 就是自動化檢查與部署，而 Actions 是 GitHub 完成這個工作的工具。以這次的架站任務來說，它可以用來幫你把推上 GitHub 的 MD 原碼自動透過 Hexo 線上編譯成 HTML，再自動部署成新網站。

### Hexo
它是一個利用 Node.js 開發的架網站框架，在這個架構下，你可以用 Markdown 來寫文章，再透過它把它編譯（可以想像成是翻譯）成 HTML。

Hexo 框架也有許多現存的模板可以直接套，對於不會寫 CSS ~~或沒什麼美感~~的人而言，它是一個快速建立好看網站的好用工具。

## 準備環境
### Git
1. 使用 Windows 和 macOS 者，可以到[官網](https://git-scm.com/)用 GUI 安裝，就和安裝其他軟體流程差不多；用 Linux 者，可以使用以下指令安裝：

  ```bash
  sudo apt update
  sudo apt install git
  ```

2. 下載完 Git 後，可以打開 Terminal，並輸入：

  ```bash
  git config --global user.name "你的 GitHub username"
  git config --global user.email "你的 Email"
  ```

### Node.js
用 Windows 和 macOS 者，可以到[官網](https://nodejs.org/zh-tw)用 GUI 安裝；用 Linux 者，可使用以下指令安裝：

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### GitHub
去到 GitHub，創建一個新 Repo，並將名稱設為 `username.github.io`（`username` 換成自己 GitHub 的帳號名），記得將 `Visibility` 設為 `Public`，因為只有付費帳號才享有 `Private` 的 Pages 功能（免費帳號設為 `Private` 的話，Pages 託管的網站會直接 _404 NOT FOUND_）。

### Hexo
此步請在完成 Node.js 安裝後才能執行。

1. 安裝 Hexo 主程式
```bash
npm install -g hexo-cli
```

2. 建立部落格資料夾（放原檔內容）
```bash
hexo init my-blog
cd my-blog
npm install # 若無法執行，可改用管理員權限的 Terminal
```

3. 預覽測試
```bash
hexo s
```

4. 在瀏覽器中打開 `http://localhost:4000`，你應該會看到一個預設的網站，並且出現一篇名為「Hello World」的文章，代表前面的安裝步驟都沒問題，確認完後即可關閉瀏覽器視窗；若網站無法正常顯示，表示先前安裝有問題，~~那就只好自求多福啦~~，你可以檢查：
   1. GitHub Repo 是否為公開（`Public`）
   2. Hexo 和套件（`npm install` 指令裝的東西）是否安裝在網站（`my-blog`）同目錄
   3. `_config.yml` 中的 `url` 有沒有填錯
   4. 問問看 AI 並一步步排查錯誤

## 部署到 GitHub Pages
1. 在根目錄（`my-blog`）下創建一個檔案 `.gitignore`（若有則免創），並貼上以下內容：

  ```gitignore
  .DS_Store
  Thumbs.db
  db.json
  *.log
  node_modules/
  public/
  .deploy*/
  _multiconfig.yml
  ```

2. 下載部署的插件 `hexo-deployer-git`：

  ```bash
  npm install hexo-deployer-git --save
  ```

3. 去 Hexo 的 [Themes](https://hexo.io/themes/) 頁面，找一個自己喜歡的網站模板（主題），點進去後，依下圖複製其網址，再用指令 clone 到自己電腦中

  {% img /img/fluid_github.png %}

  ```bash
  git submodule add <貼上剛 GitHub 複製的東西>
  ```

  {% note info %}
  未來若在其他電腦 clone 自己個網的 Repo，記得執行 `git submodule update --init --recursive` 才能抓回主題檔案
  {% endnote %}

  {% note warning %}
  請注意，雖然整體 Hexo 架構是用 MD 寫文章，但許多不同模板仍可能會加入額外（不屬於標準 MD）的語法，因此請謹慎選擇主題，否則日後若要換主題，那些主題獨有語法會失效，更改的時間成本會隨文章數日漸變多而變高
  {% endnote %}

  {% note default %}
  因為會有部分語法不被原生 MD 支援，故 IDE 的 MD 預覽也可能與最終效果不合
  {% endnote %}

4. 打開 `/my-blog/_config.yml` 文件，你可以先將文件取代成以下這一份，再依以下文件內的指示（所有中文字的部分，分別為第 6, 7, 8, 9, 10, 16, 108 行）填入自己的資訊：

  ```yml
  # Hexo Configuration
  ## Docs: https://hexo.io/docs/configuration.html
  ## Source: https://github.com/hexojs/hexo/

  # Site
  title: "網站標題"
  subtitle: "網站副標題"
  description: "網站簡介"
  keywords: 關鍵字1, 關鍵字2, ...
  author: "你的名字"
  language: zh-TW
  timezone: Asia/Taipei

  # URL
  ## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
  url: https://你的名字.github.io
  root: /
  permalink: :title/
  permalink_defaults:
  pretty_urls:
    trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
    trailing_html: true # Set to false to remove trailing '.html' from permalinks

  # Directory
  source_dir: source
  public_dir: public
  tag_dir: tags
  archive_dir: archives
  category_dir: categories
  code_dir: downloads/code
  i18n_dir: :lang
  skip_render:

  # Writing
  new_post_name: :title.md # File name of new posts
  default_layout: post
  titlecase: false # Transform title into titlecase
  external_link:
    enable: true # Open external links in new tab
    field: site # Apply to the whole site
    exclude: ''
  filename_case: 0
  render_drafts: false
  post_asset_folder: false
  relative_link: false
  future: true
  syntax_highlighter: highlight.js
  highlight:
    enable: false
    line_number: true
    auto_detect: false
    tab_replace: ''
    wrap: true
    hljs: false
  prismjs:
    enable: false
    preprocess: true
    line_number: true
    tab_replace: ''

  # Home page setting
  # path: Root path for your blogs index page. (default = '')
  # per_page: Posts displayed per page. (0 = disable pagination)
  # order_by: Posts order. (Order by date descending by default)
  index_generator:
    path: ''
    per_page: 10
    order_by: -date

  # Category & Tag
  default_category: 未分類
  category_map:
  tag_map:

  # Metadata elements
  ## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
  meta_generator: true

  # Date / Time format
  ## Hexo uses Moment.js to parse and display date
  ## You can customize the date format as defined in
  ## http://momentjs.com/docs/#/displaying/format/
  date_format: YYYY-MM-DD
  time_format: HH:mm
  ## updated_option supports 'mtime', 'date', 'empty'
  updated_option: mtime

  # Pagination
  ## Set per_page to 0 to disable pagination
  per_page: 10
  pagination_dir: page

  # Include / Exclude file(s)
  ## include:/exclude: options only apply to the 'source/' folder
  include:
  exclude:
  ignore:

  # Extensions
  ## Plugins: https://hexo.io/plugins/
  ## Themes: https://hexo.io/themes/
  theme: 主題名稱

  # Deployment
  ## Docs: https://hexo.io/docs/one-command-deployment
  deploy:
    type: git
    repo: https://github.com/你的名字/你的名字.github.io.git
    branch: main
  ```

  {% note warning %}
  YAML 檔對空格相當敏感，`:` 的後面一定要加一個空格（除非沒東西）
  {% endnote %}

5. 根據不同主題，你可能需要去設定那個主題自己的 `_config.主題.yml` 或各頁 `index.md` 等，這部分會因各主題而有所不同，所以推薦直接用 AI（我推薦 Gemini，它架站效率比 ChatGPT 好很多），你可以用以下的 prompt，並依自己的需求更改：

  ```text
  我在使用 Hexo 架設網站，目前我進行到設定主題，我使用的主題是 {主題名稱}，我已經將它 clone 下來，也在 _config.yml 中設置好了，除此之外就沒做任何其他多餘的設定了。
  請帶我一步步設定各個頁面（about, archives, tags, categories, links, etc.）的 index.md，包含 front-matter 和主題的 _config.yml（完整內容，你也可以叫我去某個網站先載範本後再教我改）。
  過程中若有不同設定或偏好要向我確認，你可以先向我問清楚。
  ```

6. 到 GitHub 個網 Repo 中，`Settings` &rarr; `Actions` &rarr; `General` &rarr; `Workflow permissions` 將權限改為 `Read and write permissions`

7. 在根目錄（`my-blog`）下，創一個資料夾 `.github`（若已存在則免創），再在裡面創建另一個資料夾 `workflows`（若已存在則免創），最後再在裡面創建檔案 `deploy.yml` 並貼上以下內容：

  ```yml
  name: Hexo Deploy

  on:
    push:
      branches:
        - main

  concurrency:
    group: hexo-deployment-${{ github.head_ref || github.ref }}
    cancel-in-progress: true

  permissions:
    contents: write

  jobs:
    build_and_deploy:
      runs-on: ubuntu-latest
      steps:
        - name: Checkout source
          uses: actions/checkout@v4
          with:
            submodules: recursive
            fetch-depth: 0

        - name: Setup Node.js
          uses: actions/setup-node@v4
          with:
            node-version: "20"
            cache: "npm"

        - name: Install Dependencies
          run: npm ci || npm install

        - name: Generate Files
          run: |
            npx hexo clean
            npx hexo generate

        - name: Deploy to gh-pages
          uses: peaceiris/actions-gh-pages@v4
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./public
            publish_branch: gh-pages
            enable_jekyll: false
            force_orphan: true
  ```

8. 試將以上程式碼推到 GitHub 上

  ```bash
  git init
  git remote add origin <Repo 網址>
  git branch -M main
  git push -u origin main
  ```

9. 到 GitHub 的那個網站 Repo 中，`Settings` &rarr; `Pages` &rarr; `Build and deployment` 中，確認 `Source` 是選到 `Deploy from a branch`，並且底下 `Branch` 的部分從 `main` 改為 `gh-pages`
10. 到 `Settings` &rarr; `Environments` 中有一個 `Allow administrators to bypass configured protection rules` 選項打勾
11. 等它 CI/CD 過了後，可以打開 https://你的名字.github.io/ 看看網站是否正常上線了

## （可選）加上插件
插件的種類有非常多，具體要用什麼就看你自己的需求，具體怎麼設定可以問問 AI，這章節我會說我裝的兩個我覺得最實用的功能插件。

### MathJax
這個插件是用來支援 LaTeX 的強大工具。

1. 安裝插件
  ```bash
  npm install hexo-filter-mathjax --save
  ```

2. 這裡分為兩種情況

   - 現代化主題
     1. 打開主題的設定檔 `_config.主題.yml`
     2. 搜尋 `math` 或者 `mathjax`
     3. 將它底下的 `enable` 設為 `true`

   - 極簡主題
      若完全搜尋不到 `math` 或 `mathjax` 關鍵字，則打開根目錄的 `_config.yml`（不是主題的），在最後面加入以下配置：
      ```bash
      # 寫在根目錄的 _config.yml 最下方
      math:
        engine: 'mathjax'
        mathjax:
          src: https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
      ```

### Giscus
這是用來啟用留言功能的，其原理是直接串接你這個 GitHub Repo 的 Discussions。

1. 先到自己 GitHub Repo 中，`Settings` &rarr; `General` &rarr; `Features` &rarr; 勾選 `Discussions`
2. 到 [GitHub ciscus](https://github.com/apps/giscus) 並點擊 `Configure`
3. 到 [giscus.app](https://giscus.app/zh-TW)，在 `儲存庫` 輸入 `<GitHub 帳號>/<倉庫名稱>`，並向下滑到 `啟用 giscus`
4. 這裡一樣分為兩種情況

   - 現代化主題
     1. 打開主題設定檔 `_config.主題.yml`
     2. 搜尋 `giscus`，將對應的參數從剛才的網頁複製過來：
      ```yml
      comments:
        enable: true
        type: giscus

      giscus:
        repo: "你的帳號/儲存庫名稱"
        repo_id: "網頁上的 data-repo-id"
        category: "Announcements"
        category_id: "網頁上的 data-category-id"
        mapping: "pathname" # 或 title
        theme: "light"
        lang: "zh-TW"
      ```

   - 極簡主題
    若找不到任何 `comments` 字樣，代表主題不支援，那就只能暴力嵌入了

    直接在每篇文章（或頁面，例如 `about/index.md`）最後面貼上那個網站裡 `啟用 giscus` 下方 code block 的內容

## （可選）設定 Discord 發文自動提醒
你可以指定一個 DC 伺服器的某個特定頻道，在你每次發文時，自動發送通知。

1. 進入你的 DC 伺服器，選擇一個想要接收通知的頻道，進入 頻道設定 &rarr; `整合` &rarr; `Webhook` &rarr; `新 Webhook`，展開後可設定發文機器人的名稱和頭貼
2. 複製 Webhook 網址
3. 回到 GitHub Repo 的 `Settings` &rarr; `Secrets and variables` &rarr; `Actions` &rarr; `New repository secret`
   - Name: `DISCORD_WEBHOOK`
   - Secret：貼上剛才複製的 Webhook 網址

4. 在 `/.github/workflows/` 下建立 `notify.yml`，貼上以下內容，並按需修改第 39, 41, 48, 53, 56 行
  ```yml
  name: Discord Notification

  on:
    push:
      branches:
        - main

  jobs:
    notify:
      if: startsWith(github.event.head_commit.message, 'publish')
      runs-on: ubuntu-latest
      steps:
        - name: Checkout code
          uses: actions/checkout@v3
          with:
            fetch-depth: 2

        - name: Get New Post Filename
          id: get_file
          run: |
            git config --global core.quotepath false
            
            NEW_POST=$(git diff --name-only HEAD^ HEAD | grep "source/_posts/" | grep ".md" | head -n 1)
            
            if [ -z "$NEW_POST" ]; then
              echo "post_name=" >> $GITHUB_OUTPUT
            else
              POST_NAME=$(basename "$NEW_POST" .md)
              echo "post_name=$POST_NAME" >> $GITHUB_OUTPUT
            fi

        - name: Send Message to Discord
          run: |
            POST_PATH="${{ steps.get_file.outputs.post_name }}"
            ENCODED_PATH=$(python3 -c "import urllib.parse; print(urllib.parse.quote('$POST_PATH'))")
            
            if [ -z "$POST_PATH" ]; then
              FINAL_URL="https://名稱.github.io/"
              DISPLAY_TITLE="前往 網站名稱"
            else
              FINAL_URL="https://名稱.github.io/$ENCODED_PATH/"
              DISPLAY_TITLE="$POST_PATH"
            fi

            curl -H "Content-Type: application/json" \
            -X POST \
            -d "{
              \"content\": \"通知訊息\",
              \"embeds\": [{
                \"title\": \"$DISPLAY_TITLE\",
                \"url\": \"$FINAL_URL\",
                \"color\": 5814783,
                \"description\": \"點擊上方連結閱讀全文內容\",
                \"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"
              }],
              \"allowed_mentions\": { \"roles\": [\"被提及的身分組 ID\"] }
            }" \
            ${{ secrets.DISCORD_WEBHOOK }}
  ```

5. 以後每次寫完文章後，在 commit message 中以 `publish` 作為開頭（前綴），即可發送通知

  {% note warning %}
  CI/CD 腳本只會抓取第一篇修改過的 MD 內容，因此一次只能上傳一篇
  依我的習慣，會單獨將「把 front-matter 的 `hide` 改為 `true`」作為單獨一次 commit/push
  {% endnote %}

## 寫文章
1. 可以到 `/scaffolds/post.md` 中修改想要的 front-matter（即被 `---` 包住的部分）的模板，不會修改的話也可以問問看 AI，以下放上我的作為參考（可刪註解後再使用）：
  ```yml
  ---
  title: {{ title }} # 會自動代入，不用改
  date: {{ date }} # 會自動代入，不用改
  excerpt: "" # 文章說明
  categories:
    - 筆記與教學
    - 程式
  tags:
    - 筆記
    - 教學
    - 程式
  math: false # 會用到 MathJax 時開啟
  mermaid: false # 繪製流程圖用的語法
  hide: true # 發布文章時設為 false
  ---

  ```

  {% note primary %}
  `hide` 那一項主要是用於隱藏還沒寫完的文章，該項為 `true` 時，文章不會顯示在文章們中，也無法被搜尋功能找到，只能以網址開啟
  發布公開文章時，請記得將它設為 `false`
  {% endnote %}

  {% note danger %}
  請勿發布含有敏感資訊或不合法內容，即使 `hide: true`，因為 GitHub Repo 是 `Public`，其他人仍有辦法透過原始碼來看到那些 hide 起來的內容
  {% endnote %}

2. 建立一篇新文章，用指令建立時會自動複製樣板（`/scaffolds/post.md`）
  ```bash
  hexo new "文章標題"
  ```

  {% note success %}
  你可以到 `/source/_posts` 中將模板的 `hello-world.md` 刪除，但網站中必須至少存在一篇文章，否則連「關於我」頁都會報 _404 NOT FOUND_
  {% endnote %}

3. 使用 MD 語法來撰寫整篇文章，若要使用 AI，請先和它說明你用的主題名稱；若想自己寫，也可以先問 AI 來學你用的主題有沒有什麼特殊語法

  {% note default %}
  因為標題已經交給 front-matter 了，因此文章從 H2（`##`）標題寫起即可
  {% endnote %}

4. 若有插入檔案的需求，可以將檔案放到 `/source/資料夾（可自創）` 裡面，並在文章內以 `/資料夾` 來指定，但具體嵌入檔案語法會因不同主題而不同，故此部分可問 AI

  {% note info %}
  所有檔案名稱盡量不要有中文、特殊符號和空格（最好只用英文、數字和底線命名）
  {% endnote %}

5. 寫完後，可以使用以下指令建立本機預覽，並可在 `http://localhost:4000` 中看到網站預覽
  ```bash
  hexo cl && hexo g && hexo s
  ```

  > 使用 Windows CMD 者請改用 `;` 取代 `&&`

6. 文章寫完後，只需要將文章推到 GitHub 上即可
  ```bash
  git add .
  git commit "填寫自己的 commit message"
  git push
  ```
  {% note info %}
  若你有照我先前教的設定通知的 DC Bot，則 commit message 請以 `publish` 開頭（限發文章時，若是修改其他設定的 commit，則不可以它開頭）
  （commit message 對大小寫敏感，因此 `Publish` 並不能觸發通知的流程）
  {% endnote %}

  {% note success %}
  推到 GitHub 後，需等個一、兩分鐘，等它 CI/CD 流程跑完後網站才會更新，因此請耐心等候
  {% endnote %}
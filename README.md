# 淳の神奇小網站

這是「淳の神奇小網站」的原始碼儲存庫，使用 [Hexo](https://hexo.io/zh-tw/) 建置，並採用 [Fluid](https://github.com/fluid-dev/hexo-theme-fluid) 主題。網站主要分享程式設計、競賽與營隊、學習筆記、證照及個人經歷。

- 網站：[https://chuen666666.com](https://chuen666666.com)
- 語言：繁體中文（zh-TW）
- 部署平台：GitHub Pages

## 技術與功能

- Hexo 8 靜態網站產生器
- Fluid 響應式部落格主題
- Markdown 文章撰寫
- 分類、標籤、封存、RSS 與 Sitemap
- GitHub Actions 自動建置及部署
- 發布文章時透過 Discord Webhook 發送通知

## 開始使用

### 環境需求

- [Node.js](https://nodejs.org/) 24（與 GitHub Actions 使用的版本一致）
- npm
- Git

### 安裝

```bash
git clone https://github.com/Chuen666666/Chuen666666.github.io.git
cd Chuen666666.github.io
npm ci
```

### 本機預覽

```bash
npm run server
```

啟動後開啟 `http://localhost:4000` 即可預覽網站。

若要在啟動前清除快取，並於伺服器關閉後再次清理，可執行：

```bash
npm run dev
```

### 建置網站

```bash
npm run clean
npm run build
```

產生的靜態網站會存放於 `public/` 目錄。

## 撰寫文章

建立新文章：

```bash
npx hexo new post "文章標題"
```

文章會建立於 `source/_posts/`。完成內容後，建議先執行 `npm run server` 在本機確認排版與連結是否正確。

## 部署

推送至 `main` 分支後，[GitHub Actions](.github/workflows/deploy.yml) 會自動：

1. 安裝相依套件。
2. 清除快取並產生靜態網站。
3. 驗證必要頁面是否存在。
4. 將網站部署至 GitHub Pages。

提交訊息以 `publish` 開頭時，[Discord 通知工作流程](.github/workflows/notify_dc.yml) 也會嘗試發送新文章通知；此功能需要在 GitHub Actions Secrets 中設定 `DISCORD_WEBHOOK`。

專案也保留 Hexo 的 Git 部署指令：

```bash
npm run deploy
```

使用前請確認 `_config.yml` 中的 `deploy` 設定與 GitHub 權限均正確。

## 專案結構

```text
.
├── .github/workflows/   # GitHub Actions 工作流程
├── scaffolds/           # Hexo 文章與頁面範本
├── source/
│   ├── _posts/          # 部落格文章
│   ├── about/           # 關於頁面
│   ├── links/           # 友情連結頁面
│   ├── css/             # 自訂樣式
│   ├── js/              # 自訂 JavaScript
│   └── img/             # 圖片資源
├── themes/fluid/        # Fluid 主題檔案
├── _config.yml          # Hexo 網站設定
└── package.json         # 相依套件與 npm 指令
```

`node_modules/`、`public/`、`db.json` 與部署暫存目錄皆為本機產生內容，不會納入版本控制。

## 常用指令

| 指令 | 用途 |
| --- | --- |
| `npm run server` | 啟動本機預覽伺服器 |
| `npm run dev` | 清除快取後預覽，結束時再次清理 |
| `npm run build` | 產生靜態網站 |
| `npm run clean` | 清除 Hexo 快取與產出內容 |
| `npm run deploy` | 透過 Hexo Deployer 部署網站 |

## 授權

本專案採用 [MIT License](LICENSE) 授權。

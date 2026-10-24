# 專案代理指引

## 適用範圍

本檔案適用於整個儲存庫。子目錄若有自己的 `AGENTS.md`，應同時遵守其中更具體的規則。

## 專案概要

- 這是「淳の神奇小網站」的 Hexo 8 靜態部落格，主要內容語言為繁體中文（zh-TW）。
- 正式網址為 `https://chuen666666.com`，時區為 `Asia/Taipei`。
- 網站使用 Fluid 主題；全站設定位於 `_config.yml`，主題設定位於 `themes/fluid/_config.yml`。
- GitHub Actions 使用 Node.js 24，推送至 `main` 後會建置並部署至 GitHub Pages。

## 修改原則

- 修改前先閱讀 `package.json`、相關設定及鄰近檔案，延續現有格式與命名方式。
- 使用繁體中文撰寫網站文字與專案文件；不要未經要求改寫作者的口吻、經歷或主張。
- 只修改任務需要的檔案。工作區中既有的未提交內容視為使用者資料，不得覆蓋或清除。
- 不要直接編輯 `node_modules/`、`public/`、`.deploy_git/` 或 `db.json`；它們是安裝、建置或部署產物。
- 不要提交憑證、Webhook URL、Token 或其他秘密。工作流程中的秘密必須透過 GitHub Actions Secrets 引用。
- 新增資源時使用清楚、穩定的檔名，並確認大小寫與文章引用完全一致；GitHub Pages 執行於區分大小寫的環境。

## 文章編輯

- `source/_posts/` 中的文章必須以成對的 `---` 包住 YAML front matter。
- 延續現有欄位格式。`date` 使用 `YYYY-MM-DD HH:mm:ss`；`categories` 與 `tags` 使用 YAML 清單；`math`、`mermaid`、`hide` 使用布林值。
- `excerpt` 若存在，必須是非空字串；沒有摘要時省略整個欄位，不要留下空白的 `excerpt:`，否則 Hexo 可能報出 `null is not a string`。
- 除非使用者提供資料或明確要求，勿虛構第一人稱經歷、成績、活動細節或個人資訊。
- 圖片通常放在 `source/img/`，影片放在 `source/video/`。文章內使用網站根目錄路徑，例如 `/img/example.jpg`，並核對檔名大小寫。
- 保留既有 Markdown、HTML、Liquid/Hexo 標籤及 `{% raw %}` 區塊的語意；不要只為統一格式而大量重排文章。

## 常用指令

```bash
npm ci
npm run server
npm run clean
npm run build
```

Windows PowerShell 若因執行原則無法執行 `npm.ps1`，可使用對應的 `npm.cmd`，例如 `npm.cmd run build`。

## 驗證要求

- 一般內容或設定變更至少執行 `npm run build`。
- 相依套件變更應使用 npm 更新 `package-lock.json`，再執行乾淨安裝或建置。
- 修改 CSS、JavaScript、版型或主題時，除建置外還要以本機伺服器檢查首頁、文章頁及受影響頁面的桌面與行動版呈現。
- 若驗證被既有內容錯誤阻擋，應回報確切檔案、錯誤訊息與已完成的其他檢查，不要把無關修正混入任務。
- 編輯文章後應確認 front matter 沒有意外空值，並在本機預覽標題、摘要、目錄、程式碼區塊、媒體與內部連結。

## Git 與部署注意事項

- 不要提交被 `.gitignore` 排除的產物。
- 不要自行推送、部署或觸發外部通知，除非使用者明確要求。
- `npm run deploy` 會寫入遠端部署儲存庫；僅在明確授權後執行。
- `npm run p` 會加入全部變更、建立 commit 並推送，不應作為一般驗證指令。

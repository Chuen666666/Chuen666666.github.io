# GitHub Actions 編輯指引

## 適用範圍

本檔案適用於 `.github/workflows/` 下的工作流程，並補充根目錄的全域指引。

## 現有流程

- `deploy.yml` 在推送至 `main` 時，以 Node.js 24 建置 Hexo、驗證必要頁面，再部署至 GitHub Pages。
- `notify_dc.yml` 僅在 `main` 分支的提交訊息以 `publish` 開頭時發送 Discord 通知。
- 工作流程在 Ubuntu runner 上執行，因此多行 `run` 區塊預設使用 Bash，而非 PowerShell。

## 修改規則

- 維持最小權限原則；只有部署工作需要的 job 才應取得 Pages 或 OIDC 權限。
- 使用 `${{ secrets.NAME }}` 取得秘密，不要把秘密值、Webhook URL 或測試憑證寫入 YAML、日誌或範例。
- 保留 npm lockfile 快取與可重現安裝。若更改 Node.js 版本，需同步更新 README 與其他相關設定。
- 更新 action 版本時使用官方 action 與明確的主要版本，並先閱讀該版本的官方遷移說明。
- Shell 變數一律加上適當引號；將檔名、文章標題與 JSON 內容視為可能包含空白、Unicode 或特殊字元。
- 修改部署驗證清單時，應與 Hexo 實際產生的必要頁面保持一致。
- 不要為了測試而推送 `main`、部署 Pages 或真的送出 Discord 訊息，除非使用者明確授權。

## 驗證

- 檢查 YAML 語法、縮排、expression 語法及 action 輸入名稱。
- 對建置流程的修改，先在本機執行對應的 `npm ci`、`npm run clean` 與 `npm run build`。
- 對 shell 區塊的修改，確認它們可在 `ubuntu-latest` 的 Bash 環境執行，並考慮空值與找不到文章等情況。
- 交付時說明哪些部分只做了靜態檢查、哪些需要在 GitHub Actions 環境才能完整驗證。

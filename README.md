# 個人作品集網站

一個純靜態的個人作品集網站（React + Vite + Tailwind），沒有後端、沒有資料庫、沒有登入系統 —— 所有內容都是程式碼裡的靜態資料，安全性由「根本沒有機密可洩漏」來保證。

## 怎麼新增/編輯內容

不透過任何後台介面，直接請 Claude 修改對應的內容檔案就好：

- 專案作品：`src/content/projects.ts`
- 部落格文章：`src/content/posts.ts`
- 音樂：`src/content/music.ts`
- 影片：`src/content/videos.ts`
- 分類：`src/content/categories.ts`

範例指令：
- 「幫我新增一篇部落格文章，標題是『...』，內容是：...」
- 「幫我把 YoutubetoVocab 這個專案的 summary 改成：...」
- 「幫我新增一首音樂，標題『...』，音檔放在 public/assets/music/」

圖片、音檔、影片檔案請放在 `public/assets/` 底下對應的資料夾（`projects/`、`music/`、`videos/`），程式碼裡用 `/assets/xxx/檔名` 的路徑引用（畫面上實際顯示時會自動補上正確的網站子路徑，不用自己處理）。

## 本機預覽

```bash
npm install
npm run dev
```

## 部署

已設定 GitHub Actions（`.github/workflows/deploy.yml`），每次 push 到 `main` 分支會自動建置並部署到 GitHub Pages。第一次啟用，需要到 repo 的 **Settings → Pages → Build and deployment → Source** 選擇 **GitHub Actions**。

網站網址會是：`https://<你的 GitHub 帳號>.github.io/jung-portfolio/`

如果之後想換成自訂網域，改 `vite.config.ts` 裡的 `base: "/"`，並在 `public/CNAME` 放你的網域名稱。

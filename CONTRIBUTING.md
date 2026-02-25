# 如何貢獻 Connectome 網站

歡迎你！這份指南寫給**不熟悉軟體開發**、但願意一步步跟著做的人。  
遇到不懂的詞彙或步驟，可以問 AI（例如 Gemini、ChatGPT）或自己搜尋，通常都能找到答案。

---

## 一、先搞懂這些（必讀一次）

### 1.1 內容放在哪裡

網站所有可編輯的內容都在 `content/` 資料夾底下：

| 類型 | 路徑 |
|------|------|
| 文章 | `content/posts/<文章代號>/` |
| 活動 | `content/events/<活動代號>/` |
| Connect 吧 | `content/connectbar/<代號>/` |

每一篇內容都有自己的資料夾，裡面的 `index.md` 是文字內容，文章需要的圖片也請放在同一個資料夾中。

### 1.2 提交變更的流程（Branch + Pull Request）

不論你做哪一種修改，最後都要透過 **Pull Request（PR）** 把變更送給維護團隊審核。  
流程概略（和名詞對應）如下：

1. **Fork** 或 **建立 Branch**：在 GitHub 上複製一份專案，或開一個「分支」，讓你的修改不會直接影響營運中的網站。
2. **編輯**：在[自己的電腦](#五本機預覽選用)或 GitHub 網頁上改檔案。
3. **Commit**：把修改「存檔」成一個版本。
4. **開 Pull Request**：提交寫好的版本給編輯團隊，請編輯團隊把你的修改合併進主線。
5. **Merge**：編輯團隊審核通過後合併，網站會自動重新部署，幾分鐘內就能在 [connectome.tw](https://connectome.tw) 看到更新。

> 不熟悉 Git / GitHub？可以搜尋「GitHub 教學 初學者」或問 AI：「如何 Fork 一個 GitHub 專案並開 Pull Request」。  
> 若你是 [connectome-tw GitHub](https://github.com/connectome-tw/) 的成員，可以直接在專案裡建立 Branch，不必 Fork。

---

## 二、修改/新增內容的情境

### 情境一：只改既有文件的幾個字

1. 找到要改的檔案：到 `content/posts/`、`content/events/` 或 `content/connectbar/` 底下，找到對應文章／活動的資料夾。
2. 開啟該資料夾裡的 `index.md`，直接修改文字。
3. 依照 [1.2 提交變更的流程](#12-提交變更的流程branch--pull-request) 開 PR。

### 情境二：新增幾篇文章

1. 在 `content/posts/` 底下新增一個資料夾，名稱建議用英文或數字（例如 `my-new-post`）。
2. 在該資料夾裡建立 `index.md`，參考現有文章格式（例如 `content/posts/china-express-column-3/index.md` 或 `content/posts/2nd-ascent-boot-camp-antiangiogenesis-drug-delivery/index.md`）。
3. 在 `index.md` 中填寫 **Front Matter**（檔案最上方 `---` 包起來的那段），例如：
   - `title`：標題
   - `date`：發布日期（格式如 `"2014-01-19T00:00:00Z"`，會影響文章在首頁的排序）
   - `authors`：作者（對應 `content/authors/` 或 `data/authors/` 裡的代號）
   - `columns`：所屬專欄（若有）
   - **五種 tag**（可複選，用於文章分類與篩選）：
     | 欄位 | 說明 | 範例選項 |
     |------|------|----------|
     | `industry` | 產業 | 製藥、醫材、醫療照護、智財、顧問、食品、生物資訊… |
     | `job_function` | 職務 | 研究開發、專案管理、事業開發、臨床試驗、行銷… |
     | `region` | 地區 | 台灣、美國、中國、亞太、歐洲 |
     | `topic` | 議題 | 職涯、新創、學習與跨領域、產業動態 |
     | `scope` | 範疇 | 個人、團隊、社群、產業、組織 |
   - `images`：**僅用於文章卡片的顯圖**（首頁、列表頁、文章頂部那張圖）。只需放一張，例如 `["feature.jpg"]`（圖片名稱不需要叫 feature，想叫什麼就叫什麼）。
   - 當然最重要的是文章的內文啦。
   - 內文中想要使用的其他圖片，用 Markdown 語法 `![](圖片檔名.jpg)` 直接插入在文章內即可，**不必**寫進上面 Front Matter 的 `images` 中。
4. 把所有用到的圖片和文章一起，都放在**同一資料夾**。（卡片顯圖必須和 Front Matter 中 `images` 裡寫的檔名完全一樣才找得到。）
5. 依照 [1.2 提交變更的流程](#12-提交變更的流程branch--pull-request) 開 PR。

### 情境三：更新作者資訊（頭像、自介等）

作者資訊分散在三個地方，需要一起調整：

| 項目 | 位置 |
|------|------|
| 頭像圖片 | `assets/images/authors/<作者代號>.jpg` 或 `.png` |
| 作者頁名稱與介紹 | `content/authors/<作者代號>/_index.md` |
| 小卡顯示（名稱、圖片路徑、簡介） | `data/authors/<作者代號>.json` |

**步驟：**

1. 若要換頭像：把新圖片放到 `assets/images/authors/`，檔名與 `data/authors/<作者代號>.json` 裡的 `image` 對應（例如 `images/authors/李明澤.jpg`）。
2. 修改 `content/authors/<作者代號>/_index.md` 的標題與內文。這裡的內容會出現在作者專屬頁面上。
3. 修改 `data/authors/<作者代號>.json` 的 `name`、`image`、`bio`、`social` 等欄位。這裡的內容則會出現在文章內的作者資訊小卡上。
4. 依照 [1.2 提交變更的流程](#12-提交變更的流程branch--pull-request) 開 PR。

### 情境四：新增一個作者

1. 在 `content/authors/` 底下新增資料夾 `<作者代號>`（建議用英文或數字，例如 `new-author`）。
2. 在該資料夾裡建立 `_index.md`，填寫標題與介紹。這裡的內容會出現在作者專屬頁面上。
3. 在 `data/authors/` 底下新增 `<作者代號>.json`，參考現有檔案格式（例如 `data/authors/allen-tsai.json`），填寫 `name`、`image`、`bio`、`social`。這裡的內容會出現在文章內的作者資訊小卡上。
4. 若有頭像，放到 `assets/images/authors/<作者代號>.jpg`（或 `.png`），並在 json 的 `image` 欄位寫 `images/authors/<作者代號>.jpg`。
5. 新文章若要掛這位作者，在該文章的 Front Matter 的 `authors` 填 `["<作者代號>"]`。
6. 依照 [1.2 提交變更的流程](#12-提交變更的流程branch--pull-request) 開 PR。

### 情境五：新增一個專欄

專欄需要動到兩個地方：

1. **文章 Front Matter**：在每篇屬於該專欄的文章裡，於 `columns` 欄位加上專欄名稱，例如 `columns: ["新專欄名稱"]`。
2. **選單設定**：在 `config/_default/menus.zh-tw.toml` 裡，參考現有專欄的寫法，新增一筆選單項目，設定 `name`、`parent = "menu-columns"`、`url`（例如 `/columns/新專欄名稱/`）、`weight`。

完成後依照 [1.2 提交變更的流程](#12-提交變更的流程branch--pull-request) 開 PR。

---

## 三、編輯

**權限**：必須是 [connectome-tw GitHub](https://github.com/connectome-tw/) 的成員，才有編輯權限。

**主要工作**：

- 審核別人提交的 Pull Request（檢查內容、格式、連結等）。
- 確認沒問題後，將 PR **Merge** 到 `main` branch。
- Merge 後，GitHub Actions 會自動部署，網站會在幾分鐘內更新。

---

## 四、網管／開發新功能

若要開發新功能（例如開放 Giscus 留言、使用 Decap CMS 做前端編輯介面等），需要動到專案架構與部署流程。

**建議**：先聯絡官方維護者討論需求與可行性，再決定實作方式。  
本專案以**維運成本最低**為優先，因此會謹慎評估每項新功能。

---

## 五、本機預覽（選用）

若想在提交前先看看網站長什麼樣子，可以在本機跑起來：

1. **安裝 Hugo**：  
   - Mac 建議用 [Homebrew](https://brew.sh/)：`brew install hugo` (Windows 作業系統的話請自行詢問 AI：我該如何在本機安裝 Hugo 並部署網站服務？) 
   - **或者**到 [Hugo 官網](https://gohugo.io/installation/) 下載對應作業系統的版本。  
   - 需 Hugo ≥ 0.141.0。

2. **初始化主題並啟動**：
   ```bash
   git submodule update --init themes/blowfish
   hugo serve
   ```

3. 在瀏覽器開啟 http://localhost:1313/ 即可預覽。

---

## 小結

- **作者**：改內容 → 開 PR → 等 Merge。
- **編輯**：審 PR → Merge 到 main。
- **網管**：新功能先聯絡維護者。

有問題可以開 [GitHub Issue](https://github.com/connectome-tw/connectome-blog/issues) 或詢問維護團隊。

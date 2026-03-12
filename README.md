時光藝廊旅遊相簿

![首頁截圖](./screenshots/homepage.png)

## 📖 專案故事

> **「當攝影愛好者遇上前端開發者」**

我平時最大的興趣就是**用攝影記錄生活**——無論是街角的咖啡店、夕陽下的海邊，還是旅途中的陌生城市，快門按下的瞬間，故事就被定格。

而身為一個前端開發者，我一直想做一件事：**讓我的照片不只是靜態檔案，而是透過我寫的程式碼，變成一個有溫度、可互動的動態攝影集。**

這就是 **時光藝廊** 的誕生。這個專案不只是技術練習，更是我將**兩個最喜歡的興趣結合**的成果——用 Vue 3 打造一個屬於自己的旅遊相簿，讓每一張照片都能被好好展示、被看見、甚至被按讚收藏。

## 🎯 核心功能

- **🖼️ 藝廊列表**：以卡片式佈局展示所有旅遊照片，支援響應式排列
- **📄 照片詳情頁**：點擊卡片進入單一照片頁面，查看更多資訊與故事
- **❤️ 按讚收藏**：可對喜歡的照片按讚，狀態跨頁面同步且永久保存
- **📖 關於頁面**：介紹專案理念與背後故事，搭配隨機照片輪播
- **🎞️ 流暢動畫**：滾動進場、滑鼠視差、頁面轉場，讓瀏覽更有趣

## 🛠️ 技術棧

### 🚀 核心框架
![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D)
![Vite](https://img.shields.io/badge/Vite-建置工具-646CFF)
![Vue Router](https://img.shields.io/badge/Vue_Router-動態路由-42b883)
![Composition API](https://img.shields.io/badge/Composition_API-<script_setup>-4FC08D)

### 📦 狀態管理與資料層
![Pinia](https://img.shields.io/badge/Pinia-狀態管理-yellow)
![LocalStorage](https://img.shields.io/badge/LocalStorage-持久化儲存-FF6B6B)
![JSON](https://img.shields.io/badge/JSON-自建資料庫-000000)

### 🖼️ 圖片處理
![Dynamic Image](https://img.shields.io/badge/動態圖片路徑-new_URL+import.meta.url-42b883)
![Alt SEO](https://img.shields.io/badge/無障礙優化-自訂Alt描述-27ae60)

### 🧩 元件化開發
![Props](https://img.shields.io/badge/Props-元件傳值-4FC08D)
![Slot](https://img.shields.io/badge/Slot-插槽內容-42b883)
![Reusable Components](https://img.shields.io/badge/可複用元件-Card__AboutText-FF6B6B)

### ✨ 動畫與互動
![AOS](https://img.shields.io/badge/AOS-滾動動畫-FF6B6B)
![VueUse](https://img.shields.io/badge/VueUse-滑鼠視差-4FC08D)
![Transition](https://img.shields.io/badge/Transition-頁面轉場-42b883)

### 🎨 前端樣式
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)
![RWD](https://img.shields.io/badge/RWD-響應式設計-27ae60)
![Hover Effects](https://img.shields.io/badge/Hover-懸浮動態效果-FF6B6B)

### 🔧 開發工具
![Git](https://img.shields.io/badge/Git-版本控制-F05032)
![AOS Library](https://img.shields.io/badge/AOS-動畫整合-6B4F9C)

## 📦 主要套件

| 套件 | 用途 |
|------|------|
| **AOS** | 滾動進場動畫整合 |
| **VueUse** | 滑鼠視差效果 (`useMouse`, `useWindowSize`) |
| **Pinia** | 集中式狀態管理與跨頁面資料同步 |
| **Tailwind CSS** | 實現完全響應式設計與客製化樣式 |

## 🧩 核心技術亮點

### 1️⃣ 動態圖片路徑解析
採用 `new URL(path, import.meta.url).href` 技術，完美解決 Vite 開發與生產環境的圖片路徑問題，確保圖片在任何環境都能正確載入。

```javascript
const getImgUrl = (imgName) => {
  return new URL(`../assets/images/${imgName}`, import.meta.url).href
}
```

### 2️⃣ 狀態管理與持久化
使用 **Pinia** 建立 `LikeStore` 集中管理按讚狀態，並結合 **LocalStorage** 實現資料持久化，頁面重整後按讚記錄依然存在，使用者體驗更完整。

```javascript
toggleLike(id) {
  const index = this.likedIds.indexOf(id)
  if (index === -1) {
    this.likedIds.push(id)
  } else {
    this.likedIds.splice(index, 1)
  }
  localStorage.setItem('user_likes', JSON.stringify(this.likedIds))
}
```

### 3️⃣ 多層次動畫整合
- **AOS 滾動動畫**：頁面元素進場時觸發淡入、滑入效果
- **VueUse 視差**：滑鼠移動帶動背景微動，增加沉浸感
- **Transition 轉場**：頁面切換時的流暢過渡動畫

```javascript
const { x, y } = useMouse()
const { width } = useWindowSize()

const parallax = computed(() => {
  const mx = (x.value / width.value - 0.5) * 30
  return { transform: `translateX(${mx}px)` }
})
```

### 4️⃣ 元件化架構
- **Card.vue**：藝廊卡片元件，接收 Props 渲染照片資訊
- **AboutPhotoLeft/Right.vue**：關於頁面左右佈局元件
- **AboutText.vue**：通用文字區塊，支援 Slot 自訂內容

### 5️⃣ 互動體驗優化
- **懸浮動態**：按鈕底線動畫、縮放效果、顏色漸變
- **圖片 Hover**：縮放 + 灰度過渡，增加視覺層次
- **按讚回饋**：即時視覺狀態切換，操作直覺

### 6️⃣ 完全響應式設計
使用 **Tailwind CSS** 響應式類別 (`sm:`、`md:`、`lg:`)，實現手機版照片在上、桌機版文字在左等多種排列變化，適配從手機到桌機的各種螢幕尺寸。

## 🔄 功能流程

```
首頁藝廊列表
      ↓
點擊照片卡片
      ↓
進入照片詳情頁（動態路由 /photo/:id）
      ↓
閱讀照片故事、查看拍攝地點
      ↓
按讚收藏照片（狀態跨頁面同步）
      ↓
前往關於頁面了解專案故事
```

## 🚀 線上 Demo

<!-- 如果有部署可以放連結，沒有的話可以考慮放錄製的示範影片或 GIF -->
[![專案Demo](./screenshots/demo.gif)](你的部署網址或影片連結)

## 📦 本地安裝

```bash
# 克隆專案
git clone https://github.com/Mina-cy/Travel-Album-Side-Project-2
.git

# 進入專案目錄
cd Travel-Album-Side-Project-2

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

## 📁 專案結構

```
src/
├── assets/
│   ├── images/              # 所有照片檔案
│   └── album.json           # 照片資料庫（id、國家、城市、檔名等）
├── components/              # 可複用元件
│   ├── Card.vue             # 藝廊卡片
│   ├── AboutPhotoLeft.vue   # 關於頁面左圖右文
│   ├── AboutPhotoRight.vue  # 關於頁面右圖左文
│   └── AboutText.vue        # 通用文字區塊（支援Slot）
├── stores/
│   └── LikeStore.js         # Pinia 按讚狀態管理
├── views/
│   ├── GalleryView.vue      # 藝廊列表頁
│   ├── PhotoView.vue        # 單一照片詳情頁（動態路由）
│   └── AboutView.vue        # 關於頁面
├── router/
│   └── index.js             # 路由設定（含 /photo/:id）
├── App.vue
└── main.js
```

## 💡 專案亮點

- **興趣與技術結合**：將攝影作品透過自己寫的程式碼完美展示
- **完整的資料流設計**：從 JSON 資料庫到元件渲染，再到 Pinia 狀態管理
- **解決 Vite 痛點**：動態圖片路徑問題的標準解法
- **多元動畫整合**：AOS + VueUse + Transition，讓靜態頁面活起來
- **元件化思維**：每個區塊都可獨立維護，擴充性強

## 🔮 未來展望

- [ ] **相簿分類功能**：依國家、年份篩選照片
- [ ] **照片幻燈片模式**：全螢幕瀏覽體驗
- [ ] **留言互動功能**：讓訪客可以分享心得
- [ ] **深色模式**：自動跟隨系統主題
- [ ] **多國語系**：支援中英文切換

## 📞 聯絡作者

- **作者**：Mina
- **GitHub**：[@Mina-cy](https://github.com/Mina-cy)
- **Instagram**：[@melisande_voyage](https://www.instagram.com/melisande_voyage)
- **專案連結**：[https://github.com/Mina-cy/Travel-Album-Side-Project-2
.git](https://github.com/Mina-cy/Travel-Album-Side-Project-2.git)

## 📄 授權

MIT License © 2024 Mina

---

> **如果這個專案有啟發到你，別忘了按顆星星 ⭐️ 喔！**

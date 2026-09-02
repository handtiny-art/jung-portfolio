export const zh = {
  // Navigation
  nav: {
    home: "首頁",
    projects: "作品集",
    blog: "部落格",
    music: "音樂",
    videos: "影片",
    admin: "後台管理",
    login: "登入",
    logout: "登出",
  },

  // Home page
  home: {
    badge: "Product Manager",
    heroTitle1: "Hi, 我是一位",
    heroTitle2: "產品經理",
    heroDesc: "專注於打造以用戶為中心的產品體驗，熱愛數據驅動決策，同時也是音樂與影像創作的愛好者。這裡是我的個人作品集與創作空間。",
    viewProjects: "查看作品集",
    readBlog: "閱讀文章",
    skills: "技能專長",
    explore: "探索內容",
    projectsDesc: "產品經理專案展示，包含完整的產品設計流程、用戶研究與成果數據。",
    blogDesc: "分享產品思維、業界觀察與個人成長，記錄每一段學習旅程。",
    musicDesc: "原創音樂作品與翻唱，探索聲音的無限可能。",
    videosDesc: "影像創作、紀錄片與各類視覺作品展示。",
  },

  // Projects page
  projects: {
    title: "作品集",
    desc: "這裡收錄了我擔任產品經理期間主導或參與的專案，涵蓋產品策略、用戶研究、功能設計等完整流程。",
    all: "全部",
    empty: "尚無作品",
    emptyHint: "請稍後再來查看",
    featured: "精選",
    viewProject: "查看專案",
    viewGithub: "GitHub",
    screenshots: "專案截圖",
    comments: "評論",
    backToProjects: "返回作品集",
    notFound: "找不到此作品",
    notFoundHint: "此作品可能已被移除或網址有誤。",
  },

  // Blog page
  blog: {
    title: "部落格",
    desc: "分享產品思維、業界觀察與個人成長，記錄每一段學習旅程與深度思考。",
    empty: "尚無文章",
    emptyHint: "請稍後再來查看",
    backToBlog: "返回部落格",
    notFound: "找不到此文章",
    notFoundHint: "此文章可能已被移除或網址有誤。",
    comments: "評論",
    publishedAt: "發布於",
  },

  // Music page
  music: {
    title: "音樂作品",
    desc: "這裡收錄了我的原創音樂與翻唱作品，每一首都是對聲音的探索與表達。",
    empty: "尚無音樂作品",
    emptyHint: "請稍後再來查看",
    nowPlaying: "正在播放",
    noTrack: "尚未選擇曲目",
    clickToPlay: "點擊曲目開始播放",
  },

  // Videos page
  videos: {
    title: "影片作品",
    desc: "影像創作、紀錄片與各類視覺作品，用鏡頭記錄生活與創意。",
    empty: "尚無影片作品",
    emptyHint: "請稍後再來查看",
    unavailable: "影片無法播放",
  },

  // Comments
  comments: {
    title: "評論",
    loginToComment: "登入後發表評論",
    login: "登入",
    placeholder: "分享您的想法...",
    submit: "發表",
    submitting: "發表中...",
    empty: "尚無評論，成為第一個留言的人！",
    delete: "刪除",
    deleteConfirm: "確定刪除此評論？",
    charCount: "字",
  },

  // Admin
  admin: {
    dashboard: "儀表板",
    projects: "作品集管理",
    posts: "文章管理",
    music: "音樂管理",
    videos: "影片管理",
    comments: "評論管理",
    stats: {
      projects: "作品",
      posts: "文章",
      music: "音樂",
      videos: "影片",
      comments: "評論",
    },
    add: "新增",
    edit: "編輯",
    delete: "刪除",
    save: "儲存",
    cancel: "取消",
    published: "已發布",
    draft: "草稿",
    featured: "精選",
    loading: "載入中...",
    noData: "尚無資料",
    deleteConfirm: "確定刪除？",
    uploadImage: "上傳圖片",
    uploadAudio: "上傳音樂",
    uploadVideo: "上傳影片",
    uploading: "上傳中...",
    loginRequired: "請先登入",
    accessDenied: "權限不足",
    accessDeniedHint: "此頁面僅限管理員存取。",
    quickStart: "快速開始",
    quickStartHint: "只有標記為「已發布」的內容才會顯示在公開頁面上。",
  },

  // Common
  common: {
    loading: "載入中...",
    error: "發生錯誤",
    notFound: "找不到頁面",
    backHome: "返回首頁",
    readMore: "閱讀更多",
    tags: "標籤",
    noTags: "無標籤",
    copyright: "版權所有",
  },
} as const;

export type TranslationKeys = typeof zh;

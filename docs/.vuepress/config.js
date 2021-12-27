module.exports = {
  title: "自我养成笔记",
  description: "跑不过时间，也跑不赢通胀",
  dest: "./dist",
  port: "7777",
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav: require("./nav"),
    sidebar: require("./sidebar"),
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: "更新",
      },
    },
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页 ！",
  },
};

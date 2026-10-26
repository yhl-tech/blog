import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "zh-CN",
  title: "亮仔",
  description: "Web 前端开发者的笔记与公开项目",
  base: "/",
  themeConfig: {
    logo: "/images/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "项目", link: "/projects/" },
      { text: "文章", link: "/articles/" },
      { text: "关于", link: "/about/" },
    ],
    sidebar: false,
    socialLinks: [{ icon: "github", link: "https://github.com/yhl-tech" }],
    footer: {
      message: "文章尚未发布。项目链接只指向公开仓库。",
      copyright: "Copyright © 2026 亮仔",
    },
  },
  head: [
    ["meta", { name: "theme-color", content: "#646cff" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
})

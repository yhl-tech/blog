---
title: 项目
layout: doc
---

# 项目

只列出 [yhl-tech](https://github.com/yhl-tech) 名下的公开仓库。下面这些仓库都没有公开的演示地址，所以这里不放「在线访问」链接。

## docFlow

文档相关的全栈项目。仓库分成 `frontend/` 和 `backend/`，根目录没有 README。

- 前端：Next.js、React、TypeScript、Tailwind CSS（`frontend/package.json`）
- 后端：Python、FastAPI。`backend/README.md` 写了 Word 导出，以及用 Pandoc 解析 docx 里的公式
- 源码：[github.com/yhl-tech/docFlow](https://github.com/yhl-tech/docFlow)

## dataFactory

数据处理项目，前端和后端分两个仓库。

- 前端：[github.com/yhl-tech/dataFactory](https://github.com/yhl-tech/dataFactory)。React、TypeScript、Vite、Ant Design、ECharts、Tailwind CSS。仓库 README 仍是 Vite 模板，外加 pnpm 的安装和启动说明
- 后端：[github.com/yhl-tech/dataFactory-server](https://github.com/yhl-tech/dataFactory-server)。Python、FastAPI。后端 README 把它描述为数据采集、处理、分析和展示服务

## xlcs

`package.json` 里的名字是 `rorschach-test`，描述是「知己心探测试系统」。仓库内技术文档把它写成基于罗夏墨迹测验的在线评测前端。

- 技术栈：Vite、JavaScript；开发时用 Express 做 API 代理
- 源码：[github.com/yhl-tech/xlcs](https://github.com/yhl-tech/xlcs)

## 这个博客

- 技术栈：VitePress、Vue、pnpm
- 源码：[github.com/yhl-tech/blog](https://github.com/yhl-tech/blog)
- 文章还没有发布。GitHub 仓库主页上登记的 Vercel 地址目前打不开，所以这里不放网站链接。重新部署的步骤写在仓库 README 里

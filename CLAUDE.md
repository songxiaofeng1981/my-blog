# my-blog

## Project Essentials

**Stack:** Astro 4 + Tailwind CSS + @tailwindcss/typography  
**Articles:** `src/content/posts/*.md`  
**Components:** `src/components/` | **Layouts:** `src/layouts/` | **Pages:** `src/pages/`  
**Dev:** `npm run dev` → http://localhost:4321/my-blog/  
**Build:** `npm run build`  
**Deploy:** push to `main` → GitHub Actions auto-deploys to https://songxiaofeng1981.github.io/my-blog/

## Article Frontmatter (required)

```yaml
---
title: 文章标题
description: 一句话摘要（显示在首页卡片）
date: 2026-01-01
tags: [标签1, 标签2]
---
```

## Project Rules

- `title` + `description` + `date` 三字段必填，缺一构建报错
- 所有内部链接用 `import.meta.env.BASE_URL.replace(/\/$/, '') + '/posts/slug'`，不可硬编码 `/my-blog`
- 新组件/页面严格放对应目录，根目录只放配置文件
- 移动端优先：所有新增 UI 必须在手机宽度验证
- Windows 拖入的文件检查并删除 `.md:Zone.Identifier` 垃圾文件

## Publish New Article

```bash
# 1. 新建文章
touch src/content/posts/my-new-post.md

# 2. 写完后一键发布
git add src/content/posts/my-new-post.md
git commit -m "post: 文章标题"
git push
```

## Network (WSL2)

npm 安装依赖需切 AliDNS + 淘宝镜像：
```bash
sudo bash -c "echo 'nameserver 223.5.5.5' > /etc/resolv.conf"
npm install --registry=https://registry.npmmirror.com
```

# my-blog

## Project Essentials

**Stack:** Astro 4 · Tailwind CSS utilities · @tailwindcss/typography  
**Articles:** `src/content/posts/*.md`  
**Paths:** `src/components/` · `src/layouts/` · `src/pages/` · `src/styles/global.css`  
**Dev:** `npm run dev` → http://localhost:4321/my-blog/  
**Build/Deploy:** `npm run build` · push to `main` → GitHub Actions → https://songxiaofeng1981.github.io/my-blog/

## Frontmatter (all required)

```yaml
---
title: 文章标题
description: 一句话摘要（首页卡片展示）
date: 2026-01-01
tags: [标签1, 标签2]
---
```

## Project Rules

- `title` · `description` · `date` 三字段必填，缺一构建报错
- 组件内样式用 Tailwind utilities；全局样式改 `src/styles/global.css`
- 文章正文由 PostLayout 的 `prose` 类包裹，勿删该 class
- 数据表格/图表必须用 `overflow-x-auto` 包裹，确保移动端横向滚动
- 内部链接：`import.meta.env.BASE_URL.replace(/\/$/, '') + '/posts/slug'`（禁止硬编码 `/my-blog`）
- 新组件/页面严格归对应目录，根目录只放配置文件
- Windows 拖入的文件需删除同名 `.md:Zone.Identifier`

## Publish Workflow

```bash
# 仅新增或修改文章时，建议使用轻量模型以大幅降低 Token 成本：
# claude --model claude-haiku-4-5-20251001

git add src/content/posts/<slug>.md
git commit -m "post: 文章标题"
git push
```

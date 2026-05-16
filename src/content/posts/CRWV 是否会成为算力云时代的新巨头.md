---
title: CRWV 是否会成为算力云时代的新巨头
description: CoreWeave 能否在 Google/Amazon 主导的云市场之外跑出"中立算力代工厂"位置？本文从产业结构、竞争壁垒与期权属性三个维度拆解 CRWV 的投资逻辑。
date: 2026-05-16
tags: [AI基础设施, 个股研究, 算力云, CRWV]
---

## 核心问题

CoreWeave 作为一个"中间无关"的纯算力供应商,能否在 Google/Amazon 主导的云市场之外,跑出第三极位置——类似 TSMC 在 fabless 革命中占据的"中立代工"角色?

## 关键判断框架

### 1. 中立性是真实存在的产业位置

- Google 做 Gemini → 和 OpenAI/Anthropic 利益冲突
- AWS 深度绑定 Anthropic → 和 OpenAI 关系微妙
- Azure 深度绑定 OpenAI → 其他模型公司不放心
- **CoreWeave 没有自己的模型业务,是唯一能让前 10 大模型公司里 9 家同时押注的供应商**

这个位置的存在不是巧合,是 hyperscaler 商业模式与模型公司利益结构性冲突的产物。

### 2. "缺点反转为优点"的范式

参照 TSMC 当年:重资产、长周期、客户集中,这些 90 年代的劝退点在产业成熟后变成不可复制的壁垒。

CoreWeave 类似候选:
- **客户集中**(MSFT 67%):反面是"被最难的工程需求训练过",二线 neocloud 重建不来
- **高 capex + 高杠杆**:反面是"investment-grade HPC 抵押融资能力本身是壁垒",资本成本持续低于追赶者
- **过度依赖 Nvidia**:反面是"成为 Nvidia 生态里唯一被祝福的纯云代理人",Nvidia 不能/不愿亲自做云
- **没有自己的模型业务**:反面是"中立性可信,所有人都能用",和 TSMC 放弃自有产品同构

### 3. AI workload 不是传统云的延伸,是新物种

这是为什么 AWS/GCP 的软件优势失效的根本原因:
- **传统云商业模式**:用计算吸引你,用周边服务(RDS/S3/Lambda/IAM)套牢你
- **AI workload 反转了这个结构**:计算本身就占成本的绝大部分,套牢策略失效
- **H100 价差**:AWS $6.88/h vs neocloud $2/h,3 倍价差大到无法用"生态便利"合理化
- **企业正在主动放弃 hyperscaler 软件栈**:DIY 推理栈(vLLM + Triton + Ray)使用比例 2026 年 1→2 月从 11.3% 跳到 17.9%

亚马逊的软件优势是"传统云软件"的优势,AI workload 需要的是"AI-native 软件"——两个不同物种。

### 4. 折旧不是问题,利用率才是

参照 TSMC 的 5nm/3nm 折旧逻辑:
- 设备折旧巨大,但服务全球几百家 fabless 客户,单位有效产出的折旧成本最低
- CoreWeave 同理:GPU 折旧快,但客户基数 + 调度效率高,**单位有效产出的折旧成本低于企业自建**(企业自建 GPU 利用率普遍 5%)

## 期权属性的本质

> "如果这个模式成立,他只要是其中之一,由于 AI 算力巨大的市场,他的市值不会是现在这点。如果不成立,我损失是有限的。"

**Sizing 量化(2030 年视角):**
- 保守情景:Gartner 估 neocloud 占 530 亿美元市场,CRWV 30% 份额 = 160 亿营收 × 5-8 PS = **800-1280 亿市值**
- 激进情景:Nebius 估 GaaS 市场 2600 亿,CRWV 30% = 780 亿营收 × 5-8 PS = **3900-6240 亿市值**
- 今天市值 **585 亿**

下行损失上限 = 仓位本身。上行参与 1.5x-10x 分布。**不对称回报极强。**

## 完整论点的结构

赌两件事同时成立:
1. **产业判断**:neocloud 这个角色会稳定存在,最终出现 2-3 个赢家
2. **公司判断**:CoreWeave 在前 2-3 名位置足够稳固

后者比前者好判断——backlog 994 亿、9/10 模型公司客户、Nvidia 入股 + Vera Rubin 首发权、investment-grade 融资,四条叠加目前没有第二家。

## 真正该跟踪的产业级信号

不是季度财报 beat/miss,是:

1. **hyperscaler 是否被迫降价 GPU instance** → 压缩 neocloud 价格优势,留下纯中立性优势
2. **Google/AWS/Microsoft 是否收缩自家模型业务** → 给中立供应商让位的关键信号
3. **企业 DIY 推理栈使用比例曲线** → 衡量 hyperscaler 软件壁垒的瓦解速度
4. **第二家"被前沿实验室共同选中"的 neocloud 是否出现** → 检验工程壁垒的稀缺性
5. **大型非 AI 原生企业(银行/药企/制造)是否开始通过 neocloud 部署** → 中立算力溢出 frontier lab 群体的信号
6. **前沿实验室自研芯片的实际部署比例**(非新闻稿) → 决定 CoreWeave 的天花板

## 同路人(值得长期跟踪的产业分析者)

- **InfoWorld / David Linthicum**:系统论证"hyperscaler 正把自己定价出 AI 市场",立场最锋利
- **Vultr 提出的 "alternative hyperscaler" 概念**:论证 AI 系统快速迭代需要可替换组件,反对垂直整合锁定
- **Gartner / Mike Dorosh**:提出 "AI placement strategy",neocloud 占 20% 市场是产业主流认知下限
- **Tech Fund**:最严谨的反方,核心反驳是"周边服务缺失",作为对照组持续读
- **The Diligence Stack**:三种 neocloud 商业模式拆解(全栈/中间路线/只租电),细颗粒度对比

## 现状定位

我处在"概率还估不出来,但不对称性已经看清楚"的阶段。
- 已完成:用一句话讲清楚 payoff 不对称性
- 未完成:估出"产业成立概率 × CRWV 头部概率"的具体数字

这个阶段就该**小仓位 + 持续学习**,做的事和说的话一致即可。等到能给出具体概率估算的那天,就是起左营的时刻。

## 待跟进问题(下次研究的种子)

1. **Nebius vs CoreWeave 的深度对比**——Tech Fund 提到 Nebius 在软件服务层比 CoreWeave 更领先,这是真的吗?如果是,意味着什么?需要单独做一次拆解。
2. **Vera Rubin 上市时 H100/H200 的处置路径**——这是 GPU 折旧风险的第一次真实压力测试,需要在 Nvidia 路线图清晰后专题分析。
3. **CoreWeave 收购 W&B/OpenPipe/Monolith 后的整合进度**——这决定了它能否从"算力代工厂"升级成"AI 平台公司",是 TSMC 估值天花板与更高估值的分水岭。需要每季度追踪一次。
4. **"AI workload 真的不需要传统云的周边服务吗?"**——Tech Fund 那派的反驳的强度完全取决于这个问题的答案。需要找几个真实的 AI 原生企业 CTO 访谈或 case study 来验证。
5. **第二家被前沿实验室共同选中的 neocloud 何时出现**——这个信号一旦出现,要重新评估"工程壁垒"的稀缺性论点。
6. **Anthropic / Meta / OpenAI 自研芯片的实际部署节奏**——不是 PR 稿,是产能上线的真实数据。这是 CoreWeave 长期 TAM 的硬约束。

## 相关笔记

- [[AI 时代 SaaS 估值范式的重构]]——seat-based vs consumption-based,P/E 压缩逻辑
- [[执行迭代复利 vs spray-and-pray 领导力]]——耐心持有期权 + 持续学习的方法论基础
- [[投资中的"缺点反转为优点"范式]]——TSMC / Costco / 重资产生意的通用模型

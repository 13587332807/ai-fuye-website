# 🚀 AI副业指南网站 — 从零到变现完整操作手册

> 本手册覆盖从建站到稳定变现的全流程，按步骤执行即可。

---

## 目录

1. [第一步：购买域名并部署网站](#第一步购买域名并部署网站)
2. [第二步：Google AdSense 申请与配置](#第二步google-adsense-申请与配置)
3. [第三步：百度联盟申请与配置](#第三步百度联盟申请与配置)
4. [第四步：AI工具联盟营销（Affiliate）](#第四步ai工具联盟营销affiliate)
5. [第五步：安装广告代码并优化收益](#第五步安装广告代码并优化收益)
6. [第六步：持续内容运营与流量增长](#第六步持续内容运营与流量增长)

---

## 第一步：购买域名并部署网站

### 1.1 域名购买推荐

| 平台 | 域名后缀 | 价格/年 | 推荐理由 |
|--------|--------|----------|----------|
| 阿里云万网 | .com/.net | ¥55-69 | 国内访问快，备案方便 |
| 腾讯云 | .com/.net | ¥55-69 | 与腾讯生态整合好 |
| Namecheap | .com | $6-12 | 国外平台，不需要备案 |
| Cloudflare | .com | 成本价 | 最适合技术人员 |

**推荐域名组合：**
- `aifuye.net`（主域名，已购买）
- `aifuye.com`（备选，防混淆）
- `aifuye.cn`（国内SEO加分，可选）

### 1.2 网站部署（Vercel + GitHub）

**第1步：创建 GitHub 仓库**
1. 访问 [github.com](https://github.com) 登录/注册
2. 点右上角 `+` → `New repository`
3. 仓库名填 `ai-fuye-website`，选 `Public`
4. 点 `Create repository`

**第2步：上传网站文件**
1. 在仓库页面点 `uploading an existing file`
2. 把本地 `C:\Users\zhula\WorkBuddy\2026-05-24-task-3\ai-fuye-website\` 下所有文件拖进去
3. 包含：`index.html`、`articles/`、`css/`、`js/` 等
4. 点 `Commit changes`

**第3步：Vercel 部署**
1. 访问 [vercel.com](https://vercel.com) 用 GitHub 登录
2. 点 `New Project` → 选择 `ai-fuye-website` 仓库
3. 保持默认设置，点 `Deploy`
4. 约30秒后获得临时域名：`https://ai-fuye-website.vercel.app`

**第4步：绑定自定义域名**
1. 在 Vercel 项目页面点 `Settings` → `Domains`
2. 输入你购买的域名（如 `aifuye.net`）
3. 按提示去域名商添加 DNS 记录（通常是 CNAME 或 A 记录）
4. 等待 5-30 分钟 DNS 生效

---

## 第二步：Google AdSense 申请与配置

### 2.1 申请前的准备条件

**必须满足以下条件才有较高通过率：**

- ✅ 网站已上线且能被正常访问（已完成 ✅）
- ✅ 至少有 **15-20 篇原创文章**（目前7篇，需补充）
- ✅ 网站有清晰的**关于我们、隐私政策、联系方式**页面（已完成 ✅）
- ✅ 网站无暴力、色情、政治敏感内容
- ✅ 网站加载速度快（Vercel 已满足 ✅）

### 2.2 申请步骤

1. 访问 [adsense.google.com](https://adsense.google.com)
2. 用 Gmail 账号登录（没有就注册一个）
3. 点 `开始使用` → 输入你的网站地址 `https://aifuye.net`
4. 填写**收款地址**（用英文或拼音填写，必须真实）
5. 复制 AdSense 提供的 **`ca-pub-xxxxxxxx`** 代码
6. 将点代码粘贴到网站 `<head>` 中（见下方 2.4 节）

### 2.3 审核等待期

- 审核时间：**1-14 天**（通常3-7天）
- 审核期间网站底部会出现 `未经审核的广告`，不影响审核
- 审核通过后，AdSense 后台状态变为**"就绪"**

### 2.4 获取广告代码并安装

审核通过后，在 AdSense 后台：

1. 点左侧 **"广告"** → **"网站"** → **"添加网站"**
2. 选择 **"自动广告"**（推荐，最省心）
3. 复制生成的代码，格式如下：

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456"
     crossorigin="anonymous"></script>
```

4. 将 `ca-pub-xxxxxxxx` 替换成你自己的 ID
5. 粘贴到 `index.html` 和所有文章页面的 `<head>` 标签内

---

## 第三步：百度联盟申请与配置

### 3.1 与 Google AdSense 的区别

| 对比项 | Google AdSense | 百度联盟 |
|--------|----------------|----------|
| 适用地区 | 全球 | 主要中国 |
| 结算货币 | 美元 | 人民币 |
| 最低付款 | $100 | ¥100 |
| 广告相关性 | 高 | 中等 |
| 审核难度 | 较高 | 较低 |

**建议：两个都申请，最大化收益。**

### 3.2 申请步骤

1. 访问 [union.baidu.com](https://union.baidu.com) 用百度账号登录
2. 点 **"立即加入"** → 填写网站信息
3. 等待审核（通常 1-3 天）
4. 审核通过后，在后台获取广告代码
5. 将代码安装到网站（同 AdSense 步骤）

---

## 第四步：AI工具联盟营销（Affiliate）

### 4.1 什么是联盟营销

用户通过你网站上的**专属推荐链接**注册/购买 AI 工具，你获得佣金（通常 20%-40% 分成）。

### 4.2 主流 AI 工具联盟计划

| 工具 | 联盟链接 | 佣金比例 | 结算周期 |
|------|----------|----------|----------|
| **ChatGPT/OpenAI** | [affiliate.openai.com](https://affiliate.openai.com) | 20% | 月结 |
| **Midjourney** | 无官方联盟 | - | - |
| **Notion AI** | [notion.partnerstack.com](https://notion.partnerstack.com) | 30% | 月结 |
| **Canva** | [canva.com/affiliates](https://www.canva.com/affiliates/) | $36/年费用户 | 月结 |
| **Cursor** | [cursor.sh/partners](https://cursor.sh/partners) | 25% | 月结 |

### 4.3 在网站上展示联盟链接

在 `tools.html` 页面中，将普通链接替换为你的联盟链接，并添加 `rel="sponsored nofollow"` 属性：

```html
<a href="https://your-affiliate-link.com" rel="sponsored nofollow" target="_blank">
  <button class="tool-btn">免费试用 ChatGPT Plus</button>
</a>
```

### 4.4 法律合规要求

根据 FTC 规定和中国广告法，**必须 disclosure（披露）**：

- 在 `tools.html` 页面顶部添加："本站包含联盟推广链接，通过此链接购买您无需额外付费，我们会获得少量佣金。"
- 创建独立的 `affiliate-disclosure.html` 页面（已完成 ✅）
- 在网站 footer 添加"推广声明"链接（已完成 ✅）

---

## 第五步：安装广告代码并优化收益

### 5.1 广告位布局建议

| 广告位 | 尺寸 | 预期收益 | 推荐指数 |
|--------|------|----------|----------|
| 顶部横幅（Header 下方） | 728×90 | 高 | ⭐⭐⭐⭐⭐ |
| 文章内页（首屏下方） | 300×250 | 最高 | ⭐⭐⭐⭐⭐ |
| 侧边栏 | 160×600 | 中等 | ⭐⭐⭐ |
| 文章底部 | 728×90 | 中等 | ⭐⭐⭐⭐ |
| 弹窗/浮动 | 自适应 | 高但影响体验 | ⭐⭐ |

### 5.2 广告代码安装位置

**全局广告代码（放在 `<head>` 中）：**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ID"
     crossorigin="anonymous"></script>
```

**具体广告位代码（放在 `<body>` 中）：**
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-YOUR_ID"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

### 5.3 收益优化技巧

1. **内容要长**：2000字以上文章广告曝光更多
2. **关键词要值钱**：写"AI赚钱"、"副业教程"等高单价关键词
3. **移动端适配**：60%流量来自手机，确保广告在手机上显示正常
4. **不要点自己的广告**：会被 Google 封号
5. **耐心等待**：前3个月收益较低，6个月后开始稳定增长

---

## 第六步：持续内容运营与流量增长

### 6.1 内容发布计划

| 时间段 | 发布频率 | 文章类型 |
|--------|----------|----------|
| 第1-2月 | 每周3篇 | 入门教程、工具测评 |
| 第3-6月 | 每周2篇 | 深度案例、变现经验 |
| 6个月后 | 每周1-2篇 | 行业动态、高级技巧 |

### 6.2 外链建设（SEO 核心）

**免费外链渠道：**
1. **知乎**：写相关回答，文末带网站链接
2. **CSDN/掘金**：发布技术文章，作者简介带链接
3. **V2EX**：在对应节点发帖分享
4. **Product Hunt**：提交你的网站（英文）
5. **GitHub**：如果网站有开源部分，放在 README 里

**付费外链（谨慎）：**
- 不要在淘宝/闲鱼买外链（容易被惩罚）
- 可以赞助相关 Newsletter 或博主

### 6.3 流量监测

在 Google Search Console 和百度站长平台查看：
- **曝光量**（Impressions）：文章在搜索结果中出现了多少次
- **点击率**（CTR）：多少人点击了你的链接
- **平均排名**：你的文章在搜索结果中排第几页

---

## 常见问题 FAQ

### Q1：AdSense 一直不通过怎么办？
- 检查是否有抄袭内容（用 [copyscape.com](https://copyscape.com) 检测）
- 补充更多原创文章（至少15篇）
- 确保网站有 `about.html`、`privacy-policy.html` 等合规页面

### Q2：广告收入多久能到账？
- Google AdSense：满 $100 后，次月21日左右打款（电汇/PayPal）
- 百度联盟：满 ¥100 后，次月15日左右打款（支付宝/银行卡）

### Q3：网站流量一直很低怎么办？
- 坚持更新内容（至少6个月）
- 做长尾关键词（如"2026年AI写作接单完全指南"）
- 在社交媒体（小红书、知乎、B站）分享你的文章

### Q4：需要备案吗？
- 如果域名指向**国内服务器**，必须备案
- 你的网站在 **Vercel（国外服务器）**，不需要备案 ✅

---

## 附录：收入预估

| 月访问量 | AdSense 预估收入（美元） | 联盟营销预估收入（美元） | 合计 |
|-----------|------------------------|----------------------|------|
| 1,000 | $1-3 | $0-10 | $1-13 |
| 5,000 | $5-15 | $10-50 | $15-65 |
| 10,000 | $10-30 | $30-150 | $40-180 |
| 50,000 | $50-150 | $200-800 | $250-950 |
| 100,000 | $100-300 | $500-2000 | $600-2300 |

> 💡 **提示**：联盟营销的收入天花板远高于广告，建议重点发展。

---

*最后更新：2026-06-01*

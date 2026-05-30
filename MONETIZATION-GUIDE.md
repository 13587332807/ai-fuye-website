# 🚀 AI副业指南网站 �?从零到变现完整操作手�?
> 本手册涵盖三大变现目标的全部操作步骤，按顺序执行即可�?
---

## 目录

1. [第一步：部署网站上线](#第一步部署网站上�?
2. [第二步：Google AdSense](#第二步google-adsense)
3. [第三步：百度联盟](#第三步百度联�?
4. [第四步：AI工具Affiliate推广佣金](#第四步ai工具affiliate推广佣金)
5. [第五步：替换配置ID并激活](#第五步替换配置id并激�?
6. [收入预估与变现路线图](#收入预估与变现路线图)

---

## 第一步：部署网站上线

> ⚠️ 必须先部署上线！AdSense 和百度联盟都需要审核你的在线网站，本地文件无法申请�?
### 1.1 注册域名（推�?.com�?
| 域名�?| 网址 | 年费 | 备案�?|
|--------|------|------|--------|
| 阿里云（万网�?| wanwang.aliyun.com | ¥55-69/�?| 支持 |
| 腾讯�?| cloud.tencent.com | ¥55-69/�?| 支持 |
| Namecheap | namecheap.com | $6-12/�?| 海外，无需备案 |
| Cloudflare | cloudflare.com | 进价 | 海外，无需备案 |

**推荐域名�?*
- aifuye.net
- ai-fuye.com
- aifuye.cn（需备案�?- aifuye.top（便宜但SEO效果略差�?
### 1.2 部署�?Vercel（免费，推荐�?
**�?步：创建 GitHub 仓库**

1. 访问 [github.com](https://github.com) 注册/登录
2. 点击右上角�?」→「New repository�?3. 仓库名填 `ai-fuye-website`，�?Public
4. 点击「Create repository�?
**�?步：上传网站文件**

5. 在仓库页面点击「uploading an existing file�?6. 把下面整个文件夹的内容拖进去上传�?   ```
   C:\Users\zhula\WorkBuddy\2026-05-24-task-3\ai-fuye-website\
   ```
7. 注意保留目录结构（css/、js/、articles/ 等文件夹�?8. 点「Commit changes�?
**�?步：Vercel 部署**

9. 访问 [vercel.com](https://vercel.com)，点「Sign Up」→ �?GitHub 账号登录
10. 点击「New Project」→ 选择 `ai-fuye-website` 仓库
11. 框架选「Other」，直接点「Deploy�?12. 等待�?30 秒，得到免费域名如：
    ```
    https://ai-fuye-website.vercel.app
    ```

**�?步：绑定自定义域名（可选）**

13. �?Vercel 项目设置 →「Domains」→ 输入你买的域�?14. 按提示在域名商添�?DNS 记录（通常是一�?CNAME �?A 记录�?15. 等待 DNS 生效（通常 5-30 分钟�?
---

## 第二步：Google AdSense

### 2.1 申请前准�?
**必须满足的条件：**
- �?网站已上线，可以通过域名访问
- �?网站有至�?15-20 篇原创文章（你的网站�?7 篇深度文章，满足要求�?- �?网站有完整的关于/联系/隐私政策页面（你的网站已包含�?- �?网站内容不涉及侵权、色情、暴力（你的网站内容健康�?- �?域名注册超过 2 周（建议等域名注�?2 周后再申请）

### 2.2 注册流程

1. 打开 [adsense.google.com](https://adsense.google.com)
2. �?Google 账号登录（没有就注册一�?Gmail�?3. 点击「开始使用�?4. 填写你的网站域名（如 `aifuye.net`�?5. 填写收款国家/地区信息
6. 同意 AdSense 条款
7. **获取 AdSense 代码**：Google 会给你一段代码，其中包含你的发布�?ID，格式如下：
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
   ```
   **记下 `ca-pub-1234567890123456`** �?这就是你�?pubId

8. 把这段代码放在网�?`<head>` 中（你的网站已经放好了，只需要替�?ID�?
### 2.3 等待审核

- 审核时间：通常 **1-14 �?*
- 审核期间网站必须保持可访�?- 审核通过后，Google 会发邮件通知

**审核失败常见原因�?*
- 内容太少（你已有 7 篇文章，但建议增加到 10-15 篇更稳妥�?- 缺少合规页面（你已有隐私政策�?✅）
- 域名注册时间太短（建议等 2 周）
- 使用了其他广告平台（审核期间建议先移除百度联盟）

> 💡 建议：先申请 AdSense，通过后再申请百度联盟�?
### 2.4 审核通过后：创建广告单元

1. 登录 [AdSense 后台](https://adsense.google.com)
2. 点击「广告」→「按广告单元」→「创建广告单元�?3. 创建 3 个广告单元（对应网站不同位置）：
   - **Header 横幅**�?28×90 或响应式
   - **文章�?*：响应式
   - **侧边�?*�?00×250 或响应式
4. 每个广告单元会得到一�?`data-ad-slot`（格式：`1234567890`�?5. 记下�?3 �?slot ID

### 2.5 修改配置文件

打开 `js/ads-config.js`，修改：
```javascript
adsense: {
  enabled: true,
  pubId: 'ca-pub-1234567890123456',  // �?改成你的
  slots: {
    header:    '1234567890',  // �?Header 广告单元 ID
    inArticle: '2345678901',  // �?文章内广告单�?ID
    sidebar:   '3456789012',  // �?侧边栏广告单�?ID
  }
},
```

---

## 第三步：百度联盟

### 3.1 申请前准�?
**百度联盟特有要求�?*
- �?网站已完�?**ICP 备案**（国内域名必须备案）
- �?网站内容不涉及政治敏感、博彩、医疗等（你的网站合规）
- �?有一定原创内容和稳定流量

> ⚠️ 如果�?.com 域名且不备案，可以用 Cloudflare 免费托管（百度联盟审核更难通过）。建议用 .cn 域名+备案，或者先�?AdSense，等流量起来再申请百度联盟�?
### 3.2 注册流程

1. 打开 [union.baidu.com](https://union.baidu.com)
2. 用百度账号登录，点击「立即加入�?3. 选择「网盟推广」合作方�?4. 填写信息�?   - **网站域名**：你的域�?   - **网站名称**：AI副业指南
   - **网站类型**：资�?教育
   - **ICP 备案�?*：（必须有，没有先备案）
   - **网站简�?*：AI副业变现知识分享平台，提供AI写作、AI绘画、AI视频制作等教程和工具推荐

### 3.3 验证网站所有权

百度联盟会提供验证方式（选一种）�?- **文件验证**：下载一�?HTML 文件，上传到网站根目�?- **代码验证**：在网站首页加一�?meta 标签

### 3.4 等待审核

- 审核时间：通常 **3-7 个工作日**
- 审核期间网站必须保持可访�?
### 3.5 审核通过后：创建广告�?
1. 登录 →「合作管理」→「代码位管理�?2. 创建广告位，建议创建以下 3 个：
   - **顶部横幅**�?00×90 �?960×90
   - **文章�?*：自适应�?640×200
   - **侧边�?*�?00×250
3. 每个广告位会得到一段代码，其中包含 `cpro_id`，格式如�?   ```javascript
   var cpro_id = "u1234567";
   ```
4. 记下 3 �?cpro_id

### 3.6 修改配置文件

打开 `js/ads-config.js`，修改：
```javascript
baidu: {
  enabled: true,
  cproId: 'u1234567',  // �?默认 cpro_id
  slots: {
    header:    'u1234567',  // �?Header 广告�?    inArticle: 'u2345678',  // �?文章内广告位
    sidebar:   'u3456789',  // �?侧边栏广告位
  },
  tuiId: '',  // 回弹 ID（可选）
},
```

---

## 第四步：AI工具 Affiliate 推广佣金

### 4.1 可注册的 Affiliate 计划总览

| 工具 | 佣金 | Cookie | 平台 | 难度 | 优先�?|
|------|------|--------|------|------|--------|
| **Canva** | $36/年付�?| 30�?| Impact | �?容易 | 🔴 最�?|
| **ElevenLabs** | 22% �?2�?| 30�?| Partnerstack | �?容易 | 🔴 最�?|
| **Cursor** | 20% 首年 | 60�?| Partner.bz | ⭐⭐ 中等 | 🟡 �?|
| **Jasper** | 25-30% �?2�?| - | Impact | ⭐⭐ 中等 | 🟡 �?|
| **Notion** | $50/激�?| - | 自建 | �?已暂�?| �?不可�?|

### 4.2 Canva Affiliate（Canvassador 计划�?
**注册步骤�?*
1. 访问 Canva Affiliate 页面：[canva.com/affiliates](https://www.canva.com/affiliates)
2. �?Canva 账号登录（没有先注册免费账号�?3. 选择通过 **Impact** 平台加入（Canva �?Affiliate �?Impact 管理�?4. �?Impact 平台注册 Affiliate 账号
5. 搜索 "Canva" �?点击「Join Program�?6. 填写网站信息和推广渠�?7. 等待审核（通常 1-3 天）

**审核通过后：**
- �?Impact 后台获取专属推广链接
- 把网站中所�?`https://www.canva.com/` 替换成你�?Affiliate 链接

**你的网站受影响的位置�?*
- `tools.html`（Canva 工具卡片 CTA�?- `articles/*.html`�? 篇文末推荐工具区块）
- 全站�?**8 �?*

### 4.3 ElevenLabs Affiliate

**注册步骤�?*
1. 访问 [elevenlabs.io/affiliate](https://elevenlabs.io/affiliate)
2. 通过 Partnerstack 平台注册
3. 填写推广信息（网�?URL、月流量、推广方式）
4. 等待审核（通常 1-2 天）

**审核通过后：**
- �?Partnerstack 后台获取专属推广链接
- 把网站中所�?`https://elevenlabs.io/` 替换成你�?Affiliate 链接

**你的网站受影响的位置�?*
- `tools.html`（ElevenLabs 工具卡片 CTA，已标记「推广返佣」）
- `articles/*.html`�? 篇文末推荐工具区块）
- 全站�?**8 �?*

### 4.4 Cursor Affiliate

**注册步骤�?*
1. 访问 [partner.bz/programs/cursor](https://www.partner.bz/programs/cursor)
2. �?Partner.bz 平台注册
3. 搜索 "Cursor" �?点击「Join Program�?4. 填写推广信息
5. 等待审核

**审核通过后：**
- �?Partner.bz 后台获取专属推广链接
- 把网站中所�?`https://cursor.com/` 替换成你�?Affiliate 链接

**你的网站受影响的位置�?*
- `tools.html`（Cursor 工具卡片，已标记「推广返佣」）
- `articles/*.html`�? 篇文末推荐工具区块）
- 全站�?**8 �?*

### 4.5 Jasper AI Affiliate

**注册步骤�?*
1. 访问 [jasper.ai/affiliates](https://www.jasper.ai/affiliates)
2. 通过 Impact 平台申请（Jasper 也在 Impact 上）
3. 填写网站流量和内容方�?4. 等待审核

**审核通过后：**
- 获取专属链接并替�?
### 4.6 ⚠️ Notion Affiliate

Notion �?Affiliate 计划**目前已暂停新申请**。建议：
- 保留 Notion 的推荐内容（对用户有价值）
- 但不标注「推广返佣�?- �?Notion 重新开放后再申�?
---

## 第五步：替换配置ID并激�?
### 5.1 全站需要替换的内容汇�?
| 替换对象 | 位置 | 当前占位�?| 替换�?|
|----------|------|-----------|--------|
| AdSense pubId | `js/ads-config.js` | `ca-pub-XXXXXXXX` | 你的 pubId |
| AdSense slot | `js/ads-config.js` | `0000000000` | 你的 slot ID |
| 百度 cpro_id | `js/ads-config.js` | `xxxxxxxx` | 你的 cpro_id |
| Canva 链接 | 全站 8 �?| `https://www.canva.com/` | Affiliate 链接 |
| Cursor 链接 | 全站 8 �?| `https://cursor.com/` | Affiliate 链接 |
| ElevenLabs 链接 | 全站 8 �?| `https://elevenlabs.io/` | Affiliate 链接 |

### 5.2 操作步骤

1. **�?js/ads-config.js** �?�?AdSense pubId + slots + 百度 cpro_id
2. **全站搜索替换 Affiliate 链接**
   - �?VSCode 或记事本的「查找替换」功�?   - 搜索 `canva.com` �?替换�?Affiliate 链接（URL 后面部分�?   - 搜索 `cursor.com` �?替换�?Affiliate 链接
   - 搜索 `elevenlabs.io` �?替换�?Affiliate 链接
3. **重新部署**
   - 把改动推送到 GitHub
   - Vercel 会自动重新部署（�?30 秒）

### 5.3 激活验证清�?
- [ ] 打开网站首页，检查顶部广告位是否显示
- [ ] 打开一篇文章，检查文章中间广告位和侧边栏广告位是否显�?- [ ] 检�?tools.html，Canva/Cursor/ElevenLabs 按钮链接是否指向 Affiliate 链接
- [ ] 检查文章底部「推荐工具」区块链接是否正�?- [ ] 检查隐私政策页和推广声明页是否可访�?- [ ] 提交 sitemap.xml �?Google Search Console

---

## 第六步：提交搜索引擎收录

### 6.1 Google Search Console

1. 打开 [search.google.com/search-console](https://search.google.com/search-console)
2. 添加你的域名，选择「域名」验证方�?3. 按提示在域名 DNS 添加 TXT 记录（或�?HTML 文件验证�?4. 验证成功后，点击「站点地图」→ 输入 `sitemap.xml` �?提交
5. 之后可以�?GSC 看到收录情况、搜索排名、点击量等数�?
### 6.2 百度站长平台

1. 打开 [ziyuan.baidu.com](https://ziyuan.baidu.com)
2. 用百度账号登录，添加网站
3. 验证网站所有权（文件或代码验证�?4. 提交 sitemap
5. 提交「普通收录」加速收�?
### 6.3 Bing Webmaster

1. 打开 [bing.com/webmasters](https://bing.com/webmasters)
2. 可以直接导入 Google Search Console 的数�?3. 提交 sitemap

---

## 📊 收入预估与变现路线图

### 收入模型（按日均独立访客计算�?
| 月均UV（日均） | 广告收入 | Affiliate佣金 | 合计月收�?|
|---------------|---------|---------------|-----------|
| 1500�?0/天） | ¥200-400 | ¥100-200 | ¥300-600 |
| 3000�?00/天） | ¥400-800 | ¥200-400 | ¥600-1200 |
| 15000�?00/天） | ¥1500-3000 | ¥600-1200 | ¥2100-4200 |
| 30000�?000/天） | ¥3000-6000 | ¥1200-2500 | ¥4200-8500 |
| 150000�?000/天） | ¥12000-24000 | ¥4000-8000 | ¥16000-32000 |

### 6 个月行动路线�?
```
�?1 个月：部�?+ 申请
├── 域名注册 + GitHub + Vercel 部署
├── 完善网站内容（增加到 15 篇文章）
├── 提交搜索引擎收录
└── 申请 AdSense

�?2 个月：等�?+ 引流
├── AdSense 审核期（保持每周更新 1 篇）
├── 在小红书/知乎/B站发布引流内�?├── 申请百度联盟
└── 注册 Canva + ElevenLabs Affiliate

�?3 个月：广告上�?├── AdSense 审核通过 �?替换 pubId
├── 替换 Affiliate 链接
├── 百度联盟审核通过 �?替换 cpro_id
└── 双平台广告开始跑收入

�?4-6 个月：运营增�?├── 坚持每周更新 1-2 �?├── 注册更多 Affiliate（Cursor、Jasper�?├── 分析 GSC 数据，优化关键词
└── 外链建设（行业网站交换友链）
```

---

## ⚠️ 重要提醒

1. **先上线再申请**：AdSense 和百度联盟都审核在线网站
2. **先质量再数量**�?0 篇高质量文章 > 50 篇低质量文章
3. **不要买流�?*：作弊会被封号，永不解封
4. **不要自己点广�?*：Google 会自动检测，点击欺诈直接封号
5. **合规第一**：隐私政策、Affiliate 声明缺一不可
6. **坚持更新**：搜索引擎喜欢活跃的网站

---

*本手册最后更新：2026�?�?0�?
*有任何问题随时找我�?

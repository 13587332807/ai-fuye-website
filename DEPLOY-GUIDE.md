# AI副业指南 - 上线部署完整指南

> 域名：aifuye.net
> 更新时间：2026-05-31

---

## 第一步：注册域名

### 推荐平台
| 平台 | 优势 | 地址 |
|------|------|------|
| 阿里云（万网） | 国内最大，.net 约 ¥55/年 | https://wanwang.aliyun.com |
| 腾讯云 | 价格相近，DNS解析快 | https://dnspod.cloud.tencent.com |
| Cloudflare | 价格最低，约 $10/年，需国外支付方式 | https://www.cloudflare.com |

### 注册步骤（以阿里云为例）
1. 访问 https://wanwang.aliyun.com
2. 搜索 `aifuye.net`，确认可注册
3. 加入购物车，选择注册年限（建议 1-3 年）
4. 创建阿里云账号（需实名认证）
5. 完成支付
6. **务必开启自动续费**（域名过期会被抢注！）

---

## 第二步：选择部署方式

### 方案A：Vercel 部署（推荐 ⭐）

**优势**：免费、全球CDN、自动HTTPS、国内访问速度尚可

#### 步骤1：上传代码到 GitHub
1. 访问 https://github.com，登录/注册
2. 点击右上角 `+` → `New repository`
3. 仓库名填 `ai-fuye-website`，选择 `Public`
4. 点击 `Create repository`
5. 按页面提示，将本地代码推送到 GitHub：
   ```bash
   # 在网站目录执行
   git init
   git add .
   git commit -m "初始提交"
   git remote add origin https://github.com/你的用户名/ai-fuye-website.git
   git push -u origin main
   ```

#### 步骤2：连接到 Vercel
1. 访问 https://vercel.com，用 GitHub 账号登录
2. 点击 `Add New` → `Project`
3. 选择刚才创建的 GitHub 仓库
4. 保持默认设置（Vercel 会自动识别纯静态网站）
5. 点击 `Deploy`（约 1 分钟部署完成）
6. 部署完成后，Vercel 会给你一个 `*.vercel.app` 的临时域名

#### 步骤3：绑定自己的域名（aifuye.net）
1. 在 Vercel 项目页面，点击 `Settings` → `Domains`
2. 输入 `aifuye.net`，点击 `Add`
3. Vercel 会显示需要配置的 DNS 记录（通常是两条 CNAME 或 A 记录）
4. **记录这些 DNS 信息**，下一步要用

---

## 第三步：配置 DNS（域名解析）

### 在阿里云配置 DNS（域名指向 Vercel）

1. 登录阿里云控制台 → `域名` → 找到 `aifuye.net`
2. 点击 `DNS 解析` → `添加记录`

| 记录类型 | 主机记录 | 记录值 | 说明 |
|---------|---------|--------|------|
| A | @ | 76.76.21.21 | 将 aifuye.net 指向 Vercel |
| CNAME | www | cname.vercel-dns.com | 将 www.aifuye.net 指向 Vercel |

> 如果使用 Cloudflare DNS，步骤类似，在 Cloudflare Dashboard 添加相同记录

3. 保存后，**等待 5-30 分钟**让 DNS 生效
4. 访问 `https://aifuye.net`，如果看到你的网站说明成功！

---

## 第四步：提交搜索引擎收录

### Google Search Console（必做）
1. 访问 https://search.google.com/search-console
2. 点击 `添加资源` → `网址前缀` → 输入 `https://aifuye.net`
3. 验证方式选 `HTML 文件上传`：
   - 下载 Google 提供的 HTML 验证文件
   - 放到网站根目录（和 index.html 同级）
   - 重新部署到 Vercel
   - 回到 Search Console 点击 `验证`
4. 验证通过后，在左侧菜单点 `站点地图`
5. 输入 `sitemap.xml`，点击 `提交`

### 百度搜索资源平台（国内流量必做）
1. 访问 https://ziyuan.baidu.com
2. 添加网站 `https://aifuye.net`
3. 验证方式选 `HTML 文件`或 `CNAME 验证`
4. 验证通过后，提交站点地图 `sitemap.xml`
5. **重要**：在「抓取频次」中检查百度是否能正常抓取

### Bing Webmaster Tools
1. 访问 https://www.bing.com/webmasters
2. 添加网站，验证方式同上
3. Bing 收录后会自动同步到 ChatGPT 的搜索结果（Bing 是 ChatGPT 的搜索提供商）

---

## 第五步：申请广告联盟（流量达标后）

### Google AdSense
- **前提**：网站上线后，每日自然流量需达到 ~1000 访问量
- **申请步骤**：
  1. 访问 https://www.google.com/adsense
  2. 用 Gmail 登录，输入网站 `https://aifuye.net`
  3. 等待 Google 审核（通常 1-14 天）
  4. 审核通过后，获取 `data-ad-client` 和 `data-ad-slot` ID
  5. 将 ID 填入 `js/ads-config.js` 的 `ADS_CONFIG.adsense` 部分
  6. 重新部署，广告开始展示

### 百度联盟
- **前提**：网站需备案（ICP 备案），且有稳定流量
- **申请步骤**：
  1. 先完成 ICP 备案（在阿里云申请，约 2-4 周）
  2. 访问 https://union.baidu.com
  3. 提交申请，填写备案号
  4. 审核通过后获取 `cpro_id`
  5. 将 ID 填入 `js/ads-config.js` 的 `ADS_CONFIG.baidu` 部分

---

## 第六步：配置 Affiliate 推广链接

编辑以下文件，将占位链接替换为你的真实推广链接：

| 文件 | 位置 | 说明 |
|------|------|------|
| `tools.html` | 16个工具的 CTA 按钮 | Canva、Cursor、ElevenLabs 等 |
| `articles/ai-writing-guide.html` | 侧边栏"推荐工具" | 文章内推广 |
| `articles/ai-art-money.html` | 侧边栏"推荐工具" | 文章内推广 |
| `articles/ai-video-creator.html` | 侧边栏"推荐工具" | 文章内推广 |
| `js/ads-config.js` | `affiliateLinks` 部分 | 集中管理推广链接 |

### 常用 Affiliate 计划申请地址
- **Canva**（设计工具）：https://www.canva.com/affiliates/
- **Cursor**（AI 编程工具）：https://cursor.sh/affiliate
- **ElevenLabs**（AI 语音）：https://elevenlabs.io/affiliate-program
- **Notion**（笔记工具）：https://www.notion.so/affiliates

---

## 常见问题

### Q：网站部署后样式乱了？
A：检查 CSS 文件路径是否正确，确保所有文件都已推送到 GitHub 并重新部署。

### Q：DNS 配置后网站还是打不开？
A：DNS 生效需要时间（5分钟~48小时），可以用 https://www.whatsmydns.net 查看全球 DNS 传播状态。

### Q：Google AdSense 被拒了？
A：最常见原因：内容不足、内容质量低、导航不清晰。确保网站有至少 15-20 篇原创文章后再申请。

### Q：国内访问 Vercel 速度慢？
A：可以考虑国内 CDN 方案（阿里云 OSS + CDN），或者等流量起来后迁移到国内服务器。

---

## 检查清单

部署前：
- [ ] 域名 aifuye.net 已注册
- [ ] 所有文件中的域名已替换为 aifuye.net
- [ ] `js/ads-config.js` 中的占位符已替换为真实 ID
- [ ] Affiliate 链接已替换为真实推广链接

部署后：
- [ ] 网站可通过 https://aifuye.net 访问
- [ ] Google Search Console 已验证并提交了 sitemap
- [ ] 百度搜索资源平台已验证并提交了 sitemap
- [ ] Bing Webmaster Tools 已验证
- [ ] 网站在 Google/Baidu 搜索中能找到

流量达标后：
- [ ] Google AdSense 已申请并通过
- [ ] 百度联盟已申请并通过（需 ICP 备案）
- [ ] Affiliate 推广链接已全部配置

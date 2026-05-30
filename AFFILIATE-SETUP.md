# 🤑 AI工具推广佣金设置指南

> 网站已完成所有 Affiliate 代码结构预埋。按本指南注册各平台，拿到链接后全站替换即可。
> 📖 完整操作流程请参考 [MONETIZATION-GUIDE.md](./MONETIZATION-GUIDE.md)

---

## 可注册的 Affiliate 计划（按优先级排序）

| 优先级 | 工具 | 佣金 | Cookie | 平台 | 注册链接 | 状态 |
|--------|------|------|--------|------|---------|------|
| 🔴 最高 | **Canva** | $36/年付 | 30天 | Impact | canva.com/affiliates | ✅ 可注册 |
| 🔴 最高 | **ElevenLabs** | 22% 首12月 | 30天 | Partnerstack | elevenlabs.io/affiliate | ✅ 可注册 |
| 🟡 高 | **Cursor** | 20% 首年 | 60天 | Partner.bz | partner.bz/programs/cursor | ✅ 可注册 |
| 🟡 高 | **Jasper** | 25-30% 首12月 | - | Impact | jasper.ai/affiliates | ✅ 可注册 |
| ⚪ 暂停 | **Notion** | $50/激活 | - | 自建 | notion.so/affiliates | ❌ 暂停新申请 |

---

## 各平台注册步骤

### 1. Canva（Canvassador 计划）

**注册入口：** [canva.com/affiliates](https://www.canva.com/affiliates)

1. 用 Canva 账号登录（免费注册即可）
2. 通过 **Impact** 平台申请（Canva 的 Affiliate 由 Impact 管理）
3. 在 Impact 搜索 "Canva" → Join Program
4. 填写网站信息：`你的域名` / 月流量 / 推广方式选 "内容营销"
5. 审核通过后在 Impact 后台获取专属推广链接

**你的网站需替换的位置（约 8 处）：**
- `tools.html` — Canva 工具卡片 CTA 按钮
- `articles/*.html` — 每篇文章底部「推荐工具」区块

---

### 2. ElevenLabs

**注册入口：** [elevenlabs.io/affiliate](https://elevenlabs.io/affiliate)

1. 通过 **Partnerstack** 平台注册
2. 搜索 "ElevenLabs" → Join Program
3. 填写网站 URL 和推广方式
4. 审核通过后在 Partnerstack 后台获取专属链接

**你的网站需替换的位置（约 8 处）：**
- `tools.html` — ElevenLabs 工具卡片（已标记「推广返佣」橙色标签）
- `articles/*.html` — 每篇文章底部「推荐工具」区块

---

### 3. Cursor

**注册入口：** [partner.bz/programs/cursor](https://www.partner.bz/programs/cursor)

1. 在 **Partner.bz** 平台注册
2. 搜索 "Cursor" → Join Program
3. 填写推广信息
4. 审核通过后获取专属 referral link

**你的网站需替换的位置（约 8 处）：**
- `tools.html` — Cursor 工具卡片（已标记「推广返佣」橙色标签）
- `articles/*.html` — 每篇文章底部「推荐工具」区块

---

### 4. Jasper AI

**注册入口：** [jasper.ai/affiliates](https://www.jasper.ai/affiliates)

1. 通过 **Impact** 平台申请
2. 搜索 "Jasper" → Join Program
3. 审核通过后获取专属链接

---

### ⚠️ Notion — 暂停新申请

Notion Affiliate 计划目前暂停接受新成员。建议保留 Notion 的推荐内容（对用户有价值），等重新开放后再申请。

---

## 替换操作指南

拿到每个平台的专属 Affiliate 链接后，用代码编辑器（VSCode / 记事本）的「查找替换」功能：

| 搜索 | 替换为 |
|------|--------|
| `https://www.canva.com/` | 你的 Canva Affiliate 链接 |
| `https://cursor.com/` | 你的 Cursor Affiliate 链接 |
| `https://elevenlabs.io/` | 你的 ElevenLabs Affiliate 链接 |

> 💡 建议：在 VSCode 中按 `Ctrl+Shift+H` 全项目搜索替换

---

## 不可注册的工具

以下工具目前没有公开 Affiliate 计划，保留普通官网链接即可：
- OpenAI / ChatGPT — 无 Affiliate
- Midjourney — 无 Affiliate
- DeepSeek / 豆包 / 通义千问 — 国内大厂暂未开放
- Stable Diffusion — 开源免费，不需要
- Runway — 暂无公开计划

---

*更新日期：2026年5月30日*

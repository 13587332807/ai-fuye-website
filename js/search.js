/* ===================================================
   aifuye.net 全站搜索（纯客户端，无外部依赖）
   索引：核心页面 + 全部文章；输入实时下拉，Enter 跳第一条
   =================================================== */
(function () {
  'use strict';

  /* ---------- 站点索引 ---------- */
  /* cat: 'root' = 根目录页面, 'art' = articles/ 目录文章 */
  var INDEX = [
    { cat: 'root', u: 'index.html', tag: '首页', t: 'AI副业指南 - 2026年最全AI副业变现方法、工具推荐与实战教程', d: 'AI副业变现方法、AI工具推荐、实战教程和成功案例，零基础也能月入3000+', k: '首页 AI副业 AI变现 AI赚钱 AI工具' },
    { cat: 'root', u: 'tools.html', tag: '工具', t: 'AI工具大全：100+款AI工具评测与价格对比', d: 'ChatGPT、Midjourney、Sora、Cursor等AI工具详细评测、价格对比、使用教程', k: 'AI工具 工具大全 ChatGPT Midjourney Cursor Sora 剪映 评测 价格' },
    { cat: 'root', u: 'methods.html', tag: '变现', t: 'AI变现方法大全：20+种经过验证的变现路径', d: 'AI写作、AI绘画、AI视频、AI编程、AI配音等20+种变现方法与操作流程', k: '变现方法 赚钱 副业方法 变现路径' },
    { cat: 'root', u: 'cases.html', tag: '案例', t: '真实案例研究：10+个月入过万的AI副业案例', d: '从0到1还原月入过万的AI副业成功路径，直接复制经验', k: '案例 成功案例 月入过万 案例研究' },
    { cat: 'root', u: 'beginner.html', tag: '入门', t: '零基础入门指南：7天从注册到接第一单', d: '完全不懂AI也能上手，7天计划带你走进AI副业世界', k: '新手入门 零基础 7天计划 入门指南' },

    { cat: 'art', u: 'articles/ai-speaking-video.html', tag: 'AI口播', t: 'AI口播视频副业指南：不露脸不背稿，一条视频10分钟，月入8000+', d: 'HeyGen/硅基智能/剪映数字人工具对比、PAS脚本公式、批量生产流程和5大变现路径', k: '口播 数字人 视频 带货 HeyGen 硅基智能 剪映 腾讯智影 闪剪 脚本 代播' },
    { cat: 'art', u: 'articles/ai-personal-knowledge-base.html', tag: 'AI知识库', t: 'AI个人知识库搭建副业指南：零代码2小时交付，月入3000-15000元', d: 'Coze/Dify零代码搭建AI问答机器人，6大高需求场景+4大变现路径', k: '知识库 RAG 问答机器人 Coze Dify FastGPT AI分身 智能客服 搭建' },
    { cat: 'art', u: 'articles/ai-resume-optimization.html', tag: 'AI求职', t: 'AI简历优化副业指南：一单99-699元，月入5000+的闷声生意', d: '1200万毕业生+6秒简历筛选，三档定价、提示词模板和获客实操', k: '简历 优化 求职 面试 毕业生 求职季 STAR法则 改写' },
    { cat: 'art', u: 'articles/ai-live-clipping.html', tag: 'AI切片', t: 'AI直播切片带货指南：不露脸不写稿，5个号矩阵月入1.5万+', d: '正规授权+AI批量剪辑+挂车佣金，授权渠道、去重三件套和真实收益账本', k: '直播 切片 带货 授权 佣金 矩阵 剪辑 高光' },
    { cat: 'art', u: 'articles/ai-emoji-money.html', tag: 'AI表情包', t: 'AI表情包变现指南：0基础制作微信表情包，月入3000+', d: 'AI生成+上架审核+赞赏变现全流程拆解，附可复制的AI提示词模板', k: '表情包 微信 赞赏 微信表情 IP 定制 即梦' },
    { cat: 'art', u: 'articles/ai-photo-restoration.html', tag: 'AI修复', t: 'AI老照片修复副业指南：一单50-300元的怀旧经济全攻略', d: '用AI修复模糊破损黑白老照片，拆解工具、流程、接单渠道和定价策略', k: '老照片 修复 上色 Remini 黑白 怀旧 银发' },
    { cat: 'art', u: 'articles/ai-agent-development.html', tag: 'AI Agent', t: 'AI Agent开发副业指南：0代码也能月入过万的5条真实路径', d: 'Coze/Dify帮企业搭智能客服、自动化流程、垂直Agent', k: 'Agent 智能体 Coze Dify FastGPT n8n 自动化 客服 私有化' },
    { cat: 'art', u: 'articles/ai-childrens-book.html', tag: '儿童绘本', t: 'AI儿童绘本变现指南：0基础月入5000+的绘本创作全流程', d: '即梦AI+豆包1天出一本绘本，4大渠道拆解，含故事Prompt模板', k: '绘本 儿童 故事 即梦 角色 一致性 亲子' },
    { cat: 'art', u: 'articles/ai-manga-drama-guide.html', tag: 'AI漫剧', t: 'AI漫剧制作全攻略：0基础用AI把小说变成爆款漫剧', d: '平台对比、工具链、制作流程、提示词模板与版权红线', k: '漫剧 动态漫画 小说 改编 红果 番茄 分镜 2D 3D' },
    { cat: 'art', u: 'articles/ai-manga-drama-money.html', tag: 'AI漫剧', t: 'AI漫剧变现指南：6大赚钱渠道拆解，新手先做CPS分销当天出单', d: 'CPS分销佣金50%-90%、平台分账、小说推文、官方保底、商单、私域', k: '漫剧 变现 CPS 分销 分账 保底 商单 私域' },
    { cat: 'art', u: 'articles/ai-digital-human-livestream.html', tag: 'AI数字人', t: 'AI数字人直播带货全攻略：0基础搭建24小时自动卖货直播间', d: '免费工具搭建无人直播间，覆盖抖音/视频号/TikTok三大平台', k: '数字人 直播 带货 无人直播 24小时 抖音 视频号 TikTok' },
    { cat: 'art', u: 'articles/ai-prompt-selling.html', tag: '提示词交易', t: 'AI提示词交易赚钱指南：在PromptBase等平台卖Prompt月入3000+', d: 'PromptBase上27万+提示词在售，从创建到上架全流程拆解', k: '提示词 Prompt PromptBase 交易 出售 模板' },
    { cat: 'art', u: 'articles/ai-youtube-guide.html', tag: 'AI视频', t: 'AI+YouTube副业变现：2026年零基础到月入$3000+', d: 'AI脚本生成、AI配音、AI剪辑全流程，AdSense/联盟营销/频道会员', k: 'YouTube 出海 AdSense 美元 油管 视频 RPM' },
    { cat: 'art', u: 'articles/ai-xiaohongshu-guide.html', tag: 'AI写作', t: 'AI+小红书爆款笔记：2026年从0到10万粉丝', d: 'AI选题、AI写作、AI配图全流程，品牌合作/店铺/私域变现', k: '小红书 笔记 爆款 种草 粉丝 品牌' },
    { cat: 'art', u: 'articles/ai-affiliate-guide.html', tag: '工具评测', t: 'AI联盟营销实战：2026年用AI搭建自动化Affiliate网站', d: 'AI搭建Affiliate网站、生成推广内容、自动化运营的完整方法', k: '联盟营销 Affiliate 佣金 Amazon 网站 推广' },
    { cat: 'art', u: 'articles/ai-writing-guide.html', tag: 'AI写作', t: '2026年AI写作接单完全指南：从入门到月入5000+', d: 'AI写作工具、接单渠道、定价策略、客户沟通技巧', k: '写作 接单 文案 代写 闲鱼 猪八戒 ChatGPT Claude DeepSeek' },
    { cat: 'art', u: 'articles/ai-art-money.html', tag: 'AI绘画', t: 'Midjourney V6 + SD3：AI绘画变现8种方法', d: '头像定制、海报设计、素材出售、NFT、POD周边、课程教学', k: '绘画 Midjourney Stable Diffusion 头像 海报 设计 图库 NFT' },
    { cat: 'art', u: 'articles/ai-video-creator.html', tag: 'AI视频', t: 'Sora + Runway + 剪映：一个人搞定短视频团队的工作', d: 'AI工具组合拳，从脚本到成片完成专业短视频制作全流程', k: '视频 Sora Runway 剪映 短视频 制作 成片' },
    { cat: 'art', u: 'articles/ai-coding-freelance.html', tag: 'AI编程', t: 'Cursor + Copilot：非程序员如何用AI接编程私活', d: '网站搭建、小程序开发等热门接单方向，客单价800-3500元/单', k: '编程 接单 Cursor Copilot 私活 网站 小程序 外包' },
    { cat: 'art', u: 'articles/ai-tools-ranking.html', tag: '工具评测', t: '2026年AI副业必备工具Top 20排行榜（附价格对比）', d: '20款最适合副业的AI工具，写作/设计/视频/编程全品类对比', k: '工具 排行 榜单 Top20 价格 对比 推荐' },
    { cat: 'art', u: 'articles/ai-no-code.html', tag: '无代码', t: 'AI+无代码：搭建能赚钱的AI工具网站（无需编程）', d: 'Bolt.new、v0等AI无代码工具，零基础搭建AI导航站、工具站', k: '无代码 建站 Bolt v0 Lovable 导航站 工具站' },
    { cat: 'art', u: 'articles/ai-cross-border.html', tag: '跨境电商', t: 'AI跨境电商运营全攻略：一个人管理3个店铺的秘密', d: 'AI写Listing、做设计、回客服，多店铺月利润5000+', k: '跨境电商 Shopify Listing 亚马逊 店铺 外贸' },
    { cat: 'art', u: 'articles/ai-audiobook.html', tag: 'AI有声', t: 'AI配音有声书：10本有声书月入5000+的被动收入秘籍', d: '用ElevenLabs制作有声书上传喜马拉雅，持续获得被动分成收入', k: '有声书 配音 ElevenLabs 喜马拉雅 被动收入 朗读' },
    { cat: 'art', u: 'articles/ai-pod-redbubble.html', tag: 'POD电商', t: 'AI设计T恤：Redbubble被动月入$2000+实操指南', d: 'AI设计图案上传POD平台，一年上传200+设计实现被动收入', k: 'POD T恤 Redbubble Printful 周边 定制 被动收入' },
    { cat: 'art', u: 'articles/ai-automation-workflow.html', tag: 'AI自动', t: 'AI自动化工作流：用Zapier+ChatGPT打造24小时赚钱机器', d: 'AI自动化工具搭建自动赚钱系统，从内容生成到发布全流程自动化', k: '自动化 工作流 Zapier Make n8n 流程 效率' },
    { cat: 'art', u: 'articles/ai-knowledge-paid.html', tag: '知识付费', t: 'AI知识付费课程制作：从0到卖出1000份的完整方法', d: '把AI技能变成付费课程，课程设计、定价、推广、社群运营全流程', k: '知识付费 课程 卖课 训练营 社群 定价' },
    { cat: 'art', u: 'articles/ai-xiaohongshu-batch.html', tag: '小红书', t: 'AI+小红书：用AI批量做小红书内容，月涨粉1万的秘诀', d: '选题、文案、图片、发布时间全AI化运营方案', k: '小红书 批量 涨粉 矩阵 运营 内容' }
  ];

  /* ---------- 路径解析 ---------- */
  var inArticles = location.pathname.replace(/\\/g, '/').indexOf('/articles/') !== -1;
  function resolveUrl(entry) {
    if (entry.cat === 'art') {
      return inArticles ? entry.u.replace(/^articles\//, '') : entry.u;
    }
    return inArticles ? '../' + entry.u : entry.u;
  }

  /* ---------- 搜索逻辑 ---------- */
  function search(query) {
    var terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var results = [];
    for (var i = 0; i < INDEX.length; i++) {
      var e = INDEX[i];
      var hay = (e.t + ' ' + e.d + ' ' + e.k + ' ' + e.tag).toLowerCase();
      var score = 0, ok = true;
      for (var j = 0; j < terms.length; j++) {
        var term = terms[j];
        var idx = hay.indexOf(term);
        if (idx === -1) { ok = false; break; }
        if (e.t.toLowerCase().indexOf(term) !== -1) score += 5;
        if (e.tag.toLowerCase().indexOf(term) !== -1) score += 3;
        if (e.k.toLowerCase().indexOf(term) !== -1) score += 2;
        if (e.d.toLowerCase().indexOf(term) !== -1) score += 1;
        score += 1;
      }
      if (ok) results.push({ e: e, score: score });
    }
    results.sort(function (a, b) { return b.score - a.score; });
    return results.slice(0, 8).map(function (r) { return r.e; });
  }

  /* ---------- UI 注入 ---------- */
  var headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  var wrap = document.createElement('div');
  wrap.className = 'header-search';
  wrap.innerHTML =
    '<span class="hs-icon" aria-hidden="true">🔍</span>' +
    '<input type="search" class="hs-input" placeholder="搜索全站内容…" aria-label="搜索全站内容" autocomplete="off">' +
    '<div class="hs-results" role="listbox" style="display:none;"></div>';

  var nav = headerInner.querySelector('.nav');
  if (nav && nav.parentNode === headerInner) {
    headerInner.insertBefore(wrap, nav);
  } else {
    headerInner.appendChild(wrap);
  }

  var input = wrap.querySelector('.hs-input');
  var panel = wrap.querySelector('.hs-results');
  var items = [];       // 当前结果 DOM
  var activeIdx = -1;   // 键盘选中项

  function closePanel() {
    panel.style.display = 'none';
    panel.innerHTML = '';
    items = [];
    activeIdx = -1;
  }

  function setActive(idx) {
    items.forEach(function (el, i) {
      el.classList.toggle('active', i === idx);
    });
    if (items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
  }

  function renderResults(query) {
    var list = search(query);
    panel.innerHTML = '';
    items = [];
    activeIdx = -1;

    if (!list.length) {
      if (query.trim()) {
        var empty = document.createElement('div');
        empty.className = 'hs-empty';
        empty.textContent = '未找到相关内容，试试「AI写作」「变现」「数字人」';
        panel.appendChild(empty);
        panel.style.display = 'block';
      } else {
        closePanel();
      }
      return;
    }

    list.forEach(function (e) {
      var a = document.createElement('a');
      a.className = 'hs-item';
      a.href = resolveUrl(e);
      a.setAttribute('role', 'option');
      a.innerHTML =
        '<span class="hs-item-tag">' + e.tag + '</span>' +
        '<span class="hs-item-title">' + e.t + '</span>' +
        '<span class="hs-item-desc">' + e.d + '</span>';
      a.addEventListener('mousedown', function (ev) {
        ev.preventDefault(); // 防止 input blur 先触发
        window.location.href = a.href;
      });
      panel.appendChild(a);
      items.push(a);
    });

    /* 兜底：跳转必应站内搜索 */
    var more = document.createElement('a');
    more.className = 'hs-item hs-more';
    more.href = 'https://www.bing.com/search?q=site%3Aaifuye.net+' + encodeURIComponent(query.trim());
    more.target = '_blank';
    more.rel = 'noopener';
    more.innerHTML = '<span class="hs-item-tag">网页</span><span class="hs-item-title">在必应中搜索「' +
      query.trim().replace(/</g, '&lt;') + '」的更多结果 →</span>';
    panel.appendChild(more);

    panel.style.display = 'block';
  }

  input.addEventListener('input', function () {
    renderResults(input.value);
  });
  input.addEventListener('focus', function () {
    if (input.value.trim()) renderResults(input.value);
  });
  input.addEventListener('keydown', function (ev) {
    var count = items.length;
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      if (count) { activeIdx = (activeIdx + 1) % count; setActive(activeIdx); }
    } else if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (count) { activeIdx = (activeIdx - 1 + count) % count; setActive(activeIdx); }
    } else if (ev.key === 'Enter') {
      ev.preventDefault();
      var target = (activeIdx >= 0 && items[activeIdx]) || items[0];
      if (target) window.location.href = target.href;
    } else if (ev.key === 'Escape') {
      closePanel();
      input.blur();
    }
  });
  document.addEventListener('click', function (ev) {
    if (!wrap.contains(ev.target)) closePanel();
  });
})();

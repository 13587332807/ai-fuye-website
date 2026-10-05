/* ===================================================
   aifuye.net 全站搜索（纯客户端）
   索引文件：js/search-index.js（由 scripts/generate-search-index.py 自动生成）
   覆盖全站所有页面的 标题/描述/关键词/H2小节标题/正文前2500字
   =================================================== */
(function () {
  'use strict';

  /* ---------- 查找自身脚本路径，定位索引文件 ---------- */
  var mySrc = '';
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    var s = scripts[i].getAttribute('src') || '';
    if (s.indexOf('search.js') !== -1) { mySrc = s; break; }
  }
  if (!mySrc) return;
  var base = mySrc.substring(0, mySrc.lastIndexOf('/') + 1); // 'js/' 或 '../js/'
  var inArticles = location.pathname.replace(/\\/g, '/').indexOf('/articles/') !== -1;

  function resolveUrl(entry) {
    if (entry.cat === 'art') {
      return inArticles ? entry.u.replace(/^articles\//, '') : entry.u;
    }
    return inArticles ? '../' + entry.u : entry.u;
  }

  /* ---------- 搜索逻辑 ---------- */
  function search(index, query) {
    var terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var results = [];
    for (var i = 0; i < index.length; i++) {
      var e = index[i];
      var title = (e.t || '').toLowerCase();
      var tag = (e.tag || '').toLowerCase();
      var kw = (e.k || '').toLowerCase();
      var desc = (e.d || '').toLowerCase();
      var body = (e.b || '').toLowerCase();
      var score = 0, ok = true;
      for (var j = 0; j < terms.length; j++) {
        var term = terms[j];
        if (body.indexOf(term) === -1 && title.indexOf(term) === -1 && kw.indexOf(term) === -1 && tag.indexOf(term) === -1 && desc.indexOf(term) === -1) {
          ok = false; break;
        }
        /* 标题命中权重最高 */
        if (title.indexOf(term) !== -1) score += 8;
        /* 标签/关键词/H2小节标题命中 */
        if (tag.indexOf(term) !== -1) score += 4;
        if (kw.indexOf(term) !== -1) score += 3;
        if (desc.indexOf(term) !== -1) score += 2;
        /* 正文命中次数（封顶5次计分） */
        var pos = 0, hits = 0;
        while ((pos = body.indexOf(term, pos)) !== -1 && hits < 5) { score += 1; hits++; pos += term.length; }
      }
      if (ok) results.push({ e: e, score: score });
    }
    results.sort(function (a, b) { return b.score - a.score; });
    return results.slice(0, 8).map(function (r) { return r.e; });
  }

  /* ---------- UI 注入与初始化 ---------- */
  function init(index) {
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
    var items = [];
    var activeIdx = -1;

    function closePanel() {
      panel.style.display = 'none';
      panel.innerHTML = '';
      items = [];
      activeIdx = -1;
    }

    function setActive(idx) {
      items.forEach(function (el, i) { el.classList.toggle('active', i === idx); });
      if (items[idx]) items[idx].scrollIntoView({ block: 'nearest' });
    }

    function renderResults(query) {
      var list = search(index, query);
      panel.innerHTML = '';
      items = [];
      activeIdx = -1;

      if (!list.length) {
        if (query.trim()) {
          var empty = document.createElement('div');
          empty.className = 'hs-empty';
          empty.textContent = '未找到相关内容，换个关键词试试，如「口播」「简历」「知识库」';
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
          ev.preventDefault();
          window.location.href = a.href;
        });
        panel.appendChild(a);
        items.push(a);
      });

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

    input.addEventListener('input', function () { renderResults(input.value); });
    input.addEventListener('focus', function () { if (input.value.trim()) renderResults(input.value); });
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
  }

  /* ---------- 动态加载索引后初始化 ---------- */
  var loader = document.createElement('script');
  loader.src = base + 'search-index.js';
  loader.onload = function () {
    if (window.SEARCH_INDEX && window.SEARCH_INDEX.length) {
      init(window.SEARCH_INDEX);
    }
  };
  loader.onerror = function () {
    /* 索引加载失败时静默降级：不显示搜索框 */
    console.warn('[search] search-index.js 加载失败');
  };
  document.head.appendChild(loader);
})();

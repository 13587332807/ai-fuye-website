/**
 * AI副业指南 - 网站统计分析模块
 * 支持：Microsoft Clarity（推荐） / 百度统计 / Google Analytics 4
 * 
 * 使用方式：在下方填入你的统计ID即可激活
 * Clarity获取：https://clarity.microsoft.com/ → 新建项目 → 复制项目ID
 */

(function() {
  'use strict';

  // ============================================================
  // 配置区 — 填入统计ID即可激活
  // ============================================================

  // Microsoft Clarity（推荐，免费、国内可访问、热力图+用户录像）
  // 获取：clarity.microsoft.com → 新建项目 → 复制项目ID
  var CLARITY_ID = 'wzsafonhbg';

  // 百度统计
  // 获取：tongji.baidu.com → 管理 → 获取代码 → 复制 hm.js? 后面的ID
  var BAIDU_TONGJI_ID = '';

  // Google Analytics 4
  // 获取：analytics.google.com → 管理 → 数据流 → 衡量ID
  var GA4_MEASUREMENT_ID = '';

  // 调试模式
  var DEBUG = false;

  var ANY_ACTIVE = false;

  // ============================================================
  // Microsoft Clarity
  // ============================================================
  if (CLARITY_ID) {
    ANY_ACTIVE = true;
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
    if (DEBUG) console.log('[Analytics] Clarity 已激活:', CLARITY_ID);
  }

  // ============================================================
  // 百度统计
  // ============================================================
  if (BAIDU_TONGJI_ID) {
    ANY_ACTIVE = true;
    window._hmt = window._hmt || [];
    (function() {
      var hm = document.createElement('script');
      hm.async = true;
      hm.src = 'https://hm.baidu.com/hm.js?' + BAIDU_TONGJI_ID;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(hm, s);
      if (DEBUG) console.log('[Analytics] 百度统计已激活:', BAIDU_TONGJI_ID);
    })();
  }

  // ============================================================
  // Google Analytics 4
  // ============================================================
  if (GA4_MEASUREMENT_ID) {
    ANY_ACTIVE = true;
    (function() {
      var gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { dataLayer.push(arguments); };
      gtagScript.onload = function() {
        gtag('js', new Date());
        gtag('config', GA4_MEASUREMENT_ID, {
          send_page_view: true,
          cookie_flags: 'SameSite=None;Secure'
        });
        if (DEBUG) console.log('[Analytics] GA4 已激活:', GA4_MEASUREMENT_ID);
      };
    })();
  }

  // ============================================================
  // 手动事件 API
  // ============================================================
  window.trackEvent = function(category, action, label, value) {
    if (window.clarity) {
      clarity('event', action);
    }
    if (window._hmt) {
      _hmt.push(['_trackEvent', category, action, label, value].filter(Boolean));
    }
    if (window.gtag) {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
    if (DEBUG) console.log('[Analytics] Event:', category, action, label);
  };

  // ============================================================
  // 自动追踪：出站链接 + 下载
  // ============================================================
  if (CLARITY_ID || BAIDU_TONGJI_ID || GA4_MEASUREMENT_ID) {
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a');
      if (!link) return;

      var href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        trackEvent('outbound', 'click', href);
      }

      if (/\.(pdf|zip|rar|7z|docx?|xlsx?|pptx?)$/i.test(href)) {
        trackEvent('download', 'click', href);
      }
    }, { passive: true });
  }

  // ============================================================
  // 自动追踪：滚动深度
  // ============================================================
  if (CLARITY_ID || BAIDU_TONGJI_ID || GA4_MEASUREMENT_ID) {
    var scrollDepths = [25, 50, 75, 100];
    var scrolled = {};
    var scrollTimer;

    window.addEventListener('scroll', function() {
      if (scrollTimer) return;
      scrollTimer = setTimeout(function() {
        scrollTimer = null;

        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;

        var scrollPercent = Math.round((window.scrollY / docHeight) * 100);

        scrollDepths.forEach(function(depth) {
          if (scrollPercent >= depth && !scrolled[depth]) {
            scrolled[depth] = true;
            trackEvent('scroll', 'depth_' + depth, window.location.pathname);
          }
        });
      }, 300);
    }, { passive: true });
  }

  // ============================================================
  // 启动日志
  // ============================================================
  if (!ANY_ACTIVE) {
    console.log(
      '%c[Analytics] 统计模块已加载，等待配置%c\n' +
      '编辑 js/analytics.js 填入 Clarity 项目ID即可：\n' +
      '  clarity.microsoft.com → 新建项目 → 复制项目ID',
      'color: #6366f1; font-weight: bold;',
      'color: inherit;'
    );
  }

})();

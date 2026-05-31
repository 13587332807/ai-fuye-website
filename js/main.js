/**
 * AI副业指南 - Main JavaScript
 * SEO Optimized, Progressive Enhancement
 */
(function() {
  'use strict';

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function() {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // FAQ Accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        var isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function(fi) { fi.classList.remove('open'); });
        // Open clicked
        if (!isOpen) { item.classList.add('open'); }
      });
    }
  });

  // Scroll-based animations
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card, .article-card, .tool-card, .method-item').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Active nav link highlight
  var currentPath = window.location.pathname;
  document.querySelectorAll('.nav a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href) {
      if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
        link.classList.add('active');
      }
    }
  });

  // Back to top
  var backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', '返回顶部');
  backToTopBtn.style.cssText = 'position:fixed;bottom:32px;right:32px;width:48px;height:48px;border-radius:50%;background:var(--primary);color:#fff;border:none;font-size:1.25rem;cursor:pointer;box-shadow:var(--shadow-lg);z-index:999;opacity:0;transform:translateY(20px);transition:all 0.3s ease;display:flex;align-items:center;justify-content:center;';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.transform = 'translateY(0)';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.transform = 'translateY(20px)';
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========== 文章标签筛选 ==========
  var tagFilter = document.getElementById('tagFilter');
  var articleCards = document.querySelectorAll('.article-card[data-category]');

  if (tagFilter && articleCards.length > 0) {
    var filterBtns = tagFilter.querySelectorAll('.tag');
    var articlesGrid = document.querySelector('.articles-grid');

    function filterArticles(category) {
      var visibleCount = 0;
      articleCards.forEach(function(card, index) {
        var cardCat = card.getAttribute('data-category');
        var shouldShow = (category === 'all' || cardCat === category);
        
        if (shouldShow) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
          card.style.animationDelay = (visibleCount * 0.06) + 's';
          visibleCount++;
        } else {
          card.style.display = 'none';
          card.style.animation = 'none';
          card.style.animationDelay = '0s';
        }
      });

      // Show "no results" message if nothing visible
      var existingMsg = document.querySelector('.no-results-msg');
      if (existingMsg) existingMsg.remove();

      if (visibleCount === 0 && articlesGrid) {
        var msg = document.createElement('p');
        msg.className = 'no-results-msg';
        msg.style.cssText = 'text-align:center;padding:60px 0;color:var(--text-tertiary);font-size:1rem;grid-column:1/-1;';
        msg.textContent = '该分类暂无文章，请查看其他分类';
        articlesGrid.appendChild(msg);
      }
    }

    filterBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        // Update active state
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        // Filter
        var category = btn.getAttribute('data-filter');
        filterArticles(category);
      });
    });
  }

  // Also support filter on index.html if present
  var indexTagFilter = document.querySelector('.hero-categories');
  if (indexTagFilter) {
    indexTagFilter.querySelectorAll('.hero-card').forEach(function(card) {
      card.addEventListener('click', function() {
        // Navigate to articles page with filter
        var link = card.querySelector('a');
        if (link) {
          var href = link.getAttribute('href');
          if (href && href.includes('articles/')) {
            var filter = card.getAttribute('data-filter');
            if (filter) {
              sessionStorage.setItem('articleFilter', filter);
            }
          }
        }
      });
    });
  }

  // Apply saved filter on articles page
  if (tagFilter && articleCards.length > 0) {
    var savedFilter = sessionStorage.getItem('articleFilter');
    if (savedFilter) {
      sessionStorage.removeItem('articleFilter');
      var targetBtn = tagFilter.querySelector('[data-filter="' + savedFilter + '"]');
      if (targetBtn) {
        filterBtns.forEach(function(b) { b.classList.remove('active'); });
        targetBtn.classList.add('active');
        filterArticles(savedFilter);
      }
    }
  }

  // ========== 广告加载 (AdSense + 百度联盟) ==========
  function loadAds() {
    if (typeof ADS_CONFIG === 'undefined') return;
    var strategy = (ADS_CONFIG.strategy || 'both').toLowerCase();

    // Google AdSense：如策略为 baidu-only，隐藏所有 AdSense 广告
    var adsenseEnabled = ADS_CONFIG.adsense && ADS_CONFIG.adsense.enabled !== false;
    if (!adsenseEnabled || strategy === 'baidu-only') {
      document.querySelectorAll('.ad-adsense').forEach(function(el) {
        el.style.display = 'none';
      });
      // 如果广告位里只剩百度广告，显示该广告位
      document.querySelectorAll('.ad-container').forEach(function(container) {
        var baiduSlot = container.querySelector('.ad-baidu');
        if (baiduSlot && baiduSlot.innerHTML.trim() !== '') {
          container.style.display = '';
        }
      });
    }

    // 百度联盟
    var baiduEnabled = ADS_CONFIG.baidu && ADS_CONFIG.baidu.enabled;
    if (baiduEnabled && ADS_CONFIG.baidu.cproId) {
      loadBaiduAds();
    }
  }

  function loadBaiduAds() {
    var cfg = ADS_CONFIG.baidu;
    // 遍历所有带 data-baidu-slot 的元素（.ad-container 或 .ad-sidebar）
    document.querySelectorAll('[data-baidu-slot]').forEach(function(container) {
      var slotKey = container.getAttribute('data-baidu-slot') || 'default';
      var cproId = (cfg.slots && cfg.slots[slotKey]) || cfg.cproId;
      if (!cproId) return;

      // 避免重复加载
      if (container.querySelector('.ad-baidu > script[src*="cpro.baidustatic"]')) return;

      // 创建百度联盟广告容器
      var baiduDiv = document.createElement('div');
      baiduDiv.className = 'ad-baidu';

      var script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.innerHTML = 'var cpro_id = "' + cproId + '";';

      var script2 = document.createElement('script');
      script2.src = 'https://cpro.baidustatic.com/cpro/ui/c.js';
      script2.async = true;

      baiduDiv.appendChild(script1);
      baiduDiv.appendChild(script2);

      container.appendChild(baiduDiv);
    });

    // 如果 strategy 是 adsense-only，隐藏百度广告
    var baiduStrategy = (ADS_CONFIG.strategy || 'both').toLowerCase();
    if (baiduStrategy === 'adsense-only') {
      document.querySelectorAll('.ad-baidu').forEach(function(el) {
        el.style.display = 'none';
      });
    }
  }

  // 在 DOM Ready 后加载广告
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAds);
  } else {
    loadAds();
  }

})();

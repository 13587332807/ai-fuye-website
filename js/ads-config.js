/**
 * AI副业指南 (aifuye.net) - 广告配置文件
 * ========================================
 * 🎯 这是全站唯一个需要修改的配置文件�? * 拿到 AdSense / 百度联盟 ID 后，只改这一个文件即可�? *
 * 📋 使用步骤�? * 1. 申请 Google AdSense �?https://www.google.com/adsense
 *    审核通过后拿�?pubId（格式：ca-pub-1234567890123456�? *    �?ca-pub-XXXXXXXX 全部替换成你�?pubId
 *
 * 2. 申请百度联盟 �?https://union.baidu.com
 *    审核通过后在「代码位管理」创建广告位，拿�?cpro_id
 *    �?xxxxxxxx 替换成你�?cpro_id
 *
 * 3. 想让某个平台不显示？�?enabled 设为 false 即可�? *
 * 💡 提示：如果不确定用什么策略，保持 strategy: 'both' 即可�? */

var ADS_CONFIG = {

  // ========== Google AdSense ==========
  adsense: {
    enabled: true,   // 设为 false 可关�?AdSense
    pubId: 'ca-pub-XXXXXXXX',  // �?替换成你�?AdSense 发布�?ID
    slots: {
      header:   '0000000000',  // �?替换成你�?AdSense 后台创建的广告单�?ID
      inArticle: '0000000000',
      sidebar:  '1111111111',
    }
  },

  // ========== 百度联盟 ==========
  baidu: {
    enabled: true,   // 设为 false 可关闭百度联�?    // 默认百度联盟推广�?ID（在百度联盟后台「获取代码」处获取�?    cproId: 'xxxxxxxx',   // �?替换成你的百度联�?cpro_id
    // 按位置区分的 slots（可选，不同位置用不同广告单元可提高收益�?    slots: {
      header:    '',  // �?顶部横幅广告�?cpro_id（没有则留空�?      inArticle: '',  // �?文章内广告位 cpro_id
      sidebar:   '',  // �?侧边栏广告位 cpro_id
    },
    // 百度回弹（可选，提高收益�?    tuiId: '',   // �?如有回弹 ID 填这里，没有留空
  },

  // ========== 显示策略 ==========
  strategy: 'both',
  // 'adsense-only'  �?只显�?Google AdSense
  // 'baidu-only'    �?只显示百度联�?  // 'both'          �?同时显示（推荐，覆盖国内外流量）
  // 'auto'          �?根据访客 IP 自动选择（需额外 JS，暂不可用）

  // ========== 调试模式 ==========
  debug: false  // 设为 true 可在控制台看到广告加载日�?};

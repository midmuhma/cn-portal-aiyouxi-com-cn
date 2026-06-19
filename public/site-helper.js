function createKeywordBadge(text, color = '#e91e63') {
  const badge = document.createElement('span');
  badge.className = 'keyword-badge';
  badge.textContent = text;
  badge.style.cssText = `display:inline-block;margin:4px;padding:3px 10px;border-radius:20px;background:${color};color:#fff;font-size:14px;font-weight:500;line-height:1.5;`;
  return badge;
}

function createTipCard(title, content, url) {
  const card = document.createElement('div');
  card.className = 'tip-card';
  card.style.cssText = 'display:inline-block;margin:8px;padding:14px 18px;border-radius:12px;background:#fafafa;border:1px solid #ddd;box-shadow:0 1px 4px rgba(0,0,0,0.06);';

  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-size:16px;font-weight:bold;margin-bottom:8px;';
  titleEl.textContent = title;

  const contentEl = document.createElement('p');
  contentEl.style.cssText = 'margin:0 0 8px;color:#333;font-size:14px;';
  contentEl.textContent = content;

  const link = document.createElement('a');
  link.href = url || '#';
  link.target = '_blank';
  link.textContent = '了解更多';
  link.style.cssText = 'color:#1976d2;text-decoration:none;font-weight:500;';

  card.appendChild(titleEl);
  card.appendChild(contentEl);
  card.appendChild(link);
  return card;
}

function createAccessNotice(text, type = 'info') {
  const colors = {
    info: { bg: '#e3f2fd', border: '#2196f3', text: '#0d47a1' },
    warning: { bg: '#fff3e0', border: '#ff9800', text: '#e65100' },
    success: { bg: '#e8f5e9', border: '#4caf50', text: '#1b5e20' }
  };
  const style = colors[type] || colors.info;

  const notice = document.createElement('div');
  notice.className = 'access-notice';
  notice.style.cssText = `display:inline-block;padding:12px 18px;border-radius:8px;background:${style.bg};border-left:4px solid ${style.border};color:${style.text};font-size:14px;line-height:1.6;max-width:480px;`;
  notice.textContent = text;
  return notice;
}

(function initSiteHelper() {
  const container = document.createElement('div');
  container.id = 'site-helper-container';
  container.style.cssText = 'position:relative;margin:20px auto;max-width:720px;padding:10px;font-family:system-ui,sans-serif;';

  const keywords = ['爱游戏', '游戏攻略', '活动资讯', '玩家社区'];
  const badgeGroup = document.createElement('div');
  badgeGroup.style.cssText = 'margin-bottom:16px;';
  keywords.forEach(function(kw) {
    const color = kw === '爱游戏' ? '#e91e63' : '#3f51b5';
    badgeGroup.appendChild(createKeywordBadge(kw, color));
  });
  container.appendChild(badgeGroup);

  const tipCard = createTipCard(
    '欢迎来到爱游戏平台',
    '发现热门游戏、阅读攻略、参与社区讨论，尽在爱游戏。',
    'https://cn-portal-aiyouxi.com.cn'
  );
  container.appendChild(tipCard);

  const notice = createAccessNotice(
    '本页面为爱游戏官方入口，点击上方链接进入完整门户。请确保网络畅通以获得最佳体验。',
    'info'
  );
  container.appendChild(notice);

  document.addEventListener('DOMContentLoaded', function() {
    const target = document.querySelector('body > main, body > .content, body') || document.body;
    target.appendChild(container);
  });
})();
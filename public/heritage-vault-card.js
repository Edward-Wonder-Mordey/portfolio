(() => {
  const PROJECT_ID = 'heritage-vault-featured-project';
  const allowedFilters = new Set(['All work', 'Infrastructure']);
  let scheduled = false;

  function buildCard() {
    const article = document.createElement('article');
    article.id = PROJECT_ID;
    article.className = 'project-card has-compact-image theme-navy-gold';
    article.innerHTML = `
      <div class="project-top">
        <span class="project-number">NEW</span>
        <span class="project-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            <line x1="6" x2="6.01" y1="6" y2="6"></line>
            <line x1="6" x2="6.01" y1="18" y2="18"></line>
          </svg>
        </span>
      </div>
      <a class="project-thumb-link project-thumb-compact" href="./heritage-vault.html" aria-label="View Heritage Vault 2.0 case study">
        <img src="./HV2_Portfolio_Thumbnail.svg" alt="Heritage Vault 2.0 resilient Linux infrastructure architecture case study" loading="eager" decoding="async" style="object-position:center" />
      </a>
      <div class="project-body">
        <p class="project-category">Infrastructure architecture</p>
        <h3>Heritage Vault 2.0</h3>
        <p class="project-description">A Linux-centered architecture case study for high availability, security, scalable storage, fast search, disaster recovery, and controlled automation.</p>
        <div class="tag-row"><span>Linux</span><span>PostgreSQL</span><span>Ansible</span><span>HA / DR</span></div>
        <a class="project-case-link" href="./heritage-vault.html">View Case Study <span>→</span></a>
      </div>`;
    return article;
  }

  function syncCard() {
    scheduled = false;
    const grid = document.querySelector('.project-grid');
    if (!grid) return;
    const active = document.querySelector('.filter.active');
    const filterName = active ? active.textContent.trim() : 'All work';
    const shouldShow = allowedFilters.has(filterName);
    const existing = document.getElementById(PROJECT_ID);

    if (!shouldShow) {
      if (existing) existing.remove();
      return;
    }
    if (!existing) grid.prepend(buildCard());
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(syncCard);
  }

  document.addEventListener('DOMContentLoaded', scheduleSync);
  window.addEventListener('load', scheduleSync);
  document.addEventListener('click', (event) => {
    if (event.target.closest('.filter')) setTimeout(scheduleSync, 0);
  });

  const observer = new MutationObserver(scheduleSync);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  scheduleSync();
})();

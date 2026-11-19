// اسکرول نرم برای لینک‌های منو
document.querySelectorAll('.side-nav a, .btn').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // تغییر حالت فعال منو
        document.querySelectorAll('.side-nav a').forEach(nav => nav.classList.remove('active'));
        if(link.classList.contains('side-nav-link')) {
            link.classList.add('active');
        }
      }
    }
  });
});

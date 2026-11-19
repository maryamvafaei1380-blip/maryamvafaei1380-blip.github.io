/* تنظیمات کلی */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Vazirmatn', sans-serif; }
:root {
  --primary: #007bff; /* رنگ آبی منو */
  --primary-dark: #0056b3;
  --text-dark: #2c3e50;
  --text-light: #7f8c8d;
  --bg-light: #f8f9fa;
  --white: #ffffff;
  --shadow: 0 5px 20px rgba(0,0,0,0.05);
}
body { background-color: var(--bg-light); color: var(--text-dark); direction: rtl; }
a { text-decoration: none; }
ul { list-style: none; }

/* منوی شناور سمت راست */
.sidebar {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 250px;
  height: calc(100vh - 40px);
  background: var(--primary);
  border-radius: 20px;
  color: var(--white);
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0,123,255,0.3);
  z-index: 100;
}
.profile { text-align: center; margin-bottom: 40px; }
.profile-img {
  width: 100px; height: 100px;
  border-radius: 50%; object-fit: cover;
  border: 3px solid var(--white);
  margin-bottom: 15px;
}
.profile h3 { font-size: 1.2rem; margin-bottom: 5px; }
.profile p { font-size: 0.9rem; opacity: 0.8; }
.side-nav a {
  display: flex; align-items: center;
  color: var(--white); opacity: 0.7;
  padding: 12px 15px; margin-bottom: 10px;
  border-radius: 10px; transition: 0.3s;
  font-size: 1rem;
}
.side-nav a i { margin-left: 15px; font-size: 1.1rem; width: 20px; }
.side-nav a:hover, .side-nav a.active {
  background: var(--white); color: var(--primary); opacity: 1;
}

/* محتوای اصلی */
.main-content {
  margin-right: 300px; /* فاصله از منوی سمت راست */
  padding: 40px;
  max-width: 1200px;
}
.section { padding: 60px 0; border-bottom: 1px solid #eee; }
.bg-light { background: var(--white); border-radius: 20px; padding: 40px; margin: 40px 0;}
.section-title { margin-bottom: 40px; }
.section-title span { color: var(--primary); font-weight: 600; font-size: 0.9rem; }
.section-title h2 { font-size: 2rem; margin-top: 5px; }

/* بخش Hero */
.hero-section {
  display: flex; align-items: center; justify-content: space-between;
  min-height: 80vh;
}
.hero-text { flex: 1; padding-left: 40px; }
.hero-text h4 { color: var(--primary); font-size: 1.2rem; margin-bottom: 10px; }
.hero-text h1 { font-size: 3.5rem; margin-bottom: 20px; line-height: 1.2; }
.hero-text p { color: var(--text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px; }
.btn {
  display: inline-block; padding: 12px 30px;
  background: var(--primary); color: var(--white);
  border-radius: 30px; font-weight: 600;
  transition: 0.3s;
}
.btn:hover { background: var(--primary-dark); transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,123,255,0.4); }
.hero-image { flex: 1; text-align: center; }
.hero-image img { width: 100%; max-width: 400px; border-radius: 50%; box-shadow: var(--shadow); }

/* خدمات */
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
.service-card { background: var(--white); padding: 30px; border-radius: 15px; box-shadow: var(--shadow); text-align: center; transition: 0.3s; }
.service-card:hover { transform: translateY(-10px); }
.icon-box {
  width: 60px; height: 60px; background: var(--primary);
  color: var(--white); border-radius: 15px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; margin: 0 auto 20px;
}
.service-card h3 { margin-bottom: 15px; font-size: 1.2rem; }
.service-card p { color: var(--text-light); font-size: 0.95rem; line-height: 1.6; }

/* نمونه کارها */
.portfolio-filters { margin-bottom: 30px; display: flex; gap: 15px; }
.filter-btn {
  padding: 8px 20px; border: none; background: var(--white);
  border-radius: 20px; cursor: pointer; font-family: inherit;
  font-weight: 600; color: var(--text-light); transition: 0.3s;
}
.filter-btn.active, .filter-btn:hover { background: var(--primary); color: var(--white); }
.portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.portfolio-item { position: relative; border-radius: 15px; overflow: hidden; height: 250px; cursor: pointer; }
.portfolio-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.4s; }
.portfolio-item:hover img { transform: scale(1.1); }
.overlay {
  position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;
  opacity: 0; transition: 0.3s;
}
.portfolio-item:hover .overlay { opacity: 1; }
.overlay h3 { color: var(--white); font-size: 1.3rem; margin-bottom: 5px; }
.overlay p { color: var(--primary); font-weight: 600; font-size: 0.9rem; }

/* رزومه (تایم‌لاین) */
.timeline { border-right: 2px solid var(--primary); padding-right: 30px; margin-right: 20px; }
.timeline-item { position: relative; margin-bottom: 40px; }
.timeline-item::before {
  content: ''; position: absolute; right: -37px; top: 0;
  width: 12px; height: 12px; background: var(--primary);
  border-radius: 50%; border: 3px solid var(--white);
}
.timeline-date { color: var(--primary); font-weight: 600; margin-bottom: 10px; font-size: 0.9rem; }
.timeline-content { background: var(--bg-light); padding: 20px; border-radius: 10px; box-shadow: var(--shadow); }
.timeline-content h3 { margin-bottom: 5px; }
.timeline-content h4 { color: var(--text-light); margin-bottom: 10px; font-size: 0.9rem; font-weight: 400; }
.timeline-content p { font-size: 0.95rem; line-height: 1.6; color: var(--text-dark); }

/* تماس */
.contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
.contact-card { background: var(--white); padding: 30px; border-radius: 15px; box-shadow: var(--shadow); text-align: center; }
.contact-card i { font-size: 2rem; color: var(--primary); margin-bottom: 15px; }
.contact-card h4 { margin-bottom: 10px; }
.contact-card p { color: var(--text-light); direction: ltr; } /* برای نمایش درست ایمیل و شماره */

/* موبایل */
@media (max-width: 900px) {
  .sidebar { transform: translateX(100%); /* مخفی کردن منو در موبایل */ }
  .main-content { margin-right: 0; padding: 20px; }
  .hero-section { flex-direction: column-reverse; text-align: center; padding-top: 40px; }
  .hero-text { padding-left: 0; padding-top: 30px; }
  .hero-text h1 { font-size: 2.5rem; }
}

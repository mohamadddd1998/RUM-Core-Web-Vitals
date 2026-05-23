# 🚀 Web Performance Monitor (RUM & Core Web Vitals)

یک ابزار آموزشی برای مانیتورینگ بلادرنگ (Real User Monitoring) و اندازه‌گیری شاخص‌های اصلی عملکرد وب (Core Web Vitals). این پروژه با هدف درک عمیق نحوه رفتار مرورگر، تعامل کاربر و تأثیر مستقیم بهینه‌سازی فنی بر تجربه کاربری (UX) توسعه داده شده است.

---

## 🎯 هدف پروژه
هدف از این پروژه، پیاده‌سازی سیستمی است که بتواند به صورت زنده، داده‌های مربوط به تجربه واقعی کاربران (Real User Data) را جمع‌آوری کرده و بر اساس استانداردهای گوگل (Core Web Vitals) تحلیل کند تا نقاط ضعف عملکردی سایت شناسایی شوند.

---

## 📊 شاخص‌های مانیتور شده (Core Web Vitals)
این پروژه معیارهای زیر را ردیابی و تحلیل می‌کند:

- **LCP (Largest Contentful Paint):** اندازه‌گیری زمان بارگذاری محتوای اصلی صفحه.
- **CLS (Cumulative Layout Shift):** اندازه‌گیری پایداری بصری و تغییرات غیرمنتظره در چیدمان صفحه.
- **INP (Interaction to Next Paint):** (در صورت پیاده‌سازی) اندازه‌گیری پاسخگویی به تعاملات کاربر.

---

## 🛠 تکنولوژی‌های استفاده شده
- **Frontend:** [React / Next.js / ...]
- **Performance APIs:** Web Vitals Library, PerformanceObserver API
---

## 💡 قابلیت‌های کلیدی
*   **Real-time Tracking:** جمع‌آوری داده‌ها از مرورگر کاربر در لحظه.
*   **Insightful Analysis:** تبدیل داده‌های خام به نمودارهای قابل فهم برای شناسایی Bottleneckها.
*   **Performance Budgeting:** امکان تعریف بازه‌های مجاز برای شاخص‌های عملکردی.
*   **Error Reporting:** لاگ کردن خطاهای مربوط به کندی سرعت.
  
---

## 🚀 راهنمای شروع به کار
برای اجرای این پروژه در محیط توسعه (Local):
```bash
# کلون کردن پروژه
git clone https://github.com/mohamadddd1998/your-repo-name.git

# نصب وابستگی‌ها
npm install

# اجرای پروژه
npm run dev

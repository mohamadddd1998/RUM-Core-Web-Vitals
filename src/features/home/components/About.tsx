const About = () => (
  <section id="about">
    <article className="container py-6 px-4 mx-auto space-y-6 bg-white shadow-lg border border-gray-100 rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        درباره ما
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {" "}
        {/* اضافه کردن gap برای ثبات */}
        <p className="basis-1/2 leading-8">
          در دنیای امروز، سرعت تنها یک ویژگی نیست؛ بلکه ستون اصلی تجربه کاربری
          است. ما در [نام پروژه شما] بر این باوریم که هر میلی‌ثانیه اهمیت دارد.
          این پنل تخصصی با هدف فراهم کردن دیدی شفاف از آنچه در پس‌زمینه سایت شما
          می‌گذرد طراحی شده است. ما با جمع‌آوری دقیق متریک‌های حیاتی وب (Core
          Web Vitals) و تحلیل لحظه‌ای عملکرد، به شما کمک می‌کنیم تا گلوگاه‌ها را
          شناسایی، تجربه کاربری را بهینه و نرخ تبدیل خود را افزایش دهید. هدف ما
          ساده است: تبدیل داده‌های پیچیده عملکرد به بینش‌های عملی برای
          توسعه‌دهندگان و صاحبان کسب‌وکار.
        </p>
        {/* تعیین ابعاد ثابت و نسبت تصویر برای جلوگیری از پرش (CLS) */}
        <div className="rounded-2xl basis-1/2 overflow-hidden aspect-video">
          <img
            src="/images/about-us.webp"
            alt="about-us"
            loading="lazy"
            className="w-full h-full object-cover"
            width={400}
            height={200}
          />
        </div>
      </div>
    </article>
  </section>
);
export default About;

export const Hero: React.FC = () => {
  return (
    <section id="hero">
      {/* تعیین aspect-ratio برای رزرو فضای تصویر قبل از لود شدن */}
      <div className="relative container mx-auto shadow-2xl overflow-hidden rounded-2xl aspect-21/9">
        <img
          src="/images/Hero.webp"
          alt="Hero LCP"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
          width={1680} // اضافه کردن ابعاد برای جلوگیری از CLS
          height={720}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl hero-title">عنوان سایت</h1>
          <p className="text-lg text-gray-200">LCP بهینه شده</p>
        </div>
      </div>
    </section>
  );
};

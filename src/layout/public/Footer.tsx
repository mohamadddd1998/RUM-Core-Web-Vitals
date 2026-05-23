const Footer = () => (
  <footer className="px-6">
    <div className="container mx-auto px-4 py-8 bg-white shadow-lg border border-gray-100 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* درباره ما */}
        <div className="footer-about">
          <h3 className="text-xl font-bold mb-3">درباره ما</h3>
          <p className="text-sm text-gray-400">
            توضیحی کوتاه درباره برند یا کسب‌وکار شما.
          </p>
        </div>

        {/* لینک‌های سریع */}
        <div className="footer-links">
          <h3 className="text-xl font-bold mb-3">لینک‌های سریع</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="text-gray-400 hover:text-white">
                خانه
              </a>
            </li>
            <li>
              <a href="#menu" className="text-gray-400 hover:text-white">
                منو
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="footer-social">
          <h3 className="text-xl font-bold mb-3">ما را دنبال کنید</h3>
          <div className="flex gap-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              فیسبوک
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              اینستاگرام
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white">
              توییتر
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

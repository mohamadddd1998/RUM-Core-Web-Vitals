import React from "react";
import Sh_1 from "/images/Sh_1.png";
import Sh_2 from "/images/Sh_2.png";
import Sh_3 from "/images/Sh_3.png";

export const ImageGallery: React.FC = () => {
  return (
    <section id="image-gallery">
      <div className="container py-6 mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          گالری تصاویر
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {/* استفاده از یک کلاس ثابت برای ارتفاع کارت ها */}
          {[Sh_1, Sh_2, Sh_3].map((src) => (
            <div className="bg-white rounded-2xl shadow-md overflow-hidden group">
              <div className="aspect-4/3 w-full overflow-hidden">
                {" "}
                {/* ظرفیت رزرو شده */}
                <img
                  src={src}
                  alt="Gallery item"
                  loading="lazy"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Image</h3>
                <p className="text-sm text-gray-500 mt-1">توضیحات کوتاه</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

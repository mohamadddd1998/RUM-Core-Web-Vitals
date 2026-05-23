import { useState, useRef, useEffect } from "react";

const LazyImage = ({ src }: { src: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (imgRef.current) observer.observe(imgRef.current);
  }, []);

  return (
    <div ref={imgRef} className="aspect-4/3 w-full overflow-hidden">
      {isVisible ? (
        <img
          src={src}
          alt="Gallery"
          loading="lazy"
          width="400"
          height="300"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <>
          {/**یک placeholder که در زمان دانلود نمایش داده می شود */}
          <div className="bg-gray-200 w-full h-full animate-pulse" />
        </>
      )}
    </div>
  );
};

export default LazyImage;

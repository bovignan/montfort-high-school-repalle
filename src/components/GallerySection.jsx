import { useEffect, useState } from "react";

const images = [
  "/photos/photo1.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo2.jpg",
  // Add more image paths from your `public/photos` folder
];

function GallerySection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border p-6 bg-yellow-50 shadow-lg rounded-lg mt-6">
      

      <div className="relative w-full h-[500px] overflow-hidden rounded">  {/* ⬅ increased height */}
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-contain transition-all duration-700 ease-in-out"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GallerySection;

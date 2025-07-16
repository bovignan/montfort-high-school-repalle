import { useEffect, useState } from "react";

const staticImages = [
  "pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg",
  "pic7.jpg", "pic8.jpg", "pic9.jpg", "pic10.jpg", "pic11.jpg", "pic12.jpg",
  "pic13.jpg", "pic14.jpg", "pic15.jpg", "pic16.jpg", "pic17.jpg", "pic18.jpg",
  "pic19.jpg", "pic20.jpg", "pic21.jpg", "pic22.jpg", "pic25.jpg", "pic26.jpg",
  "pic27.jpg", "pic28.jpg"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then(res => res.json())
      .then(data => setUploadedImages(data))
      .catch(err => console.error("Error loading uploaded images:", err));
  }, []);

  const isAdmin = localStorage.getItem("admin-logged-in") === "true";

  const handleDelete = async (filename) => {
    if (!isAdmin) return;
    const confirm = window.confirm("Are you sure you want to delete this image?");
    if (!confirm) return;

    try {
      await fetch(`http://localhost:5000/delete/${filename}`, { method: "DELETE" });
      setUploadedImages(prev => prev.filter(img => img !== filename));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Static Images */}
        {staticImages.map((img, index) => (
          <img
            key={`static-${index}`}
            src={`/gallery/${img}`}
            alt={`Gallery ${index}`}
            className="rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => setSelectedImage(`/gallery/${img}`)}
          />
        ))}

        {/* Uploaded Images */}
        {uploadedImages.map((filename, index) => (
          <div key={`uploaded-${index}`} className="relative group">
            <img
              src={`http://localhost:5000/uploads/${filename}`}
              alt={`Uploaded ${index}`}
              className="rounded-lg shadow hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => setSelectedImage(`http://localhost:5000/uploads/${filename}`)}
            />
            {isAdmin && (
              <button
                onClick={() => handleDelete(filename)}
                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;

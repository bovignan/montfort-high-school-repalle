import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import SidebarLeft from "../components/SidebarLeft";

function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <SidebarLeft />
        <div className="flex-1 p-4">
          {/* Highlights Section */}
          <GallerySection />

          {/* Leadership Section */}
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg mt-6">
            <h2 data-aos="fade-up" className="text-2xl font-bold mb-6 text-center">
    Leadership Team
  </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Principal */}
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md">
                <img
                  src="/photos/pm1.jpg"
                  alt="Principal"
                  className="w-36 h-36 object-cover rounded-full border-4 border-blue-500"
                />
                <div>
                  <h3 className="text-lg font-semibold">Bro. KiranKumar</h3>
                  <p className="text-blue-700 font-bold">Principal & Correspondent</p>
                </div>
              </div>

              {/* Vice Principal */}
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md">
                <img
                  src="/photos/pm2.jpg"
                  alt="Vice Principal"
                  className="w-36 h-36 object-cover rounded-full border-4 border-green-500"
                />
                <div>
                  <h3 className="text-lg font-semibold">Bro. Pradeep Reddy</h3>
                  <p className="text-green-700 font-bold">Vice Principal</p>
                </div>
              </div>

              {/* Former */}
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md">
                <img
                  src="/photos/pm3.jpg"
                  alt="Senior Member"
                  className="w-36 h-36 object-cover rounded-full border-4 border-gray-500"
                />
                <div>
                  <h3 className="text-lg font-semibold">Bro. Frances</h3>
                  <p className="text-gray-700 font-semibold">Former</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg shadow-lg bg-blue-50 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-bold text-blue-800 mb-2 flex items-center gap-2">
                📘 Our Vision
              </h2>
              <p className="text-gray-700 text-lg">
                Education with love... to create a knowledge-powered society and serve humanity with purpose and integrity.
              </p>
            </div>

            <div className="p-6 border rounded-lg shadow-lg bg-green-50 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-bold text-green-800 mb-2 flex items-center gap-2">
                🎯 Our Mission
              </h2>
              <p className="text-gray-700 text-lg">
                We provide quality education to prepare students for life — nurturing mind, heart, skill, and attitude for a better tomorrow.
              </p>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";

function SidebarLeft() {
  return (
    <div className="w-48 bg-gray-100 p-4 space-y-4">
      <Link to="/fee" className="block text-blue-600">Fee Structure</Link>
      <Link to="/teachers" className="block text-blue-600">Teachers</Link>
      <Link to="/circulars" className="block text-blue-600">Curricular & Extra Curricular</Link>
      <Link to="/gallery" className="block text-blue-600">Gallery</Link>
    </div>
  );
}

export default SidebarLeft;

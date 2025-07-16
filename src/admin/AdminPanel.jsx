import { useRef, useState } from "react";

const AdminPanel = ({ addUpdate, onLogout }) => {
  const [updateText, setUpdateText] = useState("");
  const [teacher, setTeacher] = useState({
    name: "",
    qualification: "",
    contact: "",
    subject: "Telugu",
    photo: "",
  });
  const [teacherPhotoFile, setTeacherPhotoFile] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState(null);
  const galleryInputRef = useRef(null);

  const handleUpdatePost = () => {
    if (updateText.trim()) {
      addUpdate({ text: updateText, date: new Date().toLocaleString() });
      setUpdateText("");
    }
  };

  const handleTeacherAdd = async (e) => {
    e.preventDefault();

    if (
      !teacher.name.trim() ||
      !teacher.qualification.trim() ||
      !teacher.contact.trim() ||
      !teacher.subject.trim() ||
      !teacherPhotoFile
    ) {
      alert("Please fill all fields and upload a photo!");
      return;
    }

    // Upload photo to backend
    const formData = new FormData();
    formData.append("image", teacherPhotoFile);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.filename) throw new Error("Upload failed");

      const newTeacher = {
        ...teacher,
        photo: `http://localhost:5000/uploads/${data.filename}`,
      };

      const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
      const alreadyExists = teachers.some(
        (t) =>
          t.name.toLowerCase() === newTeacher.name.toLowerCase() &&
          t.subject === newTeacher.subject
      );
      if (alreadyExists) {
        alert("This teacher already exists!");
        return;
      }

      const updatedTeachers = [...teachers, newTeacher];
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

      alert("Teacher added!");
      setTeacher({
        name: "",
        qualification: "",
        contact: "",
        subject: "Telugu",
        photo: "",
      });
      setTeacherPhotoFile(null);
    } catch (err) {
      console.error("Teacher photo upload failed:", err);
      alert("Failed to upload teacher photo.");
    }
  };

  const handleGalleryUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setGalleryPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.filename) {
        alert("Gallery image uploaded successfully!");
        setGalleryPreview(null);
        galleryInputRef.current.value = null;
      } else {
        throw new Error("Upload failed");
      }
    } catch (err) {
      console.error("Gallery upload failed:", err);
      alert("Failed to upload image to gallery.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Admin Panel</h1>

      {/* Post School Update */}
      <div className="border p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">Post School Update</h2>
        <textarea
          value={updateText}
          onChange={(e) => setUpdateText(e.target.value)}
          className="w-full border p-2 rounded mb-2"
          placeholder="Enter holiday or event update"
        />
        <button
          onClick={handleUpdatePost}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Post Update
        </button>
      </div>

      {/* Add Teacher */}
      <div className="border p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">Add Teacher</h2>
        <form onSubmit={handleTeacherAdd}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Name"
              value={teacher.name}
              onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
              className="border p-2 rounded"
            />
            <input
              placeholder="Qualification"
              value={teacher.qualification}
              onChange={(e) =>
                setTeacher({ ...teacher, qualification: e.target.value })
              }
              className="border p-2 rounded"
            />
            <input
              placeholder="Contact"
              value={teacher.contact}
              onChange={(e) =>
                setTeacher({ ...teacher, contact: e.target.value })
              }
              className="border p-2 rounded"
            />
            <select
              value={teacher.subject}
              onChange={(e) =>
                setTeacher({ ...teacher, subject: e.target.value })
              }
              className="border p-2 rounded"
            >
              {[
                "Telugu",
                "Hindi",
                "English",
                "Maths",
                "Science",
                "Biology",
                "Social",
                "GK",
                "Computer",
                "PETs",
              ].map((subj) => (
                <option key={subj}>{subj}</option>
              ))}
            </select>

            {/* Upload Teacher Photo */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setTeacherPhotoFile(e.target.files[0])}
              className="border p-2 rounded"
            />
          </div>

          {/* Teacher Photo Preview */}
          {teacherPhotoFile && (
            <img
              src={URL.createObjectURL(teacherPhotoFile)}
              alt="Teacher Preview"
              className="w-32 h-32 object-cover border rounded shadow-md mt-4"
            />
          )}

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Teacher
          </button>
        </form>
      </div>

      {/* Add Gallery Image */}
      <div className="border p-4 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">Add Gallery Image</h2>
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          onChange={handleGalleryUpload}
          className="border p-2 rounded"
        />

        {/* Gallery Preview */}
        {galleryPreview && (
          <img
            src={galleryPreview}
            alt="Gallery Preview"
            className="w-32 h-32 object-cover border rounded shadow-md mt-4"
          />
        )}
      </div>

      {/* Logout */}
      <button
        onClick={onLogout}
        className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminPanel;

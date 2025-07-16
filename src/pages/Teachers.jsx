import { useEffect, useState } from "react";

// Hardcoded base teachers
const staticSubjects = {
  Telugu: [
    { name: "Ravi Kumar", qualification: "M.A Telugu", contact: "9876543210", photo: "telugu1.jpg" },
    { name: "Sita Devi", qualification: "B.Ed Telugu", contact: "9876543211", photo: "telugu2.jpg" },
    { name: "Ram Babu", qualification: "M.Phil Telugu", contact: "9876543212", photo: "telugu3.jpg" },
    { name: "Lakshmi", qualification: "M.A Telugu", contact: "9876543213", photo: "telugu4.jpg" },
    { name: "Gopal Rao", qualification: "B.Ed Telugu", contact: "9876543214", photo: "telugu5.jpg" },
    { name: "Anitha", qualification: "M.A Telugu", contact: "9876543215", photo: "telugu6.jpg" },
    { name: "Srinivas", qualification: "M.A Telugu", contact: "9876543216", photo: "telugu7.jpg" },
    { name: "Kavitha", qualification: "B.Ed Telugu", contact: "9876543217", photo: "telugu8.jpg" },
    { name: "Mani", qualification: "M.A Telugu", contact: "9876543218", photo: "telugu9.jpg" },
    { name: "Rajeswari", qualification: "M.Phil Telugu", contact: "9876543219", photo: "telugu10.jpg" },
  ],
  Hindi: [
    { name: "Rajesh", qualification: "M.A Hindi", contact: "9876543220", photo: "hindi1.jpg" },
    { name: "Pooja", qualification: "B.Ed Hindi", contact: "9876543221", photo: "hindi2.jpg" },
    { name: "Amit", qualification: "M.Phil Hindi", contact: "9876543222", photo: "hindi3.jpg" },
    { name: "Neha", qualification: "M.A Hindi", contact: "9876543223", photo: "hindi4.jpg" },
    { name: "Vikram", qualification: "M.A Hindi", contact: "9876543224", photo: "hindi5.jpg" },
    { name: "Geeta", qualification: "B.Ed Hindi", contact: "9876543225", photo: "hindi6.jpg" },
    { name: "Rohan", qualification: "M.A Hindi", contact: "9876543226", photo: "hindi7.jpg" },
    { name: "Sunita", qualification: "M.Phil Hindi", contact: "9876543227", photo: "hindi8.jpg" },
    { name: "Ajay", qualification: "M.A Hindi", contact: "9876543228", photo: "hindi9.jpg" },
    { name: "Kiran", qualification: "B.Ed Hindi", contact: "9876543229", photo: "hindi10.jpg" },
  ],
  English: [
  { name: "Sandra D'Souza", qualification: "M.A English", contact: "9876512801", photo: "english1.jpg" },
  { name: "Rohit Mehra", qualification: "B.Ed English", contact: "9876512802", photo: "english2.jpg" },
  { name: "Meera Nandakumar", qualification: "M.Phil English", contact: "9876512803", photo: "english3.jpg" },
  { name: "Naveen Thomas", qualification: "M.A, B.Ed English", contact: "9876512804", photo: "english4.jpg" },
  { name: "Anjali Roy", qualification: "M.A English Literature", contact: "9876512805", photo: "english5.jpg" },
  { name: "Jacob Varghese", qualification: "M.A Linguistics", contact: "9876512806", photo: "english6.jpg" },
],
Maths: [
  { name: "Arun Reddy", qualification: "M.Sc Maths", contact: "9876512401", photo: "maths1.jpg" },
  { name: "Deepa Iyer", qualification: "B.Ed Mathematics", contact: "9876512402", photo: "maths2.jpg" },
  { name: "Kiran Joshi", qualification: "M.Sc Maths", contact: "9876512403", photo: "maths3.jpg" },
  { name: "Sneha Das", qualification: "M.Sc Maths", contact: "9876512404", photo: "maths4.jpg" },
  { name: "Suresh Patil", qualification: "M.Phil Mathematics", contact: "9876512405", photo: "maths5.jpg" },
  { name: "Rita Sharma", qualification: "B.Ed Mathematics", contact: "9876512406", photo: "maths6.jpg" },
  { name: "Aakash Verma", qualification: "M.Sc Maths", contact: "9876512407", photo: "maths7.jpg" },
  { name: "Meena Nair", qualification: "M.Sc, B.Ed", contact: "9876512408", photo: "maths8.jpg" },
  { name: "Harish Yadav", qualification: "M.A Maths", contact: "9876512409", photo: "maths9.jpg" },
],
Science: [
  { name: "Ravi Shetty", qualification: "M.Sc Physics", contact: "9876512501", photo: "science1.jpg" },
  { name: "Pallavi Menon", qualification: "M.Sc Chemistry", contact: "9876512502", photo: "science2.jpg" },
  { name: "Jayanthi Rao", qualification: "M.Sc General Science", contact: "9876512503", photo: "science3.jpg" },
],
Biology: [
  { name: "Dr. Anil Desai", qualification: "M.Sc, Ph.D Biology", contact: "9876512601", photo: "biology1.jpg" },
  { name: "Lakshmi Bai", qualification: "M.Sc Zoology", contact: "9876512602", photo: "biology2.jpg" },
],
Social: [
  { name: "Geetha Kumari", qualification: "M.A History", contact: "9876512701", photo: "social1.jpg" },
  { name: "Rahul Sekhar", qualification: "M.A Civics", contact: "9876512702", photo: "social2.jpg" },
  { name: "Ananya R", qualification: "B.Ed Social Studies", contact: "9876512703", photo: "social3.jpg" },
  { name: "Mohit Sinha", qualification: "M.A Geography", contact: "9876512704", photo: "social4.jpg" },
  { name: "Priya Chand", qualification: "M.A Social", contact: "9876512705", photo: "social5.jpg" },
],

  
  // Add other subjects as needed...
};

const Teachers = () => {
  const [selectedSubject, setSelectedSubject] = useState("Telugu");
  const [mergedSubjects, setMergedSubjects] = useState({ ...staticSubjects });

  useEffect(() => {
    const stored = localStorage.getItem("teachers");
    const dynamicTeachers = stored ? JSON.parse(stored) : [];

    const temp = { ...staticSubjects };

    dynamicTeachers.forEach((teacher) => {
      if (!temp[teacher.subject]) temp[teacher.subject] = [];

      const isDuplicate = temp[teacher.subject].some(
        (t) =>
          t.name.trim().toLowerCase() === teacher.name.trim().toLowerCase() &&
          t.subject === teacher.subject
      );

      if (!isDuplicate) {
        temp[teacher.subject].push(teacher);
      }
    });

    setMergedSubjects(temp);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Select Subject</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(mergedSubjects).map((subject) => (
          <button
            key={subject}
            className={`px-4 py-2 rounded-full font-medium border ${
              selectedSubject === subject
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-600 border-indigo-600"
            } hover:bg-indigo-500 hover:text-white transition`}
            onClick={() => setSelectedSubject(subject)}
          >
            {subject}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">{selectedSubject} Teachers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {mergedSubjects[selectedSubject]?.map((teacher, index) => {
          const photoPath =
            teacher.photo && teacher.photo.startsWith("http")
              ? teacher.photo
              : `/teachers/${teacher.photo}`;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-indigo-50"
            >
              <img
                src={photoPath}
                alt={teacher.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = "/teachers/default.jpg")}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{teacher.name}</h3>
                <p className="text-sm text-gray-600">{teacher.qualification}</p>
                <p className="text-sm text-gray-500">{teacher.contact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teachers;

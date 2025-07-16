const CircularsAndActivities = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Circulars & Extra-Curricular Activities
      </h1>

      {/* School Circulars Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">📌 School Circulars</h2>
        <p className="text-gray-700 leading-relaxed">
          At Montfort High School, Repalle, we ensure parents, students, and staff are constantly informed through timely and clear circulars. These circulars serve as an official medium of communication between the school and its stakeholders. Be it important announcements regarding holidays, exams, fee schedules, special assemblies, or parent-teacher meetings — all vital information is shared in the form of well-drafted circulars.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Our circulars are posted both on the school notice boards and digitally via our website and messaging platforms. This ensures transparency and bridges communication gaps, keeping everyone updated in real-time. From academic schedules to medical camps, field trips, uniform changes, or new policies — every update is communicated with clarity and purpose.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We believe that keeping parents in the loop fosters trust and involvement in their child’s educational journey. This section of the website will house the latest as well as archived circulars for easy access by students and parents.
        </p>
      </section>

      {/* Extra-Curricular Activities Section */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">🎨 Extra-Curricular Activities</h2>
        <p className="text-gray-700 leading-relaxed">
          Montfort High School takes pride in offering a vibrant and inclusive platform for holistic development through a wide array of extra-curricular activities. While academics are the foundation, we understand that sports, arts, music, and culture play a crucial role in building confidence, leadership, and teamwork among students.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We conduct various competitions and club activities such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Elocution, Essay Writing, and Debate Competitions to develop communication and critical thinking</li>
          <li>Science Exhibitions and Math Quizzes to spark curiosity and innovation</li>
          <li>Art & Craft Workshops, Dance Performances, and Theater Shows to nurture creativity</li>
          <li>Inter-school Sports Tournaments in Volleyball, Kho-Kho, Cricket, and Athletics to promote physical health and sportsmanship</li>
          <li>Cultural Days, Annual Day, and Independence/Republic Day Celebrations to instill national pride and unity</li>
          <li>Environmental Campaigns like tree plantation drives, “No Plastic” weeks, and eco-awareness skits</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          Clubs such as the Literary Club, Eco Club, Science Club, and Health & Wellness Club provide students with enriching spaces to explore their interests beyond textbooks.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We aim to create <strong>all-rounders</strong> — individuals who are not only knowledgeable but also socially responsible, culturally aware, and emotionally intelligent.
        </p>
      </section>
    </div>
  );
};

export default CircularsAndActivities;

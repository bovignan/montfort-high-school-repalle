const FeeStructure = () => {
  const feeData = [
    { class: "Nursery", fee: 3000 },
    { class: "LKG", fee: 5000 },
    { class: "UKG", fee: 7000 },
    { class: "Class 1", fee: 9000 },
    { class: "Class 2", fee: 10000 },
    { class: "Class 3", fee: 11000 },
    { class: "Class 4", fee: 12000 },
    { class: "Class 5", fee: 13000 },
    { class: "Class 6", fee: 14000 },
    { class: "Class 7", fee: 15000 },
    { class: "Class 8", fee: 16000 },
    { class: "Class 9", fee: 17000 },
    { class: "Class 10", fee: 18000 },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">Fee Structure</h1>

      <p className="text-gray-700 text-lg mb-6 text-center">
        The total fee for each class is divided into 3 equal terms.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-indigo-100 text-indigo-800">
            <tr>
              <th className="p-3 text-left border">Class</th>
              <th className="p-3 text-left border">Total Fee (₹)</th>
              <th className="p-3 text-left border">Per Term Fee (₹)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {feeData.map(({ class: cls, fee }, idx) => {
              const perTerm = Math.round(fee / 3);
              return (
                <tr key={idx} className="hover:bg-indigo-50 transition">
                  <td className="p-3 border">{cls}</td>
                  <td className="p-3 border">{fee.toLocaleString()}</td>
                  <td className="p-3 border">{perTerm.toLocaleString()} x 3 terms</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-gray-600 text-sm text-center">
        * Note: Fee payments are to be made in 3 terms throughout the academic year.
      </p>
    </div>
  );
};

export default FeeStructure;

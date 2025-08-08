import React from "react";

const ConsultationHistory = () => {
  const consultations = [
    { id: 1, patient: "Ravi Kumar", date: "2025-08-05", diagnosis: "Fever & Cold", prescription: "Paracetamol 500mg, Rest", doctorNotes: "Patient improving", followUp: "2025-08-12" },
    { id: 2, patient: "Anita Sharma", date: "2025-08-04", diagnosis: "Back Pain", prescription: "Physiotherapy, Pain relief gel", doctorNotes: "Recommended daily stretching", followUp: "2025-08-18" },
    { id: 3, patient: "Vikram Singh", date: "2025-08-02", diagnosis: "Diabetes Checkup", prescription: "Continue medication, Diet control", doctorNotes: "Monitor blood sugar levels", followUp: "2025-09-01" },
    { id: 4, patient: "Pooja Verma", date: "2025-07-28", diagnosis: "Hypertension", prescription: "Amlodipine 5mg", doctorNotes: "Blood pressure under control", followUp: "2025-08-25" },
    { id: 5, patient: "Suresh Patel", date: "2025-07-25", diagnosis: "Seasonal Allergy", prescription: "Antihistamines", doctorNotes: "Avoid allergens", followUp: "2025-08-10" },
    { id: 6, patient: "Nisha Kapoor", date: "2025-08-07", diagnosis: "Migraine", prescription: "Ibuprofen 400mg", doctorNotes: "Reduce screen time", followUp: "2025-08-20" },
    { id: 7, patient: "Amit Joshi", date: "2025-08-06", diagnosis: "Asthma", prescription: "Inhaler prescribed", doctorNotes: "Avoid dusty areas", followUp: "2025-09-05" },
    { id: 8, patient: "Meena Gupta", date: "2025-08-03", diagnosis: "Skin Rash", prescription: "Hydrocortisone cream", doctorNotes: "Keep skin moisturized", followUp: "2025-08-15" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Consultation History</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-blue-900 uppercase text-sm font-semibold">
              <th className="border border-gray-300 p-3 text-left">#</th>
              <th className="border border-gray-300 p-3 text-left">Patient</th>
              <th className="border border-gray-300 p-3 text-left">Date</th>
              <th className="border border-gray-300 p-3 text-left">Diagnosis</th>
              <th className="border border-gray-300 p-3 text-left">Prescription</th>
              <th className="border border-gray-300 p-3 text-left">Doctor's Notes</th>
              <th className="border border-gray-300 p-3 text-left">Follow-up Date</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((c, idx) => (
              <tr
                key={c.id}
                className={`border-b border-gray-200 hover:bg-blue-50 transition duration-200 ${
                  idx % 2 === 0 ? "bg-white" : "bg-blue-50"
                }`}
              >
                <td className="border border-gray-300 p-3">{c.id}</td>
                <td className="border border-gray-300 p-3 font-medium">{c.patient}</td>
                <td className="border border-gray-300 p-3">{c.date}</td>
                <td className="border border-gray-300 p-3">{c.diagnosis}</td>
                <td className="border border-gray-300 p-3">{c.prescription}</td>
                <td className="border border-gray-300 p-3 italic text-gray-700">{c.doctorNotes}</td>
                <td className="border border-gray-300 p-3">{c.followUp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultationHistory;

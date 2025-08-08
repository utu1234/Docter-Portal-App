import React from "react";

const Profile = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Arjun Khanna",
      specialization: "Cardiologist",
      experience: "12 years",
      email: "arjun.khanna@example.com",
      phone: "+91 98765 43210",
      address: "123 HeartCare Clinic, MG Road, Mumbai",
      about:
        "Experienced cardiologist with over 12 years of practice, specializing in heart disease prevention and treatment.",
      languages: ["English", "Hindi", "Marathi"],
      consultationFee: 1500,
      availability: "Mon - Fri, 10:00 AM - 5:00 PM"
    },
    {
      id: 2,
      name: "Dr. Neha Gupta",
      specialization: "Dermatologist",
      experience: "8 years",
      email: "neha.gupta@example.com",
      phone: "+91 91234 56789",
      address: "SkinCare Clinic, MG Road, Delhi",
      about:
        "Passionate dermatologist focused on skin care and treatment of various skin conditions.",
      languages: ["English", "Hindi"],
      consultationFee: 1200,
      availability: "Tue - Sat, 11:00 AM - 4:00 PM"
    },
    {
      id: 3,
      name: "Dr. Rajesh Sharma",
      specialization: "Orthopedic Surgeon",
      experience: "15 years",
      email: "rajesh.sharma@example.com",
      phone: "+91 99887 66554",
      address: "OrthoCare Hospital, Sector 21, Gurgaon",
      about:
        "Specialist in joint replacement and sports injuries with 15 years of experience.",
      languages: ["English", "Hindi", "Punjabi"],
      consultationFee: 2000,
      availability: "Mon - Fri, 9:00 AM - 3:00 PM"
    }
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-8">Doctors Profiles</h2>
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">{doctor.name}</h3>
          <p className="text-sm font-medium text-gray-600 mb-1">{doctor.specialization} | {doctor.experience} experience</p>
          <p className="mb-4 text-gray-700 italic">{doctor.about}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 font-medium">
            <div>
              <p><span className="font-semibold">Email:</span> <a href={`mailto:${doctor.email}`} className="text-blue-600 hover:underline">{doctor.email}</a></p>
              <p><span className="font-semibold">Phone:</span> <a href={`tel:${doctor.phone}`} className="text-blue-600 hover:underline">{doctor.phone}</a></p>
              <p><span className="font-semibold">Clinic Address:</span> {doctor.address}</p>
            </div>
            <div>
              <p><span className="font-semibold">Languages Spoken:</span> {doctor.languages.join(", ")}</p>
              <p><span className="font-semibold">Consultation Fee:</span> ₹{doctor.consultationFee}</p>
              <p><span className="font-semibold">Availability:</span> {doctor.availability}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;

"use client";
import { useEffect, useState } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

export default function DoctorsClient() {
  const { token } = useAuth();
  const [doctors, setDoctors] = useState([]);
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");

  const fetchDoctors = async () => {
    const res = await api.get("/doctors");
    setDoctors(res.data);
  };

  const addDoctor = async () => {
    if (!token) return alert("Login required");
    try {
      await api.post("/doctors", { name, specialization });
      setName("");
      setSpecialization("");
      fetchDoctors();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding doctor");
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Doctors</h1>
      <div className="flex gap-2 mt-4">
        <input
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Specialization"
          className="border p-2"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <button
          onClick={addDoctor}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <table className="w-full mt-6 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Specialization</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d) => (
            <tr key={d.id}>
              <td className="p-2 border">{d.name}</td>
              <td className="p-2 border">{d.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

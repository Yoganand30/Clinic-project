"use client";
import { useState, useEffect } from "react";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";

export default function QueueClient() {
  const { token } = useAuth();

  const [doctors, setDoctors] = useState([]);
  const [queue, setQueue] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [queueNumber, setQueueNumber] = useState("");
  const [priority, setPriority] = useState("0");

  const fetchQueue = async () => {
    const res = await api.get("/queue");
    setQueue(res.data);
  };

  const fetchDoctors = async () => {
    const res = await api.get("/doctors");
    setDoctors(res.data);
  };

  const addToQueue = async () => {
    if (!token) return alert("Login required");
    try {
      await api.post("/queue", {
        patientName,
        doctorId: doctorId || null,
        queueNumber: parseInt(queueNumber, 10),
        priority: parseInt(priority, 10),
      });
      setPatientName("");
      setDoctorId("");
      setQueueNumber("");
      setPriority("0");
      fetchQueue();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding to queue");
    }
  };

  const updateStatus = async (id, status) => {
    if (!token) return alert("Login required");
    await api.put(`/queue/${id}`, { status });
    fetchQueue();
  };

  useEffect(() => {
    fetchQueue();
    fetchDoctors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Queue Management</h1>
      <div className="bg-gray-100 p-4 rounded mb-6 flex gap-2 flex-wrap">
        <input
          placeholder="Patient Name"
          className="border p-2"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <select
          className="border p-2"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        >
          <option value="">-- Select Doctor (Optional) --</option>
          {doctors.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name} - {d.specialization}
            </option>
          ))}
        </select>
        <input
          placeholder="Queue Number"
          className="border p-2"
          type="number"
          value={queueNumber}
          onChange={(e) => setQueueNumber(e.target.value)}
        />
        <input
          placeholder="Priority (0 normal)"
          className="border p-2"
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <button
          onClick={addToQueue}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Queue
        </button>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Queue No.</th>
            <th className="p-2 border">Patient</th>
            <th className="p-2 border">Doctor</th>
            <th className="p-2 border">Priority</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {queue.map((q) => (
            <tr key={q.id}>
              <td className="p-2 border">{q.queueNumber}</td>
              <td className="p-2 border">{q.patientName}</td>
              <td className="p-2 border">{q.doctor ? q.doctor.name : "-"}</td>
              <td className="p-2 border">{q.priority}</td>
              <td className="p-2 border">{q.status}</td>
              <td className="p-2 border">
                <button
                  onClick={() => updateStatus(q.id, "waiting")}
                  className="bg-yellow-400 text-white px-2 py-1 rounded mr-1"
                >
                  Waiting
                </button>
                <button
                  onClick={() => updateStatus(q.id, "with_doctor")}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-1"
                >
                  With Doctor
                </button>
                <button
                  onClick={() => updateStatus(q.id, "completed")}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

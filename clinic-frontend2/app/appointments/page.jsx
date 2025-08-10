"use client";

import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import api from "../../utils/api";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";

export default function AppointmentsPage() {
  const { token } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const fetchAppointments = async () => {
    const res = await api.get("/appointments");
    setAppointments(
      res.data.map((a) => ({
        id: a.id,
        title: `${a.patientName} - ${a.doctor.name}`,
        start: a.date,
      }))
    );
  };

  const fetchDoctors = async () => {
    const res = await api.get("/doctors");
    setDoctors(res.data);
  };

  useEffect(() => {
    if (token) {
      fetchDoctors();
      fetchAppointments();
    }
  }, [token]);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo.startStr);
  };

  const handleAddAppointment = async () => {
    if (!patientName || !doctorId) return alert("Please fill patient and doctor");
    await api.post("/appointments", { patientName, doctorId, date: selectedDate });
    setPatientName("");
    setDoctorId("");
    setSelectedDate(null);
    fetchAppointments();
  };

  const handleEventClick = async (clickInfo) => {
    if (confirm(`Delete appointment '${clickInfo.event.title}'?`)) {
      await api.delete(`/appointments/${clickInfo.event.id}`);
      fetchAppointments();
    }
  };

  return (
    <ProtectedWrapper token={token}>
      <div className="p-6">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Appointments Calendar</h1>

        {selectedDate && (
          <div className="mb-6 bg-gray-100 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Add Appointment for {selectedDate}</h2>
            <input
              placeholder="Patient Name"
              className="border p-2 mr-2"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <select className="border p-2 mr-2" value={doctorId} onChange={(e) => setDoctorId(e.target.value)}>
              <option value="">-- Select Doctor --</option>
              {doctors.map((doc) => <option key={doc.id} value={doc.id}>{doc.name} - {doc.specialization}</option>)}
            </select>
            <button onClick={handleAddAppointment} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            <button onClick={() => setSelectedDate(null)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">Cancel</button>
          </div>
        )}

        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          selectable={true}
          select={handleDateSelect}
          events={appointments}
          eventClick={handleEventClick}
          height="auto"
        />
      </div>
    </ProtectedWrapper>
  );
}

/* small wrapper inside this file to redirect if not logged in */
import { useRouter } from "next/navigation";
function ProtectedWrapper({ token, children }) {
  const router = useRouter();
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token && !stored) router.push("/login");
  }, [token, router]);
  const stored = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token && !stored) return null;
  return children;
}

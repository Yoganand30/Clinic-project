import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";

export default function PatientsPage() {
  return (
    <ProtectedRoute>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Patients (Coming soon)</h1>
        <p>Add patient management here (CRUD + links to appointments & queue).</p>
      </div>
    </ProtectedRoute>
  );
}

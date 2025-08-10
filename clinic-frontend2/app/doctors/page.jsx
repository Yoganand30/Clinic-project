import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import DoctorsClient from "./DoctorsClient";

export default function DoctorsPage() {
  return (
    <ProtectedRoute>
      <Navbar />
      <DoctorsClient />
    </ProtectedRoute>
  );
}

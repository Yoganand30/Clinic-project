import ProtectedRoute from "../../components/ProtectedRoute";
import Navbar from "../../components/Navbar";
import QueueClient from "./QueueClient";

export default function QueuePage() {
  return (
    <ProtectedRoute>
      <Navbar />
      <QueueClient />
    </ProtectedRoute>
  );
}

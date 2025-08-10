"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { token, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <Link href="/doctors">Doctors</Link>
        <Link href="/queue">Queue</Link>
        <Link href="/appointments">Appointments</Link>
        <Link href="/patients">Patients</Link>
      </div>

      <div className="flex items-center gap-4">
        {token ? (
          <>
            <span>Logged in</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

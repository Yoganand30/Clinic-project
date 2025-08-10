"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // if not logged in, redirect to /login
    const stored = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (!token && !stored) {
      router.push("/login");
    }
  }, [token, router]);

  const stored = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (!token && !stored) return null; // render nothing while redirecting

  return children;
}

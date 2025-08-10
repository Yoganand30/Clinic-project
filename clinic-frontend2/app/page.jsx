import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Clinic Front Desk</h1>
      <p className="mt-4">Use the nav to access Doctors, Queue, Appointments, Patients.</p>
      <div className="mt-6">
        <Link href="/login" className="text-blue-600">Login</Link>
      </div>
    </div>
  );
}

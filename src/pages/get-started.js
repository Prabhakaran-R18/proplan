// pages/get-started.js
import Link from 'next/link';

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Let’s Get You Started!</h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Plan your days smarter. To begin, either register or log in with your account.
      </p>
      <div className="flex gap-4">
        <Link href="/register">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md">Register</button>
        </Link>
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md">Login</button>
        </Link>
      </div>
    </main>
  );
}

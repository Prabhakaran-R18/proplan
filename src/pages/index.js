// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>PlanWise – Smart Daily Planner</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col justify-center items-center p-8">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4">PlanWise</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl text-center">
          Your intelligent AI-powered assistant for smarter task management and daily planning.
        </p>
        <div className="flex gap-6">
          <Link href="/features">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
              Explore Features
            </button>
          </Link>
          <Link href="/get-started">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}

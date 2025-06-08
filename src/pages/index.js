// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PlanWise – Smart Daily Planner</title>
        <meta name="description" content="Organize smarter with AI-powered task management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 font-sans">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">PlanWise</h1>
            <p className="text-xl text-gray-600">Smart Daily Planner with Adaptive AI</p>
          </header>

          <section className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Stay Productive. Stay Balanced.</h2>
              <p className="text-gray-700 text-lg mb-6">
                PlanWise helps you manage tasks intelligently. With AI-powered suggestions, weather/calendar integration, and personalized routines, achieve better focus and control over your daily life.
              </p>
              <a
                href="/register"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
            </div>

            <div className="md:w-1/2">
              <img
                src="/planner-illustration.svg"
                alt="Smart planner illustration"
                className="w-full max-w-md mx-auto drop-shadow-xl"
              />
            </div>
          </section>

          <section className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Task Management",
                desc: "Create, edit, and organize your tasks with smart reminders and categories.",
              },
              {
                title: "AI Scheduling",
                desc: "Let AI suggest the best way to schedule your day based on workload and habits.",
              },
              {
                title: "Calendar & Weather API",
                desc: "Plan your day better with real-time weather and calendar event syncing.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

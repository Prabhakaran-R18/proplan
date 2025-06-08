// pages/features.js
import Link from 'next/link';

export default function Features() {
  const features = [
    { title: "Smart Task Categorization", desc: "Organize tasks into categories like Work, Study, Personal." },
    { title: "Weather Integration", desc: "Plan tasks better with weather-based suggestions." },
    { title: "AI Task Reprioritization", desc: "Get smart reordering based on urgency and mood." },
    { title: "Live Productivity Charts", desc: "Visualize your progress and time usage." }
  ];

  return (
    <main className="min-h-screen bg-white px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-semibold text-indigo-700">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/get-started">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition-all duration-300">
            Try PlanWise Now
          </button>
        </Link>
      </div>
    </main>
  );
}

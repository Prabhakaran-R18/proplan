// pages/features.js
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="flex justify-between items-center p-6 bg-blue-800 text-white">
        <div className="text-2xl font-bold">🧠 PlanWise</div>
        <ul className="flex space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/get-started">Get Started</Link></li>
        </ul>
      </nav>

      <section className="py-12 px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl font-semibold text-blue-700 mb-4">
          ✨ Key Features
        </motion.h2>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-3">
          {[
            { title: "Simple Task Input", desc: "Easily add and manage your daily goals." },
            { title: "AI-Powered Scheduling", desc: "Intelligently prioritize tasks for max productivity." },
            { title: "Weather + Calendar Sync", desc: "Smartly adapt to real-world context." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white shadow-md p-6 rounded-xl border hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
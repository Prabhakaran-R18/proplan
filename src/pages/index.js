// pages/index.js
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="font-poppins min-h-screen bg-white text-gray-800">
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight"
        >
          🧠 PlanWise
        </motion.div>
        <motion.ul 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-8 font-medium"
        >
          <li><Link href="/features" className="hover:text-blue-400 transition">Features</Link></li>
          <li><Link href="/features#usecases" className="hover:text-blue-400 transition">Use Cases</Link></li>
          <li><Link href="/get-started" className="hover:text-blue-400 transition">Get Started</Link></li>
        </motion.ul>
      </header>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center bg-gradient-to-br from-blue-100 to-white py-24 px-4"
      >
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Smarter Daily Planning Starts Here</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Organize, prioritize, and let AI help plan your day with clarity and control.
        </p>
        <Link href="/get-started">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
          >
            Start Planning
          </motion.button>
        </Link>
      </motion.section>

      <footer className="text-center py-6 border-t mt-12 text-sm text-gray-500">
        &copy; 2025 PlanWise. Built with ❤️ by Prabhakaran R
      </footer>
    </div>
  );
}

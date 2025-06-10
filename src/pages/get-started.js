// pages/get-started.js

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 px-4 py-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          📝 Get Started with PlanWise
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Just a few quick details to begin your productivity journey.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Join PlanWise
          </motion.button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/">
            <span className="text-blue-500 hover:underline">Go back</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
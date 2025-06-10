// pages/index.js
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white text-gray-800 p-8">
      <motion.h1
        className="text-5xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PlanWise – Smart Daily Planner
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Organize tasks. Adapt your schedule. Boost productivity. Let AI plan your perfect day.
      </motion.p>

      <motion.div className="flex gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <Button onClick={() => router.push('/get-started')}>Get Started</Button>
        <Button variant="outline" onClick={() => router.push('/features')}>View Features</Button>
      </motion.div>
    </main>
  );
}
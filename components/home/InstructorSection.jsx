"use client"

import Teacher from "@/public/assets/images/jhankar.png";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function InstructorSection() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-24 flex flex-col md:flex-row items-center justify-between">
            {/* Image Section */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center md:justify-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <Image
                    src={Teacher}
                    alt="Instructor"
                    className="w-80 h-auto md:w-[350px] lg:w-[400px] rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Text Section */}
            <motion.div
                className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Become an instructor</h2>
                <p className="text-gray-700 text-lg md:text-xl mb-6">
                    Instructors from around the world teach millions of learners on our platform. We provide the tools and skills to teach what you love.
                </p>
                <button
                    className="bg-slate-700 active:bg-slate-900 text-white px-6 py-3 rounded shadow"
                >
                    Start teaching today
                </button>
            </motion.div>
        </section>
    );
}

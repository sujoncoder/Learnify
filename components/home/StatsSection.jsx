"use client"

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const stats = [
    { number: "2K+", label: "CLASSES" },
    { number: "31K+", label: "MEMBERS" },
    { number: "100+", label: "TEACHERS" },
    { number: "4.8", label: "APP STORE RATING", stars: true },
];

const StatsSection = () => {
    return (
        <div className="bg-slate-100 text-white py-12 px-4 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
                    >
                        <h3 className="text-3xl font-bold text-green-400">{stat.number}</h3>
                        {stat.stars ? (
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-green-400 w-5 h-5" />
                                ))}
                            </div>
                        ) : null}
                        <p className="text-lg font-medium mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;

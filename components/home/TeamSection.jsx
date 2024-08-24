"use client"

import Teacher from "@/public/assets/images/nayem.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const TeamSection = () => {
    return (
        <div className="max-w-6xl mx-auto bg-slate-500 opacity-80 text-white p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
                {/* Text Section */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold mb-4">Learnify for Teams</h2>
                    <p className="text-lg mb-4">
                        Set your team up for success with reimagined learning to empower their personal and professional growth.
                    </p>
                    <p className="text-lg mb-8">
                        With inspiring classes on soft skills, business essentials, well-being, and more, your whole team will have deep knowledge and expertise at their fingertips.
                    </p>
                    <motion.button
                        className="flex items-center justify-center border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More <FaChevronRight className="ml-2" />
                    </motion.button>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="md:w-1/2 mt-8 md:mt-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={Teacher}
                        alt="Team Collaboration"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default TeamSection;

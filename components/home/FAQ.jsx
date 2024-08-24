"use client"

import { useState } from "react";
import { FiMinus, FiPlus } from 'react-icons/fi';

const accordionItems = [
    {
        title: 'What is Learnify?',
        content: 'Learnify is a comprehensive Learning Management System (LMS) that allows educators to create, manage, and deliver online courses efficiently.',
    },
    {
        title: 'How can I enroll in a course on Learnify?',
        content: 'To enroll in a course, simply sign up for a Learnify account, browse available courses, and click the enroll button on the course page.',
    },
    {
        title: 'How do I track my progress?',
        content: 'Learnify provides a detailed progress tracker within your dashboard, allowing you to monitor your learning journey through each course module.',
    },
    {
        title: 'Can I access Learnify on mobile devices?',
        content: 'Yes, Learnify is fully responsive and accessible on all mobile devices, so you can learn on the go, anytime and anywhere.',
    },
    {
        title: 'How do I get support if I have issues?',
        content: 'If you encounter any issues, you can contact our support team via the Help Center or email us directly. We’re here to assist you 24/7.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-20 px-2 sm:px-0">
            <h2 className="text-2xl font-bold text-center text-purple-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {accordionItems.map((item, index) => (
                    <div key={index} className="border border-purple-200 rounded-lg">
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex justify-between items-center p-4 bg-purple-50 hover:bg-purple-100 focus:outline-none rounded-lg transition duration-200 ease-out"
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-content-${index}`}
                        >
                            <span className="text-lg font-semibold text-purple-800">{item.title}</span>
                            <span className="text-purple-800">
                                {activeIndex === index ? (
                                    <FiMinus className="h-6 w-6" />
                                ) : (
                                    <FiPlus className="h-6 w-6" />
                                )}
                            </span>
                        </button>
                        {activeIndex === index && (
                            <div id={`faq-content-${index}`} className="p-4 text-purple-700 bg-white transition-all duration-300 rounded-b-lg">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;

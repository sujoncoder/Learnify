
const EmailTemplate = () => {
    return (
        <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-indigo-600 p-4 sm:p-6 lg:p-8">
                    <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">Welcome to Our LMS Platform!</h1>
                </div>
                <div className="p-4 sm:p-6 lg:p-8">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                        Dear [Recipient's Name],
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4">
                        We are excited to have you on board with our Learning Management System. Our platform is designed to make your learning experience seamless and effective.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4">
                        Here are some quick links to get you started:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4">
                        <li className="text-sm sm:text-base lg:text-lg">Explore Courses: [Link]</li>
                        <li className="text-sm sm:text-base lg:text-lg">View Your Dashboard: [Link]</li>
                        <li className="text-sm sm:text-base lg:text-lg">Access Help Center: [Link]</li>
                    </ul>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4">
                        If you have any questions, feel free to reach out to our support team.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4">
                        Happy Learning!
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4">
                        Best Regards,<br />
                        The LMS Team
                    </p>
                </div>
                <div className="bg-gray-100 p-4 sm:p-6 lg:p-8">
                    <p className="text-gray-600 text-xs sm:text-sm text-center">
                        © 2024 Learnify. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmailTemplate;

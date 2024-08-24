import Link from 'next/link';


const NotFound = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-md p-8 bg-white rounded-md text-center shadow">
                <h2 className="text-4xl font-bold text-blue-500 mb-4">404 - Not Found</h2>
                <p className="text-gray-700 mb-4 py-4">
                    Oops! The page you are looking for might be in another universe.
                </p>
                <Link
                    href="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded duration-500"
                >
                    Go Back
                </Link>
            </div>
        </div >
    );
};
export default NotFound;
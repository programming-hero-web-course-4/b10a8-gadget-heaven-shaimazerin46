import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <img src="https://img.icons8.com/?size=48&id=80923&format=png" alt="" className='w-20'/>
        <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="text-lg mt-2 text-gray-600">
            Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Go Back to Home
        </Link>
    </div>
    );
};

export default ErrorPage;
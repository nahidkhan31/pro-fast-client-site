import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-gray-800 dark:text-gray-200 animate-bounce">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
          It looks like the page you're looking for doesn't exist or has been
          moved. Don't worry, we'll help you find your way back!
        </p>
        <div className="mb-8">
          <FaExclamationTriangle className="w-48 h-48 sm:w-64 sm:h-64 mx-auto text-orange-500 dark:text-orange-400" />
        </div>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-300 ease-in-out transform hover:scale-105">
          <FaHome className="-ml-1 mr-2 h-5 w-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

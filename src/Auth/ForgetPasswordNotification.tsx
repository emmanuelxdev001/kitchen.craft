import React from "react";
import { useNavigate } from "react-router-dom";

const ForgetPasswordNotification: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Password Reset Email Sent
        </h2>
        <p className="text-gray-600 text-center mb-6">
          If the email address you provided matches an account, you will receive a password reset email shortly.
        </p>
        <p className="text-gray-500 text-sm text-center mb-4">
          Be sure to check your spam or junk folder if you don't see the email within a few minutes.
        </p>
        <div className="flex justify-center gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={() => navigate("/auth/login")}
          >
            Back to Login
          </button>
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
            onClick={() => navigate("/auth/forgot-password")}
          >
            Resend Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordNotification;

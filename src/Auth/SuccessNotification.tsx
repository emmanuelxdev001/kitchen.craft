import React from "react";

const ForgetPasswordNotification: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-green-600 mb-4">
        Password Reset Email Sent!
      </h1>
      <p className="text-gray-700">Please check your email to reset your password.</p>
    </div>
  );
};

export default ForgetPasswordNotification;

// CreateAccountNotification.tsx
import React from 'react';

const CreateAccountNotification: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="p-6 bg-white border border-green-300 rounded shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-green-700">Account Created Successfully</h2>
        <p className="mb-4">Your account has been successfully created. You can now log in to your account.</p>
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default CreateAccountNotification;

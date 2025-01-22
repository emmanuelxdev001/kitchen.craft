const Login = () => {
  return (
    <div className="w-full md:w-1/3 bg-white p-6 shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Log in</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            Username or email address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium" htmlFor="password">
            Password *
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <input id="remember-me" type="checkbox" className="mr-2" />
          <label htmlFor="remember-me" className="text-sm">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Log in
        </button>
        <p className="text-center text-sm mt-4">
          Lost your password?{" "}
          <a href="#" className="text-blue-500 underline">
            Click here
          </a>
        </p>
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <a href="/auth" className="text-blue-500 underline">
            Register Now
          </a>
        </p>
      </form>
      <p className="text-sm text-center mt-6 text-gray-500">
        By continuing, you accept the Website Regulations, Regulations for the
        sale of alcoholic beverages, and the{" "}
        <a href="/policy" className="text-blue-500 underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default Login;

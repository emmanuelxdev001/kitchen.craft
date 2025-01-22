import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex">
        <Link to="/" className="text-2xl font-bold italic">
          KITCHENCRAFT
        </Link>

        {/* Navigation Links */}
        <ul className="flex justify-center items-center ">
          <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
          <li><Link to="/shop" className="hover:text-purple-500">Shop</Link></li>
          <li><Link to="/categories" className="hover:text-purple-500">Categories</Link></li>
          <li><Link to="/contact" className="hover:text-purple-500">Contact</Link></li>
        </ul>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="border px-3 py-1 rounded-md" />
          <Link to="/cart" className="text-gray-700 hover:text-purple-500">🛒</Link>
          <Link to="/login" className="text-gray-700 hover:text-purple-500">🔑</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

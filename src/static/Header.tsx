import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white shadow-md flex justify-evenly items-center">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-center font-semibold italic px-1-2 py-2">
          KITCHENCRAFT
        </Link>

        <div className="flex gap-5 items-center">
          {/* Navigation Links */}
        <ul className="flex justify-center items-center space-x-4 ml-auto">
          <li><Link to="/" className="hover:text-purple-500">Home</Link></li>
          <li><Link to="/shop" className="hover:text-purple-500">Shop</Link></li>
          <li><Link to="/categories" className="hover:text-purple-500">Categories</Link></li>
          <li><Link to="/contact" className="hover:text-purple-500">Contact-Us</Link></li>
        </ul>
        </div>

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

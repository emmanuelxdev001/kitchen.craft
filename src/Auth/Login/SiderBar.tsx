const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-100 p-4 h-screen">
      <h2 className="font-bold text-lg mb-4">Widget price filter</h2>
      <div className="mb-6">
        <label className="block text-sm mb-2" htmlFor="min-price">
          Min price
        </label>
        <input
          id="min-price"
          type="range"
          className="w-full"
          min="0"
          max="50"
        />
        <p className="text-sm text-gray-500">Price: $0 - $50</p>
      </div>
      <h2 className="font-bold text-lg mb-4">Product Categories</h2>
      <ul className="space-y-2">
        {["Fruits & Vegetables", "Baby & Pregnancy", "Beverages"].map(
          (category, index) => (
            <li
              key={index}
              className="hover:bg-gray-200 p-2 rounded cursor-pointer"
            >
              {category}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";

const categories = [
  { name: "Fruits", image: "/images/fruits.png" },
  { name: "Beverages", image: "/images/beverages.png" },
  { name: "Snacks", image: "/images/snacks.png" },
];

const CategoryList = () => {
  return (
    <div className="container mx-auto px-4 my-6">
      <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/category/${category.name.toLowerCase()}`}
            className="border rounded-lg p-4 shadow-md text-center"
          >
            <img src={category.image} alt={category.name} className="h-20 mx-auto mb-2" />
            <p className="text-lg font-semibold">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

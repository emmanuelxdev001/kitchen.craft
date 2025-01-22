import ProductCard from "./ProductCard";


const products = [
  { id: 1, name: "Apple Juice", price: "$0.50", image: "/images/apple-juice.png" },
  { id: 2, name: "Bananas", price: "$1.25", image: "/images/bananas.png" },
  { id: 3, name: "Oranges", price: "$2.45", image: "/images/oranges.png" },
];

const Shop = () => {
  return (
    <div className="container mx-auto px-4 my-6">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

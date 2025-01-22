import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Apple Juice", price: "$0.50", image: "/images/apple-juice.png", description: "Fresh 100% Apple Juice." },
  { id: 2, name: "Bananas", price: "$1.25", image: "/images/bananas.png", description: "Organic fresh bananas." },
  { id: 3, name: "Oranges", price: "$2.45", image: "/images/oranges.png", description: "Juicy and delicious oranges." },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center text-2xl font-bold mt-6">Product Not Found</h2>;
  }

  return (
    <div className="container mx-auto px-4 my-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-80 h-80 object-cover" />
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-purple-500 text-xl font-bold mt-2">{product.price}</p>
          <button className="bg-purple-500 text-white px-4 py-2 mt-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

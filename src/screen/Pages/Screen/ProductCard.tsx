import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, name, price, image }: ProductProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="w-full h-40 object-cover mb-3" />
      </Link>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-purple-500 font-bold">{price}</p>
      <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-md w-full">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

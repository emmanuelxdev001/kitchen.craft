interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  const products: Product[] = [
    { id: 1, name: "Apple Juice", price: "$0.50", image: "/images/apple-juice.png" },
    { id: 2, name: "Organic Bananas", price: "$1.25", image: "/images/bananas.png" },
    { id: 3, name: "Fresh Oranges", price: "$2.45", image: "/images/oranges.png" },
  ];
  
  const ProductListing = () => {
    return (
      <div className="container mx-auto px-4 my-6">
        <h2 className="text-2xl font-bold mb-4">New Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-3" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-purple-500 font-bold">{product.price}</p>
              <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-md w-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductListing;
  
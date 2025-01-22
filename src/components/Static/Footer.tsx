const Footer = () => {
    return (
      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Links Section */}
            <div>
              <h4 className="font-bold text-lg mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-purple-500">Home</a></li>
                <li><a href="/shop" className="hover:text-purple-500">Shop</a></li>
                <li><a href="/about" className="hover:text-purple-500">About</a></li>
                <li><a href="/contact" className="hover:text-purple-500">Contact</a></li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-2">Subscribe</h4>
              <input type="email" placeholder="Enter your email" className="border px-3 py-1 rounded-md w-full" />
              <button className="bg-purple-500 text-white px-4 py-1 mt-2 rounded-md w-full">Subscribe</button>
            </div>
  
            {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-500">🔵 Facebook</a>
                <a href="#" className="hover:text-purple-500">🟣 Instagram</a>
                <a href="#" className="hover:text-purple-500">🔵 Twitter</a>
              </div>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
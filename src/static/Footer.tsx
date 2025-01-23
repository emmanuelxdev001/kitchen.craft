import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        
        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg">Join our newsletter for £10 offs</h3>
          <p className="text-gray-600 text-sm">Register now to get latest updates on promotions & coupons. Don't worry, we do not spam!</p>
          <div className="flex mt-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 w-full border border-gray-300 rounded-l-md"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md">SEND</button>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-semibold">Do You Need Help?</h3>
          <p className="text-gray-600">Monday-Friday: 08am-9pm</p>
          <p className="font-bold">0 800 300-353</p>
          <p className="text-gray-600">Need help with your order?</p>
          <p className="text-blue-600">info@example.com</p>
        </div>

        {/* Money & Policy Section */}
        <div>
          <h3 className="font-semibold">Make Money with Us</h3>
          <ul className="text-gray-600">
            <li>Sell on kitchencraft</li>
            <li>Sell Your Services on kitchencraft</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>

        {/* Download & Social Media */}
        <div>
          <h3 className="font-semibold">Download our app</h3>
          <div className="flex space-x-2 mt-2">
            <img src="/google-play.png" alt="Google Play" className="w-32" />
            <img src="/app-store.png" alt="App Store" className="w-32" />
          </div>
          <h3 className="font-semibold mt-4">Follow us on social media:</h3>
          <div className="flex space-x-3 mt-2">
            <img src="/facebook.png" alt="Facebook" className="w-6" />
            <img src="/twitter.png" alt="Twitter" className="w-6" />
            <img src="/instagram.png" alt="Instagram" className="w-6" />
            <img src="/linkedin.png" alt="LinkedIn" className="w-6" />
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-xs mt-6 border-t pt-4">
        <p>Copyright 2024 &copy; kitchencraft WooCommerce WordPress Theme. All rights reserved. Powered by KLBTheme.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <img src="/visa.png" alt="Visa" className="w-12" />
          <img src="/paypal.png" alt="PayPal" className="w-12" />
          <img src="/skrill.png" alt="Skrill" className="w-12" />
          <img src="/klarna.png" alt="Klarna" className="w-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
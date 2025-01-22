import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-full">
            <div className="p-4">
                <h2 className="text-lg font-bold">Wazobia Bite</h2>
                <nav className="flex ">
                    <ul>
                        <li className="py-2">
                            <a href="#features" className="hover:text-gray-400">Features</a>
                        </li>
                        <li className="py-2">
                            <a href="#services" className="hover:text-gray-400">Services</a>
                        </li>
                        <li className="py-2">
                            <a href="#about" className="hover:text-gray-400">About Us</a>
                        </li>
                        <li className="py-2">
                            <a href="#contact" className="hover:text-gray-400">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
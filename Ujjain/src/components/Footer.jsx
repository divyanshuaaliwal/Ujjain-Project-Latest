import React from 'react';
import { navLinks } from './Data/navData'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="text-xl font-bold mb-4 text-orange-500">Mahakaleshwar Guide</h4>
                        <p className="text-gray-400 mb-4">
                            Your comprehensive guide to exploring and experiencing the divine Mahakaleshwar Temple in Ujjain.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-orange-500">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.url}
                                        className="text-gray-400 hover:text-orange-500 transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-orange-500">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin size={18} className="text-orange-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-400">Mahakaleshwar Temple, Ujjain, Madhya Pradesh, India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="text-orange-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-400">+91 XXXXX XXXXX</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="text-orange-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-400">info@mahakaleshwarguide.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-4 text-orange-500">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for updates on temple activities and events.
                        </p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <button
                                type="submit"
                                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-6 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {currentYear} Mahakaleshwar Guide. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
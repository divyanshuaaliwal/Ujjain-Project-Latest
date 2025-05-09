import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Phone, Mail, ChevronDown } from 'lucide-react';
import img1 from "../assets/ShivJee1.jpg";
import img2 from "../assets/Temple.jpg";
import img3 from "../assets/Trishul.png";

export default function ChardhamTourUI() {

    const menuLinks = [
        { title: "Home", path: "/" },
        { title: "Mahakaleshwar", path: "/destination/mahakaleshwar" },
        { title: "Harsiddhi Mata", path: "/destination/harsiddhi-mata" },
        { title: "Kal Bhairav", path: "/destination/kal-bhairav" },
        { title: "Mangalnath Mandir", path: "/destination/mangalnath-mandir" },
        { title: "Hotels", path: "/hotels" },
        { title: "Blog", path: "/blog" },
        { title: "B2B Registration", path: "/b2b-registration" },
        { title: "Register", path: "/register" },
        { title: "Booking Form", path: "/booking-form" },
        { title: "Pay Online", path: "/pay-online" },
    ];


    const navMenu = [
        {
            title: "Darshan Tours",
            dropdown: true,
            items: [] // Add submenu items if needed
        },
        {
            title: "Ujjain Yatra",
            dropdown: true,
            items: []
        },
        {
            title: "Temple Wise Darshan",
            dropdown: true,
            items: []
        },
        {
            title: "Hotels Near Mandir",
            dropdown: true,
            items: []
        },
        {
            title: "Useful Links",
            dropdown: true,
            items: []
        },
        {
            title: "Travel Community",
            dropdown: false
        },
        {
            title: "Customer Support",
            dropdown: true,
            items: []
        }
    ];

    return (
        <div className="bg-gray-50">
            <div className="bg-orange-600 text-white shadow-md">
                <div className="w-[90vw] mx-auto">
                    <div className="flex items-center justify-between px-2 py-4">
                        {
                            menuLinks.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path} // Format the link to a lowercase URL with hyphens
                                    className="px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300 ease-in-out"
                                >
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Logo and Contact Section */}
            <div className="bg-white py-1">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Left Section - Text */}
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="mr-4">
                                <h1 className="text-[#e46e0f] text-4xl font-bold mb-1" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)' }}>
                                    Ujjain Mahakal
                                </h1>
                                <div className="italic text-[#e46e0f]">Spiritual Journey</div>
                            </div>
                            <div>
                                <div className="text-gray-700 font-semibold">Approved by</div>
                                <div className="text-xl font-bold">Uttarakhand Tourism</div>
                            </div>

                            {/* Image Section - Placed After Text */}
                            <div className="mt-4 ml-4 flex justify-center space-x-4">
                                <img src={img1} alt="Mahakal 1" className="h-[100px] w-[100px] object-cover rounded" />
                                <img src={img2} alt="Mahakal 2" className="h-[100px] w-[100px] object-cover rounded" />
                                <img src={img3} alt="Mahakal 3" className="h-[100px] w-[100px] object-cover rounded" />
                            </div>
                        </div>

                        {/* Right Section - Contact */}
                        <div className="flex flex-col items-end space-y-2">
                            {/* Phone Section */}
                            <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-700">Call Us:</span>
                                <Phone size={18} className="text-green-600" />
                                <a href="tel:+917838908606" className="text-blue-700 hover:underline font-semibold">
                                    +91-7838908606
                                </a>
                            </div>

                            {/* Email Section */}
                            <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-700">Mail Us:</span>
                                <Mail size={18} className="text-red-500" />
                                <a href="mailto:yatra@chardhamtour.in" className="text-blue-700 hover:underline font-semibold">
                                    yatra@chardhamtour.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Navigation */}
            <div className="bg-orange-600 text-white">
                <div className="container mx-auto px-4">
                    <ul className="flex flex-wrap">
                        {navMenu.map((item, index) => (
                            <li key={index} className={`relative ${item.dropdown ? "group" : ""}`}>
                                <a
                                    href={item.link || "#"}
                                    className={`py-3 px-5 flex items-center font-medium transition-colors duration-200 hover:bg-orange-700 ${!item.dropdown ? "block" : ""}`}
                                >
                                    {item.title}
                                    {item.dropdown && <ChevronDown size={16} className="ml-2 mt-[2px]" />}
                                </a>

                                {/* Example dropdown, only shown if dropdown exists */}
                                {item.dropdown && (
                                    <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white text-black shadow-md min-w-[160px] z-10">
                                        {item.dropdownItems?.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a
                                                    href={subItem.link}
                                                    className="block px-4 py-2 hover:bg-orange-100"
                                                >
                                                    {subItem.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
return (
    <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-3xl font-bold text-[#4b2e1e] mb-6">Contact Us</h2>

      {/* Info Section */}
    <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
            <h3 className="text-xl font-semibold mb-2">Our Address</h3>
            <p className="text-gray-700 mb-2">Fashion Ethnic Wear</p>
            <p className="text-gray-700 mb-2">123, Ethnic Street</p>
            <p className="text-gray-700 mb-2">Mumbai, Maharashtra, India</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Customer Support</h3>
            <p className="text-gray-700 mb-2">Phone: +91 7900133073</p>
            <p className="text-gray-700 mb-2">Email: amehafashion@gmail.com</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Hours</h3>
            <p className="text-gray-700">Mon - Sat: 9:00 AM – 7:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
        </div>

        {/* Contact Form */}
        <div>
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Your Name"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    className="w-full border rounded px-3 py-2"
                    placeholder="you@example.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    rows="4"
                    className="w-full border rounded px-3 py-2"
                    placeholder="How can we help you?"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#6b3410]"
            >
                Send Message
            </button>
            </form>
            </div>
        </div>
    </div>
    );
};
export default Contact;

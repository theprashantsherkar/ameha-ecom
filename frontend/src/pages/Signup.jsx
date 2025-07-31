import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    otp: '',
});
const [otpSent, setOtpSent] = useState(false);
const handleChange = (e) => {
    setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
    }));
};
const handleOtpSend = (e) => {
    e.preventDefault();
    if (formData.phone.length < 10) return alert("Enter a valid phone number");
    console.log('OTP sent to:', formData.phone);
    setOtpSent(true);
};
const handleSignup = (e) => {
    e.preventDefault();
    console.log('User signed up:', formData);
    localStorage.setItem("user", JSON.stringify(formData));
    window.location.href = "/";
};
return (
<div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
    <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#8B4513] mb-6">Create Account</h2>
        <form onSubmit={otpSent ? handleSignup : handleOtpSend} className="space-y-4">
        <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
        />
        <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
        />
        <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
        />
        <input
        type="password"
        name="password"
        placeholder="Create Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
        />
        {otpSent && (
            <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={formData.otp}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
        )}
        <button
        type="submit"
        className="w-full bg-[#8B4513] text-white py-2 rounded hover:bg-[#a0522d] transition duration-300"
        >
            {otpSent ? 'Complete Signup' : 'Send OTP'}
            </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
            </p>
        </div>
    </div>
    );
}
export default Signup;
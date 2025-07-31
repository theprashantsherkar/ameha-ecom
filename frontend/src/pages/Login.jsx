import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [phone, setPhone] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState('');

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (phone.length < 10) return alert("Enter a valid phone number");
    console.log('OTP requested for', phone);
    setOtpRequested(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with OTP', otp);
    localStorage.setItem("user", JSON.stringify({ phone }));
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#8B4513] mb-6">Login with OTP</h2>

        <form onSubmit={otpRequested ? handleLogin : handleRequestOtp} className="space-y-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              placeholder="Enter your phone number"
            />
          </div>

          {otpRequested && (
            <div>
              <label className="text-sm text-gray-600 block mb-1">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                placeholder="Enter OTP"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#8B4513] text-white py-2 rounded hover:bg-[#a0522d] transition duration-300"
          >
            {otpRequested ? "Login" : "Request OTP"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;





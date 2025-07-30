import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = isLogin ? login(email, password) : signup(email, password);
    if (success) navigate('/profile');
    else alert("Please fill in both fields.");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f5f5dc]">
      <div className="bg-white shadow-md rounded-md p-8 w-80">
        <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#8B4513] text-white py-2 rounded-md hover:opacity-90"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p
          className="text-sm text-center text-[#8B4513] mt-4 cursor-pointer underline"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;



import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#4B2E1E]">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4">
        We collect information you provide during checkout, newsletter signup, or account registration, such as name, email, address, and payment details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <p className="mb-4">
        We use your information to process orders, communicate with you, and improve our services. We do not sell your personal data to third parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance user experience and gather analytical data. You may disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Security</h2>
      <p>
        We implement industry-standard security measures to protect your information from unauthorized access.
      </p>
    </div>
  );
};

export default PrivacyPolicy;


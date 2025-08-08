// src/Components/WhyShopWithUs.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Example SVG icon style (accent color can be changed)
const iconClass = "w-12 h-12 mb-4 text-pink-400";
const ShippingIcon = () => <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M3 3h2l3 9h11L21 6H6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="19.5" r="2.5"/><circle cx="17.5" cy="19.5" r="2.5"/></svg>;
const PaymentIcon = () => <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" ry="2" /><path d="M2 10h20" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const EthicsIcon = () => <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 2l7 7-5 5-2-2-5 5-2-2 7-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const SupportIcon = () => <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5-2 4-2 4 2 4 2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

const reasons = [
  {
    icon: <ShippingIcon />,
    title: 'Fast & Reliable Shipping',
    description: 'Get your orders delivered quickly and safely, with tracking available on all shipments.'
  },
  {
    icon: <PaymentIcon />,
    title: 'Secure Payment',
    description: 'We use trusted payment gateways to ensure your information is always protected.'
  },
  {
    icon: <EthicsIcon />,
    title: 'Ethically Sourced Materials',
    description: 'Our collections are crafted using only sustainable and ethically sourced fabrics.'
  },
  {
    icon: <SupportIcon />,
    title: 'Excellent Support',
    description: 'Our team is here for you 24/7 with friendly and helpful customer care.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.18, duration: 0.7, ease: 'easeOut' }
  })
};

const WhyShopWithUs = () => (
  <section className="max-w-5xl mx-auto my-24 px-4">
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 text-center tracking-tight">
      Why Shop With Us
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {reasons.map((reason, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={cardVariants}
          whileHover={{ scale: 1.045, boxShadow: "0 8px 24px 0 rgba(200,200,220,0.07)" }}
          className="rounded-2xl px-8 py-10 bg-white/70 backdrop-blur-md border border-gray-200 transition-all duration-300 text-gray-900 flex flex-col items-center focus:outline-none shadow-sm"
          tabIndex={0}
        >
          {reason.icon}
          <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
          <p className="text-gray-600 text-base">{reason.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyShopWithUs;



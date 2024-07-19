import React from 'react';
import bannerImage from '../../../assets/banners/Olipop-main-banner.jpg';


export default function MainBanner() {
    return (
        <div className={`relative bg-cover bg-center`} style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className={` absolute inset-0 bg-black opacity-50`}></div>
      <div className="relative z-10 text-center text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Olipop</h1>
        <p className="text-xl mb-6">Healthy soda that's delicious and good for you.</p>
        <a href="#shop" className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded">Shop Now</a>
      </div>
    </div>
  );
}

import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/r40Qm7q/Meole-Sports-Hall.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div className="hero-content text-neutral-content ">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold text-white">
            Self-service sports facility and school lettings booking software
          </h1>
          <p className="mb-5 text-white">
            The easy-to-use booking software for sports facilities, spaces and
            activities – driving utilisation, revenue, and social impact across
            schools, local authorities, trusts and operators.
          </p>
          <button className="btn bg-indigo-600 border-none text-white text-lg">
            Select Your Sector
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Mission Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Our Mission</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our platform is dedicated to simplifying the process of booking sports
          facilities, ensuring accessibility and convenience for all. We believe
          in promoting health, fitness, and community through seamless facility
          management. Our values are rooted in customer satisfaction,
          innovation, and a commitment to sports development.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4  border-indigo-600"
              src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
            <p className="mt-2 text-gray-700">
              John is the visionary behind the platform with over a decade of
              experience in the sports industry.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 "
              src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">COO</p>
            <p className="mt-2 text-gray-700">
              Jane oversees day-to-day operations, ensuring that everything runs
              smoothly for our users.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 "
              src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
              alt="Team Member 3"
            />
            <h3 className="text-xl font-semibold">Mark Johnson</h3>
            <p className="text-gray-500">CTO</p>
            <p className="mt-2 text-gray-700">
              Mark leads the technology team, constantly improving the platform
              and adding new features.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Our Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              year: "2020",
              description:
                "The idea for the platform was born out of the need for better facility booking solutions. After identifying this gap, our founder John started working on the concept.",
            },
            {
              year: "2021",
              description:
                "We launched our beta version and onboarded our first sports facilities. The response was overwhelming, and we quickly gained traction in the sports community.",
            },
            {
              year: "2022",
              description:
                "Expanded our services to include more cities and introduced advanced features like real-time availability checking, secure payments, and seamless facility management tools.",
            },
            {
              year: "2023",
              description:
                "Achieved a major milestone of 100,000+ bookings through our platform and continue to expand to new regions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.year}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Have any questions? We’re here to help. Contact us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Office Address
            </h3>
            <p className="text-gray-700">1234 Sports Street, City, Country</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Phone Number
            </h3>
            <p className="text-gray-700">+123 456 7890</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Email Address
            </h3>
            <p className="text-gray-700">support@sportsfacility.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Our Mission</h1>
        <p className="text-lg text-gray-700">
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
          <div className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="/images/team-member1.jpg"
              alt="Team Member 1"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-500">Founder & CEO</p>
            <p className="mt-2 text-gray-700">
              John is the visionary behind the platform with over a decade of
              experience in the sports industry.
            </p>
          </div>

          <div className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="/images/team-member2.jpg"
              alt="Team Member 2"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-500">COO</p>
            <p className="mt-2 text-gray-700">
              Jane oversees day-to-day operations, ensuring that everything runs
              smoothly for our users.
            </p>
          </div>

          <div className="text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4"
              src="/images/team-member3.jpg"
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

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Our Journey
        </h2>
        <div className="timeline">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">2020</h3>
            <p className="text-gray-700">
              The idea for the platform was born out of the need for better
              facility booking solutions. After identifying this gap, our
              founder John started working on the concept.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">2021</h3>
            <p className="text-gray-700">
              We launched our beta version and onboarded our first sports
              facilities. The response was overwhelming, and we quickly gained
              traction in the sports community.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">2022</h3>
            <p className="text-gray-700">
              Expanded our services to include more cities and introduced
              advanced features like real-time availability checking, secure
              payments, and seamless facility management tools.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">2023</h3>
            <p className="text-gray-700">
              Achieved a major milestone of 100,000+ bookings through our
              platform and continue to expand to new regions.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Have any questions? We’re here to help. Contact us anytime.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Office Address
          </h3>
          <p className="text-gray-700">1234 Sports Street, City, Country</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Phone Number</h3>
          <p className="text-gray-700">+123 456 7890</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Email Address</h3>
          <p className="text-gray-700">support@sportsfacility.com</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

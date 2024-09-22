import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                className="w-full p-3 h-32 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Our Location
        </h2>
        <p className="text-gray-700 mb-8">Visit us at our office</p>

        <div className="mx-auto w-full h-64">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090865!2d144.95592831550413!3d-37.81720997975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577590c6d3443e7!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1630701485994!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Contact Details */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          Contact Information
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out to us
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Phone Number</h3>
          <p className="text-gray-700">+123 456 7890</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Email Address</h3>
          <p className="text-gray-700">support@sportsfacility.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            Office Address
          </h3>
          <p className="text-gray-700">1234 Sports Street, City, Country</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

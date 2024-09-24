import React from "react";
import { Carousel } from "antd";

const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Booking a basketball court was super easy and hassle-free. The facilities are top-notch, and the customer service was excellent. Highly recommend Playpal!",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Playpal made it so easy for us to organize our corporate tournament. We found a great venue, and the entire process from booking to execution was smooth.",
  },
  {
    name: "David Wilson",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "I regularly book tennis courts through Playpal. It's simple, fast, and reliable. I love the convenience of finding available time slots instantly.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          What Our Users Say
        </h2>
        <Carousel autoplay className="max-w-3xl mx-auto shadow">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8">
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <p className="text-lg italic mb-4">"{testimonial.review}"</p>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;

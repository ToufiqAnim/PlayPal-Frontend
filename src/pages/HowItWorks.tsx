import React from "react";
import { Card } from "antd";
import {
  SearchOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const HowItWorks = () => {
  const steps = [
    {
      title: "Search Facilities",
      description:
        "Browse and search for sports facilities in your area that match your preferences.",
      icon: <SearchOutlined className="text-indigo-600 text-4xl mb-4" />,
    },
    {
      title: "Check Availability",
      description:
        "Check the real-time availability of your selected facilities by selecting a date and time.",
      icon: <CalendarOutlined className="text-indigo-600 text-4xl mb-4" />,
    },
    {
      title: "Book Instantly",
      description:
        "Confirm your booking instantly by selecting a slot and making a secure payment.",
      icon: <CheckCircleOutlined className="text-indigo-600 text-4xl mb-4" />,
    },
    {
      title: "Enjoy Your Game",
      description:
        "Arrive at the facility, show your booking confirmation, and enjoy your game!",
      icon: <SmileOutlined className="text-indigo-600 text-4xl mb-4" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform transform hover:scale-105 text-center"
            hoverable
          >
            {step.icon}
            <Meta title={step.title} description={step.description} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

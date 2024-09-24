import React from "react";
import { Card, Col, Row } from "antd";

const services = [
  {
    title: "Book Sports Facilities",
    description:
      "Easily book various sports facilities such as basketball courts, soccer fields, tennis courts, and more.",
    img: "https://www.wokingham.co.uk/wp-content/uploads/2021/09/Cantley-Park-3G-Pitch-Opens-3.jpg",
  },
  {
    title: "Event Venues",
    description:
      "Find and book venues for events, tournaments, and corporate gatherings with ease.",
    img: "https://sportsplanningguide.com/wp-content/uploads/2017/07/facilities.jpg",
  },
  {
    title: "Training Sessions",
    description:
      "Schedule training sessions with professional coaches across different sports disciplines.",
    img: "https://www.themeboy.com/wp-content/uploads/themeboy-sports-wordpress-blog-5-ways-make-training-sessions-engaging.jpg",
  },
];

const ExploreOurServices = () => {
  return (
    <div className="container mx-auto mt-16 mb-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
        Explore Our Services
      </h2>
      <Row gutter={24}>
        {services.map((service, index) => (
          <Col span={8} key={index}>
            <Card
              hoverable
              cover={
                <div className="h-72 overflow-hidden">
                  <img
                    alt={service.title}
                    src={service.img}
                    className="w-full h-full object-cover"
                  />
                </div>
              }
              className="shadow-md "
            >
              <Card.Meta
                title={service.title}
                description={service.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ExploreOurServices;

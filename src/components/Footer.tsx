import React from "react";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <Row gutter={[32, 16]} justify="space-between">
          {/* About Section */}
          <Col xs={24} md={8}>
            <h3 className="text-2xl font-bold mb-4">About Playpal</h3>
            <p>
              Playpal is your go-to platform for booking sports facilities and
              event venues. Whether you’re looking to book a soccer field, a
              tennis court, or an entire event venue, we’ve got you covered!
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col xs={12} md={4}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/facility" className="hover:text-gray-400">
                  Facilities
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-gray-400">
                  Login
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col xs={12} md={8}>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <PhoneOutlined className="mr-2" />
                +1 (123) 456-7890
              </li>
              <li>
                <MailOutlined className="mr-2" />
                support@playpal.com
              </li>
              <li>
                <EnvironmentOutlined className="mr-2" />
                123 Playpal Avenue, Sports City, USA
              </li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col xs={24} md={4}>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FacebookOutlined style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <TwitterOutlined style={{ fontSize: "24px" }} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>© 2024 Playpal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amazon_blue-light text-white px-8 py-12 mt-6">
      <div className="container mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">Get to Know Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press Releases</a>
              </li>
              <li>
                <a href="#">Amazon Cares</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Connect with Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Make Money with Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Sell on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Fulfilment by Amazon</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Let Us Help You</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">COVID-19 and Amazon</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Returns Centre</a>
              </li>
              <li>
                <a href="#">100% Purchase Protection</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold text-2xl">Create with ❤️</div>
    </footer>
  );
};

export default Footer;

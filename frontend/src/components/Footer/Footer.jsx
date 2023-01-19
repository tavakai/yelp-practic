import React from "react";
import Line from '../Line/Line.jsx';

const Footer = () => {
  return (
    <section className="footer">
      <div className="content footer__content">
        <p className="footer__caption">
          Yelp production for bootcamp
        </p>
        <Line modifierClass="line_gray" />
      </div>
    </section>
  );
};

export default Footer;

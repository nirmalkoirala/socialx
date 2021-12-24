import React, {useEffect} from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { featureList } from "./data.js";

import AOS from 'aos';
import 'aos/dist/aos.css'

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" data-aos="fade-down">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {featureList.map((feature) => (
              <Feature key={feature.id} icon={feature.icon} 
              heading={feature.heading} text={feature.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

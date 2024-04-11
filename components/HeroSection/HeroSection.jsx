import React from "react";
import Image from "next/image";
import Style from "./HeroSection.module.css";
import { Button } from "../compindex";
import hero from "../../images/hero.jpg";

const HeroSection = () => {
  return (
    <div className={Style.HeroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover the world of NFTs</h1>
          <p>
            Explore the world of NFTs and discover the best NFTs on the market.
          </p>
          <Button btnName= "Start your search"/>
            </div>
            <div className={Style.heroSection_box_right}>
            <Image
              src={hero}
              alt="hero section"
              width={600}
              height={600}
            />
          </div>
      </div>
    </div>
  );
};

export default HeroSection;

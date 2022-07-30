import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div className="flex">
        <div className="inner-hero-container">
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
        </div>

        <div classname="hero-image-desc">
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            className="hero-banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

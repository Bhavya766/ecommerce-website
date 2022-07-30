import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    smallText,
    midText,
    saleTime,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      <p className="discount">{discount} discount on all products</p>
      <p className="discount sale-time">{saleTime}</p>
      <div className="banner-desc flex">
        <div className="left">
          <h3>{largeText1},</h3>
          <h3>{largeText2}</h3>
        </div>
        <div>
          <img
            src={urlFor(image)}
            alt="banner-image"
            className="footer-banner-image"
          ></img>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;

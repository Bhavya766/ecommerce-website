import React from "react";
import { Product, HeroBanner, FooterBanner } from "../components";

import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container"></div>
    </>
  );
};

export async function getServerSideProps() {
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type=="banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }, // will be passed to the page component as props
  };
}

export default Home;

import { useState } from "react";
import Banner from "../Banner/Banner";
import GallerySection from "../GallerySection/GallerySection";
import RecommendedProduct from "../RecommendedProduct/RecommendedProduct";
import NewArrival from "../NewArrival/NewArrival";
import Review from "../Review/Review";
const Home = () => {
  const [data, setData] = useState();
  //const find = 'logging';
  return (
    <div>
      
        <Banner></Banner>
      
      <RecommendedProduct></RecommendedProduct>
      <NewArrival></NewArrival>
      <GallerySection></GallerySection>
      <Review></Review>
    </div>
  );
};

export default Home;

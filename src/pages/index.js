import React from "react"
import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider, Title, Category, Filter, NFTCard, AudioLive } from "../../components/compindex";
const Home = () => {
  return(
    <div className={Style.homePage}>
      <HeroSection/>
      <Service />
      <BigNFTSlider/>
      <Title heading='Latest Audio collection' paragraph='Discover the most outstanding NFTs in all the categories'/> 
      <AudioLive/>
      <Title heading='Featured NFTs' paragraph='Discover the most outstanding NFTs in all the categories'/> 
      <Filter/>
      <NFTCard/>
      <Title heading='Browse by Category' paragraph='Explore the NFTs in the most featured categories'/> 
      <Category/>
      
      </div>
  )
};

export default Home;

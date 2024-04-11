import React, { useState, useEffect, useCallback} from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineeH } from "react-icons/ai";
import { MdVerified, MdTimer }  from "react-icons/md"; 
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORTS
import Style from "./BigNFTSlider.module.css";
import user1 from "../../images/user1.jpg";
import user2 from "../../images/user2.jpg";
import user3 from "../../images/user3.jpg";
import user4 from "../../images/user4.jpg";
import nft_image_1 from "../../images/nft_image_1.png";
import nft_image_2 from "../../images/nft_image_2.jpg";
import nft_image_3 from "../../images/nft_image_3.png";
import nft_image_4 from "../../images/nft_image_4.jpg";
import Button from "../Button/Button";

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Drashti S",
            collection: "NFT",
            price: "000000264664 ETH",
            like: 243,
            image: user1,
            nftImage: nft_image_1,
            time:{
                days: 29,
                hours: 1,
                minutes: 11,
                seconds: 35,
            },  
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Nishita S",
            collection: "Sports",
            price: "0000006664 ETH",
            like: 243,
            image:user2,
            nftImage: nft_image_2,
            time:{
                days: 37,
                hours: 10,
                minutes: 41,
                seconds: 51,
            },  
        },
        {
            title: "New NFT",
            id: 3,
            name: "Pravin G",
            collection: "Cars",
            price: "00000164664 ETH",
            like: 243,
            image: user3,
            nftImage:nft_image_3,
            time:{
                days: 20,
                hours: 10,
                minutes: 11,
                seconds: 35,
            },  
        },
        {
            title: "Demo NFT",
            id: 4,
            name: "Bhoomi R",
            collection: "Books",
            price: "000000064664 ETH",
            like: 243,
            image: user4,
            nftImage:nft_image_4,
            time:{
                days: 71,
                hours: 10,
                minutes: 21,
                seconds: 39,
            },  
        }
    ];

    //-------INC
    const inc = useCallback(() => {
        if (idNumber + 1 < sliderData.length) {
            setIdNumber(idNumber + 1);
        }
    },  [idNumber, sliderData.length]); 

    //-------DEC
    const dec = useCallback(() => {
        if (idNumber > 0) {
            setIdNumber(idNumber - 1);
        }
    },  [idNumber]);

    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image
                                className={Style.bigNFTSlider_box_left_creator_profile_img}
                                src={sliderData[idNumber].image}
                                alt="profile image"
                                width={50}
                                height={50} 
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_image}>
                                <p>Creator</p>
                                <h4>
                                    {sliderData[idNumber].name}{" "}
                                    <span>
                                        <MdVerified/>
                                    </span>
                                </h4>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire
                              className={Style.bigNFTSlider_box_left_creator_collection_icon}
                            />

                            <div 
                                className={Style.bigNFTSlider_box_left_creator_collection_info}
                            >
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>
                                {sliderData[idNumber].price} <span>$ 1,2221,21</span>
                            </p>
                        </div>

                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer
                                className={Style.bigNFTSlider_box_left_bidding_box_icon} 
                            />
                            <span>Auction ending in</span>
                        </p>

                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div 
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div 
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div 
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <span>Mins</span>
                            </div>

                            <div 
                                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
                            >
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <span>Secs</span>
                            </div>
                        </div>

                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={() => {}} />
                            <Button btnName="View" handleClick={() => {}} />
                        </div>
                    </div>

                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines 
                          className={Style.bigNFTSlider_box_left_sliderBtn_icon} 
                          onClick={() => dec()}
                        />
                        <TbArrowBigRightLine 
                          className={Style.bigNFTSlider_box_left_sliderBtn_icon} 
                          onClick={() => inc()}
                        />
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image className={Style.bigNFTSLider_box_right_box_img} src={sliderData[idNumber].nftImage}  alt="NFT IMAGE" />
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart/>
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigNFTSlider;

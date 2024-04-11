import React from 'react';
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
} from "react-icons/ti";
import {HiOutlineMail} from "react-icons/hi";

import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import {Button} from "../components/componentsindex";

const contactus = () => {
    return (
        <div className= {Style.contactus}>
            <div className= {Style.contactus_box}>
                <h1>Contact</h1>
                <div className= {Style.contactus_box_box}>
                    <div className= {Style.contactus_box_box}>
                        <div className= {Style.contactus_box_box_left_item}>
                            <h3>🗺 ADDRESS</h3>
                            <p>
                            Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                            </p>

                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>💌 EMAIL</h3>
                            <p>nc.example@example.com</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>☎ PHONE</h3>
                            <p>000-123-456-7890</p>
                        </div>
                        <div className={Style.contactus_box_box_left_item}>
                            <h3>🌏 SOCIALS</h3>
                            <a href = "#">
                                <TiSocialFacebook/>
                            </a>
                            <a href = "#">
                                <TiSocialTwitter/>
                            </a>
                            <a href = "#">
                                <TiSocialYoutube/>
                            </a>
                            <a href = "#">
                                <TiSocialLinkedin/>
                            </a>
                            <a href = "#">
                                <TiSocialInstagram/>
                            </a>
                        </div>

                    </div>
                    <div className= {Style.contactus_box_box_right}>
                        <form>

                            {/* <Button
                                btname="Send Message"
                                handleClick={() => {}}
                                classStyle="{Style.button}
                                /> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )

};

export default contactus;
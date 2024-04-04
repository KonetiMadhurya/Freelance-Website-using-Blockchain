import React from 'react';
import Style from './Prof.module.css';
import Image from 'next/image';
import { FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff, TbDownload } from  'react-icons/tb';
import user1 from '../../../images/user1.png';
import Link from 'next/link';

const Prof = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image src={user1} alt="user profile" width={50} height={50} className={Style.profile_account_img} />
        <div className={Style.profile_account_info}>
          <p>DRASHTI SHAH</p>
          <small>X03865799975474...</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p><Link href={{pathname: '/myprofile'}}>My Profile</Link></p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p><Link href={{pathname: '/my-items'}}>My Items</Link></p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p><Link href={{pathname: '/edit-profile'}}>Edit Profile</Link></p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_two_item}>
            <MdHelpCenter />
            <p><Link href={{pathname: '/help'}}>Help Center</Link></p>
          </div>
          <div className={Style.profile_menu_two_item}>
            <TbDownload />
            <p><Link href={{pathname: '/myprofile'}}>Download</Link></p>
          </div>
          <div className={Style.profile_menu_two_item}>
            <TbDownloadOff />
            <p><Link href={{pathname: '/myprofile'}}>Logout</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prof;

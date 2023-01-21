import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import backgoundIMG from "../../assets/profileimg/background.png";

import { Heading } from '../../components/Profilecom';

import "../../styles/index.css";
import { User } from 'utils/types/profile';  
import Layout from 'components/Layout';
import Button from 'components/Buttom';

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const imgUser = user && `${import.meta.env.VITE_DISCORD_CDN}/avatars/${user.id}/${user.avatar}.png?size=2048`;
  const aboutMeUrl = 'https://github.com/fianda12';

  return (
    <Layout>
      <div className='my-14 flex flex-col items-center'>
        <div className='bg-zinc-900 grid grid-rows-3 pb-3 w-[300px] rounded-xl shadow-lg shadow-black/40'>
          <Heading backgroundImg={backgoundIMG} userImg={imgUser ?? ''} />
          <div className='row-start-4 ml-4 mt-1'>
            <strong className='text-xl text-white font-extrabold'>About me</strong>
          </div>
          <div className='ml-4 mt-3'>
            <small className='text-white font-bold text-xs block'>Joe doe</small>
          </div>
          <Link id='to-editprofile' to="/editprofile">
            <Button 
            id='btn-change'
            label='Change Profile'
            className='btn mt-5 w-full max-w-xs '
            />
            </Link>
        </div>
      </div>
    </Layout>
);

};

export default Profile;
import React, { useState, useEffect } from "react";
import { ProfileType } from "utils/types/profile";
import axios from "axios";

import Layout from "components/Layout";
import Input from "components/Input";
import Button from "components/Buttom";

function Profile() {
  

  return (
    <div className="w-full h-full flex items-center justify-center gap-4 bg-white">
        <div className="card w-1/5 gap-4 p-3 shadow-sm shadow-black">
          <div className="w-100">
            <img src="https://placeimg.com/192/192/people" className="place-self-center object-contain mx-auto rounded-full"/>
          </div>
          <Button
                label="Save Change"
                className="btn bg-zinc-500 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90 w-full max-w-xs  place-self-center"
              />
          </div>
          <div className="card-body justify-between mt-1 place-self-center">
            <form className="flex flex-col gap-4 min-w-[40%]">
              <div className="flex-cols-row">
                <label className="label">
                  <span className="label-text text-lg text-white dark:text-black ">
                    First Name
                  </span>
                </label>
                <Input
                  id="input-first-name"
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs border-black"
                />
                <label className="label">
                  <span className="label-text text-lg text-white dark:text-black ">
                    Last Name
                  </span>
                </label>
                <Input
                  id="input-last-name"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs border-black"
                />
                <label className="label">
                  <span className="label-text text-lg text-white dark:text-black ">
                    Email
                  </span>
                </label>
                <Input
                  id="input-email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs border-black"
                />
              </div>
             
            </form>
          </div>
        </div>
    
  );
}

export default Profile;

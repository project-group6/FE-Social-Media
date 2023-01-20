import React from "react";
import Button from "../../components/Buttom";
import Layout from "../../components/Layout";

import "../../styles/index.css";

function Comment() {
  return (
    <Layout>
      <div className="w-full bg-center bg-white dark:bg-zinc-600">
        <div className="flex h-full w-full flex-wrap">
          <div className="card-body justify-between mt-1 place-self-center">
            <div className="flex h-full w-full gap-4 p-8 flex-wrap ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Say something..."
                  className="input w-[60%] border-11"
                />
                <Button
                  className="btn bg-zinc-500 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90 justify-center m-1"
                  label="reply"
                />
              </div>
              <div className="flex h-full w-full gap-4 p-8 flex-row">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </label>
                <div className="flex-1">
                <label className="label -mt-6">
                    <span className="label-text text-lg text-black dark:text-white ">Ali<p className="text-white dark:text-white">Lorem ipsum dolor sit
amet consectetur.</p></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Comment;

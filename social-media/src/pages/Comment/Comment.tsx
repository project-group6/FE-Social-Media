import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Buttom";
import Layout from "../../components/Layout";
import Input from "components/Input";

import Avatar from "components/Avatar";

import "../../styles/index.css";
import { CommentType } from "utils/types/comment";
import axios from "axios";

function Comment() {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.post("/comments?post_id=")
    .then((res) => {
      setComments(res.data);
    })
    .catch((err) => {
      alert(err.toString());
    });
  }

  function handleAddComment() {
    const newData = {
      id: comments.length,
      comment: input,
      done: false,
    };
    const dupeComments = comments.slice();
    dupeComments.push(newData);
    setComments(dupeComments);
  }

  return (
    <Layout>
      <div className="w-full bg-center bg-white dark:bg-zinc-600">
        <div className="flex h-full w-full flex-wrap">
          <div className="card-body justify-between mt-1 place-self-center">
            <div className="flex h-full w-full gap-4 p-8 flex-wrap ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Avatar/>
                </div>
              </label>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Say something..."
                  className="input w-[60%] border-11"
                  onChange={(e) => setInput(e.target.value)}
                />
                <Button
                  className="btn bg-zinc-500 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90 justify-center m-1"
                  label="reply"
                  onClick={() => handleAddComment()}
                />
              </div>
              {comments.map((Comment) => (
                <div key={Comment.id} className="p-2 mb-2 w-full">
                  <p>{Comment.comment}</p>
                </div>
              ))}
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

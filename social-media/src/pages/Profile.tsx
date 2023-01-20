import React, { useState, useEffect } from "react";
import { ProfileType } from "utils/types/profile";
import axios from "axios";

import Layout from "components/Layout";
import Input from "components/Input";
import Button from "components/Buttom";

function Profile() {
  const [loading, setLoading] = useState<boolean>(true);
  const [objSubmit, setObjSubmit] = useState<ProfileType>({});
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("profile")
      .then((res) => {
        const { email, first_name, last_name, avatar } = res.data.data;
        setEmail(email);
        setFirstName(first_name);
        setLastName(last_name);
        setAvatar(avatar);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    let key: keyof typeof objSubmit;
    for (key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    axios
      .put("profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const { message } = res.data;
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
      })
      .finally(() => fetchData());
  };

  const handleChange = (value: string | File, key: keyof typeof objSubmit) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <div className="w-full h-full flex items-center justify-center gap-4 bg-white">
      <div className="card w-1/5 gap-4 p-3 shadow-sm shadow-black">
        <div className="w-100">
          <img
            src={avatar}
            className={avatar}
          />
          <Button id="btn-submit" label="Submit" loading={loading}/>
        </div>
      </div>
      <div className="card-body justify-between mt-1 place-self-center">
        <form
          className="flex flex-col gap-4 min-w-[40%]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            id="input-file"
            type="file"
            onChange={(e) => {
              if (!e.currentTarget.files) {
                return;
              }
              setAvatar(URL.createObjectURL(e.currentTarget.files[0]));
              handleChange(e.currentTarget.files[0], "avatar");
            }}
          />
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
              value={firstName}
              onChange={(e) => handleChange(e.target.value, "first_name")}
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
              value={lastName}
              onChange={(e) => handleChange(e.target.value, "last_name")}
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
             value={email}
             onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;

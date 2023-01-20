import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Button from "../../components/Buttom";
import { handleAuth } from "utils/redux/reducers/reducer";
import Layout from "../../components/Layout";

import "../../styles/index.css";

function Login() {
  const [, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post("login", body)
      .then((res) => {
        const { data, message } = res.data;
        setCookie("token", data.token, { path: "/" });
        dispatch(handleAuth(true));
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        console.log(data)
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="w-full bg-center bg-slate-50">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <div className="card w-4/5 gap-4 p-3 shadow-sm shadow-black lg:h-4/5 lg:card-side ">
            <img
              className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5 mx-auto"
              src="src/assets/gurl.svg"
            />
            <div className="card-body justify-between mt-1 place-self-center">
              <form
                className="flex flex-col gap-4 min-w-[40%]"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h1 className="text-center">Welcome!</h1>
                <h1 className="text-start">Sign in</h1>
                <div className="flex-cols-row">
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-black ">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    className="input input-bordered w-full max-w-xs border-black"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text text-lg text-white dark:text-black">
                      Password
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your password..."
                    className="input input-bordered w-full max-w-xs border-black"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  className="btn bg-zinc-500 p-2 font-bold text-white hover:bg-zinc-400/90 dark:bg-zinc-800/90 dark:hover:bg-zinc-700/90 mt-5 w-full max-w-xs"
                  label="LOGIN"
                />
                <label className="label-one">
                  <p className="font-normal font-weight-300 ">
                    Don't have an Account?{" "}
                    <span className="font-bold text-black "> Register</span>
                  </p>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;

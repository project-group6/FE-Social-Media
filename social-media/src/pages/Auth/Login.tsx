import withReactContent from "sweetalert2-react-content";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import Swal from "utils/Swal";
import Button from "../../components/Buttom";
import { handleAuth } from "utils/redux/reducers/reducer";
import Layout from "../../components/Layout";

import "../../styles/index.css";

function Login() {
  const [, setCookie] = useCookies(["token"]);
  const MySwal = withReactContent(Swal);
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
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
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
      <div className="w-full bg-center bg-white dark:bg-black">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <div className="card w-4/5 gap-4 p-3 shadow-sm shadow-black lg:h-4/5 lg:card-side bg-black dark:bg-white">
            <img
              className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5 mx-auto"
              src="src/assets/gurl.svg"
            />
            <div className="card-body justify-between mt-1 place-self-center">
              <form
                className="flex flex-col gap-4 min-w-[40%]"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h1 className="text-center text-white dark:text-black">Welcome!</h1>
                <h1 className="text-start text-white dark:text-black">Sign in</h1>
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
                  className="btn mt-5 w-full max-w-xs "
                  label="LOGIN"
                  loading={loading || disabled}
                />
                <label className="label-one">
                  <p className="font-normal font-weight-300 ">
                    Don't have an Account?{" "}
                    <Link to="/register" className="font-bold text-white dark:text-black"> Register</Link>
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

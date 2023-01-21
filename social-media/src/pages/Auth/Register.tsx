import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "utils/Swal"
import Button from "../../components/Buttom";
import Layout from "../../components/Layout";

import "../../styles/index.css";

function Register() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    if (email && password && firstName && lastName) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, firstName, lastName, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    };
    axios
      .post("register", body)
      .then((res) => {
        const { message, data } = res.data;
        MySwal.fire({
          title: "Success",
          text: message,
          showCancelButton: false,
        });
        if (data) {
          navigate("/login");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        console.log(message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="w-full bg-center bg-black dark:bg-white">
        <div className="flex h-full w-full flex-wrap items-center justify-center">
          <div className="card w-4/5 gap-4 p-3 shadow-sm shadow-black lg:h-4/5 lg:card-side bg-white dark:bg-black">
            <img
              className="h-3/5 w-2/5 place-self-center object-contain md:h-4/5 md:w-3/5 mx-auto"
              src="src/assets/gurl.svg"
            />
            <div className="card-body justify-between mt-1 place-self-center">
              <form
                className="flex flex-col gap-4 min-w-[40%]"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h1 className="text-center text-black dark:text-white">Welcome!</h1>
                <h1 className="text-start text-black dark:text-white">Sign up to</h1>
                <div className="flex-cols-row">
                  <label className="label">
                    <span className="label-text text-lg text-black dark:text-white ">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs border-black"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text text-lg text-black dark:text-white">
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs border-black"
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <label className="label">
                    <span className="label-text text-lg text-black dark:text-white ">
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
                    <span className="label-text text-lg text-black dark:text-white">
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
                  className="btn  max-w-xs"
                  label="REGISTER"
                  loading={loading || disabled}
                />
                <label className="label-one">
                  <p className="font-normal font-weight-300 ">
                    Already have an Account?
                    <Link className="font-bold text-black dark:text-white " to="/Login"> Login</Link>
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

export default Register;

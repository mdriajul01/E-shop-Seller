import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
     const navigate = useNavigate();
  return (
    <div className="mt-32">
      <div className=" bg-slate-200 w-fit p-10 flex items-center justify-center my-10 rounded-xl shadow-md shadow-slate-500 mx-auto">
        <form className="" action="" method="">
          <div className=" my-auto">
            <div className="">
              <div className="">
                <label className="p-3 text-lg font-serif  " htmlFor="">
                  Email
                </label>
                <br />
                <input
                  type="text"
                  id="id"
                  name="name"
                  placeholder="email"
                  className="w-[300px] border border-slate-200 rounded-lg ml-3 py-3 px-5 outline-none	bg-transparent"
                />
              </div>
              <div>
                <label className="p-3 text-lg font-serif " htmlFor="">
                  Password
                </label>
                <br />
                <input
                  type="Password"
                  id="Password"
                  name="Password"
                  placeholder=" type Password"
                  className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent ml-3"
                />
              </div>
            </div>
            <div className="flex justify-end mr-5">
              <a onClick={() => navigate("/registration")} href="" className="p-3 -mr-10 text-xl font-semibold hover:text-amber-600">
                Registration
              </a>
            </div>
            <div className="flex justify-center">
              <button className="w-fit text-2xl font-extralight hover:font-semibold shadow-sm hover:shadow-md hover:text-shadow-green-200 text-shadow-md inline-flex items-center justify-center px-8 py-4 font-sans  tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

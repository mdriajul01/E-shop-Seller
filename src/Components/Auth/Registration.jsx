import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-32">
      <div className="bg-slate-200">
        <div className="text-center my-5 ">
          <h1 className="mt-5">Registration</h1>
        </div>
        <form className="" action="" method="">
          <div className="">
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="id"
                name="name"
                placeholder="email"
                className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                type="Password"
                id="Password"
                name="Password"
                placeholder=" type Password"
                className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
              />
            </div>
            <div className="flex justify-end mr-5">
              <a onClick={() => navigate("/login")} href="" className="">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

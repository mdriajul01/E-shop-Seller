import React from "react";

const Login = () => {
     const navigate = useNavigate();
  return (
    <div>
      <div className="bg-slate-200">
        <form className="" action="" method="">
          <div className="">
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                id="id"
                name="name"
                placeholder="placeholder"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

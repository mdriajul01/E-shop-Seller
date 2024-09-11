import React, { useState } from "react";
import Product from "../../../../public/product.json";
import rating from "../../../../public/Rating.json";
import identify from "../../../../public/identify.json";
import identify2 from "../../../../public/identify2.json";
import Lottie from "lottie-react";
import seller from "../../../../public/sellerProfile.json"
const Bannar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <section className="">
      <dialog
        open={isOpen}
        className="border-2 bg-slate-300 p-3 rounded-2xl fiexd"
      >
        <div className="font-semibold text-2xl text-end -mt-3 p-2">
          <button onClick={() => setisOpen(false)} className="">
            x
          </button>
        </div>
        <p className="text-center font-semibold text-xl ">
          Update Your Profile
        </p>
        <form className="my-5" action="" method="">
          <div className="flex gap-6 ">
            <div className="">
              <label for="">Name</label>
              <br />
              <input
                type="text"
                id="Name"
                name="name"
                placeholder="Name"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
            <div className="">
              <label className="" for="">
                Email
              </label>
              <br />
              <input
                type="Email"
                id="Email"
                name="Email"
                placeholder="Email"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="">
              <label htmlFor="phone">Phone</label>
              <br />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+880 *********"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>

            <div className="">
              <label className="" for="">
                Location
              </label>
              <br />
              <input
                type="Location"
                id="Location"
                name="Location"
                placeholder="Location"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="">
              <label for="">Licence</label>
              <br />
              <input
                type="text"
                id="Licence"
                name="Licence"
                placeholder="Licence"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
            <div className="">
              <label className="" for="">
                NID
              </label>
              <br />
              <input
                type="nidNumber"
                id="NID"
                name="NID"
                placeholder="NID"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="">
              <label className="" for="">
                Company Name
              </label>
              <br />
              <input
                type="text"
                id="Company Name"
                name="Company Name"
                placeholder="Company Name"
                className="bg-[#fff] w-52 p-1 border border-slate-50 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
            <div className="">
              <label for="">Photo</label>
              <br />
              <input
                type="file"
                id="Photo"
                name="Photo"
                placeholder="User Photo"
                className="py-3 bg-transparent w-52"
              />
            </div>
          </div>
          <div className="">
            <button className="btn flex mx-auto my-3">Update</button>
          </div>
        </form>
      </dialog>

      {/* Welcome Section */}
      <div className="lg:mt-24 lg:-mb-10 md:mt-24 mt-24  text-center ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold -mb-8 ">
          Welcome Back
        </h1>
      </div>

      {/* Seller Information and Animation Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 mt-10 lg:mt-16">
        {/* Left Side - Seller Profile */}
        <div className="w-full bg-base-200 shadow-sm  lg:rounded-br-2xl lg:rounded-tr-2xl rounded-2xl  p-6">
          <div>
            <h2 className="text-lg font-medium">Seller Details :</h2>
            <h1 className="text-2xl font-semibold text-center my-4">Profile</h1>
          </div>
          <div className="flex flex-col items-center shadow-md w-full ">
            <img
              className="rounded-full h-48 w-48 object-cover shadow-md"
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
              alt="Profile"
            />
            <h2 className="text-lg font-semibold mt-4">Name</h2>
          </div>

          {/* Seller Details */}
          <div className="border-2 shadow-md mt-6 rounded-2xl p-4">
            <div className="space-y-3">
              <p className="font-serif border-2 p-2 rounded-xl shadow-md">
                Name: <span className="ml-5">John Doe</span>
              </p>
              <p className="font-serif border-2 p-2 rounded-xl shadow-md">
                Ph-Number: <span className="ml-5 ">123-456-789</span>
              </p>
              <p className="font-serif border-2 p-2 rounded-xl shadow-md">
                Location: <span className="ml-5">City, Country</span>
              </p>
              <p className="font-serif border-2 p-2 rounded-xl shadow-md">
                Company/Shop: <span className="ml-5">Doe's Store</span>
              </p>
              <p className="font-serif border-2 p-2 rounded-xl shadow-md">
                Verified: <span className="ml-5">Yes</span>
              </p>
            </div>
          </div>
          <div className=" w-full mt-6">
            <Lottie animationData={seller} className="w-full " loop />
          </div>
        </div>
        <div className="divider lg:divider-horizontal">Go</div>

        {/* Right Side - Animations and Seller Info */}
        <div className="w-full bg-base-200 shadow-sm  lg:rounded-bl-2xl lg:rounded-tl-2xl rounded-2xl ">
          {/* Animation */}
          <div className="mx-auto w-full">
            <Lottie animationData={identify} className="w-fit mx-auto" loop />
          </div>

          {/* Seller Information */}
          <div className="mt-6 space-y-4 ml-10 mr-10">
            <div className="flex justify-between ">
              <h2 className="font-semibold text-xl -ml-3">
                Seller Information
              </h2>
              <button
                className="btn -mt-3 text-[#060869] shadow-md"
                onClick={() => {
                  setisOpen(true);
                }}
              >
                Edit
              </button>
            </div>

            <div>
              <h3 className="font-semibold">Name:</h3>
              <p className="border-2 p-2 rounded-xl shadow-md">User Name</p>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <p className="border-2 p-2 rounded-xl shadow-md">User Email</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone:</h3>
              <p className="border-2 p-2 rounded-xl shadow-md">
                User Phone Number
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Location:</h3>
              <p className="border-2 p-2 rounded-xl shadow-md">User Location</p>
            </div>
            <div>
              <h3 className="font-semibold">Company/Shop:</h3>
              <p className="border-2 p-2 rounded-xl shadow-md">
                User Company or Shop Name
              </p>
            </div>
          </div>

          {/* Second Animation */}
          <div className="mx-auto w-full mt-6">
            <Lottie animationData={identify2} className="w-full" loop />
          </div>
        </div>
      </div>
      <div className="divider"></div>

      {/* Cart Section */}
      <div className="my-10 bg-base-200 rounded-2xl shadow-md p-6 ">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold">Cart</h1>
          <p className="text-lg font-medium">Stock Products</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {Product?.slice(0, 20).map((product, idx) => (
            <div
              key={idx}
              className="border relative w-56 p-2 hover:bg-[#e7c66a8c] rounded-xl shadow-lg hover:shadow-md"
            >
              <img
                className="w-full h-40 object-cover rounded-xl"
                src={product.image}
                alt={product.name}
              />
              <h2 className="font-semibold text-lg text-[#050666ec] mt-3">
                {product.name}
              </h2>

              <div className="flex justify-around my-auto mt-5">
                <p className="text-[#f800f8ee] text-lg text-start mr-10 ">
                  {product.price}
                </p>
                <Lottie
                  animationData={rating}
                  className="w-12 md:w-14 lg:w-20"
                  loop
                />
                <h3 className="font-semibold text-lg text-[#ffbd06] -ml-8 -mb-4 ">
                  {product.rating}
                </h3>
              </div>
              <div className="flex justify-center ">
                <button className="btn mx-auto shadow-md hover:text-[#1103aa]">
                  Dettails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bannar;

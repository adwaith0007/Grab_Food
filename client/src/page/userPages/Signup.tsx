import React from "react";
import { Navbar } from "../../components";
import foodimg from "../../assets/login_food.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="bg-[#e5d9ca] h-screen w-full ">
      <Navbar />
      <div className="container h-[90%] flex justify-center items-center mx-auto ">
      <div className="flex flex-row w-full h-full flex-wrap  justify-center items-center p-8 " >
          {/* sm:bg-black lg:bg-black md:bg-amber-500 xl:bg-red-500 2xl:bg-cyan-500 "> */}
          
          <div className="  hidden xl:flex w-1/2  ">
            <img
              className=" h-[600px]  rounded-l-[10px]  lg:h-[600px] object-cover w-full  "
              src={foodimg}
              alt=""
            />
          </div>

          <div className=" flex justify-center   ">
            <div className=" w-full px-10 lg:h-[600px] lg:w-[470px] rounded-r-[10px] bg-[#f4eeee]">
              <div className="text-center text-lg font-bold text-[30px] mt-[20px]">
                <h1>Register</h1>
              </div>

              <form className="max-w-sm mx-auto mt-5 ">
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="mb-2">
                    <label
                      htmlFor="fname"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label
                      htmlFor="lname"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Conform password
                  </label>
                  <input
                    type="password"
                    id="conform_password"
                    name="conform_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-14 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>

                <div className="flex justify-center mt-3 ">
                  <p
                    id="helper-text-explanation"
                    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    Have a account ? <span>Click hear to </span>{" "}
                    <Link
                      to="/login"
                      className="font-medium text-blue-600 hover:underline "
                    >
                      Login
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

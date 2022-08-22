import React from "react";
import { Link } from "react-router-dom";
import poster from "../images/landing.webp";
import Logo from "./Logo";
import About from "../components/About";
import Footer from "../components/Footer";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <>
      <div>
        <div className="flex border-b-4 drop-shadow-lg justify-between px-12">
          <Link to="/">
            <div className="flex m-4">
              <Logo dimension={2} />
              <p className="flex items-center font-bold text-xl justify-center mx-3">
                DoNation
              </p>
            </div>
          </Link>

          <div className="flex justify-center items-center ">
            <ul className="flex items-center">
              <a href="#about">
                <li className="mx-4 -my-2 font-semibold hover:underline cursor-pointer text-lg">
                  About
                </li>
              </a>
              <Link to="/ngos">
                <li className="mx-4 -my-2 font-semibold hover:underline cursor-pointer text-lg">
                  NGOs
                </li>
              </Link>
              <a href="#testimonials">
                <li className="mx-4 -my-2 font-semibold hover:underline cursor-pointer text-lg">
                  Testimonials
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-[url("images/background.webp")] bg-no-repeat bg-center bg-cover -z-10 w-full h-screen'>
        <div className="flex py-32 mx-44">
          <div className="m-10">
            <h1 className="text-4xl font-bold">Donate!</h1>
            <p className="text-xl my-8">
              Be part of a good cause. Show some love and donate to the society.
            </p>

            <Link
              to="/user/signup"
              className="font-semibold btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2"
            >
              Register as Donor
            </Link>
            <Link
              to="/ngo/signup"
              className="font-semibold btn bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg px-4 py-2 m-2"
            >
              Register as NGO
            </Link>
          </div>
          <div className="w-1/2">
            <img
              className="duration-300 hover:translate-y-1 outline-offset-1"
              src={poster}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <Login></Login> */}
      <div id="testimonials">
        <Testimonials />
      </div>
      {/* <Register></Register> */}
      <div id="about">
        <About></About>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Landing;

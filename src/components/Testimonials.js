import React from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";
import imageOne from "./img/care.webp";
import imageTwo from "./img/giveIndia.webp";
import imageThree from "./img/goonj.webp";
import imageFour from "./img/nanhikali.webp";
import imageFive from "./img/pratham.webp";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

/**
 *
 */
const Testimonials = () => {
  return (
    <div className="mb-32 mt-12">
      <h1 className="text-3xl font-bold m-4 mt-8 mb-12 text-center">
        As recognised by
      </h1>
      <div className="flex gap-20 justify-center">
        <img className="w-32 h-16 " src={imageOne}></img>
        <img className="w-32 h-16 " src={imageTwo}></img>
        <img className="w-32 h-16 " src={imageThree}></img>
        <img className="w-32 h-16 " src={imageFour}></img>
        <img className="w-32 h-16 " src={imageFive}></img>
      </div>
    </div>
  );
};

export default Testimonials;

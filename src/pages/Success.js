import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="w-[90%] md:w-full mx-auto pt-24 md:px-20 bg-white md:bg-[hsl(234,29%,20%)] h-[100vh] relative">
      <div className="relative bg-white md:w-[80%] md:max-w-[28rem] md:mx-auto  h-full md:h-[28rem] px-8 py-12 rounded-xl">
        <img src={iconSuccess} alt="success" className="mb-6 w-12 h-12" />
        <h1 className="font-bold text-4xl text-[hsl(234,29%,20%)] mb-4">
          Thanks for <br />
          subscribing!
        </h1>
        <p className="mb-4">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{localStorage.getItem("email")}</span>
          . Please open it and click the button inside to confirm your
          subscription
        </p>
        <Link to="/">
          <button className="block w-full absolute bottom-12 left-0 md:static md:mt-16 px-6 py-4 rounded-md text-center text-white font-semibold bg-[hsl(235,18%,26%)] hover:bg-[hsl(4,100%,67%)] hover:shadow-xl">
            Dismiss message
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";

const SignUp = () => {
  const [isEmailError, setIsEmailError] = useState(false);
  const [email, setEmail] = useState("");
  const navigator = useNavigate();

  const regEx = /^(\w+)@([a-z\d]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})*$/;

  function submitEmail() {
    if (!regEx.test(email)) {
      setIsEmailError(true);
      setTimeout(() => {
        setIsEmailError(false);
      }, 2000);
      return;
    }

    localStorage.setItem("email", email);
    navigator("/success");
    setEmail("");
  }
  return (
    <div>
      <div className="md:w-[90%] md:mx-auto md:flex justify-center h-screen items-center gap-8 pb-12 md:pb-4">
        <div className="md:order-2 md:self-center">
          <img
            src={illustrationMobile}
            alt=""
            className="w-full object-fit block md:hidden"
          />
          <img
            src={illustrationDesktop}
            alt=""
            className="w-full object-fit hidden md:block"
          />
        </div>
        <div className="my-8 w-[90%] mx-auto md:mx-0 md:w-1/2">
          <h1 className="font-bold text-4xl text-[hsl(234,29%,20%)]">
            Stay updated!
          </h1>
          <p className="my-4">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="flex justify-start gap-4 my-4">
            <img src={iconList} alt="mark" />
            <p className="font-semibold">
              Product discovery and building what matters
            </p>
          </div>
          <div className="flex justify-start gap-4 my-4">
            <img src={iconList} alt="mark" />
            <p className="font-semibold">
              Measuring to ensure updates are a success
            </p>
          </div>
          <div className="flex justify-start gap-4 my-4">
            <img src={iconList} alt="mark" />
            <p className="font-semibold">And much more!</p>
          </div>
          <div className="flex gap-8 justify-between mt-8 mb-4">
            <p className="font-semibold">Email address</p>
            {isEmailError && (
              <p className="font-semibold text-[hsl(4,100%,67%)]">
                Valid email required
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="email@company.com"
              onChange={(e) => setEmail(e.target.value)}
              className="pl-4 py-2 block w-full border border-gray-200 rounded-md"
            />
            <button
              onClick={submitEmail}
              className="block w-full rounded-md text-white bg-[hsl(235,18%,26%)] px-4 py-2 mb-10 text-center font-semibold"
            >
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

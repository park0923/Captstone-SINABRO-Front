import React from "react";
import { Link } from "react-router-dom";

const Disabled_Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-row justify-around items-center pt-6">
        {/*  Logo Image */}
        <div className="">
          <Link to="/">
            <span className="sr-only">Workflow</span>
            <img className="h-16 w-auto mr-96" src="/img/LogoGreen.svg" alt="Logo" />
          </Link>
        </div>

        {/* Sign In & Sign Up Button */}
        <div className="flex items-center justify  mt-6">
          <h1 class="my-4 text-xl font-sebang-gothic font-thin">
            시 각 보 조 페 이 지 (수혜자)
          </h1>
          {/* Navigation */}
        </div>
      </div>
    </div>
  );
};

export default Disabled_Header;

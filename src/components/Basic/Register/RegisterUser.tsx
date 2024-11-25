import React from "react";
import RegistrationForm from "./RegistrationForm";
import { ChevronLeft, ArrowLeftCircle } from "react-feather";
import { Link } from "react-router";

const RegisterUser = () => {
  return (
    <div className="flex h-[calc(100vh_-_64px)]">
      {/* Left side - Image */}
      <div className="hidden w-1/2 lg:block">
        <img
          src="/src/assets/img/tvattstuga.webp"
          alt="Registration background"
          width={1080}
          height={1080}
          className="h-full w-full object-cover object-left"
        />
      </div>
      <span className="absolute left-5 top-24 md:left-8">
        <Link to="/">
          <span className="block md:hidden">
            <ArrowLeftCircle className="text-black" />
          </span>
          <span className="hidden md:block">
            <ArrowLeftCircle size={32} className="text-white" />
          </span>
        </Link>
      </span>
      {/* Right side - Registration Form */}
      <div className="flex w-full items-start justify-center px-8 py-2 md:items-center lg:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="my-8 text-center text-3xl font-bold md:my-0">
            Skapa ett konto
          </h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;

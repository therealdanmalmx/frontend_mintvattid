import React from "react";
import RegistrationForm from "./RegistrationForm";

const RegisterUser = () => {
  return (
    <div className="flex min-h-screen">
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

      {/* Right side - Registration Form */}
      <div className="items-sratr flex w-full justify-center px-8 py-2 md:items-center lg:w-1/2">
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

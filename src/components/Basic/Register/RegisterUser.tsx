import React from "react";
import RegistrationForm from "./RegistrationForm";

const RegisterUser = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Image */}
      <div className="hidden w-1/2 lg:block">
        <img
          src="/placeholder.svg?height=1080&width=1080"
          alt="Registration background"
          width={1080}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - Registration Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-center text-3xl font-bold">
            Skapa ett konto
          </h1>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;

import React from "react";

import { useState } from "react";
// import { useFormState } from "react-hook-form";
// import { registerUser } from "./actions";

const RegistrationForm = () => {
  //   const [state, formAction] = useFormState(registerUser, null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // formAction(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="space-y-2">
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Förnamn</span>
          </div>
          <input type="text" className="input input-bordered" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Efternamn</span>
          </div>
          <input type="text" className="input input-bordered" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Email</span>
          </div>
          <input type="email" className="input input-bordered" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Användarnamn</span>
          </div>
          <input type="email" className="input input-bordered" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Lösenord</span>
          </div>
          <input type="password" className="input input-bordered" />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-bold">Upprepa lösenord</span>
          </div>
          <input type="password" className="input input-bordered" />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-8 w-full text-white md:mt-8"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Registering..." : "Registrera dig"}
      </button>
      {/* {state && state.error && (
        <p className="mt-2 text-sm text-red-500">{state.error}</p>
      )}
      {state && state.success && (
        <p className="mt-2 text-sm text-green-500">{state.success}</p>
      )} */}
    </form>
  );
};

export default RegistrationForm;

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="firstname">Förnamn</label>
        <input
          type="text"
          placeholder="Type here"
          name="firstname"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div>
        <label htmlFor="lastname">Efternamn</label>
        <input
          type="text"
          placeholder="Type here"
          name="lastname"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required placeholder="Email" />
      </div>
      <div>
        <label htmlFor="username">Användarnmn</label>
        <input
          name="email"
          type="email"
          required
          placeholder="Email är standard. Ändra om du vill."
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
        />
      </div>
      <button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
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

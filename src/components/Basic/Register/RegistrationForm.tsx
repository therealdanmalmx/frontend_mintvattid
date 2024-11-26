import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, type FormFields } from "./validations";
import axios from "axios";
import endpoints from "../../../enpoints";
import { useState } from "react";
import { useNavigate } from "react-router";

const FormFields = "./validations.ts";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data, e) => {
    e?.preventDefault();

    const userInformation = {
      firstName: data.firstName,
      lastName: data.lastName,
      apartmentNumber: data.apartmentNumber,
      email: data.email,
      phoneNumber: data.phoneNumber,
      userName: data.userName,
      password: data.password,
    };

    setIsLoading(true);

    if (!Object.keys(errors).length) {
      try {
        await axios.post(
          endpoints.user.create(),
          JSON.stringify(userInformation),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        navigate("/login");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          const { message } = error.response.data;

          // Check specific backend validation errors
          if (message === "Username exists") {
            console.log("Användarnamnet är redan registrerat.");
          } else if (message === "Email exists") {
            console.log("E-postadressen är redan registrerad.");
          } else {
            console.log("Ett oväntat fel inträffade.");
          }
        }
        setIsLoading(false);
      } finally {
        reset();
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="space-y-2">
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Förnamn</span>
          </div>
          <input
            {...register("firstName", { required: true })}
            type="text"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.firstName && (
          <span className="mt-2 text-xs text-red-700">
            {errors.firstName.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Efternamn</span>
          </div>
          <input
            {...register("lastName", { required: true })}
            type="text"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.lastName && (
          <span className="mt-2 text-xs text-red-700">
            {errors.lastName.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Lägenhetsnummer</span>
          </div>
          <input
            {...register("apartmentNumber", { required: true })}
            type="text"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.apartmentNumber && (
          <span className="mt-2 text-xs text-red-700">
            {errors.apartmentNumber.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Mobilnummer</span>
          </div>
          <input
            {...register("phoneNumber", { required: true })}
            type="text"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.phoneNumber && (
          <span className="mt-2 text-xs text-red-700">
            {errors.phoneNumber.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Email</span>
          </div>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.email && (
          <span className="mt-2 text-xs text-red-700">
            {errors.email.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Användarnamn</span>
          </div>
          <input
            {...register("userName", { required: true })}
            type="text"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.userName && (
          <span className="mt-2 text-xs text-red-700">
            {errors.userName.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Lösenord</span>
          </div>
          <input
            {...register("password", { required: true, minLength: 8 })}
            type="password"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.password && (
          <span className="mt-2 text-xs text-red-700">
            {errors.password.message}
          </span>
        )}
        <label className="form-control">
          <div className="label py-0">
            <span className="label-text font-bold">Upprepa lösenord</span>
          </div>
          <input
            {...register("confirmPassword", { required: true, minLength: 8 })}
            type="password"
            className="input input-bordered h-10 text-sm focus:outline-none focus:ring-0"
          />
        </label>
        {errors.confirmPassword && (
          <span className="mt-2 text-xs text-red-700">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-8 w-full text-white md:mt-8"
        disabled={isLoading}
      >
        {" "}
        {isLoading ? (
          <svg className="mr-3 h-5 w-5 animate-spin" viewBox="0 0 24 24">
            Registering...
          </svg>
        ) : (
          "Registrera dig"
        )}
      </button>
    </form>
  );
};

export default RegistrationForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { schema, type FormFields } from "./validations";

const FormFields = "./validations.ts";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log({ data });
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
        // disabled={isSubmitted}
      >
        {" "}
        {isSubmitted ? "Registering..." : "Registrera dig"}
      </button>
    </form>
  );
};

export default RegistrationForm;

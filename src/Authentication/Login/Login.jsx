import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogIn from "../SocialLogIn/SocialLogIn";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please LogIn!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is Required</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is Required</p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary text-black mt-4">Login</button>
          </fieldset>
          <p className="font-semibold text-center">
            New to this website? Please{" "}
            <Link to="/register" className="text-secondary hover:underline">
              Register
            </Link>
          </p>
        </form>
        <SocialLogIn></SocialLogIn>
      </div>
    </div>
  );
};

export default Login;

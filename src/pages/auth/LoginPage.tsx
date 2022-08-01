import { useState } from "react";

import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);

import { FirebaseError } from "firebase/app";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInEmailAndPassword } from "../../firebase/auth";

import { AuthCredentials, AuthErrors } from "../../types";

export const schemaLogin = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthCredentials>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<AuthCredentials> = (data) => {
    handleLogin(data);
    reset();
  };

  const handleLogin = async (data: AuthCredentials) => {
    try {
      setLoading(true);
      await signInEmailAndPassword(data);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(AuthErrors[error.code]);
      } else {
        setError("Error generico");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Login Page</h1>

      <p>{error}</p>
      <p>{loading ? "Realizando autenticación espere..." : ""}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login_email"></label>
          <input
            type="text"
            id="login_email"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="login_password"></label>
          <input
            type="password"
            id="login_password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <button disabled={loading} type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

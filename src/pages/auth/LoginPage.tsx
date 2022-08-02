import { useState } from "react";

import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);

import { FirebaseError } from "firebase/app";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInEmailAndPassword } from "../../firebase/auth";

import { AuthCredentials, AuthErrors } from "../../types";
import { Input } from "../../components/ui";

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
    control,
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
      setError("")
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
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Log in</h1>
      </div>
      <div className="mb-4">
        <p className="text-red-500 font-semibold">{error}</p>
        <p className="text-green-500 font-semibold">{loading ? "Realizando autenticación espere..." : ""}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Email"
                  type="email"
                  placeholder="hello@example.com"
                  handleChange={onChange}
                  inputValue={value}
                  activeError={errors.email}
                />
              )}
            />
          </div>
          <div className="flex">
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  label="Password"
                  type="password"
                  placeholder="******"
                  handleChange={onChange}
                  inputValue={value}
                  activeError={errors.password}
                />
              )}
            />
          </div>
          <div className="flex flex-row-reverse justify-between my-4">
            <button className="btn btn-outline btn-primary btn-wide" disabled={loading}>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

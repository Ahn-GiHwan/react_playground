import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    alert("submit");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ border: "1px solid", padding: "10px" }}
      >
        <h2>Login</h2>
        <label>
          Email
          <br />
          <input type="email" {...register("email", { required: true })} />
        </label>
        <br />
        <br />
        <label>
          Pw
          <br />
          <input
            type="password"
            {...register("pw", { required: true, minLength: 8 })}
          />
        </label>
        <br />
        {errors.pw?.type === "minLength" && (
          <span style={{ fontSize: "12px", color: "red" }}>
            비밀번호는 8글자 이상입니다.
          </span>
        )}
        {errors.pw?.type === "required" && (
          <span style={{ fontSize: "12px", color: "red" }}>
            비밀번호를 입력해 주세요
          </span>
        )}
        <br />
        <button onSubmit={onSubmit}>submit</button>
      </form>
    </div>
  );
};

export default Login;

"use client";
import { Form, Button } from "antd";
import s from "./style.module.scss";
import Link from "next/link";
import { AppRoutes } from "@/utils/constans/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "@/utils/validation/chemas/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "@/components/CustomInput";
import cn from "classnames";
import { fetchData } from "@/helpers/promise";
import { notification } from "@/utils/notification";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(LoginSchema), mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { data: authData, error } = await fetchData({
      url: "v1/auth/login",
      method: "POST",
      payload: { email: data.email, password: data.password },
    });

    authData && notification("success", "You successfully logged in.");
  };

  return (
    <Form className={s.loginForm} onFinish={handleSubmit(onSubmit)}>
      <Form.Item>
        <CustomInput
          name="email"
          control={control}
          error={errors.email && errors.email}
          placeholder="Work Email"
          type="text"
        />
      </Form.Item>

      <Form.Item
        className={cn(s.hiddenPassword, {
          [s.displayedPassword]: !control.getFieldState("email").invalid,
        })}
      >
        <CustomInput
          name="password"
          control={control}
          error={errors.password && errors.password}
          placeholder="Password"
          type="password"
        />
        <Link href={AppRoutes.FORGOT} className={s.formLink}>
          Forgot your password?
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" className={s.submit} htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      <p className={s.underText}>
        Is your company new to Qencode?
        <Link href={AppRoutes.REGISTRATION} className={s.formLink}>
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

"use client";
import { Form, Input, Button } from "antd";
import s from "./style.module.scss";
import Link from "next/link";
import { AppRoutes } from "@/utils/constans/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "@/utils/validation/chemas/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "@/components/CustomInput";
import cn from "classnames";

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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          [s.displayedPassword]: !!watch("password")?.length || watch("email")?.length > 3,
        })}
      >
        <CustomInput
          name="password"
          control={control}
          error={errors.password && errors.password}
          placeholder="Password"
          type="pasword"
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

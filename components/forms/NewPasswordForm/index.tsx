"use client";
import { CustomInput } from "@/components/CustomInput";
import { fetchData } from "@/helpers/promise";
import { AppRoutes } from "@/utils/constans/constants";
import { notification } from "@/utils/notification";
import { NewPasswordSchema } from "@/utils/validation/chemas/createNewPasswrod";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  password: string;
  repeated_password: string;
};

export const NewPasswordsForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(NewPasswordSchema), mode: "all" });
  const { push } = useRouter();
  const params = useSearchParams();
  const token = params.get("token");
  const secret = params.get("secret");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    push(AppRoutes.LOGIN);

    const { data: emailData, error } = await fetchData({
      url: "v1/auth/password-set",
      method: "POST",
      payload: { password: data.password, password_confirm: data.repeated_password, token, secret },
    });

    emailData && notification("success", "Password has been reseted");
  };
  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item>
        <CustomInput
          label="Password"
          name="password"
          control={control}
          error={errors.password && errors.password}
          placeholder="Password"
          type="password"
        />
      </Form.Item>

      <Form.Item>
        <CustomInput
          label="Confirm Password"
          name="repeated_password"
          control={control}
          error={errors.repeated_password && errors.repeated_password}
          placeholder="Password"
          type="password"
        />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" type="primary" style={{ width: "100%", height: "2.5rem" }}>
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

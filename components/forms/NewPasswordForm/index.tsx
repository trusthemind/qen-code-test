"use client";
import { CustomInput } from "@/components/CustomInput";
import { NewPasswordSchema } from "@/utils/validation/chemas/createNewPasswrod";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Form } from "antd";
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

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form>
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
        <Button htmlType="submit" type="primary" style={{ width: "100%",height: "2.5rem" }}>
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  );
};

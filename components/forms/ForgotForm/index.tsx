"use client";
import { Button, Form } from "antd";
import { CustomInput } from "@/components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotSchema } from "@/utils/validation/chemas/forgot";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  email: string;
};

export const ForgotForm = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(ForgotSchema), mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item>
        <CustomInput
          name="email"
          control={control}
          error={errors.email && errors.email}
          placeholder="Email"
          type="text"
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 16 }}>
        <Button htmlType="submit" style={{ width: "100%", height: "2.5rem" }} type="primary">
          Send
        </Button>
      </Form.Item>
      <Form.Item>
        <Button htmlType="reset" style={{ width: "100%", height: "2.5rem" }}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

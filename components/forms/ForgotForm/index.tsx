"use client";
import { Button, Form } from "antd";
import { CustomInput } from "@/components/CustomInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgotSchema } from "@/utils/validation/chemas/forgot";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { SetNext } from "@/redux/slices/forgot";
import { fetchData } from "@/helpers/promise";
import { notification } from "@/utils/notification";

type Inputs = {
  email: string;
};

export const ForgotPassword_EmailForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(ForgotSchema), mode: "all" });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(SetNext({ completed: true }));

    const { data: emailData, error } = await fetchData({
      url: "v1/auth/password-reset",
      method: "POST",
      payload: { email: data.email },
    });

    emailData && notification("success", "Reset email has been sended");
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} style={{ width: "18rem" }}>
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

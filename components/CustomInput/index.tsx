import React from "react";
import { Controller, FieldError, useForm } from "react-hook-form";
import { Input, Typography } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import Password from "antd/es/input/Password";

export interface CustomInputProps {
  label?: string;
  control: any;
  name: string;
  error?: FieldError;
  rules?: Record<string, any>;
  placeholder: string;
  type: "text" | "password";
}

export const CustomInput = ({ label, type, placeholder, error, ...rest }: CustomInputProps) => {
  return (
    <div className="input-container">
      <Typography style={{ fontWeight: "bold", marginBottom: 2.5 }}>{label}</Typography>
      <Controller
        name={rest.name}
        control={rest.control}
        rules={rest.rules}
        render={({ field, fieldState }) =>
          type === "text" ? (
            <Input
              {...field}
              type={type}
              status={(fieldState.error && "error") || ""}
              placeholder={placeholder}
            />
          ) : (
            <Password
              {...field}
              status={(fieldState.error && "error") || ""}
              placeholder={placeholder}
            ></Password>
          )
        }
      />
      <span className={"error-message"} color="">
        {error && error.message}
      </span>
    </div>
  );
};

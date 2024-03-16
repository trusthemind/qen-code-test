import React from "react";
import { Controller, FieldError, useForm } from "react-hook-form";
import { Input, Typography } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";

export interface CustomInputProps {
  label?: string;
  control: any;
  name: string;
  error?: FieldError;
  rules?: Record<string, any>;
  placeholder: string;
  type: string;
}

export const CustomInput = ({
  label,
  type = "text",
  placeholder,
  error,
  ...rest
}: CustomInputProps) => {
  return (
    <div className="input-container">
      <Typography style={{ fontWeight: "bold", marginBottom: 2.5 }}>{label}</Typography>
      <Controller
        name={rest.name}
        control={rest.control}
        rules={rest.rules}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            type={type}
            status={(fieldState.error && "error") || ""}
            placeholder={placeholder}
          />
        )}
      />
      <span className={"error-message"} color="">
        {error && error.message}
      </span>
    </div>
  );
};

import { Form, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
};

const IInput = ({ name, type, label, disabled, placeholder }: TInputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage: string | undefined = errors[name]?.message as
    | string
    | undefined;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control}
        rules={{ required: ` ${name} is required` }}
        render={({ field }) => (
          <Form.Item
            label={label}
            validateStatus={errorMessage ? "error" : ""}
            help={errorMessage}
          >
            <Input
              className="border w-64 p-2"
              {...field}
              type={type}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default IInput;

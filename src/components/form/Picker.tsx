import { DatePicker, Form, TimePicker } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TPDatePickerProps = {
  name: string;
  label?: string;
};

export const IDatePicker = ({ name, label }: TPDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} style={{ width: "100%" }} size="large" />
          </Form.Item>
        )}
      />
    </div>
  );
};

type TPTimePicker = {
  name: string;
  label: string;
};

export const ITimePicker = ({ name, label }: TPTimePicker) => {
  const { control } = useFormContext();
  return (
    <div style={{ marginBottom: "10px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item label={label}>
              <TimePicker
                {...field}
                size="large"
                style={{ width: "100%" }}
                format="HH:mm"
              />
              {error && <small style={{ color: "red" }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      ></Controller>
    </div>
  );
};

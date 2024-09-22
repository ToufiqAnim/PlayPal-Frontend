import React from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
type TDatePickerProps = {
  name: string;
  label?: string;
};
const DatePikerForm = ({ name, label }: TDatePickerProps) => {
  const { handleSubmit, control } = useForm();

  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          name={name}
          render={({ field }) => <DatePicker {...field} />}
        />
      </form>
    </div>
  );
};
export default DatePikerForm;

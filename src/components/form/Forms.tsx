import { Form } from "antd";
import React from "react";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TPropsForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormCofing;

type TFormCofing = {
  defaultValues?: Record<string, any>;
};
const InputForm = ({ onSubmit, children, defaultValues }: TPropsForm) => {
  const formConfig: TFormCofing = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  const submitFormData: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submitFormData)}>
        {children}{" "}
      </Form>
    </FormProvider>
  );
};

export default InputForm;

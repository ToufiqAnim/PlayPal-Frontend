import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Row } from "antd";

import { toast } from "sonner";
import { useSignUpMutation } from "../../../../redux/api/auth/authApi";
import { USER_ROLE } from "../../../../constant/UserConstant";
import React from "react";
import InputForm from "../../../../components/form/Forms";
import IInput from "../../../../components/form/Input";

const CreateAdmin = () => {
  const [CreateAdmin] = useSignUpMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading ....");
    try {
      const CreateAdminData = {
        ...data,
        role: USER_ROLE.admin,
      };

      const res = await CreateAdmin(CreateAdminData).unwrap();
      console.log(res);
      if (res?.success) {
        toast.success(res?.message, { id: toastId, duration: 2000 });
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add Admin
        </h2>

        <Row justify={"center"} align={"middle"}>
          <InputForm onSubmit={onSubmit}>
            <IInput
              placeholder="Name "
              name="name"
              label="Name"
              type="text"
            ></IInput>
            <IInput
              placeholder="Email ."
              name="email"
              label="Email"
              type="email"
            ></IInput>
            <IInput
              placeholder="Password ."
              name="password"
              label="Password"
              type="text"
            ></IInput>
            <IInput
              placeholder="Number."
              name="phone"
              label="Phone"
              type="number"
            ></IInput>
            <IInput
              placeholder="Address ."
              name="address"
              label="Address"
              type="text"
            ></IInput>
            <Button type="primary" className=" p-5" htmlType="submit">
              Add Admin
            </Button>
          </InputForm>
        </Row>
      </div>
    </div>
  );
};

export default CreateAdmin;

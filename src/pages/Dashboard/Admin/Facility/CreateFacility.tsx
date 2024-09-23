import { Button, Form, Input, Row } from "antd";

import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { toast } from "sonner";

import React from "react";
import IForm from "../../../../components/form/Forms";
import IInput from "../../../../components/form/Input";
import { useCreateFacilityMutation } from "../../../../redux/api/facility/facilityApi";
const CreateFacility = () => {
  const [createFacility] = useCreateFacilityMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const facilityInfo = {
        ...data,
        pricePerHour: Number(data.pricePerHour),
      };
      const res = await createFacility(facilityInfo);
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { duration: 2000 });
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Facility
        </h2>

        <Row justify={"center"} align={"middle"}>
          <IForm onSubmit={onSubmit}>
            <IInput name="name" label="Name" type="text"></IInput>
            <IInput name="description" label="Description" type="text"></IInput>
            <IInput
              name="pricePerHour"
              label="Price PerHour"
              type="number"
            ></IInput>
            <IInput name="location" label="Location" type="text"></IInput>
            <Controller
              name="image"
              render={({ field: { onChange, value, ...field } }) => (
                <Form.Item label="Picture">
                  <Input
                    type="file"
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                    value={value?.fileName}
                  ></Input>
                </Form.Item>
              )}
            />

            <Button type="primary" htmlType="submit">
              Create Facility
            </Button>
          </IForm>
        </Row>
      </div>
    </div>
  );
};

export default CreateFacility;

import { Button, Form, Input, Row, Spin } from "antd";

import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { useParams } from "react-router-dom";

import { toast } from "sonner";

import React from "react";
import {
  useGetAllFacilityQuery,
  useUpdateFacilityMutation,
} from "../../../../redux/api/facility/facilityApi";
import { TFacilities } from "../../../../types/facility.type";
import IForm from "../../../../components/form/Forms";
import IInput from "../../../../components/form/Input";

const UpdateFacility = () => {
  const { id } = useParams();
  const [updateFacility] = useUpdateFacilityMutation();
  const {
    data: facility,
    isLoading,
    error,
  } = useGetAllFacilityQuery(undefined, { skip: !id });

  const findSingleFacility = facility?.data?.find(
    (item: TFacilities) => item._id === id
  );

  if (isLoading) {
    return <Spin></Spin>;
  }

  if (error) {
    return toast.error("Error loading facility");
  }

  if (!findSingleFacility) {
    return toast.error("Facility not found");
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const facilityInfo = {
        ...data,
        pricePerHour: Number(data.pricePerHour),
      };

      const res = await updateFacility({ id, data: facilityInfo });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
      }
      console.log("create facility ", res);
    } catch (error: any) {
      toast.error(error?.data?.message, { duration: 2000 });
    }
  };

  return (
    <div>
      <div className=" flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Update Facility
          </h2>

          <Row justify={"center"} align={"middle"}>
            <IForm onSubmit={onSubmit} defaultValues={findSingleFacility}>
              <IInput name="name" label="Name" type="text"></IInput>
              <IInput
                name="description"
                label="Description"
                type="text"
              ></IInput>
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
                Update Facility
              </Button>
            </IForm>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UpdateFacility;

import { FieldValues, SubmitHandler } from "react-hook-form";
import { useCreateBookingsMutation } from "../../redux/api/booking/bookingApi";
import { TFacilityIDProps } from "../../types/facility.type";
import moment from "moment";
import { toast } from "sonner";
import { Button, Card } from "antd";
import InputForm from "../../components/form/Forms";
import React from "react";
import { IDatePicker, ITimePicker } from "../../components/form/Picker";

const BookingForm = ({ facilityId }: TFacilityIDProps) => {
  const [createBookings] = useCreateBookingsMutation();
  const submitBookingForm: SubmitHandler<FieldValues> = async (data) => {
    const bookingData = {
      ...data,
      date: moment(new Date(data.date)).format("YYYY-MM-DD"),
      startTime: moment(new Date(data.startTime)).format("HH:MM"),
      endTime: moment(new Date(data.endTime)).format("HH:MM"),
      facility: facilityId,
    };

    try {
      const res = await createBookings(bookingData);

      if (res?.data.success) {
        toast.loading("Payment Processing ....");
        window.location.href = res.data?.data?.payment_url;
      } else {
        console.log(res);
        toast.error("Booking  failed!");
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <Card>
      <h3 className="text-center text-xl font-bold">Booking Form</h3>
      <InputForm onSubmit={submitBookingForm}>
        <IDatePicker label="Date" name="date"></IDatePicker>
        <ITimePicker name="startTime" label="Start Time" />
        <ITimePicker name="endTime" label="End Time" />
        <Button type="primary" htmlType="submit">
          Proced to Pay
        </Button>
      </InputForm>
    </Card>
  );
};

export default BookingForm;

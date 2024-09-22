import { baseApi } from "../baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookingsByAdmin: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    getAllBookingsByUser: builder.query({
      query: () => ({
        url: "/bookings/user",
        method: "GET",
      }),
      providesTags: ["bookings"],
    }),
    createBookings: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POSt",
        body: data,
      }),
      invalidatesTags: ["bookings"],
    }),
    deleteBooking: builder.mutation({
      query: (id) => ({
        url: "/bookings/user",
        method: "DELETE",
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useGetAllBookingsByAdminQuery,
  useGetAllBookingsByUserQuery,
  useCreateBookingsMutation,
  useDeleteBookingMutation,
} = bookingApi;

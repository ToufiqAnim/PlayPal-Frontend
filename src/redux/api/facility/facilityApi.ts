import { baseApi } from "../baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providesTags: ["Facility"],
    }),
    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
      providesTags: ["Facility"],
    }),
    createFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Facility"],
    }),

    updateFacility: builder.mutation({
      query: ({ id, ...data }) => {
        return {
          url: `/facility/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Facility"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Facility"],
    }),
  }),
});

export const {
  useGetAllFacilityQuery,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
} = facilityApi;

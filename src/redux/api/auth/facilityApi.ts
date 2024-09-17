import { baseApi } from "../baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
      providedTags: ["facility"],
    }),
    createFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facility"],
    }),
    updateFacility: builder.mutation({
      query: ({ id, ...data }) => {
        return {
          url: `/facility/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["facility"],
    }),
    deleteFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      providedTags: ["facility"],
    }),
  }),
});

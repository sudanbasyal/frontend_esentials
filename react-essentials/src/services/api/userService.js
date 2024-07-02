// services/api/userService.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // use '/react'

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/user" }),
  tagTypes: ["getAllUser, getUser"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/getall",
        method: "GET",
      }),
      providesTags: ["getAllUser"],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["getAllUser"],
      //   invalidatesTags: ["getAllUser, getUser"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getAllUser"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;
//builder.query and builder.mutation query for get and mutation for rest
//generally we provide tags to query and we invalidate in mutation

// updateUser: builder.mutation({
//   query: (info) => ({
//     url: "/infoid",
//     method: "POST",
//     body,
//   }),
//     invalidatesTags: ["getAllUser"],
// //   invalidatesTags: ["getAllUser, getUser"],
// }),info must be an object containing id and relevant fields

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    // Query is used for reading
    getApiByName: builder.query({
      query: () => "/posts",
    }),

    // Muation for create the data
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
    }),

    deletPost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),

    updatePost: builder.mutation({
      query: ({ id, ...updatedPost }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: updatedPost,
      }),
    }),
  }),
});

export const {
  useGetApiByNameQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletPostMutation,
} = api;

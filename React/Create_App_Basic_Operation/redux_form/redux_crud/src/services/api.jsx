// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getName: builder.query({
      query: () => "/posts",
    }),

    createPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),

    upadatePost: builder.mutation({
      query: ({ id, ...updatePost }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: updatePost,
      }),
    }),
  }),
});

export const {
  useGetNameQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpadatePostMutation,
} = Api;

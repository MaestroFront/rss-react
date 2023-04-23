import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICard, ServerResponse } from "../../components/models/models";

export const cardsApi = createApi({
  reducerPath: "cards/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.sampleapis.com/",
  }),
  endpoints: (build) => ({
    searchCards: build.query<ICard[], string>({
      query: (search: string) => ({
        url: `cartoons/cartoons2D/${search}`,
      }),
      transformResponse: (response: ServerResponse<ICard>) => response.items,
    }),
  }),
});

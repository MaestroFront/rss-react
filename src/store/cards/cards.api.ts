import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResult, ServerResponse } from "../../components/models/models";

export const cardsApi = createApi({
  reducerPath: "cards/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rickandmortyapi.com/api/",
  }),
  endpoints: (build) => ({
    searchCards: build.query<IResult[], string>({
      query: (search: string) => ({
        url: `character/?name=${search}`,
      }),
      transformResponse: (response: ServerResponse<IResult>) => response.results,
    }),
  }),
});

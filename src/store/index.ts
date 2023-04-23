import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "./cards/cards.api";

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export const { useSearchCardsQuery } = cardsApi;

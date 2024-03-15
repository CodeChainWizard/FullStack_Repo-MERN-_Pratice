import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Api } from "./services/api.jsx";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultName) => getDefaultName().concat(Api.middleware),
});

setupListeners(store.dispatch);

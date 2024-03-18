import { configureStore } from "@reduxjs/toolkit";
import { stepSlice } from "./slices/forgot";
import storage, { persistStore } from "redux-persist";


const stepsPersistConfig = {
    key: "forgot_steps",
    storage,
    whitelist: ["currentStep"],
}

export const Store = configureStore({
  reducer: {
    [stepSlice.name] : stepSlice.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export const persistor = persistStore(Store);
export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
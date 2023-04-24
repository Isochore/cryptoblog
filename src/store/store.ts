import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { articlesSlice } from "./articlesSlice";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage";
import articlesReducer from './articlesSlice';


const rootReducer = combineReducers({
    [articlesSlice.name]: articlesSlice.reducer,
  });
  
  const makeConfiguredStore = () =>
    configureStore({
      reducer: rootReducer,
      devTools: true,
    });
  
  export const makeStore = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
      return makeConfiguredStore();
    } else {
        // we need it only on client side
        const persistConfig = {
            key: "nextjs",
            whitelist: ["auth"], // make sure it does not clash with server keys
            storage,
        };
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        let store: any = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== "production",
        });
        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
  };

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
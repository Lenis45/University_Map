import { configureStore } from '@reduxjs/toolkit';

import enclouresCase from "../SelectBildings"
import filter from "../SelectFilter";

const store = configureStore({
  reducer: { enclouresCase, filter },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
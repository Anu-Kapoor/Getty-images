import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import dataSlice from './dataslice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: dataSlice.reducer },
});

export default store;
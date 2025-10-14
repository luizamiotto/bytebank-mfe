// store.ts
import { configureStore } from "@reduxjs/toolkit";
import transactionTypesReducer from "../features/transactionTypes/transactionTypeSlice";
import transactionsSliceReducer from "../features/transactions";
import sidebarSliceReducer from "../features/sidebarSlice";

const store = configureStore({
  reducer: {
    transactionTypes: transactionTypesReducer,
    transactions: transactionsSliceReducer,
    sidebar: sidebarSliceReducer,
  },
});

export default store;

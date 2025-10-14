// store.ts
import { configureStore } from "@reduxjs/toolkit";
import transactionTypesReducer from "../features/transactionTypes/transactionTypeSlice";
import transactionsSliceReducer from "../features/transactions";

const store = configureStore({
  reducer: {
    transactionTypes: transactionTypesReducer,
    transactions: transactionsSliceReducer,
  },
});

export default store;

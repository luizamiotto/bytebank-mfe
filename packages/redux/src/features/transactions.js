import { createSelector, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  transactions: [],
  editingId: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push({
        ...action.payload,
        id: uuid(),
      });
    },

    editTransaction: (state, action) => {
      const { id, updated } = action.payload;
      const index = state.transactions.findIndex((tx) => tx.id === id);
      if (index !== -1) {
        state.transactions[index] = {
          ...state.transactions[index],
          ...updated,
        };
      }
    },

    deleteTransaction: (state, action) => {
      const id = action.payload;
      state.transactions = state.transactions.filter((tx) => tx.id !== id);
    },

    setEditingId: (state, action) => {
      state.editingId = action.payload;
    },
  },
});

export const selectTransactions = (state) => state.transactions.transactions;
export const selectTransactionById = (state, id) =>
  id
    ? state.transactions.transactions.find((tx) => tx.id === id) || null
    : null;
export const selectEditingId = (state) => state.transactions.editingId;

export const selectCurrentBalance = createSelector(
  (state) => state.transactions.transactions,
  (transactions) =>
    transactions.reduce((acc, transaction) => acc + transaction.value, 0)
);

export const {
  addTransaction,
  editTransaction,
  deleteTransaction,
  setEditingId,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;

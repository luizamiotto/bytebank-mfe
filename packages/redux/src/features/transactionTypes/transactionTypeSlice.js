import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: ["Transferência", "Depósito"],
};

const transactionTypeSlice = createSlice({
  name: "transactionTypes",
  initialState,
});

export default transactionTypeSlice.reducer;

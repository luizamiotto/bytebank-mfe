// exporte o sidebar slice actions/selectors
export {
  setSelectedItem,
  selectSidebarItems,
  selectSelectedItem,
} from "./features/sidebarSlice";

// reexporte outros slices se quiser
export {
  addTransaction,
  editTransaction,
  deleteTransaction,
  setEditingId,
  selectEditingId,
  selectTransactions,
  selectTransactionById,
  selectCurrentBalance,
} from "./features/transactions";

import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import TransactionContent from "./components/TransactionComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <TransactionContent />
    </Provider>
  );
}

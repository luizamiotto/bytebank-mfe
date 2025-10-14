import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import BalanceContent from "./components/BalanceComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <BalanceContent />
    </Provider>
  );
}

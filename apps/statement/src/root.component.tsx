import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import StatementContent from "./components/StatementComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <StatementContent />
    </Provider>
  );
}

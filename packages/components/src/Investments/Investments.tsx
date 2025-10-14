import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import InvestmentsContent from "./components/InvestementComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <InvestmentsContent />
    </Provider>
  );
}

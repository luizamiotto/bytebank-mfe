import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import FilterButtonContent from "./components/FilterButtonComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <FilterButtonContent />
    </Provider>
  );
}

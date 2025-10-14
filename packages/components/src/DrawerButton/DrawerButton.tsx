import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import DrawerButtonContent from "./components/DrawerButtonComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <DrawerButtonContent />
    </Provider>
  );
}

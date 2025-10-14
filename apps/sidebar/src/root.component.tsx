import { Provider } from "react-redux";
import { store } from "@bytebank/redux";
import SidebarContent from "./components/SidebarComponent";

export default function Root() {
  return (
    <Provider store={store}>
      <SidebarContent />
    </Provider>
  );
}

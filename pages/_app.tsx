import "../styles/globals.css";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducers/index";

const store = legacy_createStore(rootReducer);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

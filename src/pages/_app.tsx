import '@/styles/globals.css';
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import BasicButton from './components/atoms/ArticleTitlePreview';

function App({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps}>
      </Component>
    </PersistGate>
  );
}
export default wrapper.withRedux(App);
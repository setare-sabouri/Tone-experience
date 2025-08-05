import "../styles/globals.scss";
import { I18nextProvider } from "react-i18next";
import i18n from "../utils/i18n";
import { StrictMode } from "react";
import RootLayout from "../components/layout/layout";
import Experience from "../components/SectionOne/Experience/Experience";

export default function App({ Component, pageProps }) {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <RootLayout>
          <Component {...pageProps} />
          {/* <Experience/> */}
        </RootLayout>
      </I18nextProvider>
    </StrictMode>
  );
}

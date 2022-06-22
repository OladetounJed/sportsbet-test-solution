import "@/styles/global.css";
import { client, ssrCache } from "@api/gateway";
import type { AppProps } from "next/app";
import Head from "next/head";
import { EventProvider } from "src/store/event";
import { Provider } from "urql";

export default function MyApp({ Component, pageProps }: AppProps) {
  pageProps.urqlState && ssrCache.restoreData(pageProps.urqlState);
  return (
    <>
      <Head>
        <title>Mini Sportsbet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />     
      </Head>
      <Provider value={client}>
        <EventProvider>
          <Component {...pageProps} />
        </EventProvider>
      </Provider>
    </>
  );
}

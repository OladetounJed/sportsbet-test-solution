import {
  createClient,
  cacheExchange,
  dedupExchange,
  fetchExchange,
  ssrExchange,
  subscriptionExchange,
} from "urql";
import { createClient as createWSClient } from "graphql-ws";



const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

export const wsClient = !isServerSide
  ? createWSClient({
      url: process.env.NEXT_PUBLIC_API_WS_URL || "",
    })
  : (null as any);

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_GATEWAY_URL || "",
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,

    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});



export { client, ssrCache };

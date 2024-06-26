import algoliasearch, { SearchClient } from "algoliasearch/lite";
import { useState } from "react";

type Props = {};

type UseAlgoliaClient = {
  client: SearchClient;
};

export function useAlgoliaClient(props?: Props): UseAlgoliaClient {
  const [client] = useState(
    algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!,
    ),
  );

  return {
    client,
  };
}

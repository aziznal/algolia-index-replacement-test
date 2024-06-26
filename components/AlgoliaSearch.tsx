"use client";

import { useAlgoliaClient } from "@/lib/hooks/useAlgoliaClient";
import { useEffect } from "react";
import {
  InstantSearch,
  SearchBox,
  useInstantSearch,
} from "react-instantsearch";

export function AlgoliaSearch() {
  const { client: searchClient } = useAlgoliaClient();

  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="POSTS">
        <SearchInput />
      </InstantSearch>
    </div>
  );
}

type Post = {
  content: string;
  objectID: string;
  title: string;
  views: number;
};

function SearchInput() {
  const { status, results } = useInstantSearch();

  return (
    <div className="flex flex-col items-center">
      <SearchBox
        className="mb-4"
        classNames={{
          root: "border rounded flex relative w-fit",
          submitIcon: "hidden",
          resetIcon: "hidden",
          reset: "absolute right-10 top-[50%] -translate-y-[50%]",
          input: "h-full py-2 px-3 w-full",
          loadingIcon: "hidden",
          loadingIndicator: "hidden",
        }}
      />

      <div className="flex flex-col items-center justify-center">
        {/* No results  */}
        {results.hits.length === 0 && (
          <div className="flex text-center justify-center">no results</div>
        )}

        {results.hits.length > 0 &&
          results.hits.map((hit: Post) => (
            <div
              key={hit.objectID}
              className="flex gap-3 border p-3 rounded-md hover:bg-zinc-200 cursor-pointer transition-colors"
            >
              <div className="w-[80px] h-[72px] bg-slate-600 rounded-md" />

              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-medium">{hit.title}</h2>
                <p className="text-zinc-600">{hit.content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

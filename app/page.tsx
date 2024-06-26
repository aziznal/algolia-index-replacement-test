"use client";

import { AlgoliaSearch } from "@/components/AlgoliaSearch";
import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";

export default function Home() {
  const [isResettingRecord, setIsResettingRecord] = useState(false);

  const resetRecord = useCallback(async () => {
    if (isResettingRecord) {
      return;
    }

    setIsResettingRecord(true);

    const response = await fetch("/api/algolia", {
      method: "POST",
    });

    console.log(await response.json());

    setIsResettingRecord(false);
  }, [isResettingRecord]);

  return (
    <div className="min-h-[100vh] flex flex-col items-center pt-[30%] gap-6">
      <h1 className="text-center font-bold text-4xl">
        Algolia Record Replacement Test
      </h1>

      <p>
        Press the button to replace the record in algolia with one that has
        randomly generated data.
      </p>

      <Button
        className="self-center"
        onClick={resetRecord}
        disabled={isResettingRecord}
      >
        Replace record
      </Button>

      <AlgoliaSearch />
    </div>
  );
}

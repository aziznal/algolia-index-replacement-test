import { AlgoliaSearch } from "@/components/AlgoliaSearch";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center pt-[30%] gap-6">
      <h1 className="text-center font-bold text-4xl">
        Algolia Record Replacement Test
      </h1>

      <p>
        Press the button to replace the record in algolia with one that has
        randomly generated data.
      </p>

      <Button className="self-center">Replace record</Button>

      <AlgoliaSearch />
    </div>
  );
}

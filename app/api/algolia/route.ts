import { NextRequest, NextResponse } from "next/server";
import algoliasearch from "algoliasearch";

import { generate } from "random-words";
import { Post } from "@/lib/types";

export async function POST(req: NextRequest, ctx: any) {
  const index = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.ALGOLIA_WRITE_API_KEY!,
  ).initIndex("POSTS");

  const itemId = "4c8847420d7a9_dashboard_generated_id";

  const result = await index.partialUpdateObject({
    objectID: itemId,
    title: generate({ min: 1, max: 3, join: " " }),
    content: generate({ min: 5, max: 12, join: " " }),
    views: Math.floor(Math.random() * 1000),
  } satisfies Post);

  console.log(result);

  return NextResponse.json({
    message: "record has been reset",
    status: 200,
  });
}

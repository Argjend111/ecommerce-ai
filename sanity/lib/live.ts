
import { defineLive } from "next-sanity/live";
import { client } from "./client";

export const { sanityFetch, SanityLive, SanityApp } = defineLive({
  client,
});

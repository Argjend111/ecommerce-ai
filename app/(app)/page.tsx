import { sanityFetch } from "@/sanity/lib/live";
import { groq } from "next-sanity";
import Image from "next/image";

export default async function Home() {

  const { data: categories } = await sanityFetch({
    query: ALL_CATEGORIES_QUERY,
  })

  return (
    <div className="">

    </div>
  );
}

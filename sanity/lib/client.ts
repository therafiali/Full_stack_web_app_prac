import { createClient } from "next-sanity";

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2023-08-03",
  useCdn: false,
});

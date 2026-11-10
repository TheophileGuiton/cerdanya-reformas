import { notFound } from "next/navigation";

// Any URL under a locale that no page handles shows the localized 404.
export default function CatchAll() {
  notFound();
}

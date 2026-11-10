// Runs before `next build`. Fails when a project is missing a file or has
// invalid data, and lists the concept projects that are still live so they
// are replaced before launch.
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.join(process.cwd(), "content", "projects");
const locales = ["es", "ca", "fr"];
const { projectMetaSchema } = await import(
  pathToFileURL(path.join(process.cwd(), "lib", "content", "schemas.ts")).href
);

const errors = [];
const concepts = [];
let missingImages = 0;

const slugs = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

for (const slug of slugs) {
  const dir = path.join(root, slug);
  for (const locale of locales) {
    if (!existsSync(path.join(dir, `${locale}.mdx`))) {
      errors.push(`${slug}: missing ${locale}.mdx`);
    }
  }
  if (!existsSync(path.join(dir, "meta.ts"))) {
    errors.push(`${slug}: missing meta.ts`);
    continue;
  }
  const { meta } = await import(pathToFileURL(path.join(dir, "meta.ts")).href);
  const result = projectMetaSchema.safeParse(meta);
  if (!result.success) {
    for (const issue of result.error.issues) {
      errors.push(`${slug}: ${issue.path.join(".")} ${issue.message}`);
    }
    continue;
  }
  if (result.data.slug !== slug) {
    errors.push(`${slug}: meta.slug is "${result.data.slug}"`);
  }
  if (result.data.isConcept) concepts.push(slug);
  for (const image of result.data.images) {
    const file = path.join(process.cwd(), "public", "images", "projects", slug, `${image.name}.jpg`);
    if (!existsSync(file)) missingImages += 1;
  }
}

if (errors.length > 0) {
  console.error(`\nContent check failed:\n${errors.map((e) => `  - ${e}`).join("\n")}\n`);
  process.exit(1);
}

console.log(`Content check: ${slugs.length} projects valid in ${locales.join("/")}.`);
if (missingImages > 0) {
  console.warn(`  ${missingImages} project images are not generated yet (placeholders will render).`);
}
if (concepts.length > 0) {
  console.warn(
    `\nWARNING: ${concepts.length} concept projects are still live. Replace them before launch:\n${concepts
      .map((slug) => `  - ${slug}`)
      .join("\n")}\n`,
  );
}

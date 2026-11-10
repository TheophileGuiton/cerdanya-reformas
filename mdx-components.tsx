import type { MDXComponents } from "mdx/types";

// Case-study typography. Sections are h2; body copy stays within 60ch.
const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-16 mb-4 font-display text-display-m" {...props} />
  ),
  p: (props) => <p className="mb-5 max-w-[60ch] text-bark" {...props} />,
  ul: (props) => (
    <ul className="mb-5 max-w-[60ch] list-disc pl-5 text-bark" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}

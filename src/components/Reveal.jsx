import { useInView } from "../hooks/useInView.js";

/**
 * Applies the `.reveal` / `.in-view` scroll animation to a single element.
 * Renders the tag you pass in (no extra wrapper div), so CSS layout and
 * :nth-child rules from the original stylesheet keep working.
 *
 *   <Reveal as="h2">A dream, planted in 2004.</Reveal>
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  const classes = ["reveal", inView ? "in-view" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}

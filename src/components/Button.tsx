import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "btn inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "bg-sage-dark text-white hover:bg-[#55664f]"
      : variant === "light"
      ? "border border-ink/30 bg-cream text-ink hover:bg-white"
      : "border-2 border-ink/30 text-ink hover:bg-ink hover:text-white";
  const cls = `${base} ${styles} ${className}`;
  const external = /^https?:/.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
  return external ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

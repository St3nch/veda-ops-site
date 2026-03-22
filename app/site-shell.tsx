import Link from "next/link";

export function SiteShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="page">
      <div className="scanlines" />
      <main className="shell">
        <div className="shellTop">
          <span className="dot dotRed" />
          <span className="dot dotYellow" />
          <span className="dot dotGreen" />
          <span className="shellLabel">vedaops.dev :: {label}</span>
        </div>
        <nav className="nav">
          <Link href="/">signal</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </nav>
        {children}
      </main>
    </div>
  );
}

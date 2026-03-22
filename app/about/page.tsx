import { SiteShell } from "../site-shell";

export default function AboutPage() {
  return (
    <SiteShell label="about">
      <section className="section">
        <p className="kicker">[ ABOUT ]</p>
        <h1>OBSERVE FIRST</h1>
        <p>
          VEDA OPS is using this site as a low-chaos proving surface for owned-performance
          instrumentation, page identity validation, and basic route-level observability.
        </p>
      </section>

      <section className="section">
        <h2>Why this exists</h2>
        <ul className="list">
          <li>Multiple pages for pagePath and hostName sanity checks.</li>
          <li>A simple deployment surface for GA4 validation.</li>
          <li>A bounded site where observability can be hardened before wider rollout.</li>
        </ul>
      </section>
    </SiteShell>
  );
}

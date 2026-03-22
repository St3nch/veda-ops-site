import { SiteShell } from "./site-shell";

export default function HomePage() {
  return (
    <SiteShell label="terminal">
      <section className="section">
        <p className="kicker">[ SIGNAL ONLINE ]</p>
        <h1>VEDA OPS</h1>
        <p>
          Deterministic search intelligence for live project ecosystems.
        </p>
      </section>

      <section className="section console">
        <div className="line"><span className="prompt">&gt;</span> status<span className="cursor" /></div>
        <div className="response">online</div>

        <div className="line"><span className="prompt">&gt;</span> observatory</div>
        <div className="response">active</div>

        <div className="line"><span className="prompt">&gt;</span> intake</div>
        <div className="response">controlled</div>

        <div className="line"><span className="prompt">&gt;</span> proving-surface</div>
        <div className="response">ready for GA4 instrumentation and owned-performance validation</div>
      </section>

      <section className="section">
        <h2>Current proving goals</h2>
        <ul className="list">
          <li>Install GA4 cleanly on a repo we fully control.</li>
          <li>Generate trustworthy page-level traffic across multiple routes.</li>
          <li>Validate pagePath, hostName, and post-click observability assumptions.</li>
          <li>Use this site as a bounded proving surface before scaling GA4 work wider.</li>
        </ul>
      </section>

      <section className="section">
        <p className="small">NOISE DOWN. SIGNAL UP.</p>
      </section>
    </SiteShell>
  );
}

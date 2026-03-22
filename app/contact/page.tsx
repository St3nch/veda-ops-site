import { SiteShell } from "../site-shell";

export default function ContactPage() {
  return (
    <SiteShell label="contact">
      <section className="section">
        <p className="kicker">[ CONTACT ]</p>
        <h1>CONTROLLED INTAKE</h1>
        <p>
          Contact surface for the proving site. This also gives GA4 another route to observe.
        </p>
      </section>

      <section className="section console">
        <div className="line"><span className="prompt">&gt;</span> contact</div>
        <div className="response">ops@vedaops.dev</div>
      </section>
    </SiteShell>
  );
}

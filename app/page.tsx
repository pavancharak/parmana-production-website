export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section>
        <div className="container">
          <h1>AI has intelligence. Humans have authority.</h1>
          <p style={{ maxWidth: 700, marginTop: 20 }}>
            Parmana is Execution Authority Infrastructure for AI systems.
            It ensures every AI-generated action is explicitly authorized,
            deterministically evaluated, and cryptographically verified before execution.
          </p>
        </div>
      </section>

      {/* FLOW */}
      <section style={{ background: "#000", color: "#fff" }}>
        <div className="container">
          <h2 style={{ color: "#fff" }}>System Flow</h2>
          <p style={{ color: "#aaa" }}>
            AI → Signals → Governance → Authorization Decision → Execution Runtime → Attestation
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="container">
          <h2>The Problem</h2>
          <p>
            AI systems can generate real-world actions, but there is no deterministic system
            that verifies whether those actions are actually allowed to execute.
          </p>
        </div>
      </section>

      {/* SOLUTION CARDS */}
      <section style={{ background: "#fafafa" }}>
        <div className="container">
          <h2>The Solution</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20
          }}>

            {[
              "Deterministic authorization before execution",
              "Cryptographic attestation of every decision",
              "Independent verification without system access",
              "Strict separation between AI and execution"
            ].map((item, i) => (
              <div key={i} style={{
                padding: 24,
                border: "1px solid #e5e5e5",
                borderRadius: 12,
                background: "#fff"
              }}>
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section>
        <div className="container">
          <h2>Use Cases</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20
          }}>

            {[
              "AI Payment Systems",
              "Enterprise Automation",
              "Infrastructure Control"
            ].map((u, i) => (
              <div key={i} style={{
                padding: 20,
                border: "1px solid #eee",
                borderRadius: 12
              }}>
                {u}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#000", color: "#fff", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "#fff" }}>
            AI generates actions. Humans define authority.
          </h2>
          <p style={{ color: "#aaa" }}>Parmana enforces it.</p>
        </div>
      </section>

    </main>
  );
}
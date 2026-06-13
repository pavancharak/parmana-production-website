export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section>
        <div className="container">
          <h1>AI has intelligence. Humans have authority.</h1>

          <p style={{ marginTop: 20 }}>
            Parmana is Execution Authority Infrastructure for AI systems.
            It ensures every AI-generated action is explicitly authorized,
            deterministically evaluated, and cryptographically verified before execution.
          </p>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="dark">
        <div className="container">
          <h2>System Flow</h2>
          <p>
            AI → Signals → Governance → Authorization Decision → Execution Runtime → Attestation
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="container">
          <h2>The Problem</h2>
          <p>
            AI systems are now generating real-world actions, but there is no deterministic enforcement layer
            that validates whether those actions are authorized before execution.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ background: "#fafafa" }}>
        <div className="container">
          <h2>The Solution</h2>

          <div className="grid-2">

            <div className="card">
              Deterministic authorization before execution
            </div>

            <div className="card">
              Cryptographic attestation of every decision
            </div>

            <div className="card">
              Independent verification without system access
            </div>

            <div className="card">
              Strict separation between AI and execution
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section>
        <div className="container">
          <h2>Use Cases</h2>

          <div className="grid-3">
            <div className="card">AI Payment Systems</div>
            <div className="card">Enterprise Automation</div>
            <div className="card">Infrastructure Control</div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>AI generates actions. Humans define authority.</h2>
          <p>Parmana enforces it.</p>
        </div>
      </section>

    </main>
  );
}
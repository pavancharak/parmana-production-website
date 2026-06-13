export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif" }}>

      {/* HERO */}
      <section style={{ padding: 80 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700 }}>
          AI has intelligence. Humans have authority.
        </h1>

        <p style={{ marginTop: 20, fontSize: 18, maxWidth: 800 }}>
          Parmana is Execution Authority Infrastructure for AI systems.
          It ensures every AI-generated action is explicitly authorized,
          deterministically evaluated, and cryptographically verified before execution.
        </p>
      </section>

      {/* SYSTEM FLOW */}
      <section style={{ padding: 80, background: "#000", color: "#fff" }}>
        <h2>System Flow</h2>
        <p>AI → Signals → Governance → Authorization Decision → Execution Runtime → Attestation</p>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: 80 }}>
        <h2>The Problem</h2>
        <p>
          AI systems can generate real-world actions, but there is no deterministic system
          that verifies whether those actions are actually allowed to execute.
        </p>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: 80, background: "#f5f5f5" }}>
        <h2>The Solution</h2>
        <ul>
          <li>Deterministic authorization before execution</li>
          <li>Cryptographic attestation of every decision</li>
          <li>Independent verification without system access</li>
          <li>Strict separation between AI and execution</li>
        </ul>
      </section>

      {/* USE CASES */}
      <section style={{ padding: 80 }}>
        <h2>Use Cases</h2>
        <p>
          AI payments • Infrastructure automation • Enterprise workflows • AI agents
        </p>
      </section>

      {/* CTA */}
      <section style={{ padding: 80, background: "#000", color: "#fff" }}>
        <h2>AI generates actions. Humans define authority.</h2>
        <p>Parmana enforces it.</p>
      </section>

    </main>
  );
}
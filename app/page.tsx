export default function Home() {
  return (
    <main style={{ fontFamily: "ui-sans-serif, system-ui", color: "#0a0a0a" }}>

      {/* NAVBAR */}
      <div style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <strong>Parmana Systems</strong>
        <div style={{ display: "flex", gap: 20, fontSize: 14, color: "#555" }}>
          <span>Docs</span>
          <span>API</span>
          <span>Dashboard</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{
          fontSize: 64,
          lineHeight: 1.05,
          letterSpacing: "-1.5px",
          fontWeight: 750
        }}>
          AI has intelligence. Humans have authority.
        </h1>

        <p style={{ marginTop: 24, fontSize: 18, maxWidth: 750, color: "#555" }}>
          Parmana is Execution Authority Infrastructure for AI systems.
          It ensures every AI-generated action is explicitly authorized,
          deterministically evaluated, and cryptographically verified before execution.
        </p>
      </section>

      {/* SYSTEM FLOW */}
      <section style={{ background: "#000", color: "#fff", padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36 }}>System Flow</h2>
          <p style={{ color: "#bbb", marginTop: 16 }}>
            AI → Signals → Governance → Authorization Decision → Execution Runtime → Attestation
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 36 }}>The Problem</h2>
        <p style={{ marginTop: 16, color: "#555", fontSize: 18 }}>
          AI systems are generating real-world actions, but there is no deterministic enforcement layer
          that validates whether those actions are authorized before execution.
        </p>
      </section>

      {/* SOLUTION */}
      <section style={{ background: "#fafafa", padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36 }}>The Solution</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
            marginTop: 30
          }}>
            {[
              "Deterministic authorization before execution",
              "Cryptographic attestation of every decision",
              "Independent verification without system access",
              "Strict separation between AI and execution"
            ].map((t, i) => (
              <div key={i} style={{
                border: "1px solid #eaeaea",
                borderRadius: 12,
                padding: 20,
                background: "#fff"
              }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 36 }}>Use Cases</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
          marginTop: 30
        }}>
          {[
            "AI Payment Systems",
            "Enterprise Automation",
            "Infrastructure Control"
          ].map((u, i) => (
            <div key={i} style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 20
            }}>
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "120px 24px"
      }}>
        <h2 style={{ fontSize: 36 }}>
          AI generates actions. Humans define authority.
        </h2>
        <p style={{ marginTop: 16, color: "#aaa" }}>
          Parmana enforces it.
        </p>
      </section>

    </main>
  );
}
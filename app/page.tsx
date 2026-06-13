export default function Home() {
  return (
    <main style={{ fontFamily: "ui-sans-serif, system-ui", color: "#0a0a0a" }}>

      {/* NAVBAR */}
      <div style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 50
      }}>
        <strong>Parmana Systems</strong>
        <a
  href="https://docs.manthan.systems"
  target="_blank"
  style={{
    textDecoration: "none",
    color: "#555",
    fontWeight: 500,
    cursor: "pointer"
  }}
>
  Docs
</a>
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

        <p style={{ marginTop: 24, fontSize: 18, maxWidth: 760, color: "#555" }}>
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
        <p style={{ marginTop: 16, fontSize: 18, color: "#555" }}>
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
                borderRadius: 14,
                padding: 24,
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
              borderRadius: 14,
              padding: 20
            }}>
              {u}
            </div>
          ))}
        </div>
      </section>

      {/* LIVE DEMO */}
      <section style={{ padding: "120px 24px", background: "#fafafa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          <h2 style={{ fontSize: 36 }}>Live Execution Demo</h2>

          <div style={{
            marginTop: 30,
            border: "1px solid #eaeaea",
            borderRadius: 14,
            padding: 24,
            background: "#fff",
            fontFamily: "monospace",
            fontSize: 14,
            lineHeight: 1.8
          }}>

            <div>AI REQUEST → Transfer $10,000 to Vendor A</div>
            <div>SIGNAL GENERATED → Sent to Parmana</div>
            <div style={{ color: "#b45309" }}>AUTHORIZATION → Evaluating policy rules...</div>
            <div style={{ color: "#2563eb" }}>DECISION → APPROVED</div>
            <div style={{ color: "#16a34a" }}>EXECUTION → COMPLETED</div>
            <div style={{ color: "#6b7280" }}>ATTESTATION → 0x9f3a...c21 (verifiable proof)</div>

          </div>
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
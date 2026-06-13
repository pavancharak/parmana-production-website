export default function Home() {
  return (
    <main style={{ padding: 80, fontFamily: "sans-serif" }}>
      
      <h1 style={{ fontSize: 48, fontWeight: 700 }}>
        AI has intelligence. Humans have authority.
      </h1>

      <p style={{ marginTop: 20, fontSize: 18, maxWidth: 700 }}>
        Parmana is Execution Authority Infrastructure for AI systems.
        It ensures every AI-generated action is explicitly authorized,
        deterministically evaluated, and cryptographically verified before execution.
      </p>

      <div style={{ marginTop: 40, padding: 20, background: "#000", color: "#fff" }}>
        AI → Signals → Governance → Authorization Decision → Execution Runtime → Attestation
      </div>

    </main>
  );
}
import { Terminal, Shield, Server } from 'lucide-react';

export default function Work() {
  return (
    <div className="fade-in">
      <section style={{ marginBottom: '4rem' }}>
        <h1>Work History</h1>
        <p style={{ color: '#94a3b8' }}>A decade of expertise in enterprise IT and systems development.</p>
      </section>

      <div className="card-grid">
        <div className="card">
          <Server className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Enterprise IT</h3>
          <p>Over a decade of experience managing large-scale infrastructure, high-availability clusters, and complex systems architecture.</p>
        </div>
        <div className="card">
          <Terminal className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Go Systems Dev</h3>
          <p>Passionate about building CLI tools, distributed systems, and backend services using the power and simplicity of Go.</p>
        </div>
        <div className="card">
          <Shield className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Reliability & Security</h3>
          <p>Focusing on building secure, observable, and resilient systems that stand up to enterprise-level requirements.</p>
        </div>
      </div>

      <section style={{ marginTop: '4rem' }}>
        <h2>Technical Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { category: "Languages", items: "Go, Python, Shell, C" },
            { category: "Infrastructure", items: "Kubernetes, Terraform, AWS, Linux" },
            { category: "Systems", items: "Concurrency, Networking, gRPC, Raft" },
            { category: "Observability", items: "Prometheus, Grafana, OpenTelemetry" }
          ].map(skill => (
            <div key={skill.category} style={{ background: 'var(--card-bg)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{skill.category}</h4>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section style={{ marginTop: '4rem' }}>
        <h2>Enterprise Background</h2>
        <p style={{ color: '#94a3b8', maxWidth: '800px' }}>
          I have managed diverse IT environments, from on-premise data centers to cloud-native infrastructures. My experience includes scaling systems to meet millions of requests, optimizing network throughput, and ensuring business continuity through rigorous SRE practices.
        </p>
      </section>
    </div>
  );
}

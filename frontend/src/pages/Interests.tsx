import { Coffee, Binary, Shield, Zap } from 'lucide-react';

export default function Interests() {
  return (
    <div className="fade-in">
      <section style={{ marginBottom: '3rem' }}>
        <h1>Personal Interests</h1>
        <p style={{ color: '#94a3b8' }}>Beyond professional work, these are the technical topics and hobbies I'm passionate about.</p>
      </section>

      <div className="card-grid">
        <div className="card">
          <Binary className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Open Source</h3>
          <p>Contributing to and exploring Go-based open source projects that focus on systems observability and networking.</p>
        </div>
        <div className="card">
          <Shield className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Cybersecurity</h3>
          <p>Staying up to date with the latest in system hardening, zero-trust architectures, and binary exploitation techniques.</p>
        </div>
        <div className="card">
          <Zap className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Hardware Hacking</h3>
          <p>Experimenting with Raspberry Pi and ESP32 microcontrollers to build custom home automation and monitoring tools.</p>
        </div>
        <div className="card">
          <Coffee className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Continuous Learning</h3>
          <p>An avid reader of technical papers and blogs, always looking to deepen my understanding of distributed systems theory.</p>
        </div>
      </div>
    </div>
  );
}

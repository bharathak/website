export default function Home() {
  return (
    <div className="fade-in">
      <section className="hero">
        <h1>Systems Developer</h1>
        <p>Architecting high-performance infrastructure and solving complex systems problems with Programming and Generative AI.</p>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2>The Journey</h2>
        <div style={{ color: '#94a3b8', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>
            With over a decade of experience in distributed systems and infrastructure, I have transitioned from managing enterprise IT to engineering the next generation of systems tools. My focus is on building robust, high-availability software that pushes the boundaries of performance and reliability.
          </p>
          <p>
            Today, my work lies at the intersection of Systems Development and Artificial Intelligence. I specialize in leveraging Generative AI to solve intricate IT infrastructure problems, automating the lifecycle of cloud-native applications, and developing AI-integrated backend services.
          </p>
          <p>
            Whether it's building low-latency CLI tools in Go, safety-critical systems in Rust, or orchestrating large-scale AI infrastructure, I am dedicated to creating software that is as elegant as it is powerful. My mission is to bridge the gap between traditional systems engineering and the future of agentic AI.
          </p>
        </div>
      </section>
    </div>
  );
}

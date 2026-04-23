export default function Home() {
  return (
    <div className="fade-in">
      <section className="hero">
        <h1>Systems Engineer <span style={{ color: 'var(--accent-color)' }}>&</span> Go Developer</h1>
        <p>Bridging the gap between robust infrastructure and high-performance systems programming.</p>
      </section>

      <section style={{ marginTop: '4rem' }}>
        <h2>The Journey</h2>
        <div style={{ color: '#94a3b8', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>
            As a seasoned systems developer, I've spent years in the trenches of enterprise IT. My daily routine involved managing complex, high-availability infrastructure, writing extensive automation scripts, and ensuring system reliability at scale. 
          </p>
          <p>
            While I mastered the art of deploying and operating systems, my transition to Go was driven by a desire to build them from the ground up. I wanted to move beyond configuring other people's software and start engineering my own high-performance tools and services.
          </p>
          <p>
            Go's raw performance, elegant concurrency primitives, and uncompromising type safety make it the ideal language for modern systems development. Today, I focus on building robust CLI applications, distributed key-value stores, and backend APIs that solve real-world enterprise problems.
          </p>
        </div>
      </section>
    </div>
  );
}

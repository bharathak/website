import { Coffee, Shield, Dumbbell, Star, Globe, Camera, Crosshair, HeartHandshake } from 'lucide-react';

export default function Interests() {
  return (
    <div className="fade-in">
      <section style={{ marginBottom: '3rem' }}>
        <h1>Personal Interests</h1>
        <p style={{ color: '#94a3b8', maxWidth: '800px' }}>
          A curated look into the personal technical passions, strategic interests, and lifestyle philosophies that drive my continuous growth and shape my perspective, values and mindset.
        </p>
      </section>

      <div className="card-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {/* Row 1 (Personal & Strategic) */}
        <div className="card">
          <Dumbbell className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Workout & Healthy Eating</h3>
          <p>Prioritizing physical fitness and holistic health. I am passionate about learning from Vedic and Indic lifestyles and their higher life expectancy to build a foundation for sustained well-being.</p>
        </div>
        <div className="card">
          <Camera className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Photography & Cinematography</h3>
          <p>Capturing the world through a Canon Rebel T5i, utilizing 18-55mm, 70-130mm, and f/1.4 prime lenses to explore landscape, architectural beauty, and cinematic storytelling.</p>
        </div>
        <div className="card">
          <Star className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Astrology & Astronomy</h3>
          <p>Exploring the wonders of the cosmos and the deep insights of Vedic Astrology. Currently developing a high-performance platform for automated Vedic calculations.</p>
        </div>
        <div className="card">
          <Globe className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Geopolitics</h3>
          <p>Analyzing global affairs and international relations by bridging historical context with the present state, specifically focusing on spheres of influence at the intersection of trade, economies, technology and strategy.</p>
        </div>

        {/* Row 2 (Strategic, Social & Technical) */}
        <div className="card">
          <Crosshair className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Offense & Defence Innovation</h3>
          <p>Leveraging OSINT to study the latest advancements in strategic systems like BrahMos, Agni, NavIC, and AMCA, alongside the impact of autonomous technologies on global security.</p>
        </div>
        <div className="card">
          <HeartHandshake className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>NGO</h3>
          <p>Former core team member and CTO of Nature's Army (NARMY) in Hyderabad, India. Passionate about community empowerment and social impact through technical leadership.</p>
        </div>
        <div className="card">
          <Shield className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Cybersecurity</h3>
          <p>Utilizing OSINT to actively monitor global threats, data breaches, and infosec trends. I am passionate about system hardening, zero-trust architectures, and ethical hacking.</p>
        </div>
        <div className="card">
          <Coffee className="lucide-icon" style={{ color: 'var(--accent-color)', marginBottom: '1rem' }} />
          <h3>Continuous Learning</h3>
          <p>An avid reader of technical papers and blogs, focusing on Go, Rust, LLMOps, Agentic AI, Big Data systems, GPU-accelerated inferencing, and distributed observability.</p>
        </div>
      </div>
    </div>
  );
}

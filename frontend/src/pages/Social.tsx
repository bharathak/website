import { useState } from 'react';
import { Send } from 'lucide-react';
import API_BASE_URL from '../config';

export default function Social() {
  const [status, setStatus] = useState<string | null>(null);

  const socialLinks = [
    { name: 'GitHub', img: 'https://via.placeholder.com/60/181717/FFFFFF?text=GH', url: 'https://github.com' },
    { name: 'LinkedIn', img: 'https://via.placeholder.com/60/0077B5/FFFFFF?text=IN', url: 'https://linkedin.com' },
    { name: 'X (Twitter)', img: 'https://via.placeholder.com/60/000000/FFFFFF?text=X', url: 'https://twitter.com' },
    { name: 'Instagram', img: 'https://via.placeholder.com/60/E4405F/FFFFFF?text=IG', url: 'https://instagram.com' },
    { name: 'Discord', img: 'https://via.placeholder.com/60/5865F2/FFFFFF?text=DS', url: 'https://discord.com' },
    { name: 'YouTube', img: 'https://via.placeholder.com/60/FF0000/FFFFFF?text=YT', url: 'https://youtube.com' }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        setStatus(result.message);
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Failed to connect to the server.");
    }
  };

  return (
    <div className="fade-in">
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1>Connect With Me</h1>
        <p style={{ color: '#94a3b8' }}>Follow my work or drop a direct message.</p>
      </section>

      {/* Compact Social Rows */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '1rem', 
        marginBottom: '4rem',
        justifyContent: 'center'
      }}>
        {socialLinks.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="card" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
            textDecoration: 'none'
          }}>
            <img 
              src={social.img} 
              alt={social.name} 
              style={{ width: '40px', height: '40px', borderRadius: '0.5rem', marginBottom: '0.75rem' }} 
            />
            <span style={{ color: 'var(--text-color)', fontSize: '0.875rem', fontWeight: '500' }}>{social.name}</span>
          </a>
        ))}
      </div>

      {/* Direct Contact Form */}
      <section style={{ maxWidth: '600px', margin: '0 auto', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="How can I help?" rows={4} required></textarea>
          <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Send size={18} /> Send Message
          </button>
        </form>

        {status && (
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            background: 'var(--card-bg)', 
            border: '1px solid var(--accent-color)',
            borderRadius: '0.5rem',
            textAlign: 'center'
          }}>
            {status}
          </div>
        )}
      </section>
    </div>
  );
}

import { useState, useEffect } from 'react';
import API_BASE_URL from '../config';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blog`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch blog posts", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section style={{ marginBottom: '3rem' }}>
        <h1>Blog & Articles</h1>
        <p style={{ color: '#94a3b8' }}>Thoughts on systems architecture, Go development, and enterprise IT.</p>
      </section>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {posts.map(post => (
            <article key={post.id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--accent-color)' }}>{post.date}</span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>{post.title}</h2>
              <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>{post.excerpt}</p>
              <a href="#" style={{ fontWeight: '500' }}>Read More &rarr;</a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

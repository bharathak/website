import { Terminal, Shield, Server, Cpu, Database, Activity, Award, ExternalLink, Cloud, Brain, Layers, GitBranch, Code, ShieldCheck, GraduationCap } from 'lucide-react';

export default function Work() {
  const heroCards = [
    {
      title: "Enterprise Architect",
      description: "10+ years of experience architecting scalable, cost-effective cloud solutions with a focus on high availability, disaster recovery, and security.",
      icon: <GitBranch size={24} />
    },
    {
      title: "Systems Developer",
      description: "Designing and implementing performant RESTful APIs and microservices using Go, Rust, and Python, leveraging concurrency and modern frameworks.",
      icon: <Code size={24} />
    },
    {
      title: "Cloud Engineering",
      description: "Expertise in deploying and optimizing resources across AWS, Azure, and GCP, migrating legacy systems to modern, cloud-native architectures.",
      icon: <Cloud size={24} />
    },
    {
      title: "Platform",
      description: "Automating infrastructure and application lifecycles with OpenTofu/Terraform and GitLab CI, managing K8s clusters on bare-metal and VMs.",
      icon: <Layers size={24} />
    },
    {
      title: "AI & Data Infrastructure",
      description: "Administering Databricks platforms and architecting GPU-accelerated Kubernetes clusters for high-performance Spark and ML workloads.",
      icon: <Brain size={24} />
    },
    {
      title: "Cybersecurity",
      description: "Hardening enterprise platforms to meet RMF and FedRAMP standards, implementing robust defenses against common web vulnerabilities.",
      icon: <ShieldCheck size={24} />
    }
  ];

  const experienceSections = [
    {
      area: "Systems Development, Engineering & Operations",
      responsibilities: [
        "Design and maintain high-quality, scalable backend APIs and microservices in Golang and Rust with high test coverage.",
        "Engineered CLI binaries to automate routine and complex system tasks, reducing operational toil for engineering teams.",
        "Managed large-scale, high-availability clusters and complex infrastructure, ensuring 99.9% uptime for critical workloads.",
        "Implemented automated SRE practices, including self-healing systems, comprehensive health checks, and robust disaster recovery."
      ]
    },
    {
      area: "AI & Big Data Infrastructure",
      responsibilities: [
        "Infrastructure setup, software installation, and administration for Hortonworks (HDP/HDF) and Cloudera (CDH) distributions.",
        "Responsible for provisioning and configuring Databricks platforms (clusters & workspaces) on AWS for enterprise data engineering.",
        "Architected bare-metal Kubernetes clusters with NVIDIA/AMD GPU support to optimize Spark-on-GPU workloads.",
        "Implemented real-time telemetry and monitoring for GPU metrics via DCGM, Prometheus, and specialized ROCm tools.",
        "Led Hadoop-to-Cloud migrations, transitioning on-prem data warehouses to AWS EMR and HDP clusters."
      ]
    },
    {
      area: "Cloud & Platform Automation",
      responsibilities: [
        "Developed custom OpenTofu/Terraform modules and GitLab CI templates to automate immutable and ephemeral cloud services.",
        "Automated Kubernetes resource provisioning through Go-based RESTful APIs, reducing developer onboarding time to minutes.",
        "Migrated legacy Red Hat service catalogs to open-source IaC frameworks using Ansible and Terraform.",
        "Engineered automated clustering and load balancing (F5/NGINX) for high-traffic middleware components like JBoss and WildFly."
      ]
    },
    {
      area: "Security & Compliance Engineering",
      responsibilities: [
        "Adhered to rigorous federal compliance standards including RMF, FedRAMP, and NIST SP 800 during platform development.",
        "Hardened code against SQL injection, CSRF, XSS, clickjacking, and slow-client attacks through automated security linting.",
        "Integrated LDAP directories (AD, FreeIPA) for centralized identity management and granular RBAC enforcement.",
        "Refined Security Groups, Network ACLs, and VPC policies to ensure a safe and compliant cloud environment."
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Machine Learning Engineer – Associate", issuer: "Amazon Web Services", status: "Expires Feb 21, 2029" },
    { name: "AWS Certified CloudOps Engineer – Associate", issuer: "Amazon Web Services", status: "Expires Oct 13, 2028" },
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", status: "Expires Sep 6, 2028" },
    { name: "HashiCorp Certified: Terraform Associate (003)", issuer: "HashiCorp", status: "Expires Aug 9, 2027" },
    { name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", status: "Issued Oct 31, 2025 (Active)" },
    { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", status: "Issued Apr 13, 2021 (Active)" },
    { name: "CompTIA Security+ ce Certification", issuer: "CompTIA", status: "Expired Jul 30, 2025" },
    { name: "CKAD: Certified Kubernetes Application Developer", issuer: "The Linux Foundation", status: "Expired Dec 22, 2024" },
    { name: "CKA: Certified Kubernetes Administrator", issuer: "The Linux Foundation", status: "Expired Jun 13, 2024" },
    { name: "AWS Certified SysOps Administrator – Associate", issuer: "Amazon Web Services", status: "Expired May 1, 2024" },
    { name: "Microsoft Certified: Azure Administrator Associate", issuer: "Microsoft", status: "Expired Apr 23, 2023" }
  ];

  const expertise = [
    { category: "Systems Development", items: "Go (Golang), Rust, Python, Distributed Systems, Microservices, OCI Containers", icon: <Cpu size={18} /> },
    { category: "AI & Data Infra", items: "Databricks, GPU Orchestration (NVIDIA K8s), RAG Pipelines, Spark", icon: <Database size={18} /> },
    { category: "Cloud & Orchestration", items: "Kubernetes (EKS/AKS), OpenTofu, Terraform, Helm, GitLab CI/CD", icon: <Server size={18} /> },
    { category: "Platform Security", items: "NIST 800, FedRAMP, RBAC (Ranger/Knox), Identity Management", icon: <Shield size={18} /> },
    { category: "Observability", items: "Prometheus, Grafana, OpenTelemetry, Real-time Telemetry", icon: <Activity size={18} /> }
  ];

  return (
    <div className="fade-in">
      <section style={{ marginBottom: '4rem' }}>
        <h1>Professional Work</h1>
        <div style={{ color: '#94a3b8', maxWidth: '850px' }}>
          <p>
            Architect and Systems Developer with 10+ years of expertise in distributed systems, AI infrastructure, and high-concurrency backend engineering, 
            specializing in building production-grade Go and Rust platforms that power GenAI and Agentic AI at scale. I am an expert in replacing manual 
            operations with immutable, cloud-native code—consistently reducing system provisioning time and maintaining high-availability for 
            mission-critical workloads while leveraging the power of Generative AI to solve complex IT problems and automate enterprise-scale operations.
          </p>
        </div>
      </section>

      {/* 2x3 Hero Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
        {heroCards.map((card, index) => (
          <div key={index} className="card">
            <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{card.icon}</div>
            <h3 style={{ marginBottom: '0.75rem' }}>{card.title}</h3>
            <p style={{ fontSize: '0.9375rem', color: '#94a3b8' }}>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Experience Areas */}
      <section style={{ marginTop: '4rem' }}>
        <h2>Professional Expertise Areas</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
          {experienceSections.map((section, idx) => (
            <div key={idx}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                {section.area}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {section.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} style={{ display: 'flex', gap: '1rem', color: '#94a3b8', fontSize: '0.9375rem' }}>
                    <span style={{ color: 'var(--accent-color)' }}>▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Expertise */}
      <section style={{ marginTop: '4rem' }}>
        <h2>Technical Skill Matrix</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {expertise.map(skill => (
            <div key={skill.category} style={{ background: 'var(--card-bg)', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ color: 'var(--accent-color)' }}>{skill.icon}</div>
                <h4 style={{ color: 'var(--text-color)' }}>{skill.category}</h4>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section style={{ marginTop: '4rem' }}>
        <h2>Education</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <GraduationCap size={32} color="var(--accent-color)" />
            <div>
              <h4 style={{ color: 'var(--text-color)' }}>MS, Computer Science</h4>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Texas A&M University-Kingsville, USA • Dec, 2015</p>
            </div>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid var(--border-color)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <GraduationCap size={32} color="var(--accent-color)" />
            <div>
              <h4 style={{ color: 'var(--text-color)' }}>B.Tech, Computer Science & Engineering</h4>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>JNTU, Hyderabad, India • June, 2013</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>Certifications</h2>
          <a href="https://www.credly.com/users/bharathak/badges" target="_blank" rel="noopener noreferrer" 
             style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            Verify on Credly <ExternalLink size={14} />
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {certifications.map((cert, index) => {
            const isExpired = cert.status.includes('Expired');
            return (
              <div key={index} style={{ 
                background: 'var(--card-bg)', 
                padding: '1.25rem', 
                borderRadius: '0.5rem', 
                border: '1px solid var(--border-color)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                opacity: isExpired ? 0.6 : 1,
                filter: isExpired ? 'grayscale(0.5)' : 'none'
              }}>
                <Award size={24} color={isExpired ? '#64748b' : 'var(--accent-color)'} />
                <div>
                  <h4 style={{ fontSize: '0.9375rem', color: 'var(--text-color)' }}>{cert.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{cert.issuer} • {cert.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

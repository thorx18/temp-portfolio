'use client';

import { Github, Linkedin, Mail, ArrowUpRight, Code2, Cloud, Zap, Award, Rocket, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const floatingVariants = {
  animate: {
    y: [0, -30, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Counter component
function Counter({ target, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        const increment = target / (duration * 60);
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, 1000 / 60);
      }}
    >
      {count}
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gradient-to-br from-primary via-accent to-primary opacity-20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 90, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-96 -left-96 w-[600px] h-[600px] bg-gradient-to-tr from-accent via-primary to-accent opacity-15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            rotate: [360, 180, 90, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-gradient-to-b from-primary/30 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.2, 0.4, 0.1, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Animated grid */}
        <motion.svg className="absolute inset-0 w-full h-full opacity-5" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            animate={{ y: ['0px', '50px'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </motion.svg>
      </div>

      {/* Premium Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-background/40 backdrop-blur-2xl border-b border-primary/10 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SM
          </motion.div>
          <div className="hidden md:flex gap-12 text-sm font-semibold">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-foreground/70 hover:text-primary transition group"
                whileHover={{ y: -3 }}
              >
                {item}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Epic Hero Section */}
      <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold border border-primary/30 inline-flex items-center gap-2"
                animate={{ borderColor: ['oklch(0.75 0.23 290 / 0.3)', 'oklch(0.75 0.23 290 / 0.8)', 'oklch(0.75 0.23 290 / 0.3)'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket size={16} /> Innovating Infrastructure
              </motion.span>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-7xl md:text-8xl font-black leading-tight bg-gradient-to-r from-foreground via-primary via-70% to-accent bg-clip-text text-transparent"
                whileInView={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Shubham Mali
              </motion.h1>
            </motion.div>

            <motion.p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text" variants={itemVariants}>
              DevOps Engineer & Cloud Architect
            </motion.p>

            <motion.p className="text-lg text-muted-foreground leading-relaxed max-w-lg" variants={itemVariants}>
              Building production-grade infrastructure with AWS, Kubernetes, and CI/CD pipelines. Passionate about automating deployment workflows and securing cloud-native applications at scale.
            </motion.p>

            <motion.div className="flex gap-4 flex-wrap" variants={itemVariants}>
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-lg flex items-center gap-2 group overflow-hidden relative"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(117, 0, 190, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects <ArrowUpRight size={20} className="group-hover:rotate-45 transition" />
              </motion.a>
              <motion.a
                href="https://github.com/shubhamx18"
                target="_blank"
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Visualization */}
          <motion.div
            className="relative h-[500px] hidden lg:block"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateX: [0, 10, -10, 0], rotateY: [0, -5, 5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* 3D Box */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl border-2 border-primary/40 backdrop-blur-xl"
                animate={{ boxShadow: ['0 0 40px rgba(117, 0, 190, 0.2)', '0 0 80px rgba(200, 150, 0, 0.4)', '0 0 40px rgba(117, 0, 190, 0.2)'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Floating elements */}
              <motion.div className="absolute inset-0 flex items-center justify-center" variants={floatingVariants} animate="animate">
                <motion.div className="text-6xl font-black text-primary/50">
                  ☁️
                </motion.div>
              </motion.div>

              {/* Corner badges */}
              {['AWS', 'K8s', 'CI/CD', 'DevOps'].map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="absolute bg-card/60 backdrop-blur-lg border border-border/50 rounded-lg px-4 py-2 text-sm font-bold text-primary"
                  style={{
                    top: ['10%', '10%', '80%', '80%'][idx],
                    left: ['10%', '80%', '10%', '80%'][idx],
                  }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3 + idx * 0.5, repeat: Infinity, delay: idx * 0.2 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects Built', value: 50, icon: Rocket },
            { label: 'Infrastructure Deployed', value: 100, icon: Cloud },
            { label: 'Years Experience', value: 2, icon: Award },
            { label: 'Success Rate', value: 99, suffix: '%', icon: Target }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-card/60 to-card/30 border border-primary/20 backdrop-blur-lg rounded-2xl p-8 text-center"
                whileHover={{ y: -10, borderColor: 'oklch(0.75 0.23 290 / 0.6)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                  <Icon className="text-primary mx-auto mb-4" size={32} />
                </motion.div>
                <motion.div className="text-4xl font-black text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  <Counter target={stat.value} />
                  {stat.suffix}
                </motion.div>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-6xl font-black mb-16 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
              {['Computer Engineering student with passion for cloud infrastructure and DevOps. During my internship at Arrow Technologies, I provisioned AWS infrastructure, hardened security policies, and deployed production applications independently.',
                'My expertise spans containerization, orchestration, CI/CD automation, and infrastructure-as-code. I build production-grade systems that handle real-world complexity and prioritize security, scalability, and reliability.',
                'Committed to continuous learning and staying at the cutting edge of cloud technologies.'].map((text, idx) => (
                <motion.p
                  key={idx}
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-primary/20 via-accent/10 to-card/40 border border-primary/30 backdrop-blur-xl rounded-2xl p-8"
              variants={itemVariants}
              whileHover={{ borderColor: 'oklch(0.75 0.23 290 / 0.6)', scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Quick Facts</h3>
              <ul className="space-y-4 text-sm">
                {[
                  { emoji: '📍', text: 'Jalgaon, Maharashtra' },
                  { emoji: '🎓', text: 'B.E. Computer Eng. (2026)' },
                  { emoji: '☁️', text: 'Arrow Tech Cloud Intern' },
                  { emoji: '📚', text: 'ML Specialization - DeepLearning.AI' }
                ].map((item, i) => (
                  <motion.li key={i} className="flex gap-3" whileHover={{ x: 8, color: 'oklch(0.75 0.23 290)' }}>
                    <span>{item.emoji}</span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-6xl font-black mb-16 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'FlowBoard',
                subtitle: 'Production-Ready DevOps Platform',
                desc: 'Three-tier containerized application with end-to-end CI/CD, Kubernetes deployment via EKS, security scanning with Trivy, and Prometheus + Grafana observability.',
                tags: ['Kubernetes', 'Docker', 'Jenkins', 'ArgoCD', 'AWS'],
                icon: Cloud,
              },
              {
                title: 'NimbusDeploy',
                subtitle: 'Cloud-Native Static Site Delivery',
                desc: 'AWS infrastructure-as-code with Terraform. S3 + CloudFront CDN deployment with HTTPS/SSL and automated CI/CD via GitHub Actions with IAM least-privilege.',
                tags: ['AWS S3', 'CloudFront', 'Terraform', 'GitHub Actions'],
                icon: Zap,
              },
              {
                title: 'TourStack',
                subtitle: 'Hotel Management Platform',
                desc: 'Full-stack system with multi-role access control, real-time room booking, availability tracking, and admin dashboard for inventory and reservations.',
                tags: ['PHP', 'MySQL', 'JavaScript'],
                icon: Code2,
              },
            ].map((project, idx) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={idx}
                  className="group relative bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-lg rounded-2xl overflow-hidden"
                  variants={itemVariants}
                  whileHover={{ y: -8, borderColor: 'oklch(0.75 0.23 290 / 0.6)' }}
                >
                  {/* Animated gradient border */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  />

                  <div className="relative p-8">
                    <motion.div
                      className="mb-6 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <Icon size={32} className="text-primary" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium"
                          whileHover={{ scale: 1.1, backgroundColor: 'oklch(0.75 0.23 290 / 0.4)' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      className="inline-flex items-center gap-2 text-primary font-bold group/btn"
                      whileHover={{ x: 8 }}
                    >
                      View Project <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-6xl font-black mb-16 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Cloud & Infrastructure',
                icon: Cloud,
                skills: ['AWS (EC2, EKS, S3, IAM, CloudFront)', 'VPC & Security Configuration', 'AWS Session Manager', 'Linux Deployment']
              },
              {
                title: 'Containers & Orchestration',
                icon: Code2,
                skills: ['Docker (Multi-stage builds)', 'Kubernetes (EKS, Kind, Minikube)', 'Deployments & Services', 'Persistent Volumes']
              },
              {
                title: 'CI/CD & DevOps',
                icon: Zap,
                skills: ['Jenkins Declarative Pipelines', 'GitHub Actions', 'ArgoCD GitOps', 'SonarQube & Trivy']
              },
              {
                title: 'Infrastructure as Code',
                icon: Target,
                skills: ['Terraform AWS Provisioning', 'State Management', 'Modular Design', 'IaC Best Practices']
              },
              {
                title: 'Monitoring & Security',
                icon: Award,
                skills: ['Prometheus Metrics', 'Grafana Dashboards', 'OWASP Top 10', 'JWT & CORS Security']
              },
              {
                title: 'Programming Languages',
                icon: Code2,
                skills: ['Python, C, C++, Java', 'JavaScript, TypeScript', 'PHP, SQL', 'HTML, CSS']
              },
            ].map((skill, idx) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-lg rounded-2xl p-8"
                  variants={itemVariants}
                  whileHover={{ y: -6, borderColor: 'oklch(0.75 0.23 290 / 0.6)', scale: 1.02 }}
                >
                  <motion.div
                    className="mb-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <SkillIcon className="text-primary" size={24} />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-4 text-foreground">{skill.title}</h3>
                  <ul className="space-y-3">
                    {skill.skills.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-2 text-muted-foreground text-sm"
                        whileHover={{ x: 6, color: 'oklch(0.75 0.23 290)' }}
                      >
                        <span className="text-primary font-bold flex-shrink-0">▸</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-6xl font-black mb-16 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Experience & Education
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                type: 'experience',
                title: 'Cloud Computing Intern',
                company: 'Arrow Technologies & Solutions, Nashik',
                period: 'June 2025 - August 2025',
                points: [
                  'Provisioned AWS EC2 instances with IAM roles/policies enforcing least-privilege access',
                  'Hardened infrastructure with Security Groups and AWS Session Manager',
                  'Deployed and troubleshot applications on Linux servers independently'
                ]
              },
              {
                type: 'education',
                title: 'B.E. in Computer Engineering',
                company: 'SSBT College of Engineering & Technology, Jalgaon',
                period: 'June 2022 - May 2026',
                points: ['Machine Learning Specialization by Stanford & DeepLearning.AI']
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-lg rounded-2xl p-8"
                variants={itemVariants}
                whileHover={{ borderColor: 'oklch(0.75 0.23 290 / 0.6)', scale: 1.01 }}
              >
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-primary font-semibold text-lg">{item.company}</p>
                  </div>
                  <motion.span
                    className="text-accent font-semibold bg-accent/20 px-4 py-2 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.period}
                  </motion.span>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 text-muted-foreground"
                      whileHover={{ x: 6 }}
                    >
                      <span className="text-primary font-bold flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 max-w-7xl mx-auto mb-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I'm open to opportunities and interesting conversations. Feel free to reach out!
          </motion.p>

          <motion.div className="flex justify-center gap-6 mb-12 flex-wrap" variants={containerVariants}>
            {[
              { icon: Github, href: 'https://github.com/shubhamx18', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/shubham-mali', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:shubhamx2004s@gmail.com', label: 'Email' }
            ].map((social, idx) => {
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="bg-gradient-to-br from-card/60 to-card/30 border border-border/50 backdrop-blur-lg p-6 rounded-xl group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, y: -8, borderColor: 'oklch(0.75 0.23 290 / 0.6)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
                    <SocialIcon size={32} className="group-hover:text-primary transition" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.a
            href="mailto:shubhamx2004s@gmail.com"
            className="inline-block bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground px-12 py-4 rounded-xl font-bold text-lg group overflow-hidden relative"
            variants={itemVariants}
            whileHover={{ scale: 1.08, boxShadow: '0 0 60px rgba(117, 0, 190, 0.8)' }}
            whileTap={{ scale: 0.92 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Send Me an Email
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition" />
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-border/20 py-12 px-6 bg-gradient-to-t from-card/20 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center text-muted-foreground text-sm mb-6">
            <p>© 2025 Shubham Mali. Built with Next.js, Tailwind CSS & Framer Motion.</p>
          </motion.div>
          <motion.div
            className="flex justify-center gap-4 text-muted-foreground text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition">
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

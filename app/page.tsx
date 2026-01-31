'use client';

import { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Code2, Sparkles, ArrowRight, Menu, X, Briefcase } from 'lucide-react';

type SectionKey = 'accueil' | 'projets' | 'compétences' | 'services' | 'contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const homeRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (section: SectionKey) => {
    const refs: Record<SectionKey, React.RefObject<HTMLElement | null>> = {
      accueil: homeRef,
      projets: projectsRef,
      compétences: skillsRef,
      services: servicesRef,
      contact: contactRef,
    };

    const ref = refs[section];
    if (ref?.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(section);
  };

  // Définir les items de navigation avec "as const" pour aider TypeScript
  const navItems = [
    'Accueil',
    'Projets',
    'Compétences',
    'Services',
    'Contact',
  ] as const;

  const projects = [
    {
      title: "Application SaaS Dashboard",
      description: "Dashboard moderne avec authentification, analytics en temps réel et gestion utilisateurs.",
      tech: ["Next.js 15", "Firebase", "Tailwind CSS", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      link: "https://demo-dashboard.vercel.app",
      github: "https://github.com/username/dashboard",
      stats: { performance: "98", seo: "100", accessibility: "95" }
    },
    {
      title: "Landing Page E-commerce",
      description: "Landing page ultra-performante avec intégration Stripe et animations fluides.",
      tech: ["Next.js", "TypeScript", "Framer Motion", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      link: "https://landing-demo.vercel.app",
      github: "https://github.com/username/landing",
      stats: { performance: "97", seo: "100", accessibility: "98" }
    },
    {
      title: "Blog avec CMS Headless",
      description: "Blog moderne avec Sanity CMS, recherche intégrée et optimisation SEO avancée.",
      tech: ["Next.js", "Sanity", "TypeScript", "RSS"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
      link: "https://blog-demo.vercel.app",
      github: "https://github.com/username/blog",
      stats: { performance: "99", seo: "100", accessibility: "96" }
    }
  ];

  const skills = [
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 80, category: "Languages" },
    { name: "Tailwind CSS", level: 95, category: "Styling" },
    { name: "Firebase", level: 75, category: "Backend" },
    { name: "Supabase", level: 70, category: "Backend" },
    { name: "Sanity CMS", level: 85, category: "CMS" },
    { name: "Framer Motion", level: 80, category: "Animation" },
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Applications Next.js",
      description: "Développement d'applications web modernes, rapides et scalables avec Next.js 15.",
      price: "À partir de 800€"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Landing Pages",
      description: "Pages ultra-performantes optimisées pour la conversion avec score PageSpeed 95+.",
      price: "À partir de 400€"
    },
    {
      icon: <ExternalLink className="w-8 h-8" />,
      title: "Migration & Optimisation",
      description: "Migration vers Next.js et optimisation de performance pour sites existants.",
      price: "À partir de 600€"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Cursor Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => {
              // Conversion safe vers SectionKey
              const sectionKey = item.toLowerCase() as SectionKey;

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionKey)}
                  className="text-slate-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            {navItems.map((item) => {
              const sectionKey = item.toLowerCase() as SectionKey;

              return (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(sectionKey);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium animate-fadeIn">
            ✨ Développeur Next.js Disponible
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent animate-fadeIn delay-100">
            Applications Web
            <br />
            Modernes & Performantes
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto animate-fadeIn delay-200">
            Je développe des sites et applications Next.js ultra-rapides avec un score PageSpeed de <span className="text-indigo-400 font-bold">95+</span> et un SEO optimisé.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-300">
            <button 
              onClick={() => scrollToSection('projets')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Voir mes projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-slate-800 rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Me contacter
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fadeIn delay-400">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">98+</div>
              <div className="text-slate-400 text-sm">PageSpeed Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-slate-400 text-sm">SEO Optimisé</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">&lt;1s</div>
              <div className="text-slate-400 text-sm">Temps Chargement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Projets Récents
            </h2>
            <p className="text-slate-400 text-lg">
              Applications et sites web développés avec Next.js
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-green-500/90 text-white text-xs font-bold px-2 py-1 rounded">
                      {project.stats.performance}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors border border-slate-700"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-6 bg-slate-950/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Compétences Techniques
            </h2>
            <p className="text-slate-400 text-lg">
              Stack moderne pour des applications performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-xs text-slate-500">{skill.category}</span>
                  </div>
                  <span className="text-2xl font-bold text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Également à l&apos;aise avec :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Vercel', 'Git', 'Figma', 'Stripe', 'NextAuth', 'Prisma', 'MongoDB', 'REST APIs'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Services & Tarifs
            </h2>
            <p className="text-slate-400 text-lg">
              Solutions adaptées à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="pt-6 border-t border-slate-800">
                  <p className="text-indigo-400 font-bold text-xl">{service.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-6">
              💼 <span className="text-white font-semibold">TJM : 350-450€</span> pour missions longue durée
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-6 bg-slate-950/50 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Travaillons Ensemble
            </h2>
            <p className="text-slate-400 text-lg">
              Un projet en tête ? Discutons-en !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:arthur.qataria@gmail.com"
              className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-400 text-sm">arthur.qataria@gmail.com</p>
            </a>

            <a 
              href="https://github.com/arthur00-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <Github className="w-8 h-8 mx-auto mb-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-slate-400 text-sm">@arthur00-stack</p>
            </a>

            <a 
              href="https://www.fiverr.com/arthurfresnel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <Briefcase className="w-8 h-8 mx-auto mb-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">Fiverr</h3>
              <p className="text-slate-400 text-sm">@arthurfresnel</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Disponible pour nouveaux projets</h3>
            <p className="text-slate-300 mb-6">
              Je suis actuellement disponible pour des missions freelance et des collaborations à long terme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                ✓ Disponible immédiatement
              </span>
              <span className="px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                ✓ Travail à distance
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                ✓ Support long terme
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2026 Portfolio Next.js - Tous droits réservés</p>
          <p className="text-sm mt-2">Développé avec Next.js, React & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-1000 { animation-delay: 1000ms; }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
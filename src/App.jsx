import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Menu, X } from 'lucide-react';

const INSTAGRAM_URL = 'https://www.instagram.com/pedralbesrd/';
const HERO_PHOTO = './media/post_7.jpg';

const STATS = [
  { num: '3,227', label: 'publicaciones de trayectoria' },
  { num: '73.1K', label: 'seguidores en comunidad' },
  { num: '3', label: 'destinos principales de inversión' },
];

const PROJECTS = [
  {
    code: 'PROYECTO 01',
    title: 'Oceanic · Juan Dolio',
    category: 'Desarrollo Residencial de Playa',
    location: 'Juan Dolio, República Dominicana',
    challenge:
      'Crear un espacio que permita desconectar del ritmo de la ciudad, integrando el mar como parte de la vida cotidiana.',
    solution:
      'Proyecto de apartamentos con amenidades pensadas para el descanso, ubicado en una zona privilegiada de Juan Dolio con acceso directo a la playa.',
    photo: HERO_PHOTO,
    cropClass: 'crop-stone',
    frameLabel: 'PIEDRA CORALINA & HORMIGÓN VISTO · LITORAL SUR',
  },
  {
    code: 'PROYECTO 02',
    title: 'Insignia by Pedralbes',
    category: 'High-Rise Residencial',
    location: 'Avenida Sarasota, Santo Domingo',
    challenge:
      'Desarrollar una propuesta familiar de lujo en una de las zonas más elevadas y exclusivas de la ciudad.',
    solution:
      'Torre de apartamentos de 3 habitaciones con arquitectura de Franc Ortega, diseñada para maximizar la luz natural y las vistas al mar Caribe.',
    photo: HERO_PHOTO,
    cropClass: 'crop-structure',
    frameLabel: 'ESTRUCTURA HIGH-RISE · AVENIDA SARASOTA, LA JULIA',
  },
  {
    code: 'PROYECTO 03',
    title: 'Cassa Juanillo',
    category: 'Residencial de Lujo',
    location: 'Cap Cana, República Dominicana',
    challenge:
      'Construir un refugio rodeado de naturaleza y cercanía al mar en el destino más exclusivo del Caribe.',
    solution:
      'Espacios pensados para el disfrute diario, con un diseño que respeta el entorno natural y ofrece una experiencia de vida premium.',
    photo: HERO_PHOTO,
    cropClass: 'crop-timber',
    frameLabel: 'REVESTIMIENTOS EN MADERA & DETALLE ARQUITECTÓNICO · CAP CANA',
  },
];

const SERVICE = {
  number: '01',
  title: 'Construcción y Ejecución',
  slug: 'construccion-y-ejecucion',
  description:
    'Ejecución de obras civiles con un enfoque riguroso en la técnica, la seguridad y el detalle constructivo, desde los cimientos hasta los acabados finales.',
  challenge:
    'Mucho de lo que hace valioso un edificio queda detrás de sus paredes: en las decisiones técnicas y el oficio de quienes construyen.',
  features: [
    {
      num: '01',
      title: 'Precisión Técnica',
      desc: 'Cuidado exhaustivo en la elección de materiales y procesos de ingeniería.',
      materialNote: 'Hormigón visto · Piedra coralina · Revestimientos técnicos',
      cropClass: 'crop-structure',
    },
    {
      num: '02',
      title: 'Seguridad en Obra',
      desc: 'Protocolos estrictos de prevención y uso de equipos de protección.',
      materialNote: 'Estándares rigurosos de supervisión y prevención en sitio',
      cropClass: 'crop-helmet',
    },
    {
      num: '03',
      title: 'Supervisión de Detalles',
      desc: 'Revisión constante de acabados para asegurar la calidad Pedralbes.',
      materialNote: 'Madera · Terminaciones arquitectónicas de alta gama',
      cropClass: 'crop-timber',
    },
  ],
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Planificación y Criterio',
    desc: 'Selección de materiales e intención arquitectónica desde el primer plano.',
  },
  {
    step: '02',
    title: 'Ejecución y Seguridad',
    desc: 'Construcción rigurosa con supervisión constante en cada etapa de la obra.',
  },
  {
    step: '03',
    title: 'Entrega y Estilo de Vida',
    desc: 'Traspaso de la propiedad y activación de la comunidad a través de SOUL.',
  },
];

const FAQS = [
  {
    q: '¿Qué beneficios tiene comprar en plano con Pedralbes?',
    a: 'Permite obtener un mejor precio de entrada, mayor plusvalía al finalizar la obra y planes de pago personalizados durante la construcción.',
  },
  {
    q: '¿Sus proyectos cuentan con respaldo legal?',
    a: 'Sí, todos nuestros proyectos se desarrollan bajo la figura del fideicomiso, lo que garantiza que los fondos se utilicen exclusivamente para la ejecución de la obra.',
  },
  {
    q: '¿Dónde están ubicados sus proyectos actuales?',
    a: 'Contamos con desarrollos activos en Santo Domingo (La Julia), Juan Dolio y Cap Cana.',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = ['Todos', 'Santo Domingo', 'Juan Dolio', 'Cap Cana'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'Todos') return true;
    return project.location.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const activeFeature = SERVICE.features[activeFeatureIndex] || SERVICE.features[0];

  return (
    <div className="site-wrapper">
      {/* NAVBAR FIJO */}
      <header className="site-navbar">
        <div className="arch-container navbar-inner">
          <a href="#portada" className="brand-mark">
            <span className="brand-name">Constructora Pedralbes</span>
            <span className="brand-sub">Desarrollo Inmobiliario &amp; Construcción</span>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#estudio" className="nav-link">
              El Estudio
            </a>
            <a href="#obras" className="nav-link">
              Obras Destacadas
            </a>
            <a href="#construccion" className="nav-link">
              Ejecución Técnica
            </a>
            <a href="#proceso" className="nav-link">
              Fideicomiso &amp; Proceso
            </a>
          </nav>

          <div className="nav-cta-desktop">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Consultar en Instagram</span>
              <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar menú de navegación"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#estudio"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                El Estudio
              </a>
              <a
                href="#obras"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Obras Destacadas
              </a>
              <a
                href="#construccion"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ejecución Técnica
              </a>
              <a
                href="#proceso"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fideicomiso &amp; Proceso
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: 'fit-content' }}
              >
                <span>Instagram Oficial @pedralbesrd</span>
                <ArrowUpRight size={15} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* SECCIÓN 1: HERO ASIMÉTRICO & FICHA TÉCNICA */}
        <section id="portada" className="hero-section">
          <div className="arch-container hero-top-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="hero-headline">
                CREAMOS EL FUTURO QUE <em>tú vives</em>
              </h1>
              <p className="hero-lead">
                Desarrollamos proyectos inmobiliarios de alto nivel en Santo Domingo,
                Juan Dolio y Cap Cana, respaldados por la excelencia constructiva y el
                modelo de fideicomiso.
              </p>
              <div className="hero-actions">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Contactar a @pedralbesrd</span>
                  <ArrowUpRight size={16} />
                </a>
                <a href="#obras" className="btn-outline">
                  <span>Ver Proyectos Activos</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual-column"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-frame">
                <img
                  src={HERO_PHOTO}
                  alt="Constructora Pedralbes — Materiales, estructura en hormigón visto, madera y seguridad en obra"
                  className="crop-full"
                />
              </div>
              <div className="hero-frame-caption mono-coord">
                <span>MUESTRARIO CONSTRUCTIVO &amp; OBRA</span>
                <span>SANTO DOMINGO · JUAN DOLIO · CAP CANA</span>
              </div>
            </motion.div>
          </div>

          <div className="hero-datasheet">
            <div className="arch-container datasheet-grid">
              <div className="datasheet-cell">
                <span className="datasheet-label">01 / FIRMA</span>
                <span className="datasheet-value">
                  Constructora Pedralbes · Dirección de Proyectos
                </span>
              </div>
              <div className="datasheet-cell">
                <span className="datasheet-label">02 / SECTORES REALES</span>
                <span className="datasheet-value">
                  Santo Domingo · Juan Dolio · Cap Cana · La Julia · Madrid
                </span>
              </div>
              <div className="datasheet-cell">
                <span className="datasheet-label">03 / MATERIALIDAD</span>
                <span className="datasheet-value">
                  Hormigón visto · Madera · Piedra coralina · Revestimientos técnicos
                </span>
              </div>
              <div className="datasheet-cell">
                <span className="datasheet-label">04 / GARANTÍA PATRIMONIAL</span>
                <span className="datasheet-value">
                  Ejecución bajo Modelo de Fideicomiso &amp; Plataforma SOUL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: MANIFIESTO DEL ESTUDIO & CIFRAS VERIFICADAS */}
        <section id="estudio" className="manifesto-section">
          <div className="arch-container manifesto-layout">
            <div className="manifesto-sidebar">
              <div className="mono-coord" style={{ color: 'var(--gold-accent)' }}>
                EL ARTE DE LA CONSTRUCCIÓN
              </div>
              <div className="manifesto-visual-box">
                <img
                  src={HERO_PHOTO}
                  alt="Detalle de seguridad e ingeniería en obra Pedralbes"
                  className="crop-helmet"
                  loading="lazy"
                />
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-light-muted)',
                  lineHeight: 1.6,
                }}
              >
                Dirección de Proyectos · Constructora Pedralbes. Creamos futuro, tú lo
                vives.
              </p>
            </div>

            <div>
              <blockquote className="manifesto-quote">
                “Construir es mucho más que levantar estructuras. Es combinar técnica,
                precisión y visión para transformar una idea en un espacio que cobra
                vida.”
              </blockquote>

              <div className="manifesto-narratives">
                <p className="manifesto-text">
                  Constructora Pedralbes es una firma líder en el desarrollo inmobiliario
                  de la República Dominicana, con una presencia consolidada en Santo
                  Domingo, Juan Dolio y Cap Cana. Se especializan en la creación de
                  proyectos residenciales de alta gama, desde torres familiares en
                  sectores exclusivos como La Julia hasta complejos de playa que integran
                  el entorno natural con una arquitectura contemporánea.
                </p>
                <p className="manifesto-text">
                  Su enfoque se centra en &lsquo;El Arte de la Construcción&rsquo;,
                  priorizando la precisión técnica, la elección de materiales de alta
                  calidad y el cumplimiento de estándares de seguridad. A través de su
                  plataforma SOUL, exploran la dimensión humana de sus obras, integrando
                  diseño, bienestar y comunidad en cada espacio que ejecutan bajo el
                  modelo de fideicomiso.
                </p>
              </div>

              <div className="stats-strip">
                {STATS.map((stat) => (
                  <div key={stat.label} className="stat-item">
                    <div className="stat-number">{stat.num}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: OBRAS Y PROYECTOS DESTACADOS */}
        <section id="obras" className="projects-section">
          <div className="arch-container">
            <div className="section-header-split">
              <div>
                <h2 className="section-title">Desarrollos &amp; Obras Destacadas</h2>
              </div>

              <div className="project-filter-bar" role="tablist" aria-label="Filtrar por ubicación">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-stack">
              {filteredProjects.map((project, idx) => (
                <motion.article
                  key={project.code}
                  className={`project-row ${idx % 2 === 1 ? 'reverse' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="project-media-wrap">
                    <img
                      src={project.photo}
                      alt={`${project.title} — ${project.location}`}
                      className={project.cropClass}
                      loading="lazy"
                    />
                  </div>

                  <div className="project-info-wrap">
                    <div>
                      <div className="project-meta-top mono-coord">
                        <span>{project.code}</span>
                        <span>{project.category}</span>
                      </div>

                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-location">{project.location}</div>

                      <div className="project-spec-list">
                        <div className="project-spec-item">
                          <div className="project-spec-label">DESAFÍO ARQUITECTÓNICO</div>
                          <p className="project-spec-desc">{project.challenge}</p>
                        </div>
                        <div className="project-spec-item">
                          <div className="project-spec-label">SOLUCIÓN EJECUTIVA</div>
                          <p className="project-spec-desc">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '1.25rem',
                        borderTop: '1px solid var(--hairline-light)',
                        gap: '1rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span className="mono-coord" style={{ color: 'var(--text-muted)' }}>
                        {project.frameLabel}
                      </span>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        <span>Solicitar Disponibilidad</span>
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: SERVICIOS REALES & EJECUCIÓN DE OBRA (VISTA DE DETALLE INTERACTIVA) */}
        <section id="construccion" className="services-section">
          <div className="arch-container service-editorial-grid">
            <div className="service-sticky-panel">
              <div className="mono-coord" style={{ color: 'var(--accent)' }}>
                {SERVICE.number} / ESPECIALIDAD CENTRAL
              </div>
              <h2 className="section-title">{SERVICE.title}</h2>
              <p
                style={{
                  fontSize: '1.08rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                }}
              >
                {SERVICE.description}
              </p>

              <div className="service-challenge-box">
                <p className="service-challenge-quote">“{SERVICE.challenge}”</p>
              </div>

              <div>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Conocer más en @pedralbesrd</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div>
              <div className="service-features-index">
                {SERVICE.features.map((feat, idx) => {
                  const isActive = activeFeatureIndex === idx;
                  return (
                    <div key={feat.num} className="service-feature-row">
                      <button
                        type="button"
                        className="service-feature-trigger"
                        onClick={() => setActiveFeatureIndex(idx)}
                        aria-expanded={isActive}
                      >
                        <span className="service-feature-num">{feat.num}</span>
                        <span className="service-feature-title">{feat.title}</span>
                        <span style={{ color: 'var(--accent)' }}>
                          {isActive ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            className="service-feature-body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <p className="service-feature-desc">{feat.desc}</p>
                            <span
                              className="mono-coord"
                              style={{ color: 'var(--accent)' }}
                            >
                              {feat.materialNote}
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="service-preview-stage">
                <div className="service-preview-img">
                  <img
                    src={HERO_PHOTO}
                    alt={activeFeature.title}
                    className={activeFeature.cropClass}
                    loading="lazy"
                  />
                </div>
                <div>
                  <div
                    className="mono-coord"
                    style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}
                  >
                    DETALLE TÉCNICO {activeFeature.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                    }}
                  >
                    {activeFeature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {activeFeature.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: METODOLOGÍA, PROCESO & PREGUNTAS FRECUENTES */}
        <section id="proceso" className="process-section">
          <div className="arch-container">
            <div className="section-header-split">
              <h2 className="section-title">Metodología &amp; Rigor Constructivo</h2>
              <span className="mono-coord" style={{ color: 'var(--text-muted)' }}>
                MODELO DE FIDEICOMISO · PLATAFORMA SOUL
              </span>
            </div>

            <div className="process-timeline-grid">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step} className="process-step-col">
                  <div className="process-step-num">{item.step}</div>
                  <div>
                    <h3 className="process-step-title">{item.title}</h3>
                    <p className="process-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="faq-split-layout">
              <div>
                <div
                  className="mono-coord"
                  style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}
                >
                  RESPALDO &amp; INVERSIÓN
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                    fontWeight: 500,
                    lineHeight: 1.08,
                    marginBottom: '1.25rem',
                  }}
                >
                  Preguntas Frecuentes sobre Inversión en Plano
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem',
                  }}
                >
                  Todos nuestros desarrollos en Santo Domingo, Juan Dolio y Cap Cana se
                  ejecutan bajo estructura fiduciaria para garantizar transparencia y
                  solidez patrimonial.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <span>Escribir a Constructora Pedralbes</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <div className="faq-list">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={faq.q} className="faq-item">
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            <p className="faq-answer">{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SECCIÓN 6 / FOOTER MONOLÍTICO DE CONVERSIÓN DIRECTA */}
      <footer className="monolith-footer">
        <div className="arch-container">
          <div className="footer-cta-split">
            <div>
              <h2 className="footer-headline">Creamos futuro, tú lo vives.</h2>
              <p className="footer-sub">
                Conecta directamente con Dirección de Proyectos de Constructora Pedralbes
                a través de nuestro canal oficial para conocer disponibilidad en Santo
                Domingo, Juan Dolio y Cap Cana.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <span>Instagram Oficial @pedralbesrd</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="footer-meta-columns">
            <div>
              <div className="footer-col-title">UBICACIONES &amp; SECTORES</div>
              <ul className="footer-col-list">
                <li>Santo Domingo · Avenida Sarasota, La Julia</li>
                <li>Juan Dolio · República Dominicana</li>
                <li>Cap Cana · República Dominicana</li>
                <li>Madrid</li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">OBRAS REPRESENTATIVAS</div>
              <ul className="footer-col-list">
                <li>
                  <a href="#obras">Oceanic · Juan Dolio</a>
                </li>
                <li>
                  <a href="#obras">Insignia by Pedralbes · Santo Domingo</a>
                </li>
                <li>
                  <a href="#obras">Cassa Juanillo · Cap Cana</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">CANAL OFICIAL VERIFICADO</div>
              <ul className="footer-col-list">
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    instagram.com/pedralbesrd
                  </a>
                </li>
                <li>Dirección de Proyectos · Constructora Pedralbes</li>
                <li>Desarrollo Inmobiliario y Construcción</li>
              </ul>
            </div>
          </div>

          <div className="mega-wordmark">PEDRALBES</div>

          <div className="footer-bottom-bar">
            <span>
              © {new Date().getFullYear()} Constructora Pedralbes. Desarrollo Inmobiliario
              y Construcción.
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-coord"
              style={{ color: 'var(--gold-accent)' }}
            >
              @PEDRALBESRD ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

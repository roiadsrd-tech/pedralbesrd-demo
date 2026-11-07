import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Menu, X } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/18094410033?text=Hola%20Constructora%20Pedralbes%2C%20vi%20su%20portafolio%20web%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20proyectos.';
const INSTAGRAM_URL = 'https://www.instagram.com/pedralbesrd/';
const PHONE_HREF = 'tel:+18096889945';
const EMAIL_HREF = 'mailto:info@pedralbes.com.do';

const HERO_SLIDES = [
  {
    photo: './media/web_3.jpg',
    project: 'OCEANIC BY PEDRALBES',
    meta: 'TORRE DE 27 NIVELES FRENTE AL MAR · JUAN DOLIO',
  },
  {
    photo: './media/web_4.jpg',
    project: 'INSIGNIA BY PEDRALBES',
    meta: 'ARQ. FRANC ORTEGA · LA JULIA, SANTO DOMINGO',
  },
  {
    photo: './media/web_7.jpg',
    project: 'CASSA JUANILLO',
    meta: '87 RESIDENCIAS DE ULTRA LUJO · CAP CANA',
  },
  {
    photo: './media/web_5.jpg',
    project: 'PARC 131 BY PEDRALBES',
    meta: 'FRENTE AL PARQUE IBEROAMERICANO · LA ESPERILLA',
  },
];

const STATS = [
  { num: '27', label: 'niveles frente al mar en Oceanic Juan Dolio' },
  { num: '+18', label: 'torres y residenciales entregados con éxito' },
  { num: '8,000 m²', label: 'de áreas sociales frente a la playa' },
  { num: '73.1K', label: 'comunidad inmobiliaria verificada' },
];

const PROJECTS = [
  {
    code: 'PROYECTO 01',
    title: 'Oceanic by Pedralbes',
    category: 'Beachfront High-Rise · 27 Niveles',
    location: 'Calle Camino de la Playa, Juan Dolio',
    challenge:
      'Crear el complejo residencial frente al mar más lujoso y completo a solo 40 minutos de la ciudad de Santo Domingo.',
    solution:
      'Majestuosa torre de 27 niveles en primera línea de playa con más de 8,000 m² de áreas sociales en los niveles 1 y 6, acceso directo a la playa y penthouses panorámicos en los pisos 26 y 27.',
    photo: './media/web_10.jpg',
    gallery: ['./media/web_10.jpg', './media/web_21.jpg', './media/web_22.jpg'],
    frameLabel: 'PRIMERA LÍNEA DE PLAYA · 8,000 M² DE ÁREAS SOCIALES · JUAN DOLIO',
  },
  {
    code: 'PROYECTO 02',
    title: 'Insignia by Pedralbes',
    category: 'High-Rise Familiar · 3 y 4 Habitaciones',
    location: 'Av. Sarasota esq. Calle Los Robles, La Julia, Santo Domingo',
    challenge:
      'Desarrollar un refugio familiar en las alturas próximo a la Av. Winston Churchill que maximice las visuales al Mar Caribe y la luz natural.',
    solution:
      'Torre residencial contemporánea diseñada por el Arq. Franc Ortega con unidades exclusivas de 3 y 4 habitaciones y terrazas panorámicas hacia el mar y la ciudad.',
    photo: './media/web_4.jpg',
    gallery: ['./media/web_4.jpg', './media/web_11.jpg'],
    frameLabel: 'DISEÑO ARQ. FRANC ORTEGA · AVENIDA SARASOTA, LA JULIA',
  },
  {
    code: 'PROYECTO 03',
    title: 'Cassa Juanillo',
    category: 'Ultra Lujo · 87 Residencias',
    location: 'Playa Juanillo, Cap Cana',
    challenge:
      'Construir una propuesta residencial de ultra lujo a pasos de Playa Juanillo dentro del destino turístico más importante de República Dominicana.',
    solution:
      'Conjunto de 87 residencias diseñado por el Arq. Franc Ortega con espejos de agua, piscinas tipo resort y una integración orgánica con el paisaje costero de Cap Cana.',
    photo: './media/web_7.jpg',
    gallery: ['./media/web_7.jpg', './media/web_14.jpg'],
    frameLabel: '87 APARTAMENTOS DE LUJO · PLAYA JUANILLO, CAP CANA',
  },
  {
    code: 'PROYECTO 04',
    title: 'PARC 131 by Pedralbes',
    category: 'Vanguardia Urbana · 2 y 3 Dormitorios',
    location: 'Av. Pedro Henríquez Ureña No. 131, La Esperilla, Santo Domingo',
    challenge:
      'Articular un nuevo concepto de vivienda en las alturas de Santo Domingo donde el Parque Iberoamericano y el mar sean parte de la vida diaria.',
    solution:
      'Torre residencial con terrazas verdes en movimiento, orientación privilegiada y vistas directas al Parque Iberoamericano y al horizonte del Mar Caribe.',
    photo: './media/web_5.jpg',
    gallery: ['./media/web_5.jpg', './media/web_12.jpg'],
    frameLabel: 'FRENTE AL PARQUE IBEROAMERICANO · LA ESPERILLA, SANTO DOMINGO',
  },
  {
    code: 'PROYECTO 05',
    title: 'Canvas by Pedralbes',
    category: 'Refugio Urbano con Parque Central',
    location: 'Calle Paseo del Este, Arroyo Hondo Viejo, Santo Domingo',
    challenge:
      'Concebir un oasis familiar dentro de la ciudad donde la naturaleza y la recreación al aire libre sean el corazón del proyecto.',
    solution:
      'Desarrollo residencial articulado alrededor de un parque central privado diseñado para ejercitarse, caminar y disfrutar de experiencias sensoriales en familia.',
    photo: './media/web_6.jpg',
    gallery: ['./media/web_6.jpg', './media/web_13.jpg'],
    frameLabel: 'PARQUE CENTRAL PRIVADO · ARROYO HONDO VIEJO, SANTO DOMINGO',
  },
  {
    code: 'PROYECTO 06',
    title: 'Mistral by Pedralbes',
    category: 'Torre sobre Farallón · Vistas Perpetuas',
    location: 'Av. Bolívar esq. Amada Nivar de Pittaluga, La Julia, Santo Domingo',
    challenge:
      'Garantizar vistas ininterrumpidas y perpetuas al Mar Caribe y a la ciudad a una esquina de la Av. Abraham Lincoln.',
    solution:
      'Torre emplazada estratégicamente sobre el farallón de La Julia con conectividad inmediata a Downtown Santo Domingo y visuales que nunca podrán ser obstruidas.',
    photo: './media/web_8.jpg',
    gallery: ['./media/web_8.jpg', './media/web_15.jpg'],
    frameLabel: 'FARALLÓN DE LA JULIA · AVENIDA BOLÍVAR, SANTO DOMINGO',
  },
  {
    code: 'PROYECTO 07',
    title: 'Legado Entregado · Cezanne, Gazcue & Serie Onix',
    category: 'Obras Terminadas y 100% Vendidas',
    location: 'Gazcue, Piantini y Arroyo Hondo, Santo Domingo',
    challenge:
      'Consolidar un historial comprobable de entregas puntuales, solidez estructural y alta plusvalía para los propietarios.',
    solution:
      'Más de 18 desarrollos entregados con éxito, incluyendo Torre Cezanne Gazcue, Torre Pedralbes Gazcue, Serie Residencial Onix (I al XVIII), Novoparc y Marina Colonial.',
    photo: './media/web_9.jpg',
    gallery: ['./media/web_9.jpg', './media/web_1.jpg', './media/web_18.jpg'],
    frameLabel: 'TRAYECTORIA COMPROBADA · SANTO DOMINGO',
  },
];

const SERVICE = {
  number: '01',
  title: 'Ingeniería, Promoción y Ejecución Constructiva',
  slug: 'construccion-y-ejecucion',
  description:
    'Grupo Pedralbes integra promoción inmobiliaria, diseño arquitectónico e ingeniería civil, sanitaria y vial bajo un control riguroso de costos, tiempos de ejecución y garantía fiduciaria.',
  challenge:
    'Mucho de lo que hace valioso un edificio queda detrás de sus paredes: en las decisiones técnicas, la estructura y el oficio de quienes construyen.',
  features: [
    {
      num: '01',
      title: 'Arquitectura de Autor & Diseño Estructural',
      desc: 'Colaboración con firmas líderes como el Arq. Franc Ortega para lograr fachadas atemporales, ventilación cruzada y vistas francas al mar.',
      materialNote: 'Hormigón arquitectónico · Cristal laminado · Terrazas panorámicas',
      photo: './media/web_11.jpg',
    },
    {
      num: '02',
      title: 'Rigor en Obra y Seguridad Industrial',
      desc: 'Supervisión técnica continua en sitio, control de calidad de materiales certificados y protocolos estrictos de seguridad en cada etapa constructiva.',
      materialNote: 'Ingeniería civil y sanitaria · Control de calidad en sitio',
      photo: './media/post_7.jpg',
    },
    {
      num: '03',
      title: 'Amenidades tipo Resort & Entrega Post-Venta',
      desc: 'Áreas sociales de gran escala, clubes de playa, parques privados y acompañamiento dedicado al propietario desde la preventa hasta la entrega de llaves.',
      materialNote: 'Terminaciones de primera · Plataforma SOUL · Garantía Pedralbes',
      photo: './media/web_20.jpg',
    },
  ],
};

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Conceptualización & Fideicomiso',
    desc: 'Selección de solares prime en Santo Domingo, Juan Dolio y Cap Cana con estructuración fiduciaria para proteger tu inversión.',
  },
  {
    step: '02',
    title: 'Ingeniería & Ejecución Rigurosa',
    desc: 'Construcción con tecnología avanzada, cumplimiento estricto de cronogramas y supervisión continua de acabados.',
  },
  {
    step: '03',
    title: 'Entrega & Comunidad SOUL',
    desc: 'Acompañamiento post-venta personalizado y entrega de propiedades de alta plusvalía listas para habitar o rentar.',
  },
];

const FAQS = [
  {
    q: '¿Qué beneficios tiene comprar en plano con Constructora Pedralbes?',
    a: 'Permite asegurar las mejores ubicaciones y vistas del proyecto a precios de introducción, logrando una alta plusvalía durante la construcción con planes de pago flexibles.',
  },
  {
    q: '¿Sus proyectos cuentan con respaldo de fideicomiso?',
    a: 'Sí. Nuestros desarrollos cuentan con respaldo fiduciario, garantizando la administración transparente de los recursos destinados a la ejecución de cada obra.',
  },
  {
    q: '¿Dónde están ubicadas las oficinas corporativas de Pedralbes?',
    a: 'Nuestra sede principal está en la Av. Winston Churchill #95, esq. Gustavo Mejía Ricart, Torre Empresarial BlueMall Piso 21 (Locales P21-03 y P21-04), Ensanche Piantini, Santo Domingo.',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [projectPhotoIndex, setProjectPhotoIndex] = useState({});
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = ['Todos', 'Santo Domingo', 'Juan Dolio', 'Cap Cana'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'Todos') return true;
    return project.location.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const activeFeature = SERVICE.features[activeFeatureIndex] || SERVICE.features[0];
  const currentHero = HERO_SLIDES[activeHeroSlide] || HERO_SLIDES[0];

  return (
    <div className="site-wrapper">
      {/* NAVBAR FIJO */}
      <header className="site-navbar">
        <div className="arch-container navbar-inner">
          <a href="#portada" className="brand-mark" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <img
              src="./media/logo_web.png"
              alt="Constructora Pedralbes"
              style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div>
              <span className="brand-name">Constructora Pedralbes</span>
              <span className="brand-sub">Desarrollo Inmobiliario &amp; Construcción</span>
            </div>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#estudio" className="nav-link">
              El Grupo
            </a>
            <a href="#obras" className="nav-link">
              Proyectos ({PROJECTS.length})
            </a>
            <a href="#construccion" className="nav-link">
              Ingeniería &amp; Obra
            </a>
            <a href="#proceso" className="nav-link">
              Fideicomiso &amp; Contacto
            </a>
          </nav>

          <div className="nav-cta-desktop">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Agendar con Ventas</span>
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
                El Grupo
              </a>
              <a
                href="#obras"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos ({PROJECTS.length})
              </a>
              <a
                href="#construccion"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ingeniería &amp; Obra
              </a>
              <a
                href="#proceso"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fideicomiso &amp; Contacto
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: 'fit-content' }}
              >
                <span>WhatsApp Ventas · (809) 441-0033</span>
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
                Promotora y constructora líder de torres residenciales high-rise y
                complejos frente al mar en Santo Domingo, Juan Dolio y Cap Cana con
                respaldo fiduciario.
              </p>
              <div className="hero-actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Conversar con Ventas</span>
                  <ArrowUpRight size={16} />
                </a>
                <a href="#obras" className="btn-outline">
                  <span>Explorar 7 Desarrollos</span>
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
                  src={currentHero.photo}
                  alt={currentHero.project}
                  className="crop-full"
                />
              </div>
              <div className="hero-frame-caption mono-coord">
                <span>{currentHero.project}</span>
                <span>{currentHero.meta}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.project}
                    type="button"
                    onClick={() => setActiveHeroSlide(idx)}
                    style={{
                      padding: 0,
                      border:
                        activeHeroSlide === idx
                          ? '2px solid var(--accent)'
                          : '1px solid var(--hairline-light)',
                      height: '54px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      opacity: activeHeroSlide === idx ? 1 : 0.65,
                      transition: 'all 0.2s ease',
                    }}
                    title={s.project}
                  >
                    <img
                      src={s.photo}
                      alt={s.project}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hero-datasheet">
            <div className="arch-container datasheet-grid">
              <div className="datasheet-cell">
                <span className="datasheet-label">01 / SEDE CORPORATIVA</span>
                <span className="datasheet-value">
                  Torre Empresarial BlueMall Piso 21 · Piantini, Santo Domingo
                </span>
              </div>
              <div className="datasheet-cell">
                <span className="datasheet-label">02 / DESTINOS ACTIVOS</span>
                <span className="datasheet-value">
                  La Julia · La Esperilla · Arroyo Hondo · Juan Dolio · Cap Cana
                </span>
              </div>
              <div className="datasheet-cell">
                <span className="datasheet-label">03 / LÍNEA DIRECTA VENTAS</span>
                <span className="datasheet-value">
                  +1 (809) 688-9945 · WhatsApp (809) 441-0033
                </span>
              </div>
              <div className="datasheet-cell">
                <span className="datasheet-label">04 / GARANTÍA PATRIMONIAL</span>
                <span className="datasheet-value">
                  Proyectos con Fideicomiso &amp; Más de 18 Torres Entregadas
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
                GRUPO PEDRALBES · TRAYECTORIA INSTITUCIONAL
              </div>
              <div className="manifesto-visual-box">
                <img
                  src="./media/web_16.jpg"
                  alt="Perspectiva arquitectónica de Constructora Pedralbes"
                  className="crop-full"
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
                Torre Empresarial BlueMall Piso 21, Locales P21-03 y P21-04 · Av. Winston
                Churchill #95, Santo Domingo.
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
                  Grupo Pedralbes se inicia como un conjunto de empresas
                  constructoras-promotoras de proyectos inmobiliarios, además de brindar
                  servicios de ingeniería y diseño de proyectos civiles, sanitarios y
                  viales. Nuestras empresas poseen los recursos y la tecnología que
                  garantizan un manejo apropiado de los costos, efectividad en los tiempos
                  de ejecución y calidad superior en cada obra.
                </p>
                <p className="manifesto-text">
                  Desde torres familiares high-rise en sectores exclusivos como La Julia y
                  La Esperilla hasta complejos frente al mar en Juan Dolio y Cap Cana,
                  cada desarrollo se concibe junto a firmas de arquitectura de primer
                  nivel como el Arq. Franc Ortega y se ejecuta bajo respaldo fiduciario.
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
                <h2 className="section-title">Portafolio de Proyectos</h2>
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
              {filteredProjects.map((project, idx) => {
                const gallery = project.gallery || [project.photo];
                const activeIdx = projectPhotoIndex[project.code] || 0;
                const activePhoto = gallery[activeIdx] || project.photo;

                return (
                  <motion.article
                    key={project.code}
                    className={`project-row ${idx % 2 === 1 ? 'reverse' : ''}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      <div className="project-media-wrap">
                        <img
                          src={activePhoto}
                          alt={`${project.title} — ${project.location}`}
                          className="crop-full"
                          loading="lazy"
                        />
                      </div>

                      {gallery.length > 1 && (
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          {gallery.map((gUrl, gIdx) => (
                            <button
                              key={gUrl}
                              type="button"
                              onClick={() =>
                                setProjectPhotoIndex((prev) => ({
                                  ...prev,
                                  [project.code]: gIdx,
                                }))
                              }
                              style={{
                                width: '76px',
                                height: '48px',
                                padding: 0,
                                border:
                                  activeIdx === gIdx
                                    ? '2px solid var(--accent)'
                                    : '1px solid var(--hairline-light)',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                opacity: activeIdx === gIdx ? 1 : 0.65,
                              }}
                              aria-label={`Ver vista ${gIdx + 1} de ${project.title}`}
                            >
                              <img
                                src={gUrl}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                              />
                            </button>
                          ))}
                        </div>
                      )}
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
                            <div className="project-spec-label">CONCEPTO Y EMPLAZAMIENTO</div>
                            <p className="project-spec-desc">{project.challenge}</p>
                          </div>
                          <div className="project-spec-item">
                            <div className="project-spec-label">ARQUITECTURA Y PROGRAMA</div>
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
                          href={`${WHATSAPP_URL}%20Me%20interesa%20${encodeURIComponent(project.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline"
                        >
                          <span>Solicitar Brochure y Precios</span>
                          <ArrowUpRight size={15} />
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: SERVICIOS REALES & EJECUCIÓN DE OBRA (VISTA DE DETALLE INTERACTIVA) */}
        <section id="construccion" className="services-section">
          <div className="arch-container service-editorial-grid">
            <div className="service-sticky-panel">
              <div className="mono-coord" style={{ color: 'var(--accent)' }}>
                {SERVICE.number} / CAPACIDAD CONSTRUCTIVA
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
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Agendar Cita en BlueMall Piso 21</span>
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
                    src={activeFeature.photo}
                    alt={activeFeature.title}
                    className="crop-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div
                    className="mono-coord"
                    style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}
                  >
                    ESTÁNDAR PEDRALBES {activeFeature.num}
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
                GARANTÍA FIDUCIARIA · ATENCIÓN AL PROPIETARIO
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
                  Preguntas Frecuentes sobre Inversión Inmobiliaria
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: '1.75rem',
                  }}
                >
                  Nuestro equipo comercial en Torre Empresarial BlueMall Piso 21 te
                  acompaña en la selección de tu unidad en Santo Domingo, Juan Dolio o Cap
                  Cana.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <span>WhatsApp (809) 441-0033</span>
                    <ArrowUpRight size={15} />
                  </a>
                  <a href={PHONE_HREF} className="btn-outline">
                    <span>Llamar +1 (809) 688-9945</span>
                  </a>
                </div>
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
                Visita nuestras oficinas en Torre Empresarial BlueMall Piso 21 o conversa
                directamente con nuestro Departamento de Ventas para recibir disponibilidad
                y planes de pago personalizados.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'flex-start' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <span>WhatsApp Ventas · (809) 441-0033</span>
                <ArrowUpRight size={16} />
              </a>
              <a href={EMAIL_HREF} className="btn-outline" style={{ borderColor: 'rgba(245,241,232,0.3)', color: 'var(--text-light)' }}>
                <span>info@pedralbes.com.do</span>
              </a>
            </div>
          </div>

          <div className="footer-meta-columns">
            <div>
              <div className="footer-col-title">SEDE CORPORATIVA &amp; CONTACTO</div>
              <ul className="footer-col-list">
                <li>Av. Winston Churchill #95, esq. Gustavo Mejía Ricart</li>
                <li>Torre Empresarial BlueMall Piso 21, Locales P21-03 y P21-04</li>
                <li>Oficina: +1 (809) 688-9945 · Ventas: (809) 441-0033 / (849) 410-4691</li>
                <li>info@pedralbes.com.do · servicioalcliente@pedralbes.com.do</li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">PROYECTOS EN VENTA</div>
              <ul className="footer-col-list">
                <li>
                  <a href="#obras">Oceanic by Pedralbes · Juan Dolio</a>
                </li>
                <li>
                  <a href="#obras">Insignia &amp; Mistral · La Julia, Santo Domingo</a>
                </li>
                <li>
                  <a href="#obras">PARC 131 &amp; Icono · La Esperilla, Santo Domingo</a>
                </li>
                <li>
                  <a href="#obras">Canvas · Arroyo Hondo Viejo</a>
                </li>
                <li>
                  <a href="#obras">Cassa Juanillo · Cap Cana</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">CANALES OFICIALES</div>
              <ul className="footer-col-list">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Directo: +1 (809) 441-0033
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: @pedralbesrd
                  </a>
                </li>
                <li>Constructora Pedralbes · R.D.</li>
              </ul>
            </div>
          </div>

          <div className="mega-wordmark">PEDRALBES</div>

          <div className="footer-bottom-bar">
            <span>
              © {new Date().getFullYear()} Constructora Pedralbes. Todos los derechos
              reservados.
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-coord"
              style={{ color: 'var(--gold-accent)' }}
            >
              VENTAS DIRECTAS · (809) 441-0033 ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

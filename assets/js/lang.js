const translations = {
  fr: {
    title: "NAOTEXT",
    subtitle: "Innovation & Excellence en Textile",
    expertise: "Notre Expertise",
    about1: "NAOTEXT est un leader de l'innovation textile, combinant technologie de pointe et savoir-faire artisanal depuis plus de 20 ans.",
    about2: "Nous produisons des tissus de haute qualité pour l'industrie automobile, l'habillement et les applications spécialisées.",
    discover: "Découvrir",
    learn: "En savoir plus",
    solutions: "Nos Solutions",
    solutionsSub: "Technologies avancées pour vos besoins textiles",
    automation: "Automatisation",
    automationText: "Robots industriels dernière génération pour une précision maximale",
    quality: "Qualité Premium",
    qualityText: "Contrôle qualité rigoureux à chaque étape de production",
    performance: "Performance",
    performanceText: "Rendement optimisé et délais respectés",
    process: "Processus de Production",
    processSub: "Du concept à la réalisation",
    stats: "NAOTEXT en Chiffres",
    experience: "Années d'expérience",
    clients: "Clients satisfaits",
    qualityGuarantee: "Qualité garantie",
    collaborate: "Prêt à collaborer ?",
    collaborateSub: "Contactez-nous pour discuter de votre prochain projet",
    contact: "Nous Contacter",
    quote: "Demander un Devis",
    copyright: "&copy; 2024 NAOTEXT. Tous droits réservés.",
    tagline: "Excellence in Textiles"
  },
  en: {
    title: "NAOTEXT",
    subtitle: "Innovation & Excellence in Textiles",
    expertise: "Our Expertise",
    about1: "NAOTEXT is a leader in textile innovation, combining cutting-edge technology and artisanal expertise for over 20 years.",
    about2: "We produce high-quality fabrics for the automotive industry, apparel, and specialized applications.",
    discover: "Discover",
    learn: "Learn More",
    solutions: "Our Solutions",
    solutionsSub: "Advanced technologies for your textile needs",
    automation: "Automation",
    automationText: "Latest generation industrial robots for maximum precision",
    quality: "Premium Quality",
    qualityText: "Rigorous quality control at every production stage",
    performance: "Performance",
    performanceText: "Optimized efficiency and respected deadlines",
    process: "Production Process",
    processSub: "From concept to completion",
    stats: "NAOTEXT by Numbers",
    experience: "Years of Experience",
    clients: "Satisfied Clients",
    qualityGuarantee: "Quality Guaranteed",
    collaborate: "Ready to collaborate?",
    collaborateSub: "Contact us to discuss your next project",
    contact: "Contact Us",
    quote: "Request a Quote",
    copyright: "&copy; 2024 NAOTEXT. All rights reserved.",
    tagline: "Excellence in Textiles"
  }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  document.documentElement.lang = lang;
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

setLanguage(currentLang);

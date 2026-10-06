const translations = {
  fr: {
    title: "NAOTEXT",
    subtitle: "Automatiser la confection",
    expertise: "Notre Objectif",
    about1: "NAOTEXT a pour but de fournir des solutions de couture automatiques, clés en main, pour les ateliers de confections de vêtements.",
    about2: "Nous développons actuellement notre premier modèle capable d'automatiser jusqu'à 30% des étapes de coutures !",
    discover: "Découvrir",
    learn: "En savoir plus",
    solutions: "Nos Solutions",
    solutionsSub: "Ce que nous automatisons",
    automation: "Dépilement",
    automationText: "Dépilement fiable des pièces empilées après découpe, et ce sur une grande variété de tissus (trame, piqué, interlock etc.)",
    quality: "Placement",
    qualityText: "Les pièces de tissus dépilées peuvent être placées l'une par rapport à l'autre avec une précision millimmétrique !",
    performance: "Couture",
    performanceText: "Les pièces superposées sont cousues à plat avec un contrôle en temps réel de la tension du tissu et de la qualité du point",
    annonce : "Réservez votre démonstration !",
    annonceText : " Notre démonstrateur arrive bientôt, en décembre 2026 !",
    annonceText2 : "Réservez dès maintenant votre démonstration ",
    reservation : "Réserver",
    mailSubject: "Réservation d'un essai",
    mailBody: "Bonjour,%0A%0AJ'aimerais réserver un essaide votre machine le : XX/XX/XXXX pour l'entreprise YYYYYY %0AMerci",
    avantage :"Les avantages NAOTEXT",
    avantageSub : "Découvrez les forces de notre solution",
    flexibilite : "Flexibilité",
    flexibiliteText : " Nos technologies permettent de manipuler une grande variété de tailles de pièces pour s'adapter automatiquement à vos modèles",
    tissus : "Tissus",
    tissusText : " Une grande variété de tissus peuvent être gérés par notre solution : trame, piqué, sweat, interlock et le jersey arrive bientôt ! N'hésitez pas à nous contacter pour faire des essais avec vos tissus ",
    cleenmain : "Clé en main",
    cleenmainText : "Notre solution est clé en main, un miniume de réglagels pour un maximum de contrôle pour l'utiliser comme VOUS le souhaitez.",
    process: "Processus de Production",
    processSub: "Du concept à la réalisation",
    stats: "NAOTEXT en Chiffres",
    experience: "Années d'expérience",
    clients: "Clients satisfaits",
    qualityGuarantee: "Qualité garantie",
    collaborate: "Prêt à collaborer ?",
    collaborateSub: "Contactez-nous pour discuter de votre prochain projet",
    contact: "Nous Contacter",
    mailSubject: "Demande de renseignements",
    quote: "Demander un Devis",
    mailSubject: "Demande de Devis",
    copyright: "&copy; 2024 NAOTEXT. Tous droits réservés.",
    tagline: "Automatiser la confection",
  },
  en: {
    title: "NAOTEXT",
    subtitle: "Automate sewing",
    expertise: "Our Goal",
    about1: "NAOTEXT's goal is to supply turnkey automated solution to apparel's factory",
    about2: "We are currently develloping our first model able to automate up to 30% of sewing steps !",
    discover: "Discover",
    learn: "Learn More",
    solutions: "Our Solutions",
    solutionsSub: "Advanced technologies for your textile needs",
    automation: "Depiling",
    automationText: "Consistent depiling of stacked fabric pieces, on a large variety of fabrics (warp& weft, piqué, interlock etc.)",
    quality: "Position",
    qualityText: "Fabric pieces can be place over each other with millimetric precision.",
    performance: "Sewing",
    performanceText: "Placed pieces can be sewn flat with a control in real time of the fabric's tension and the quality of the stitch",
    annonce : "Book  your demo !",
    annonceText : " Our demo arrives soon, in december 2026 !",
    annonceText2 : "Book your demonstration right now ! ",
    reservation : "Book",
    reservationSubject: "Test Booking",
    reservationBody: "Hello,%0A%0AI would like to book a test of your machine the : XX/XX/XXXX for the company YYYYYY %0AThanks",
    avantage :"NAOTEXT's qualities",
    avantageSub : "Discover the strength of our solution",
    flexibilite : "Flexibility",
    flexibiliteText : " Our technology allows you to manipulate pieces of different sizes to suit your collection.",
    tissus : "Fabric",
    tissusText : " The machine can handle a large variety of fabrics : warp & weft, interlock, sweat, and soon jersey ! Please contact us to book a test with your fabric.",
    cleenmain : "Turnkey",
    cleenmainText : "Our solution is turnkey, with minimum settings yet giving control to use it how YOU want.",
    process: "Production Process",
    processSub: "From concept to completion",
    stats: "NAOTEXT by Numbers",
    experience: "Years of Experience",
    clients: "Satisfied Clients",
    qualityGuarantee: "Quality Guaranteed",
    collaborate: "Ready to collaborate?",
    collaborateSub: "Contact us to discuss your next project",
    contact: "Contact us",
    contactSubject: "Request for informations",
    contactBody : " ",
    quote: "Quote",
    quoteSubject: "Request for Quotation",
    quoteBody : " ",
    copyright: "&copy; 2026 NAOTEXT. All rights reserved.",
    tagline: "Excellence in Textiles",
  }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function updateMailLink() {
  document.querySelectorAll('[data-mail-key]').forEach(link => {
    const mailKey = link.getAttribute('data-mail-key');
    const subject = translations[currentLang][mailKey + 'Subject'] || '';
    const body = translations[currentLang][mailKey + 'Body'] || '';
    link.href = `mailto:contact@votreentreprise.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

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
  
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateMailLink);
  } else {
    updateMailLink();
  }

}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

setLanguage(currentLang);

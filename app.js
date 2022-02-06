const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
  });
  sr.reveal(".header");
  sr.reveal(".hero", { delay: 700 });
  sr.reveal(".productive", { delay: 800 });
  sr.reveal(".sign", { delay: 900 });
  sr.reveal(".footer", { delay: 1000, origin:'bootom' });

  
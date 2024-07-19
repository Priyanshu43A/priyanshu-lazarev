const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

const navbar = document.querySelector("nav");

navbar.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.from(".more-nav-items h4", {
    opacity: 0,
    delay: 0.1,
    y: 20,
    stagger: 0.03,
    ease: "power2.in",
  });
});

gsap.to(".move", {
  x: "-100vw",
  ease: "linear",
  duration: 15,
  repeat: -1,
});

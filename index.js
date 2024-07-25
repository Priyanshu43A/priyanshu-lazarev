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

const rightElems = document.querySelectorAll(".right-elem");
rightElems.forEach((elem) => {
  const elemImg = elem.childNodes[3];
  elem.addEventListener("mousemove", (e) => {
    gsap.to(elemImg, {
      display: "block",
      x: e.x - elem.getBoundingClientRect().x - 50,
      y: e.y - elem.getBoundingClientRect().y - 110,
      duration: 0.3,
      opacity: 1,
      scale: 1,
      ease: "circ.out",
    });
  });

  elem.addEventListener("mouseleave", (e) => {
    console.log(elemImg, e);
    gsap.to(elemImg, {
      display: "none",
      duration: 0.3,
      scale: 0,
      ease: "power3.out",
    });
  });
});

document
  .querySelector(".page3-center .icon > div")
  .addEventListener("click", () => {
    document.querySelector(".fullvideo").style.display = "flex";
    gsap.from(".fullvideo", {
      opacity: 0,
      duration: 0.5,
      delay: 0.1,
      scale: 0,
      ease: "power3.out",
    });
    document.querySelector("#fullmyvdo").muted = "false";
  });

document.querySelector(".fullvideo").addEventListener("click", () => {
  document.querySelector(".fullvideo").style.display = "none";
  document.querySelector("#fullmyvdo").muted = "true";
});

document.querySelector(".page5-vdo").addEventListener("mouseover", () => {
  document.querySelector(".page5-vdo video").play();
});

const vdoContainers = document.querySelectorAll(".page5-vdo");

vdoContainers.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    container.querySelector("video").classList.remove("vdoanimation");

    container.querySelector("video").play();
  });
  container.addEventListener("mouseleave", () => {
    container.querySelector("video").pause();
    container.querySelector("video").classList.add("vdoanimation");

    container.querySelector("video").currentTime = 0;
  });
});

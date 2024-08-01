function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotiveAnimation();

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
    console.log("clicked");
    document.querySelector(".fullvideo").style.display = "flex";
    document.querySelector("#fullmyvdo").play();
    document.querySelector("#fullmyvdo").muted = "false";

    //document.querySelector("#main").style.display = "none";
    gsap.from(".fullvideo", {
      opacity: 0,
      duration: 1,
      delay: 0.1,
      scale: 0,
      ease: "power3.out",
    });
  });

document.querySelector(".fullvideo").addEventListener("click", () => {
  document.querySelector(".fullvideo").style.display = "none";

  //document.querySelector("#main").style.display = "block";
  document.querySelector("#fullmyvdo").currentTime = 0;
  document.querySelector("#fullmyvdo").pause();
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

const vdoItems = document.querySelectorAll(".page5-vdo-item");
vdoItems.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const cursor = item.querySelector(".vdocursor");
    cursor.classList.remove("hidecursor");
    cursor.classList.add("showcursor");

    gsap.to(cursor, {
      x: e.x - item.getBoundingClientRect().x - 55,
      y: e.y - item.getBoundingClientRect().y - 45,
      display: "flex",
      scale: 1,

      opacity: 1,
      duration: 0.3,
      ease: "sine.out",
    });
  });

  item.addEventListener("mouseleave", (e) => {
    const cursor = item.querySelector(".vdocursor");
    cursor.classList.remove("showcursor");

    gsap.to(cursor, {
      duration: 0.3,
      opacity: 0,
      scale: 0,
      display: "none",
      ease: "sine.out",
    });
    //cursor.classList.add("hidecursor");
  });
});

const expandedItems = document.querySelectorAll(".expanded-item");

document.addEventListener("DOMContentLoaded", function () {
  const btns1 = document.querySelectorAll(".btns1");

  btns1.forEach((btn) => {
    btn.addEventListener("click", function () {
      const details = document.getElementById("myDetails");
      if (details) {
        details.open = !details.open;
      } else {
        console.error("Element with ID 'myDetails' not found");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btns2 = document.querySelectorAll(".btns2");

  btns2.forEach((btn) => {
    btn.addEventListener("click", function () {
      const details = document.getElementById("myDetails2");
      if (details) {
        details.open = !details.open;
      } else {
        console.error("Element with ID 'myDetails' not found");
      }
    });
  });
});

gsap.from(".list-item", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".lists", // Element that triggers the animation
    scroller: "#main",
    start: "top 80%", // When the top of the element hits 80% of the viewport height
    end: "top 0%", // When the bottom of the element hits 20% of the viewport height
    scrub: true,
  },
});

// gsap.to(".page8-left button", {
//   position: "sticky",
//   top: "15vh",
//   y: 100,
//   duration: 1,

//   scrollTrigger: {
//     trigger: ".page8-left", // Element that triggers the animation
//     scroller: "#main",
//     start: "top 10%", // When the top of the element hits 80% of the viewport height
//     end: "top -100%", // When the bottom of the element hits 20% of the viewport height
//   },
// });

const callItem = document.querySelectorAll(".page10");
callItem.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    const cursor = item.querySelector(".call");
    cursor.classList.remove("hidecursor");
    cursor.classList.add("showcursor");

    gsap.to(cursor, {
      x: e.x - item.getBoundingClientRect().x - 150,
      y: e.y - item.getBoundingClientRect().y - 100,

      scale: 1,

      opacity: 1,
      duration: 0.3,
      ease: "sine.out",
    });
  });

  item.addEventListener("mouseleave", (e) => {
    const cursor = item.querySelector(".call");
    cursor.classList.remove("showcursor");

    gsap.to(cursor, {
      duration: 0.3,
      opacity: 0,
      scale: 0,
      display: "none",
      ease: "sine.out",
    });
    //cursor.classList.add("hidecursor");
  });
});

function setswipe() {
  console.log("hello");
}

const sumTags = document.querySelectorAll("details");
sumTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    const icon = tag.querySelector("i");
    gsap.to(icon, {
      rotation: icon.classList.contains("rotateIcon") ? 0 : 180,
      duration: 0.5,
      ease: "power3.out",
    });
    console.log(icon);
    icon.classList.toggle("rotateIcon");
    const expanded = tag.querySelector(".expanded");
    const expandedItem = tag.querySelector(".expanded-item");
    tag.parentElement.classList.toggle("opened");
    const tl = gsap.timeline();
    tl.from(expanded, {
      height: 0,
      opacity: 0,
      duration: 1,
    });
  });
});

gsap.from(".page15-left svg", {
  rotation: 160,
  duration: 10,
  scrollTrigger: {
    trigger: ".page15-left", // Element that triggers the animation
    scroller: "#main",
    start: "top 90%", // When the top of the element hits 90% of the viewport height
    end: "top -50%", // When the bottom of the element hits 20% of the viewport height
    scrub: true,
  },
});

//emailjs.init("A4UXz2L1aSIRijg-v"); // Replace with your User ID

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById(
      "submitbtn"
    ).innerHTML = `Sending... <i class="fa-solid fa-paper-plane"></i>`;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value;

    emailjs
      .send("service_5ahg9rr", "template_oim1fy9", {
        from_email: email,
        reply_to: email,
        from_name: name,
        message: message,
      })
      .then(
        function (response) {
          document.getElementById("responseMessage").style.display = "flex";

          document.getElementById(
            "responseMessage"
          ).innerHTML = ` <i class="fa-solid fa-envelope-circle-check"></i>
            <p>Message sent successfully!</p>`;
          document.querySelector("form").style.opacity = "0";
          document.querySelector("#responseMessage i").classList.add("success");
        },
        function (error) {
          document.getElementById("responseMessage").style.display = "flex";
          document.getElementById(
            "responseMessage"
          ).innerHTML = ` <i class="fa-solid fa-xmark"></i>
            <p>Oops! unable to send message...</p>`;
          document.querySelector("form").style.opacity = "0";
          document.querySelector("#responseMessage i").classList.add("warn");
        }
      );
  });

const callbutton = document.querySelector(".page17-left button");
callbutton.addEventListener("mouseenter", () => {
  gsap.to(".letter-container", {
    bottom: "100%",
    stagger: 0.02,
    opacity: 1,
    ease: "sine.inOut",

    duration: 0.2,
  });
});
callbutton.addEventListener("mouseleave", () => {
  gsap.to(".letter-container", {
    bottom: "0%",
    stagger: 0.02,
    opacity: 1,
    ease: "sine.inOut",
    duration: 0.2,
  });
});

function callContact(phoneNumber) {
  // Check if the phone number starts with a '+', if not add it
  if (!phoneNumber.startsWith("+")) {
    phoneNumber = "+" + phoneNumber;
  }

  // Create a link with the tel protocol and simulate a click
  var link = document.createElement("a");
  link.href = "tel:" + phoneNumber;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.querySelector("#callMeBtn").addEventListener("click", () => {
  callContact("918057607415");
});

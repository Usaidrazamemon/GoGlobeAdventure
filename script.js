// GSAP logo
gsap.from(".logo img", {
y: -80,
duration: 1,
ease: "bounce.out"
});

gsap.from(".nav-left li", {
x: -100,
opacity: 0,
duration: 1,
stagger: 0.2
});

gsap.from(".nav-right li", {
x: 100,
opacity: 0,
duration: 1,
stagger: 0.2
});

// navigate GSAP
document.querySelectorAll(".navbar a").forEach(link => {
link.addEventListener("mouseenter", () => {
gsap.to(link, { color: "#00e5ff", duration: 0.3 });
});
link.addEventListener("mouseleave", () => {
gsap.to(link, { color: "#f1faff", duration: 0.3 });
});
});

// Button animation
document.querySelectorAll(".btn").forEach(button => {
button.addEventListener("mouseenter", () => {
gsap.to(button, { scale: 1.15, duration: 0.3 });
});
button.addEventListener("mouseleave", () => {
 gsap.to(button, { scale: 1, duration: 0.3 });
});
});

// Popups animation
const signUpBtn = document.getElementById('signUpBtn');
const loginBtn = document.getElementById('loginBtn');
const signUpPopup = document.getElementById('signUpPopup');
const loginPopup = document.getElementById('loginPopup');
const popupOverlay = document.getElementById('popupOverlay');
const closeSignUp = document.getElementById('closeSignUp');
const closeLogin = document.getElementById('closeLogin');


signUpBtn.addEventListener('click', () => {
signUpPopup.classList.add('active');
popupOverlay.classList.add('active');
loginPopup.classList.remove('active');


document.querySelector("nav").classList.remove("active");
});

//  login popup
loginBtn.addEventListener('click', () => {
loginPopup.classList.add('active');
popupOverlay.classList.add('active');
signUpPopup.classList.remove('active');
 document.querySelector("nav").classList.remove("active");
});

// Close popups
closeSignUp.addEventListener('click', () => {
signUpPopup.classList.remove('active');
popupOverlay.classList.remove('active');
});

closeLogin.addEventListener('click', () => {
loginPopup.classList.remove('active');
popupOverlay.classList.remove('active');
});


popupOverlay.addEventListener('click', () => {
signUpPopup.classList.remove('active');
loginPopup.classList.remove('active');
popupOverlay.classList.remove('active');
});

// Hamburger 
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const body = document.body;
const menuCloseBtn = document.querySelector(".menu-close");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("menu-open");
});

menuCloseBtn.addEventListener("click", () => {
  nav.classList.remove("active");
  body.classList.remove("menu-open");
});

// Animate hero 

function animateHero(newTitle, newText, newBg) {
  const titleEl = document.getElementById("hero-heading");
  const textEl = document.getElementById("hero-description");
  const btnEl = document.getElementById("hero-btn");

  let tl = gsap.timeline();

  
  tl.to([titleEl, textEl, btnEl], { y: -50, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power2.in" })

  
    .add(() => {
      titleEl.textContent = newTitle;
      textEl.textContent = newText;

    
      gsap.to(".hero", {
        backgroundImage: `url(${newBg})`,
        duration: 1.2,
        ease: "power2.inOut"
      });
    })

  
    .fromTo([titleEl, textEl, btnEl],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
}

// Thumbnail

document.querySelectorAll(".thumbnails .thumb img").forEach(img => {
  img.addEventListener("click", () => {
    
    document.querySelectorAll(".thumbnails .thumb").forEach(t => t.classList.remove("active"));
    img.parentElement.classList.add("active");

    
    let newTitle = img.getAttribute("data-title");
    let newText = img.getAttribute("data-text");
    let newBg = img.getAttribute("data-bg");  // 👈 full bg image
    animateHero(newTitle, newText, newBg);
  });
});

window.addEventListener("load", () => {
  animateHero(
    "Embark on Your Sea Adventure",
    "Discover the beauty of oceans, explore hidden islands, and sail into the horizon.",
    "images/main first.avif"
  );
});

gsap.registerPlugin(ScrollTrigger);

// Circles 
gsap.from(".circle", {
  scrollTrigger: {
    trigger: ".destinations",
    start: "top 80%"
  },
  opacity: 0,
  scale: 0.5,
  duration: 0.6,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

document.querySelectorAll(".circle").forEach(c => {
  c.addEventListener("mouseenter", () => {
    gsap.to(c, { scale: 1.1, duration: 0.3 });
  });
  c.addEventListener("mouseleave", () => {
    gsap.to(c, { scale: 1, duration: 0.3 });
  });
});


document.querySelectorAll(".title p").forEach(el => {
  let text = el.textContent;
  el.textContent = ""; 

  
  text.split("").forEach(ch => {
    let span = document.createElement("span");
    span.textContent = ch;
    span.style.opacity = 0;
    el.appendChild(span);
  });

  
  gsap.to(el.querySelectorAll("span"), {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    opacity: 1,
    duration: 0.05,
    stagger: 0.05
  });
});
gsap.registerPlugin(ScrollTrigger);


gsap.from(".section-heading", {
  scrollTrigger: { trigger: ".section-heading", start: "top 85%" },
  y: -60,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out"
});


gsap.fromTo(".icon-3d",
  { y: 30, opacity: 0, scale: 0.95, transformOrigin: "50% 50%" },
  {
    y: 0, opacity: 1, scale: 1,
    duration: 0.6, stagger: 0.12, ease: "back.out(1.7)",
    scrollTrigger: { trigger: ".features-top", start: "top 85%", toggleActions: "play none none none" }
  }
);


gsap.from(".feature p", {
  scrollTrigger: { trigger: ".features-top", start: "top 85%" },
  opacity: 0,
  y: 10,
  duration: 0.4,
  stagger: 0.08,
  delay: 0.15,
  ease: "power2.out"
});


gsap.from(".desc-left", {
  scrollTrigger: { trigger: ".desc-left", start: "top 90%" },
  x: -80, opacity: 0, duration: 0.8, ease: "power3.out"
});
gsap.from(".desc-right", {
  scrollTrigger: { trigger: ".desc-right", start: "top 90%" },
  x: 80, opacity: 0, duration: 0.8, ease: "power3.out"
});

// Collage images 
gsap.from(".trip-collage img", {
  scrollTrigger: { trigger: ".trip-collage", start: "top 90%" },
  y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out"
});

// 
document.querySelectorAll(".icon-3d").forEach(el => {
  const lift = gsap.to(el, { y: -6, duration: 0.2, paused: true, ease: "power1.out" });
  el.addEventListener("mouseenter", () => lift.play());
  el.addEventListener("mouseleave", () => lift.reverse());
});


gsap.from(".collage img", {
  x: 30,            
  opacity: 0, delay: 1.5,      
  duration: 5,

  stagger: 3,      
  scrollTrigger: {
    trigger: ".collage",
    start: "top 80%",  
    toggleActions: "play none none reset"
  }
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  
  gsap.fromTo(".blogs-header", 
    {opacity: 0, scale: 0.8, y: -50}, 
    {
      opacity: 1, 
      scale: 1.1, 
      y: 0, 
      ease: "elastic.out(1, 0.4)", 
      duration: 1.6,
      scrollTrigger: {
        trigger: ".blogs-header",
        start: "top 90%",
        toggleActions: "play none none none"
      }
    }
  );

  
  gsap.fromTo(".blog-card", 
    {opacity: 0, y: 60, scale: 0.75}, 
    {
      opacity: 1, 
      y: 0, 
      scale: 1, 
      ease: "power4.out", 
      duration: 1.2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".blogs-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    }
  );
});
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  
  gsap.fromTo(".iconic-left.text-block, .iconic-right.text-block", 
    { x: 100, opacity: 0 }, 
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".iconic-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

  
  gsap.fromTo(".iconic-left.collage img, .iconic-right.collage img", 
    {
      clipPath: "circle(50% at 50% 50%)",
      scale: 0.8,
      opacity: 0.7
    }, 
    {
      clipPath: "polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".iconic-section",
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
});

  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0;

  function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  }

  
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });


  nextButton.addEventListener('click', e => {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0; 
    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
  });

  
  prevButton.addEventListener('click', e => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1; 
    track.style.transform = 'translateX(-' + slideWidth * currentIndex + 'px)';
  });

gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1.5,  
  ease: "power2.out",
});

gsap.from(".package-card", {
  scrollTrigger: {
    trigger: ".packages-grid",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 25,
  scale: 1,
  duration: 1.5,   
  ease: "power2.out",
  stagger: 0.25,   
});

  gsap.registerPlugin(ScrollTrigger);


  gsap.from(".book-image img", {
    scrollTrigger: {
      trigger: ".book-now-section",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    x: -150,
    opacity: 0,
    scale: 1.1,
    duration: 1.3,
    ease: "power3.out"
  });

  
  const bookImage = document.querySelector(".book-image img");
  bookImage.addEventListener("mouseenter", () => {
    gsap.to(bookImage, { scale: 1.15, duration: 0.5, ease: "power2.out" });
  });
  bookImage.addEventListener("mouseleave", () => {
    gsap.to(bookImage, { scale: 1.1, duration: 0.5, ease: "power2.out" });
  });

  gsap.from(".book-form", {
    scrollTrigger: {
      trigger: ".book-now-section",
      start: "top 90%",
      toggleActions: "play none none none",
    },
    x: 150,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out"
  });

  
  const formElements = document.querySelectorAll(".book-form input, .submit-btn");
  formElements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power1.out" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, duration: 0.3, ease: "power1.out" });
    });
  });




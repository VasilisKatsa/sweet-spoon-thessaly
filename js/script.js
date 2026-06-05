const navbar = document.querySelector(".navbar");

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click",() => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
})

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

const productCards = document.querySelectorAll(".product-card");
const productModal = document.querySelector(".product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close-modal");

if(productModal){

    productCards.forEach((card) => {
        card.addEventListener("click", () => {
            modalTitle.textContent = card.dataset.title;
            modalDescription.textContent = card.dataset.description;
            modalImg.src = card.dataset.image;

            productModal.classList.add("active");
        });
    });

    closeModal.addEventListener("click", () => {
        productModal.classList.remove("active");
    });

    productModal.addEventListener("click", (e) => {
        if(e.target === productModal){
            productModal.classList.remove("active");
        }
    });

}

// FLOATING FRUITS PARALLAX

const fruits = document.querySelectorAll(".fruit");

window.addEventListener("scroll", ()=> {

    const scrollY = window.scrollY;

    fruits.forEach((fruit, index)=> {

        const speed = (index + 1) * 0.03;

        fruit.style.setProperty(
            "--parallax-y",
            `${scrollY * speed}px`
        );

    });

});

// FEATURED IMAGE PARALLAX

const featuredImage = document.querySelector(".featured-product-image");
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    featuredImage.style.transform = `translateY(${scrollY * 0.06}px)`;
});

// CUSTOM CURSOR

const cursor =
document.querySelector(".custom-cursor");

if(cursor){

    window.addEventListener("mousemove", (e)=> {

        cursor.style.left = `${e.clientX}px`;

        cursor.style.top = `${e.clientY}px`;

    });

}

// CURSOR HOVER EFFECT

const hoverElements =
document.querySelectorAll(
"a, button, .product-card"
);
  if (cursor) {
hoverElements.forEach((el)=> {

    el.addEventListener("mouseenter", ()=> {

        cursor.classList.add("active");

    });

    el.addEventListener("mouseleave", ()=> {

        cursor.classList.remove("active");

    });

});
  }

  // STORY HERO PARALLAX

  const storyHero = document.querySelector(".story-hero");
  window.addEventListener("scroll", ()=> {
    if(storyHero) {
        const scrollY = window.scrollY;
        storyHero.style.backgroundPositionY = `${scrollY * 0.5}px`;
    }
  });

  // ROOTS IMAGE FLOAT

  const rootsImage = document.querySelector(".roots-image img");
  window.addEventListener("scroll", ()=> {
    if(rootsImage){
        const scrollY = window.scrollY;
        rootsImage.style.transform = `translateY(${scrollY * 0.04}px)scale(1.03)`;
    }
  });

  // ABOUT HERO PARALLAX

const aboutHero =
document.querySelector(".about-hero");
window.addEventListener("scroll", ()=> {
    if(aboutHero){
        const scrollY = window.scrollY;
        aboutHero.style.backgroundPositionY =
        `${scrollY * 0.5}px`;
    }
});

// PHILOSOPHY FLOAT

const philosophyImage =
document.querySelector(".philosophy-image img");

window.addEventListener("scroll", ()=> {

    if(philosophyImage){

        const scrollY = window.scrollY;

        philosophyImage.style.transform =
        `translateY(${scrollY * 0.04}px)
        scale(1.03)`;

    }

});

//ARTISAN FLOAT

const artisanImage =
document.querySelector(".artisan-image img");

window.addEventListener("scroll", ()=> {

    if(artisanImage){

        const scrollY = window.scrollY;

        artisanImage.style.transform =
        `translateY(${scrollY * 0.03}px)
        scale(1.03)`;

    }

});

// TESTIMONIAL CAROUSEL

const testimonialCards = document.querySelectorAll(".testimonial-card");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;

function updateCarousel(){
    testimonialCards.forEach((card) => {
        card.classList.remove("active", "prev", "next");
    });

    testimonialCards[currentIndex].classList.add("active");

    const prevIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    const nextIndex = (currentIndex + 1) % testimonialCards.length;

    testimonialCards[prevIndex].classList.add("prev");
    testimonialCards[nextIndex].classList.add("next");
}

if(testimonialCards.length > 0 && nextBtn && prevBtn){

    nextBtn.addEventListener("click", () => {
        currentIndex++;

        if(currentIndex >= testimonialCards.length){
            currentIndex = 0;
        }

        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;

        if(currentIndex < 0){
            currentIndex = testimonialCards.length - 1;
        }

        updateCarousel();
    });

    setInterval(() => {
        currentIndex++;

        if(currentIndex >= testimonialCards.length){
            currentIndex = 0;
        }

        updateCarousel();
    }, 6000);

    updateCarousel();
}

// TESTIMONIAL HERO PARALLAX

const testimonialsHero =
document.querySelector(".testimonials-hero");

window.addEventListener("scroll", ()=>{

    if(testimonialsHero){

        const scrollY = window.scrollY;

        testimonialsHero.style.backgroundPositionY =
        `${scrollY * 0.5}px`;

    }

});

//FEATURED PARALLAX

const featuredSection =
document.querySelector(".featured-testimonial");

window.addEventListener("scroll", ()=>{

    if(featuredSection){

        const scrollY = window.scrollY;

        featuredSection.style.backgroundPositionY =
        `${scrollY * 0.25}px`;

    }

});

// FAQ ACCORDION

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", ()=>{

        faqItems.forEach((faq)=>{

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

// GLOBAL HERO PARALLAX

const parallaxHeroes = document.querySelectorAll(
`
.hero,
.products-hero,
.contact-hero,
.faq-hero,
.tradition-section
`
);

window.addEventListener("scroll", ()=>{

    const scrollY = window.scrollY;

    parallaxHeroes.forEach((hero)=>{

        hero.style.backgroundPositionY =
        `${scrollY * 0.45}px`;
        hero.style.transition = "background-position 0.1s linear";

    });

});

// QUOTE PARALLAX

const parallaxQuotes = document.querySelectorAll(
`
.story-quote,
.contact-quote,
.about-quote,
.featured-testimonial
`
);

window.addEventListener("scroll", ()=>{

    const scrollY = window.scrollY;

    parallaxQuotes.forEach((section)=>{

        section.style.backgroundPositionY =
        `${scrollY * 0.25}px`;

    });

});

// IMAGE PARALLAX

const parallaxImages = document.querySelectorAll(
`
.about-image img,
.featured-product-image img,
.roots-image img,
.philosophy-image img,
.artisan-image img
`
);

window.addEventListener("scroll", ()=>{

    const scrollY = window.scrollY;

    parallaxImages.forEach((img)=>{

        img.style.transform =
        `translateY(${scrollY * 0.03}px) scale(1.05)`;

    });

});

// PAGE TRANSITIONS

const transitionLinks = document.querySelectorAll("a");
transitionLinks.forEach((link)=>{
    const href = link.getAttribute("href");
    if(href && !href.startsWith("#") && !href.startsWith("http")){
        link.addEventListener("click", (e)=>{
            e.preventDefault();
            document.body.classList.add("fade-out");
            setTimeout(()=>{
                window.location.href = href;
            },500);
        });
    }
});

//LOADER

const loader = document.querySelector(".loader");
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        loader.classList.add("hidden");
    },1200);
});
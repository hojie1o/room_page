const heroImg = document.getElementById("hero-img");
const heroTitle = document.getElementById("hero-title");
const heroDesc = document.getElementById("hero-desc");

const slides = [
  {
    image: "images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    desc: `We provide unmatched quality, comfort, and style for property owners across the country.
           Our experts combine form and function in bringing your vision to life. Create a room in your own style
           with our collection and make your property a reflection of you and what you love.`
  },
  {
    image: "images/desktop-image-hero-2.jpg",
    title: "We are available all across the globe",
    desc: `With stores all over the world, it's easy for you to find furniture for your home or place of business.
           Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator.`
  },
  {
    image: "images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    desc: `Our modern furniture store provides a high level of quality. Our company has invested in advanced technology
           to ensure that every product is made as perfect and as consistent as possible.`
  }
];

let currentSlide = 0;

document.getElementById("next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

function updateSlide() {
  const slide = slides[currentSlide];
  heroImg.src = slide.image;
  heroTitle.textContent = slide.title;
  heroDesc.textContent = slide.desc;
}

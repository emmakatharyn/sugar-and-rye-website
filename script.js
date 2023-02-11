// select mobile nav btn
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// listen for click event on the hamburger icon
// when clicked, we want the nav-open class to be applied to the header (if it's not already applied) or removed if it's already applied.
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// sticky nav
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


const primaryHeader = document.querySelector('.primary-header')
const navtoggel = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", ()=>{
  primaryNav.hasAttribute("data-visible")
  ? navToggle.setAttribute("aria-exoanded", false)
  : navToggle.setAttribute("aria-exoanded", true)
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute('data-overlay')
})
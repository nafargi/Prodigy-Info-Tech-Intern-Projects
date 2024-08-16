const header = document.querySelector("header");
const homePageSection = document.querySelector(".home-intro");

const observerBehevior = {
    rootMargin: "-150px 0px 0px 0px"
 };

const homePageObserver = new IntersectionObserver(function(
    entries, homePageObserver) {
        entries.forEach( entry =>{
            if (!entry.isIntersecting) {
                header.classList.add("menu-style");
              } else {
                header.classList.remove("menu-style");
              }
        });
}, observerBehevior);

homePageObserver.observe(homePageSection);
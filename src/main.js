import anime from "animejs";
import "./style.css";

// Preloader //
// BAckgroud //
anime({
  targets: ".animate",
  width: "0%",
  easing: "easeInOutQuad",
  delay: anime.stagger(150, { start: 3000 }),
  duration: 1000,
  // loop: true
});

// Welcome Message //
anime({
  targets: ".disappear",
  opacity: -1,
  duration: 4000,
  delay: 2000,
  complete: function () {
    // Animation complete callback
    removeOverflowHiddenClass();
  },
});

// Function to remove "overflow-hidden" class from body
function removeOverflowHiddenClass() {
  document.body.classList.remove("overflow-hidden");
}

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Update font-variation-settings for each element individually
  var elements = [
    {
      id: "herotitle-atthew",
      initialFontWeight: 135,
    },
    {
      id: "herotitle-erson",
      initialFontWeight: 153,
    },
    {
      id: "herotitle-astro",
      initialFontWeight: 153,
    },
    {
      id: "herotitle-ivar",
      initialFontWeight: 180,
    },
  ];

  for (var i = 0; i < elements.length; i++) {
    var element = document.getElementById(elements[i].id);
    var currentFontWeight = elements[i].initialFontWeight;
    var newFontWeight = currentFontWeight + scrollPosition / 35; // Adjust the increment value (10) as per your preference

    // Limit the font weight to the specified range
    if (newFontWeight > 190) {
      newFontWeight = 190;
    } else if (newFontWeight < 100) {
      newFontWeight = 100;
    }

    // Set the updated font-variation-settings
    element.style.fontVariationSettings = "'wght' " + newFontWeight;
  }
});

const sectionElement = document.querySelector(".aboutcontainer"); // Replace '.section-class' with the actual class or ID of the section element
const targetElements = sectionElement.querySelectorAll(".fadeout");

// Set the animation duration in milliseconds
const animationDuration = 2000;

// Function to check if the section is at the top of the viewport
function isSectionAtTop() {
  const sectionRect = sectionElement.getBoundingClientRect();
  return sectionRect.top <= 0;
}

// Function to handle the scroll event
function handleScroll() {
  if (isSectionAtTop()) {
    const viewportHeight = window.innerHeight;

    // Iterate over each target element and animate the opacity
    targetElements.forEach((element) => {
      const distance = Math.max(0, viewportHeight - sectionElement.offsetTop);
      const opacity = 1 - distance / viewportHeight;

      anime({
        targets: element,
        opacity: 0.025,
        duration: animationDuration,
        easing: "linear",
      });
    });
  } else {
    // Reset the opacity of target elements to 1 if the section is not at the top of the viewport
    targetElements.forEach((element) => {
      anime({
        targets: element,
        opacity: 1,
        duration: animationDuration,
        easing: "linear",
      });
    });
  }
}

// Add a scroll event listener
window.addEventListener("scroll", handleScroll);

function toggleOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  const mainSections = document.querySelectorAll("main section");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const aside = document.querySelector("aside");

  overlay.classList.toggle("active");

  if (overlay.classList.contains("active")) {
    // Hide other elements
    mainSections.forEach((section) => {
      section.classList.add("hidden");
    });
    header.classList.add("hidden");
    footer.classList.add("hidden");
    aside.classList.remove("hidden");
  } else {
    // Show other elements
    mainSections.forEach((section) => {
      section.classList.remove("hidden");
    });
    header.classList.remove("hidden");
    footer.classList.remove("hidden");
    aside.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var skillsContainer = document.getElementById("skillsnratings-container");
  var skills = skillsContainer.getElementsByClassName("skill");

  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust the threshold as needed
  });

  for (var i = 0; i < skills.length; i++) {
    observer.observe(skills[i]);
  }
});

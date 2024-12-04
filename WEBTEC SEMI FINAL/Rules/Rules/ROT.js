function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {

    const enablegrid= document.getElementById("enablegrid");
    const gridex= document.getElementById("gridex");
    const portrait= document.getElementById("portrait");
    const landscape= document.getElementById("landscape");
    const services = document.getElementById("services");
    const ruleOfThirds = document.getElementById("ruleOfThirds");
    const whatIsRule = document.getElementById("whatIsRule");
    const letsLearnGrid = document.getElementById("letsLearnGrid");
    
    if (isElementInView(enablegrid)) {
      enablegrid.classList.add("in-viewbelow");
     }
    if (isElementInView(gridex)) {
      gridex.classList.add("in-viewbelow");
     }
    if (isElementInView(portrait)) {
      portrait.classList.add("in-viewright");
     }

    if (isElementInView(landscape)) {
      landscape.classList.add("in-view");
     }

    if (isElementInView(ruleOfThirds)) {
      ruleOfThirds.classList.add("in-view");
    }
    if (isElementInView(whatIsRule)) {
      whatIsRule.classList.add("in-viewright");
    }
    if (isElementInView(letsLearnGrid)) {
      letsLearnGrid.classList.add("in-view");
    }
    if (isElementInView(services)) {
        services.classList.add("in-view");
      }

 
   
 
  }

  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);

  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
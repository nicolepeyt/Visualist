function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {
  
    const convergings= document.getElementById("convergings");
    const horizontals= document.getElementById("horizontals");
    const shapesup= document.getElementById("shapesup");
    const rgrapgics= document.getElementById("rgrapgics");
    const sandq= document.getElementById("sandq");
    const keycon= document.getElementById("keycon");
    const usebitmap = document.getElementById("usebitmap");
    const usevector = document.getElementById("usevector");
    const cmyk = document.getElementById("cmyk");
    const rgb = document.getElementById("rgb");
    const essential = document.getElementById("essential");
    const understanding = document.getElementById("understanding");
    const whatIsRule = document.getElementById("whatIsRule");
  
 

    if (isElementInView(convergings)) {
        convergings.classList.add("in-viewright");
      }   
    if (isElementInView(horizontals)) {
        horizontals.classList.add("in-view");
      }   
    if (isElementInView(shapesup)) {
        shapesup.classList.add("in-viewbelow");
      }   
    if (isElementInView(rgrapgics)) {
        rgrapgics.classList.add("in-viewright");
      }   
    if (isElementInView(sandq)) {
        sandq.classList.add("in-view");
      }   
    if (isElementInView(keycon)) {
        keycon.classList.add("in-viewbelow");
      }   
    if (isElementInView(usebitmap)) {
        usebitmap.classList.add("in-viewright");
      }   
    if (isElementInView(usevector)) {
        usevector.classList.add("in-view");
      }   
    if (isElementInView(cmyk)) {
        cmyk.classList.add("in-viewright");
      }
    if (isElementInView(rgb)) {
        rgb.classList.add("in-view");
      }
    if (isElementInView(essential)) {
        essential.classList.add("in-viewbelow");
      }
    if (isElementInView(understanding)) {
        understanding.classList.add("in-viewright");
      }
    if (isElementInView(whatIsRule)) {
      whatIsRule.classList.add("in-view");
    }
  
   
  
  }
  
  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);
  
  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
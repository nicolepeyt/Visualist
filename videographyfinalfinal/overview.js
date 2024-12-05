function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {
  
    const importance = document.getElementById("importance");
    const whatIsRule = document.getElementById("whatIsRule");
    const ruleOfThirds = document.getElementById("ruleOfThirds");
  
  
  
    if (isElementInView(importance)) {
      importance.classList.add("in-view");
    }
  
    if (isElementInView(whatIsRule)) {
      whatIsRule.classList.add("in-view");
    }
  
    if (isElementInView(ruleOfThirds)) {
      ruleOfThirds.classList.add("in-view");
    }
  
  
  
  
   
  
  }
  
  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);
  
  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
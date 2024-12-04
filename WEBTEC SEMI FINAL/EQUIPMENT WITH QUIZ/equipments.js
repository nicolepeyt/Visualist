function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {
  

    const naturall = document.getElementById("naturall");
    const mic = document.getElementById("mic");
    const diy = document.getElementById("diy");
    const secondary = document.getElementById("secondary");
    const cmyk = document.getElementById("cmyk");
    const rgb = document.getElementById("rgb");
    const essentialeq = document.getElementById("essentialeq");
    const understanding = document.getElementById("understanding");
    const whatIsRule = document.getElementById("whatIsRule");
   
  
    if (isElementInView(naturall)) {
      naturall.classList.add("in-viewright");
    }
    if (isElementInView(mic)) {
      mic.classList.add("in-view");
    }
    if (isElementInView(diy)) {
      diy.classList.add("in-viewright");
    }
    if (isElementInView(secondary)) {
      secondary.classList.add("in-view");
    }
    if (isElementInView(cmyk)) {
      cmyk.classList.add("in-viewright");
    }
    if (isElementInView(rgb)) {
      rgb.classList.add("in-view");
    }
    if (isElementInView(essentialeq)) {
      essentialeq.classList.add("in-viewbelow");
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
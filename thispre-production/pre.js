function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {
  
    const cultural = document.getElementById("cultural");
    const mood = document.getElementById("mood");
    const conveying = document.getElementById("conveying");
    const frame1= document.getElementById("frame1");
    const secondary= document.getElementById("secondary");
    const cmyk = document.getElementById("cmyk");
    const rgb = document.getElementById("rgb");
    const understanding = document.getElementById("understanding");
    const whatIsRule = document.getElementById("whatIsRule");
  
 
    if (isElementInView(cultural)) {
        cultural.classList.add("in-viewright");
      }
    if (isElementInView(mood )) {
        mood .classList.add("in-view");
      }
    if (isElementInView(conveying)) {
        conveying.classList.add("in-viewright");
      }
    if (isElementInView(frame1)) {
        frame1.classList.add("in-viewbelow");
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
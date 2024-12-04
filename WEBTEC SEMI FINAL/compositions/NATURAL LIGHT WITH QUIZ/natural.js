function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {
  

    const nighth = document.getElementById("nighth");
    const blueh = document.getElementById("blueh");
    const afternoonm = document.getElementById("afternoonm");
    const highn = document.getElementById("highn");
    const goldenh = document.getElementById("goldenh");
    const timeof = document.getElementById("timeof");
    const softl = document.getElementById("softl");
    const goldenl = document.getElementById("goldenl");
    const contrasts = document.getElementById("contrasts");
    const tyli = document.getElementById("tyli");
    const understanding = document.getElementById("understanding");
    const whatIsRule = document.getElementById("whatIsRule");
  

    if (isElementInView(nighth)) {
        nighth.classList.add("in-viewright");
      }
    if (isElementInView(blueh)) {
        blueh.classList.add("in-view");
      }
    if (isElementInView(afternoonm)) {
        afternoonm.classList.add("in-viewright");
      }
    if (isElementInView(highn)) {
        highn.classList.add("in-view");
      }
    if (isElementInView(goldenh)) {
        goldenh.classList.add("in-viewright");
      }
    if (isElementInView(timeof)) {
        timeof.classList.add("in-viewbelow");
      }
    if (isElementInView(softl)) {
        softl.classList.add("in-view");
      }
    if (isElementInView(goldenl)) {
        goldenl.classList.add("in-viewright");
      }
    if (isElementInView(contrasts)) {
        contrasts.classList.add("in-viewright");
      }
    if (isElementInView(tyli)) {
        tyli.classList.add("in-viewbelow");
      }  
    if (isElementInView(understanding)) {
        understanding.classList.add("in-viewbelow");
      }  
    if (isElementInView(whatIsRule)) {
      whatIsRule.classList.add("in-view");
    }
  
   
  
  }
  
  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);
  
  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
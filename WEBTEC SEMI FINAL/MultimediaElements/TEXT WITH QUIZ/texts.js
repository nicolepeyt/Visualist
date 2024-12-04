function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {

    const trackings = document.getElementById("trackings");
    const leadings = document.getElementById("leadings");
    const kernings = document.getElementById("kernings");
    const guides = document.getElementById("guides");
    const fontss = document.getElementById("fontss");
    const serifss = document.getElementById("serifss");
    const keydiff = document.getElementById("keydiff");
    const understanding = document.getElementById("understanding");
    const textg = document.getElementById("textg");
    
  
    if (isElementInView(trackings)) {
        trackings.classList.add("in-view");
    }  
    if (isElementInView(leadings)) {
        leadings.classList.add("in-viewright");
    }   
    if (isElementInView(kernings)) {
        kernings.classList.add("in-view");
    }
    if (isElementInView(guides)) {
        guides.classList.add("in-viewbelow");
    }
    if (isElementInView(fontss)) {
        fontss.classList.add("in-viewright");
    }
    if (isElementInView(serifss)) {
        serifss.classList.add("in-view");
    }
    if (isElementInView(keydiff)) {
        keydiff.classList.add("in-viewbelow");
    }
    if (isElementInView(understanding)) {
        understanding.classList.add("in-viewright");
    }
    if (isElementInView(textg)) {
        textg.classList.add("in-view");
    }

  
   
  
  }
  
  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);
  
  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
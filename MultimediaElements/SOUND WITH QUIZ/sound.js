function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {

    const sample = document.getElementById("sample");
    const original = document.getElementById("original");
    const soundeffect = document.getElementById("soundeffect");
    const narration = document.getElementById("narration");
    const music = document.getElementById("music");
    const soundele = document.getElementById("soundele");
    const understanding = document.getElementById("understanding");
    const whatIsRule = document.getElementById("whatIsRule");
  



    if (isElementInView(sample)) {
        sample.classList.add("in-viewbelow");
      }
    if (isElementInView(original)) {
        original.classList.add("in-viewright");
      }
    if (isElementInView(soundeffect)) {
        soundeffect.classList.add("in-view");
      }
    if (isElementInView(narration)) {
        narration.classList.add("in-viewright");
      }
    if (isElementInView(music)) {
        music.classList.add("in-view");
      }
    if (isElementInView(soundele)) {
        soundele.classList.add("in-viewbelow");
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
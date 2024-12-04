function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {


    const video = document.getElementById("video");
    const audio = document.getElementById("audio");
    const animation = document.getElementById("animation");
    const graphics = document.getElementById("graphics");
    const text = document.getElementById("text");
    const themes = document.getElementById("themes");
    const virtual = document.getElementById("virtual");
    const types = document.getElementById("types");
    const whatis = document.getElementById("whatis");
    const cultural = document.getElementById("cultural");
   
  
    if (isElementInView(video)) {
        video.classList.add("in-view");
      }
    if (isElementInView(audio)) {
        audio.classList.add("in-viewright");
      }
    if (isElementInView(animation)) {
        animation.classList.add("in-view");
      }
    if (isElementInView(graphics)) {
        graphics.classList.add("in-viewright");
      }
    if (isElementInView(text)) {
        text.classList.add("in-view");
      }
    if (isElementInView(themes)) {
        themes.classList.add("in-viewright");
      }
    if (isElementInView(virtual)) {
        virtual.classList.add("in-view");
      }
    if (isElementInView(types)) {
        types.classList.add("in-viewbelow");
      }
    if (isElementInView(whatis)) {
        whatis.classList.add("in-viewbelow");
      }
    if (isElementInView(cultural)) {
        cultural.classList.add("in-viewbelow");
      }
  
  
   
  
  }
  
  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);
  
  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {

    const title = document.getElementById('title');
    const vid = document.getElementById("vid");
    const sources = document.getElementById("sources");
    const stock = document.getElementById("stock");
    const custom = document.getElementById("custom");
    const file = document.getElementById("file");
    
  
    if (isElementInView(title)) {
        title.classList.add("in-view");
    }  
    if (isElementInView(vid)) {
        vid.classList.add("in-viewright");
    }   
    if (isElementInView(sources)) {
        sources.classList.add("in-view");
    }
    if (isElementInView(stock)) {
        stock.classList.add("in-viewbelow");
    }
    if (isElementInView(custom)) {
        custom.classList.add("in-viewright");
    }
    if (isElementInView(file)) {
        file.classList.add("in-view");
    }

  }
  
  // Listen for scroll events to trigger the animation
  window.addEventListener('scroll', checkScroll);
  
  // Initial check to animate if already in view on page load
  window.addEventListener('load', checkScroll);
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // Function to add class 'in-view' when scrolled into view
  function checkScroll() {
  
    const gogogo = document.getElementById("gogogo");
    const closeuss = document.getElementById("closeuss");
    const what = document.getElementById("what");
    const interviews = document.getElementById("interviews");
    const sports = document.getElementById("sports");
    const musicsv = document.getElementById("musicsv");
    const travels = document.getElementById("travels");
    const reals = document.getElementById("reals");
    const documentarys = document.getElementById("documentarys");
    const commercials = document.getElementById("commercials");
    const eventsv = document.getElementById("eventsv");
    const corporates = document.getElementById("corporates");
    const tyvd = document.getElementById("tyvd");
    const rgb = document.getElementById("rgb");
    const understanding = document.getElementById("understanding");
    const whatIsRule = document.getElementById("whatIsRule");
  

    if (isElementInView(gogogo)) {
        gogogo.classList.add("in-viewright");
      }
    if (isElementInView(closeuss)) {
        closeuss.classList.add("in-view");
      }
    if (isElementInView(what)) {
        what.classList.add("in-viewright");
      }
    if (isElementInView(interviews)) {
        interviews.classList.add("in-view");
      }
    if (isElementInView(sports)) {
        sports.classList.add("in-viewright");
      }
    if (isElementInView(musicsv)) {
        musicsv.classList.add("in-view");
      }
    if (isElementInView(travels)) {
        travels.classList.add("in-viewright");
      }
    if (isElementInView(reals)) {
        reals.classList.add("in-view");
      }
    if (isElementInView(documentarys)) {
        documentarys.classList.add("in-viewright");
      }
      if (isElementInView(commercials)) {
        commercials.classList.add("in-view");
      }
    if (isElementInView(eventsv)) {
        eventsv.classList.add("in-viewright");
      }
    if (isElementInView(corporates)) {
        corporates.classList.add("in-view");
      }
    if (isElementInView(tyvd)) {
        tyvd.classList.add("in-viewbelow");
      }
    if (isElementInView(rgb)) {
        rgbclassList.add("in-view");
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
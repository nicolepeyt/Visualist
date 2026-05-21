(function () {
  if (document.querySelector("footer, .visualist-footer")) return;

  const footer = document.createElement("footer");
  footer.className = "visualist-footer";
  footer.innerHTML = `
    <div class="visualist-footer__container">
      <section>
        <h2 class="visualist-footer__brand">Visualist</h2>
        <p>An Educational Website project open<br>for all students.</p>
      </section>
      <section>
        <h3 class="visualist-footer__heading">CATEGORY</h3>
        <ul class="visualist-footer__list">
          <li>Animation and<br>Multimedia</li>
          <li>Proffesional Elective 1</li>
        </ul>
      </section>
      <section>
        <h3 class="visualist-footer__heading">Developers</h3>
        <ul class="visualist-footer__list">
          <li>Mr. Lawrence John Arche</li>
          <li>Ms. Shyna Ann De<br>Guzman</li>
          <li>Mr. Louell Saguindan</li>
          <li>Ms. Nicole Amila</li>
        </ul>
      </section>
      <section>
        <h3 class="visualist-footer__heading">Adviser</h3>
        <ul class="visualist-footer__list">
          <li>MS. Farah Diva Alvarado</li>
          <li>Web Technology Instructor</li>
        </ul>
      </section>
    </div>
    <div class="visualist-footer__bar">Copyright (c) 2024 LFSY Creations. All rights reserved.</div>
  `;

  document.body.appendChild(footer);
})();

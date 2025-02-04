// Sélection des boutons et de la zone de contenu du CV
const btnFr = document.getElementById('btn-fr');
const btnEn = document.getElementById('btn-en');
const cvContent = document.getElementById('cvContent');

// Écouteur d'événements pour le bouton Français
btnFr.addEventListener('click', () => {
  cvContent.innerHTML = `
    <h2>CV en Français</h2>
    <section>
      <h3>Parcours Scolaire</h3>
      <ul>
        <li>Prepa, 2022-2024</li>
        <li>Polytech Lille, 2025</li>
      </ul>
    </section>
    <section>
      <h3>Compétences</h3>
      <p>HTML, CSS, JavaScript, C, Python, PHP, R, SQL.</p>
    </section>
    <section>
      <h3>Loisirs</h3>
      <p>Sports, voyages, jeux vidéo.</p>
    </section>
  `;
});

// Écouteur d'événements pour le bouton Anglais
btnEn.addEventListener('click', () => {
  cvContent.innerHTML = `
    <h2>CV in English</h2>
    <section>
      <h3>Education</h3>
      <ul>
        <li>Prepa, 2022-2024</li>
        <li>Polytech Lille, 2025</li>
      </ul>
    </section>
    <section>
      <h3>Skills</h3>
      <p>HTML, CSS, JavaScript, C, Python, PHP, R, SQL.</p>
    </section>
    <section>
      <h3>Hobbies</h3>
      <p>Sports, traveling, video games.</p>
    </section>
  `;
});

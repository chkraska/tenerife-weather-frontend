import React from "react";
import Header from "../../components/Header/Header";
import styles from "../../pages/AboutPage/AboutPage.module.css";

export default function AboutPage() {
  return (
    <html>
      <body className={styles.AboutPage}>
        <Header />
        <div className={styles.container}>
          <div className={styles.box}>
            <h3>
              <b>Witaj na naszej stronie "O Nas".</b>
            </h3>
            <p>
              Jesteśmy kursantami pełnym pasji i zaangażowania w dziedzinie
              front-end developmentu.
            </p>
            <p>
              Projekt ten ma na celu pobierać dane pogodowe na Teneryfie i co 10
              minut je aktualizować i wyświetlać.{" "}
              <p>
                Dzięki naszej ciągłej nauce poszerzaniu umiejętności, jesteśmy
                gotowi sprostać kolejny wyzwaniom projektowym.
              </p>
            </p>
            <p>
              Nasza filozofia opiera się na prostocie, estetyce i użyteczności.
            </p>
            <p>
              Nasze umiejętności obejmują HTML, CSS, JavaScript, a także
              framework React. Jesteśmy przekonani, że współpraca, ciągłe
              doskonalenie i pasja do tworzenia kodu to klucz do sukcesu w
              dziedzinie front-end developmentu.
            </p>
            <p>
              Cieszymy się, że możemy podzielić się naszą wiedzą i
              doświadczeniem na tej stronie
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

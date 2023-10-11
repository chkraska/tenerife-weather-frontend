import React from "react";
import Header from "../../components/Header/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <h1>O nas</h1>
      <h3>Witaj!</h3>
      <p>
        Jesteśmy kursantami gdzie wspólnie stworzyliśmy ten projekt wraz z
        naszym prowadzącym Dawidem.
      </p>
      <p>
        Projekt ten ma na celu pobierać dane pogodowe na Teneryfie i co 10 minut
        je aktualizować i wyświetlać.
      </p>
      <p>Głowynm celem tego projektu była dogłebna nauka frameworka React.</p>
    </div>
  );
}

import React from "react";
import styles from "./WeatherCard.module.css";
export default function WeatherCard({ item }) {

  const date = item.timestamp.slice(4, 21);
  return (
    <div className={styles.container}>
      <div>
        <p>Data: {date}</p>
      </div>
      <div>
        <p>Temperatura: {item.temp}</p>
      </div>
      <div>
        <p>Minimalna Temperatura: {item.min_temp}</p>
      </div>
      <div>
        <p>Maxymalna Temperatura: {item.max_temp}</p>
      </div>
      <div>
        <p>Wilgotność: {item.humidity}</p>
      </div>
      <div>
        <p>Zachumurzenie: {item.clouds}</p>
      </div>
      <div>
        <p>Opis: {item.desc}</p>
      </div>
    </div>
  );
}

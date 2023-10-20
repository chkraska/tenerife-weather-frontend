import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import styles from "../HomePage/HomePage.module.css";
import TableRow from "../../components/TableRow/TableRow";
import { VerticalBarChart } from "../../components/VerticalBarChart/VerticalBarChart";
import { RainChart } from "../../components/RainChart/RainChart";

export default function HomePage() {
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    getWeathers();
  }, []);

  const getWeathers = async () => {
    const response = await fetch("http://localhost:5000/api/pogoda");
    const { data } = await response.json();
    setWeathers(data);
  };

  return (
    <div>
      <Header />
      <h1 className={styles.title}>Dane pogodowe Teneryfy</h1>

      <div className={styles.charts}>
        <VerticalBarChart weathers={weathers} />
        <RainChart weathers={weathers} />
      </div>

      <div>
        {weathers.map((weather) => (
          <WeatherCard item={weather} />
        ))}

        <table className={styles.table}>
          <tr>
            <th>Data: </th>
            <th>Temperatura: </th>
            <th>Minimalna Temperatura:</th>
            <th>Maxymalna Temperatura:</th>
            <th>Wilgotność: </th>
            <th>Zachumurzenie: </th>
            <th>Opis: </th>
          </tr>
          {weathers.map((weather) => (
            <TableRow tr={weather} />
          ))}
        </table>
      </div>
    </div>
  );
}

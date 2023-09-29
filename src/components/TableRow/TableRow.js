import React from "react";
import styles from "./TableRow.module.css";
export default function TableRow({ tr }) {
  const date = tr.timestamp.slice(4, 21);
  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{tr.temp}</td>
        <td>{tr.min_temp}</td>
        <td>{tr.max_temp}</td>
        <td>{tr.humidity}</td>
        <td>{tr.clouds}</td>
        <td>{tr.desc}</td>
      </tr>
    </>
  );
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <h2>LOGO</h2>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/o-nas">O nas</Link>
                </li>
                <li>
                    <Link to="/kontakt">Kontakt</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

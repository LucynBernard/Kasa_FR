import React from "react"
import { Link } from "react-router-dom"
import "../styles/Errorpage.css"

export function ErrorPage() {
  return (
    <>
      <div className="error-content">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </>
  )
}

// import du useState pour gérer l'état local de mon composant Collapse pour lui dire de reste en FALSE donc FERMER.
import React, { useState } from 'react'

// import de l'icon flèche 
import expandArrow from '../../assets/expand_arrow.svg'

// Composant Collapse
function Collapse({ title, text, className }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className={className}>
      <button className="collapse__title-container" onClick={toggle}>
        <h2 className="collapse__title-container__title">{title}</h2>
        <img className={!open ? 'expand_icon' : 'expand_icon expand_icon--opened'} src={expandArrow} alt="Cliquez pour ouvrir"/>
      </button>
      {open && <div className="collapse__text">{text}</div>}
    </div>
  )
}

export default Collapse

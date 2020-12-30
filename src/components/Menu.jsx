import React from 'react'
import {   
    NavLink
  } from 'react-router-dom'

const Menu = () => {
    return (
        <div className="btn-group">
          <NavLink to ="/" className = "btn btn-dark">
            Inicio
          </NavLink>

          <NavLink to ="/equipo" className = "btn btn-dark" >
            Api MyFxBook
          </NavLink>
          
          <NavLink to ="/civilizacion" className = "btn btn-dark">
            API - Insomnia 
          </NavLink>
        </div>
    )
}

export default Menu

import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Estilos.css'

export default function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <div className='navbar_home'>
      <div className='navbar_column_1'> 
        <div className='titulo_navbar'>
          Pizzería Mamma Mia!
        </div>
        <div className='menu_principal'>
          <div className='item_menu_principal' id='inicio_menu'>
            <div className='ico_menu_principal'><i className="bi bi-house-door-fill"></i></div>
            <div><Link to="/" className='text_item_menu_principal'>Inicio</Link></div>
          </div>
          <div className={token==false?'ocultar':'item_menu_principal'} id='perfil_menu'>
            <div className='ico_menu_principal'><i className="bi bi-person-fill"></i></div>
            <div><Link to="/perfil" className='text_item_menu_principal'>Perfil</Link></div>
          </div>
          <div className={token==false?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-lock-fill"></i></div>
            <div><Link to="/cerrar-sesion" className='text_item_menu_principal'>Cerrar Sesión</Link></div>
          </div>
          <div className={token==true?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-unlock-fill"></i></div>
            <div><Link to="/login" className='text_item_menu_principal'>Login</Link></div>
          </div>
          <div className={token==true?'ocultar':'item_menu_principal'}>
            <div className='ico_menu_principal'><i className="bi bi-pencil-square"></i></div>
            <div><Link to="/registro" className='text_item_menu_principal'>Registro</Link></div>
          </div>
        </div>
    </div> 
    <div className='carrito_navbar'>
      <div className='ico_menu_principal'><i className="bi bi-cart-fill"></i></div>
      <div><Link to="/carrito" className='text_item_menu_principal'>Total: $ {total.toLocaleString()}</Link></div>
    </div>
  </div>
  )
}

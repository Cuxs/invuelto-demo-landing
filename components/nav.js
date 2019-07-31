import React from 'react'
import Link from 'next/link'
import SecondaryButton from './SecondaryButton';

const Nav = () => (
  <nav>
    <ul className="d-flex w-100 align-items-center">
      <span className='nav__title'>
      <li>INVUELTO</li>
      </span>
      <span className="nav__body">
        <li>Cómo funciona</li>
        <li>Precios</li>
        <li>FAQ</li>
        <li>Tips de ahorro</li>
      <SecondaryButton>Ingresá</SecondaryButton>
      <SecondaryButton className="ml-2">Demo</SecondaryButton>
      </span>
    </ul>
  </nav>
)

export default Nav

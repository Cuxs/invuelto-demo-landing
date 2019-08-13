import { useState, useEffect } from "react";
import DrawerToggleButton from './DrawerToggleButton';
import SecondaryButton from '../SecondaryButton';

export default props => {
  const [color, setColor] = useState('');
  const [logoColor, setLogoColor] = useState(false);
  const renderLogo = () => {
    return logoColor ?
      <div className="mt-3 toolbar__logo">
        <img src="../static/images/logo-color.png" style={{ width: '170px' }} />
      </div>
      :
      <div className="mt-3 toolbar__logo">
        <img src="../static/images/logo-blanco.png" style={{ width: '170px' }} />
      </div>
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop) {
        setColor('')
        setLogoColor(false);
      } else {
        setColor('white')
        setLogoColor(true)
      }
    });
    return () => document.removeEventListener("scroll", this);
  })
  return (
    <header className={`toolbar ${color}`}>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__container-items">
        <div><a href="/">{renderLogo()}</a></div>
        <div className="spacer" />
        <div className="toolbar__items">
          <ul>
            <li><a href="#tus-intereses-primero">Cómo funciona</a></li>
            <li><a href="#precios">Precios</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#academia-del-ahorro">Tips de ahorro</a></li>
          </ul>
          <SecondaryButton className="toolbar__button-group1" onClick={() => window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
          <SecondaryButton className="toolbar__button-group1 ml-2" onClick={() => window.location.assign('https://app.invuelto.com/demo')}>Demo</SecondaryButton>
        </div>
        <SecondaryButton className="mr-2 toolbar__button-group2" onClick={() => window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>

      </div>
    </header>
  )
}
import { useState, useEffect } from "react";
import DrawerToggleButton from './DrawerToggleButton';
import SecondaryButton from '../SecondaryButton';
import { Link } from 'react-scroll'

export default props => {
  const [color, setColor] = useState('');
  const [logoColor, setLogoColor] = useState(false);
  const renderLogo = () => {
    return logoColor ?
      <div className="mt-3 toolbar__logo">
        <img src="../static/images/logo-color.png" />
      </div>
      :
      <div className="mt-3 toolbar__logo">
        <img src="../static/images/logo-blanco.png" />
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
            <li><div className="new-item"><a href="/vueltos" style={{color:'rgb(0,195,184)'}}>Vueltos<small>NUEVO</small></a></div></li>
            <li>{props.external ?
              <a href="/index#tus-intereses-primero">Cómo funciona</a>
              :
              <Link activeClass="side-drawer--active" to="tus-intereses-primero" offset={-120} duration={1000}>
                Cómo funciona
              </Link>
            }</li>
            <li>{props.external ?
              <a href="/index#precios">Precios</a>
              :
              <Link activeClass="side-drawer--active" to="precios" offset={-120} duration={1000}>
                Precios
              </Link>
            }</li>
            {/* <li>{props.external ?
              <a href="#">FAQ</a>
              :
              <Link activeClass="side-drawer--active" to="test1" offset={50} duration={1000}>
                Test 1
              </Link>
            }</li> */}
            <li>{props.external ?
              <a href="/index#academia-del-ahorro">Tips de ahorro</a>
              :
              <Link activeClass="side-drawer--active" to="academia-del-ahorro" offset={-120} duration={1000}>
                Tips de ahorro
              </Link>
            }</li>
          </ul>
          <SecondaryButton className="toolbar__button-group1" onClick={() => window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
          <SecondaryButton className="toolbar__button-group1 ml-2" onClick={() => window.location.assign('https://app.invuelto.com/demo')}>Demo</SecondaryButton>
        </div>
        <SecondaryButton className="mr-2 toolbar__button-group2" onClick={() => window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>

      </div>
    </header>
  )
}
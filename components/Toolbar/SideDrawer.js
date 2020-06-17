import { Fragment } from "react";
import SecondaryButton from "../SecondaryButton";
import { Link } from 'react-scroll'

export default props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <img alt="decorado" className="side-drawer__circle1" src="../../static/images/circle-aqua.png"></img>
      <button className="side-drawer__close-button" onClick={props.click}>&#8592;</button>
      <div className="text-center">
        <ul>
          <li><div><a href="/vueltos">Vueltos</a></div></li>
          <li>
            <a href="index#como-funciona" onClick={() => props.click()} >Cómo funciona</a>
            </li>
          <li>
            <a href="index#precios" onClick={() => props.click()} >Precios</a>
          </li>
          {/* <li>{props.external ? <a href="#">FAQ</a>:
        <Link onClick={() => props.click()}  activeClass="side-drawer--active" to="como-funciona" offset={-120} duration={1000}>
                FAQ
              </Link>
            }</li> */}
          <li> <a href="index#tips-de-ahorro" onClick={() => props.click()} >Tips de ahorro</a>
          </li>
        </ul>
        <SecondaryButton className="side-drawer__login" onClick={() => window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
      </div>
      <img alt="decorado" className="side-drawer__circle2" src="../../static/images/half-circle-blue-thin.png"></img>
    </nav>
  );
};
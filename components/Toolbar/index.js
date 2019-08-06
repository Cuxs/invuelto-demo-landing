import DrawerToggleButton from './DrawerToggleButton';
import SecondaryButton from '../SecondaryButton';

export default props => (
  <header className="toolbar">
    <div className="toolbar__toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
    <div className="toolbar__container-items">
      <div className="toolbar__logo"><a href="/">Invuelto</a></div>
      <div className="spacer" />
      <div className="toolbar__items">
        <ul>
          <li>Cómo funciona</li>
          <li>Precios</li>
          <li>FAQ</li>
          <li>Tips de ahorro</li>
        </ul>
        <SecondaryButton className="d-none d-md-block">Ingresá</SecondaryButton>
        <SecondaryButton className="ml-2">Demo</SecondaryButton>
      </div>
    </div>
  </header>
);
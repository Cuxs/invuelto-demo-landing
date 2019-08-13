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
          <li><a href="#tus-intereses-primero">Cómo funciona</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#academia-del-ahorro">Tips de ahorro</a></li>
        </ul>
        <SecondaryButton className="toolbar__button-group1" onClick={()=>window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
        <SecondaryButton className="toolbar__button-group1 ml-2" onClick={()=>window.location.assign('https://app.invuelto.com/demo')}>Demo</SecondaryButton>
      </div>
      <SecondaryButton className="mr-2 toolbar__button-group2" onClick={()=>window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>

    </div>
  </header>
  //d-md-none d-lg-block
// d-md-none d-lg-block

// d-lg-none d-md-block
);
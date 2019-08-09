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
          <a onClick={()=>{console.log('cllick'); props.drawerClickHandler()}} href="#tus-intereses-primero"><li>Cómo funciona</li></a>
          <a onClick={()=>{console.log('cllick'); props.drawerClickHandler()}} href="#precios"><li>Precios</li></a>
          <a onClick={()=>{console.log('cllick'); props.drawerClickHandler()}} href="#"><li>FAQ</li></a>
          <a onClick={()=>{console.log('cllick'); props.drawerClickHandler()}} href="#academia-del-ahorro"><li>Tips de ahorro</li></a>
        </ul>
        <SecondaryButton className="d-none d-md-block" onClick={()=>window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
        <SecondaryButton className="d-none d-md-block ml-2" onClick={()=>window.location.assign('https://app.invuelto.com/demo')}>Demo</SecondaryButton>
      </div>
      <SecondaryButton className="mr-2 d-md-none d-block" onClick={()=>window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>

    </div>
  </header>
);
import SecondaryButton from "../SecondaryButton";

export default props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <img className="side-drawer__circle1" src="../../static/images/circle-aqua.png"></img>
      <button className="side-drawer__close-button" onClick={props.click}>&#8592;</button>
      <div className="text-center">
      <ul>
      <a href="#tus-intereses-primero"><li>Cómo funciona</li></a>
      <a href="#precios"><li>Precios</li></a>
      <a href="#"><li>FAQ</li></a>
      <a href="#academia-del-ahorro"><li>Tips de ahorro</li></a>
      </ul>
      <SecondaryButton className="side-drawer__login" onClick={()=>window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
      </div>

      <img className="side-drawer__circle2" src="../../static/images/half-circle-blue-thin.png"></img>
    </nav>
  );
};
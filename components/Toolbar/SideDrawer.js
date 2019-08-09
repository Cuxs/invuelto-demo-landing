import SecondaryButton from "../SecondaryButton";

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
      <li><a onClick={()=>props.click()} href="#tus-intereses-primero">Cómo funciona</a></li>
      <li><a onClick={()=>props.click()} href="#precios">Precios</a></li>
      <li><a onClick={()=>props.click()} href="#">FAQ</a></li>
      <li><a onClick={()=>props.click()} href="#academia-del-ahorro">Tips de ahorro</a></li>
      </ul>
      <SecondaryButton className="side-drawer__login" onClick={()=>window.location.assign('https://app.invuelto.com/login')}>Ingresá</SecondaryButton>
      </div>

      <img alt="decorado" className="side-drawer__circle2" src="../../static/images/half-circle-blue-thin.png"></img>
    </nav>
  );
};
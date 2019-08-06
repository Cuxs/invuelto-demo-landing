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
        <li>Cómo funciona</li>
        <li>Precios</li>
        <li>FAQ</li>
        <li>Tips de ahorro</li>
      </ul>
      <SecondaryButton className="side-drawer__login">Ingresá</SecondaryButton>
      </div>

      <img className="side-drawer__circle2" src="../../static/images/circle-blue-thin.png"></img>
    </nav>
  );
};
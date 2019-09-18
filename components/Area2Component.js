import PrimaryButton from "./PrimaryButton";
export default ({showImages}) => <div className="area2__container" id="vuelven-los-vueltos">
  <h2><b>Vuelven los vueltos</b></h2>
  {showImages? <img alt="vuelven los vueltos" className="area2__image" src='../static/images/pig-enamorado.png'></img>:<div/>}
  <div className="container">
  <h3 className="mt-5 mb-4"><b>No más</b> vueltos en <b>caramelos</b></h3>
  {showImages? <img className="area2__spots" alt="decoracion" src="../static/images/multiple-spots.png"></img>:<div/>}
  <h3 className="text-secondary">Ahora podés pedir tu vuelto</h3>
  <h3 className="text-secondary mb-5">y dar vuelto a tus clientes.</h3>
  </div>
  {showImages? <img className="area2__circle" src="../static/images/circle-opaqueblue.png"></img>:<div/>}
  <PrimaryButton className="mt-5 mb-5" bold='Saber' noBold="más" onClick={()=>window.location.assign('/vueltos')} />

</div>
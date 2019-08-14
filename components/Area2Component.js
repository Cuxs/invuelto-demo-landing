import PrimaryButton from "./PrimaryButton";
export default () => <div className="area2__container" id="vuelven-los-vueltos">
  <h2><b>Vuelven los vueltos</b></h2>
  <img alt="vuelven los vueltos" className="area2__image" src='../static/images/pig-enamorado.png'></img>
  <h3 className="mt-5 mb-4"><b>No más</b> vueltos en <b>caramelos</b></h3>
  <img className="area2__spots" alt="decoracion" src="../static/images/multiple-spots.png"></img>
  <h3 className="text-secondary">La solución a los problemas</h3>
  <h3 className="text-secondary mb-5">de cambio y redondeo</h3>
  <img className="area2__circle" src="../static/images/circle-opaqueblue.png"></img>
  <p className="container"><b>Ahora podés pedir tu vuelto y dar vuelto a tus clientes.</b></p>
    <p>¡Cada peso cuenta!. Sumalo a tu alcancía</p>
    <p>para generar ganancias.</p>
  <PrimaryButton className="mt-5 mb-5" bold='Saber' noBold="más" onClick={()=>window.location.assign('https://app.invuelto.com/register')} />

</div>
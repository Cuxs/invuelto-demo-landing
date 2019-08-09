import PrimaryButton from "./PrimaryButton";

export default () => <div className="area1__container" id="tus-intereses-primero">
  <h2 className="mb-5"><b>Tus intereses primero</b></h2>
  <img className="area1__image" src='../static/images/pig-musculoso.png'></img>
  <h3 className="mb-5"><b>Potenciamos</b> tus ahorros</h3>
  <div className="area1__step-container">
    <div className="area1__step1">
      <img src="../static/images/alcancia.png"></img>
      <h3>1. <b>Activá</b> tu</h3>
      <h3 className="mb-4"> alcancía</h3>
      <p>Registrate con tu email,</p>
      <p>teléfono, contraseña y DNI.</p>
    </div>
    <div className="area1__step2">
      <img src="../static/images/ahorro.png"></img>
      <h3>2. Tu primer</h3>
      <h3 className="mb-4"><b>ahorro</b></h3>
      <p>Vos elegís el monto</p>
      <p>y la forma de</p>
      <p>ingresar dinero.</p>
    </div>
      <img className="area1__spots" src="../static/images/multiple-spots.png"></img>
    <div className="area1__step3">
      <img src="../static/images/potenciamos.png"></img>
      <h3>3. <b>Potenciamos</b></h3>
      <h3 className="mb-4">tus ahorros</h3>
      <p>Tus ahorros generan</p>
      <p>ganancias todos los días,</p>
      <p>revisá tu saldo 24/7.</p>
    </div>
    <div className="area1__step4">
      <img src="../static/images/bolsillo.png"></img>
      <h3>4. De la alcancía</h3>
      <h3 className="mb-4">a <b>tu bolsillo</b></h3>
      <p>Sacá tu plata</p>
      <p>cuando quieras</p>
      <p>y sin costo.</p>
    </div>
  </div>
  <PrimaryButton className="mt-5 mb-5" bold='Quiero' noBold="ahorrar" />
</div>
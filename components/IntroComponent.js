import PrimaryButton from "./PrimaryButton";

export default () => <div className="text-center container">
  <h2 className="mb-5">¡Hola! Somos <b>Invuelto, tu partner de ahorro</b> </h2>
  <span className="d-none d-md-block">
    <h2>¿No sabés en qué ni cuándo </h2>
    <h2 className="mb-5">se te va la plata?</h2>
  </span>
  <span className="d-mdnone d-block">
    <h2 className="mb-5">¿No sabés en qué ni cuándo se te va la plata?</h2>
  </span>
  <p>Queremos darte una mano para que consigas ahorrar.</p>
  <p className="mb-5"><b>¡Dale una sorpresa a tu yo del futuro!</b></p>
  <PrimaryButton bold="activá" noBold="tu alcancía" onClick={() => window.location.assign('https://app.invuelto.com/register')} />
</div>

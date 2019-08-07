import PrimaryButton from "./PrimaryButton";

export default () => <div className="text-center container">
  <h2 className="mb-5">¡Hola! Somos <b>Invuelto, tu partner de ahorro</b> </h2>
  <h2 style={{fontSize:'30px'}}>¿No sabés en que ni cuando </h2>
  <h2 style={{fontSize:'30px'}} className="mb-5">se te va la plata?</h2>
  <p>Queremos darte una mano para que consigas ahorrar.</p>
  <p className="mb-5"><b>¡Dale una sorpresa a tu yo del futuro!</b></p>
  <PrimaryButton bold="activá" noBold="tu alcancía" />
</div>

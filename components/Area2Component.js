import PrimaryButton from "./PrimaryButton";
import { Carousel } from "react-responsive-carousel";

export default ({ showImages }) => <div className="area2__container" id="como-funciona">
  <h2 className="container"><b> Hacé crecer tu plata, <br/>  sin saber de inversiones</b></h2>
  <h3 className="mb-5 container">Cómo hacer crecer tu plata <br /> y retirarla en 4 pasos.</h3>
  <img className="area2__image d-none d-md-block" alt="chancho compu" src='../static/images/pig-compu.png'></img>
  <div className="d-none d-sm-none d-md-flex area2__step-container mb-5">
    <div className="area2__step">
      <img alt="alcancia" src="../static/images/celular.svg"></img>
      <h3>1. Registrate gratis</h3>
      <p>Sólo con tu teléfono y DNI, y una contraseña </p>
    </div>
    <div className="area2__step">
      <img alt="ahorro" src="../static/images/invuelto-icon.svg"></img>
      <h3> 2. Hacé tu primer ahorro </h3>
      <p>Transferí a tu alcancía lo que puedas. </p>
    </div>
    <div className="area2__step">
      <img alt="potenciamos tu ahorro" src="../static/images/ahorro-icon.svg"></img>
      <h3>3. Tu plata crece y se acumula!</h3>
      <p>Mientras decidís qué hacer con tu plata, la hacemos crecer!</p>
    </div>
    <div className="area2__step">
      <img alt="Directo a tu bolsillo" src="../static/images/wallet-icon.svg"></img>
      <h3>4. De la alcancía a tu bolsillo</h3>
      <p> Sacá tu plata cuando quieras y sin costo </p>
    </div>
  </div>
  <div className="d-sm-block d-md-none d-lg-none">
    <Carousel
      centerMode
      swipeable
      transitionTime={200}
      className="pricing__carousel"
      emulateTouch
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}>
      <div className="area2__step">
        <img alt="alcancia" src="../static/images/celular.svg"></img>
        <h3 className="mt-4 mb-5">1. Registrate gratis</h3>
        <p>Sólo con tu teléfono y DNI, y una contraseña </p>
      </div>
      <div className="area2__step">
        <img alt="ahorro" src="../static/images/invuelto-icon.svg"></img>
        <h3 className="mt-4 mb-5"> 2. Hacé tu primer ahorro </h3>
        <p>Vos elegís cómo; vueltos, reintegros, guardar o programar </p>
      </div>
      <div className="area2__step">
        <img alt="potenciamos tu ahorro" src="../static/images/ahorro-icon.svg"></img>
        <h3 className="mt-4">3. Tu plata crece y se acumula!</h3>
        <p>Tus ahorros generan ganancias todos los días </p>
      </div>
      <div className="area2__step">
        <img alt="Directo a tu bolsillo" src="../static/images/wallet-icon.svg"></img>
        <h3 className="mt-4">4. De la alcancía a tu bolsillo</h3>
        <p> Sacá tu plata cuando quieras y sin costo </p>
      </div>
    </Carousel>
  </div>
  <PrimaryButton className="mt-5 mb-2" bold='Crear alcancía' onClick={() => window.location.assign('https://app.invuelto.com/register')} />
</div>
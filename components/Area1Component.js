import PrimaryButton from "./PrimaryButton";
import { Carousel } from "react-responsive-carousel";

export default () => <div className="area1__container" id="tus-intereses-primero">
  <h2 className="container d-none d-sm-block"><b> ¿Cómo puedo juntar plata?</b></h2>
  <h2 className="d-md-block d-lg-none"><b> ¿Cómo puedo <br/> juntar plata?</b></h2>
  <h3 className="mb-5 d-none d-sm-block">¡Conocé las distintas formas que <br /> tenemos para vos!</h3>
  <img className="area1__image d-none d-md-block" alt="chancho contame mas" src='../static/images/pig-contamemas.png'></img>
  <div className="d-none d-md-none d-lg-flex area1__step-container">
    <div className="area1__step">
      <img alt="alcancia" src="../static/images/celular.svg"></img>
      <h3><b>Recibí tus vueltos</b> en tu</h3>
      <h3> alcancía virtual, no más</h3>
      <h3> caramelos!</h3>
    </div>
    <div className="area1__step">
      <img alt="ahorro" src="../static/images/clock.svg"></img>
      <h3><b>Programá tu débito</b></h3>
      <h3>automático</h3>
    </div>
    <img className="area1__spots" alt="decoracion" src="../static/images/multiple-spots.png"></img>
    <div className="area1__step">
      <img alt="potenciamos tu ahorro" src="../static/images/reintegro.svg"></img>
      <h3><b>Obtené reintegros</b></h3>
      <h3> en tus compras</h3>
    </div>
    <div className="area1__step">
      <img alt="Directo a tu bolsillo" src="../static/images/rendimiento.svg"></img>
      <h3>Guardá tu plata y </h3>
      <h3><b>generá intereses</b></h3>
    </div>
  </div>
  <div className="d-md-block d-lg-none mt-5">
    <Carousel
      centerMode
      swipeable
      transitionTime={200}
      className="pricing__carousel"
      emulateTouch
      showArrows={true}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}>
      <div className="area1__step">
        <img alt="alcancia" src="../static/images/celular.svg"></img>
        <h3><b>Recibí tus vueltos</b> en tu</h3>
        <h3> alcancía virtual, no más</h3>
        <h3> caramelos!</h3>
      </div>
      <div className="area1__step">
        <img alt="ahorro" src="../static/images/clock.svg"></img>
        <h3><b>Programá tu débito</b></h3>
        <h3>automático</h3>
      </div>
      <div className="area1__step">
        <img alt="potenciamos tu ahorro" src="../static/images/reintegro.svg"></img>
        <h3><b>Obtené reintegros</b></h3>
        <h3> en tus compras</h3>
      </div>
      <div className="area1__step">
        <img alt="Directo a tu bolsillo" src="../static/images/rendimiento.svg"></img>
        <h3>Guardá tu plata y </h3>
        <h3><b>generá intereses</b></h3>
      </div>
    </Carousel>
  </div>
  {/* <PrimaryButton className="mt-5 mb-2" bold='Quiero ahorrar' onClick={()=>window.location.assign('https://app.invuelto.com/register')} /> */}
</div>
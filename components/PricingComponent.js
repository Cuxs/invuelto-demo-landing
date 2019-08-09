import { Carousel } from "react-responsive-carousel";

export default () => <div className="pricing__container" id="precios">
  <h2><b>Costos</b></h2>
  <h3 className="text-secondary mt-4">Tu alcancía gratis hasta $3500.</h3>
  <h3 className="text-secondary">Podés ahorrar y generar intereses.</h3>
  <div className="d-none d-md-flex pricing__items-container">
    <div className="item-normal">
      <p className="item-normal__price">$<b>0</b></p>
      <p className="item-normal__description">Revisar <b>Saldos</b> y</p>
      <p className="item-normal__description"><b>MOVIMIENTOS</b></p>
    </div>
    <div className="item-normal">
      <p className="item-normal__price">$<b>0</b></p>
      <p className="item-normal__description"><b>Simulador</b> de</p>
      <p className="item-normal__description"><b>progresos</b></p>
    </div>
    <div className="item-important">
      <p className="item-important__price">$<b>0</b></p>
      <p className="item-important__description">Usuario<b> INVUELTO FULL</b></p>
    </div>
    <div className="item-normal">
      <p className="item-normal__price">$<b>0</b></p>
      <p className="item-normal__description"><b>Ingrsar</b> o <b>RETIRAR</b></p>
      <p className="item-normal__description"><b>dinero 24/7</b></p>
    </div>
  </div>
  <div className="d-block d-md-none">
    <Carousel 
      centerMode
      swipeable
      transitionTime={200}
      className="pricing__carousel"
      emulateTouch
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}>
      <div className="item-normal">
        <p className="item-normal__price">$<b>0</b></p>
        <p className="item-normal__description">Revisar <b>Saldos</b> y</p>
        <p className="item-normal__description"><b>MOVIMIENTOS</b></p>
      </div>
      <div className="item-normal">
        <p className="item-normal__price">$<b>0</b></p>
        <p className="item-normal__description"><b>Simulador</b> de</p>
        <p className="item-normal__description"><b>progresos</b></p>
      </div>
      <div className="item-important">
        <p className="item-important__price">$<b>0</b></p>
        <p className="item-important__description">Usuario<b> INVUELTO FULL</b></p>
      </div>
      <div className="item-normal">
        <p className="item-normal__price">$<b>0</b></p>
        <p className="item-normal__description"><b>Ingrsar</b> o <b>RETIRAR</b></p>
        <p className="item-normal__description"><b>dinero 24/7</b></p>
      </div>
    </Carousel>
  </div>
  <p className="mt-5">Si ahorrás más $3.500, sólo pagás $35 por mes;</p>
  <p>Y si ahorrás más de $25.000 sólo pagás 0,16% por mes.</p>


</div>
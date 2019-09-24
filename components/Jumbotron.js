import Particles from 'react-particles-js';
import PrimaryButton from './PrimaryButton';
export default () => {
  return (
    <section>
      <div className="jumbotron__container row mr-0">
        <div className="jumbotron__elements-container col-md-8 col-lg-6">
          <h3 className="d-block d-md-none jumbotron__spot-title">¡Tu <b>alcancía</b> digital!</h3>
          <img alt="chachito" className="jumbotron__pig" src="../static/images/pig-neo.png" style={{zIndex:'100'}} />
          {/* <img alt="moneda" className="jumbotron__coin-1" src="../static/images/coin.png" /> */}
          {/* <img alt="moneda" className="jumbotron__coin-2" src="../static/images/coin.png" /> */}
          <img alt="celular" className="jumbotron__phone" src="../static/images/phone.png" />
          <h3 className="d-none d-md-block jumbotron__spot-title">¡Tu <b>alcancía</b> digital!</h3>
        </div>
        <div className="jumbotron__title col-lg-4 col-md-12 pr-0">
          <h2 className="mb-2"><b>Bienvenidos Neoahorristas</b></h2>
          <p>Creamos una dimensión dónde <b>ahorrar</b> funciona</p>
          <PrimaryButton className="mt-5" bold="activá" noBold="tu alcancía" onClick={() => window.location.assign('https://app.invuelto.com/register')} />
        </div>

        <div className="jumbotron__circle">
          <img alt="decorado" src="../static/images/circle-jumbo.png" />
        </div>

      </div>
    </section>)
}
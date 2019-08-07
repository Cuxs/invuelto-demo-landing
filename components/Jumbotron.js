import PrimaryButton from './PrimaryButton';
export default () => {
  return (<div className="jumbotron__container">
    <div className="jumbotron__elements-container">
      <h3 className="d-block d-md-none jumbotron__spot-title">¡Tu <b>alcancía</b> digital!</h3>

      <img className="jumbotron__pig" src="../static/images/pig-happy.png" />
      <img className="jumbotron__coin-1" src="../static/images/coin.png" />
      <img className="jumbotron__coin-2" src="../static/images/coin.png" />
      <img className="jumbotron__phone" src="../static/images/phone.png" />
      <h3 className="d-none d-md-block jumbotron__spot-title">¡Tu <b>alcancía</b> digital!</h3>
    </div>
    <div className="jumbotron__title">
      <h2 className="mb-3"><b>¡Tus intereses primero!</b></h2>
      <p><b>Cuidamos tu plata</b> de la inflación</p>
      <p>y te ayudamos a <b>ahorrar</b>.</p>
      <PrimaryButton className="mt-3" bold="activá" noBold="tu alcancía" />
    </div>
    <div className="jumbotron__circle">
    <img src="../static/images/circle-jumbo.png" />
    </div>

  </div>)
}
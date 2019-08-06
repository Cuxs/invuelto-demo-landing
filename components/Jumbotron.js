import PrimaryButton from './PrimaryButton';
export default () =>{ 
  return(<div className="jumbotron__container">
  <div className="jumbotron__elements-container">
    <img className="jumbotron__pig" src="../static/images/pig-happy.png" />
    <img className="jumbotron__coin-1" src="../static/images/coin.png" />
    <img className="jumbotron__coin-2" src="../static/images/coin.png" />
    <img className="jumbotron__phone" src="../static/images/phone.png" />
    <h3 className="jumbotron__spot-title">¡Tu <b>alcancía</b> digital!</h3>
  </div>
  <span className="jumbotron__title">
    <h2 className="mb-3"><b>¡Tus intereses primero!</b></h2>
    <p><b>Cuidamos tu plata</b> de la inflación</p>
    <p>y te ayudamos a <b>ahorrar</b>.</p>
    <PrimaryButton className="mt-3" bold="activá" noBold="tu alcancía" />
  </span>
  <svg height="500" width="500" className="semicircle__right">
    <circle cx="500" cy="200" r="150" stroke="rgb(205,231,233)" strokeWidth="30" fill="white" />
  </svg>

</div>)}
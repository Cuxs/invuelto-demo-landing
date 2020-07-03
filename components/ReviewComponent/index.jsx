import dynamic from 'next/dynamic'
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'))
import './review.scss';

const ReviewComponent = () => (
  <div className="reviews__contaniner">
    <h2><b>En serio sirve</b></h2>
    <img src="../static/images/spot-background.svg" className="spot--bg" />
    <div className="reviews__row d-none d-md-none d-lg-flex">
      <div className="review">
        <img src="../static/images/Fabiola.png" />
        <p>Es una forma segura de ahorrar tu plata y que crezca sin el riesgo de perder en el proceso.</p>
        <img className="stars" src="../static/images/five-stars.svg" />
      </div>
      <div className="review" style={{ marginTop: '150px' }}>
        <img src="../static/images/Lucas.png" />
        <p>Me permite ahorrar sin ningun tipo de esfuerzo ni gestión, con pocos pesos voy incrementando mi alcancía.</p>
        <img className="stars" src="../static/images/five-stars.svg" />
      </div>
      <img src="../static/images/quote-icon.svg" className="quote--icon" />
      <div className="review">
        <img src="../static/images/Segusmundo.png" />
        <p>Permite generar estrategias de ahorro automatizadas. Soluciones digitales para que ahorrar no sea un sacrificio sino algo simple.</p>
        <img className="stars" src="../static/images/five-stars.svg" />
      </div>
      <img src="../static/images/quote-background.svg" className="quote--bg" />
    </div>
    <div className="d-md-block d-lg-none">
      <Carousel
        centered
        infinite
        clickToChange
        autoPlay={4000}
        slidesPerPage={1}
      >
         <div className="review">
        <img src="../static/images/Fabiola.png" />
        <p>Es una forma segura de ahorrar tu plata y que crezca sin el riesgo de perder en el proceso.</p>
        <img className="stars" src="../static/images/five-stars.svg" />
      </div>
      <div className="review" style={{ marginTop: '150px' }}>
        <img src="../static/images/Lucas.png" />
        <p>Me permite ahorrar sin ningun tipo de esfuerzo ni gestión, con pocos pesos voy incrementando mi alcancía.</p>
        <img className="stars" src="../static/images/five-stars.svg" />
      </div>
      <div className="review">
        <img src="../static/images/Segusmundo.png" />
        <p>Permite generar estrategias de ahorro automatizadas. Soluciones digitales para que ahorrar no sea un sacrificio sino algo simple.</p>
        <img className="stars" src="../static/images/five-stars.svg" />
      </div>
      </Carousel>
      <img src="../static/images/quote-background.svg" className="quote--bg" />
    </div>
  </div>
)

export default ReviewComponent;
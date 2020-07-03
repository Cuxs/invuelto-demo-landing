import { useRouter } from 'next/router'
import SpecialButton from "../components/SpecialButton";
export default ({ showImages }) => {
  const router = useRouter()

  return (<section>
    <div className="howto__container">
      {showImages? <img className="howto__circle1" src="../static/images/circle-aqua.png" />: <div/>}
      <div className="howto__elements-container">
        <h2 className="text-primary"><b>La posta de invuelto</b></h2>
        <div className="howto__areas-container">
          <div className="howto__area1">
            {showImages ? <img alt="Intereses" src="../static/images/howto_step1.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4">Te damos el primer empujón</h3>
            <p className="text-primary">Juntar plata te ayuda en situaciones claves. Por eso la hicimos más fácil.</p>
          </div>
          <div className="howto__area2">
            {showImages ? <img alt="Vueltos" src="../static/images/howto_step2.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4">A tu medida</h3>
            <p className="text-primary">Sabemos que cuesta, por eso desarrollamos varias formas de juntar inteligentemente.</p>
          </div>
          <div className="howto__area3">
            {showImages ? <img alt="tips de ahorro" src="../static/images/howto_step3.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4">Sin esfuerzo</h3>
            <p className="text-primary">Automatizamos la forma de juntar plata para que sea muucho más fácil.</p>
          </div>
        </div>
      </div>
      {showImages ? <img className="howto__circle2" src="../static/images/circle-opaqueblue.png" /> : <div />}
    </div>
  </section>)
}
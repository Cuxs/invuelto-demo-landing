import { useRouter } from 'next/router'
import SpecialButton from "../components/SpecialButton";
export default ({ showImages }) => {
  const router = useRouter()

  return (<section>
    <div className="howto__container">
      {showImages? <img className="howto__circle1" src="../static/images/circle-aqua.png" />: <div/>}
      <div className="howto__elements-container">
        <h2 className="text-primary">¿Por qué invuelto?</h2>
        <div className="howto__areas-container">
          <div className="howto__area1">
            {showImages ? <img alt="Intereses" src="../static/images/howto_step1.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4"><b>Automático</b></h3>
            <p className="text-primary">Vos solo definís el <b>monto</b></p>
            <p className="text-primary mb-4"> nosotros nos ocupamos del resto</p>
            <p className="text-primary"><b>+ Simple</b></p>
          </div>
          <div className="howto__area2">
            {showImages ? <img alt="Vueltos" src="../static/images/howto_step2.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4"><b>A tu medida</b></h3>
            <p className="text-primary">El monto que quieras</p>
            <p className="text-primary mb-4"><b>cuando quieras</b>.</p>
            <p className="text-primary"><b>+ Flexible</b></p>
          </div>
          <div className="howto__area3">
            {showImages ? <img alt="tips de ahorro" src="../static/images/howto_step3.png"></img> : <div />}
            <h3 className="mb-0 mt-4 mb-4"><b>Sin esfuerzo</b></h3>
            <p className="text-primary">Con <b>microahorros</b></p>
            <p className="text-primary mb-4">lográ tus objetivos.</p>
            <p className="text-primary"><b>100% digital</b></p>
          </div>
        </div>
      </div>
      {showImages ? <img className="howto__circle2" src="../static/images/circle-opaqueblue.png" /> : <div />}
    </div>
  </section>)
}
import { useRouter } from 'next/router'
import SpecialButton from "../components/SpecialButton";
export default () => {
  const router = useRouter()

  return (<section>
    <div className="howto__container">
      <img className="howto__circle1" src="../static/images/circle-aqua.png" />
      <div className="howto__elements-container">
        <h3>¿Cómo ahorrar?</h3>
        <div className="howto__areas-container">
          <div className="howto__area1">
            <img alt="Intereses" src="../static/images/howto_step1.png"></img>
            <h3 className="mb-0 mt-4"><b>Tus intereses</b></h3>
            <h3 className="mb-4">primero</h3>
            <p className="text-primary">Tus ahorros crecen todos los días, </p>
            <p className="text-primary mb-4"> <b>y se nota.</b> 😉</p>
            <a href="#tus-intereses-primero"><SpecialButton>Ahorrar ahora</SpecialButton></a>
          </div>
          <div className="howto__area2">
            <img alt="Vueltos" src="../static/images/howto_step2.png"></img>
            <h3 className="mb-0 mt-4"><b>Vuelven los</b></h3>
            <h3 className="mb-4">vueltos</h3>
            <p className="text-primary">Ahora podes pedir tu vuelto</p>
            <p className="text-primary">y dar vuelto a tus clientes.</p>
            <p className="text-primary mb-4"><b>¡Cada peso cuenta!</b></p>
            <a href="#vuelven-los-vueltos"><SpecialButton>Quiero mi vuelto</SpecialButton></a>
          </div>
          <div className="howto__area3">
            <img alt="tips de ahorro" src="../static/images/howto_step3.png"></img>
            <h3 className="mb-0 mt-4"><b>Academia</b></h3>
            <h3 className="mb-4">del ahorro</h3>
            <p className="text-primary"><b>Tips</b> para que tu plata</p>
            <p className="text-primary mb-4">rinda al máximo.</p>
            <a href="#academia-del-ahorro"><SpecialButton>Aprender a ahorrar</SpecialButton></a>
          </div>
        </div>
      </div>
      <img className="howto__circle2" src="../static/images/circle-opaqueblue.png" />
    </div>
  </section>)
}
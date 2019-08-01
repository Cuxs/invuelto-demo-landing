import SpecialButton from "../components/SpecialButton";
export default () => <div className="howto__container">
  <img className="howto__circle1" src="../static/images/circle-aqua.png" />
  <div className="howto__elements-container">
    <h3>¿Cómo ahorrar?</h3>
    <div className="howto__step-container">
      <div className="howto__step1">
        <img src="../static/images/howto_step1.png"></img>
        <h3 className="mb-0 mt-4"><b>Tus intereses</b></h3>
        <h3 className="mb-4">primero</h3>
        <p className="text-primary">Tus ahorros generan intereses a</p>
        <p className="text-primary mb-4">tu favor. <b>¡Alcanzá tus metas!</b></p>
        <SpecialButton>Ahorrar ahora</SpecialButton>
      </div>
      <div className="howto__step2">
        <img src="../static/images/howto_step2.png"></img>
        <h3 className="mb-0 mt-4"><b>Vuelven los</b></h3>
        <h3 className="mb-4">vueltos</h3>
        <p className="text-primary">Ahora podes pedir tu vuelto</p>
        <p className="text-primary">y dar vuelto a tus clientes.</p>
        <p className="text-primary mb-4"><b>¡Cada peso cuenta!</b></p>
        <SpecialButton>Quiero mi vuelto</SpecialButton>

      </div>
      <div className="howto__step3">
        <img src="../static/images/howto_step3.png"></img>
        <h3 className="mb-0 mt-4"><b>Academia</b></h3>
        <h3 className="mb-4">del ahorro</h3>
        <p className="text-primary"><b>Tips</b> para que tu plata</p>
        <p className="text-primary mb-4">rinda al máximo.</p>
        <SpecialButton>Aprender a ahorrar</SpecialButton>

      </div>
    </div>

  </div>
  <img className="howto__circle2" src="../static/images/circle-opaqueblue.png" />
</div>
export default ({ showImages }) => <div className="footer__container" style={{ height: '550px' }}>
  {showImages ? <img alt="decorado" className="footer__circle1" src="../static/images/circle-security1.png" /> : <div />}

  <div>
    <div className="container">
      <div className="vueltos__footer">
        <div className="text-center">
          <h2 className="text-color3" style={{ fontSize: '25px' }}>Enterate de nuestras novedades </h2>
          <div className='d-lg-flex flex-md-column mt-5 justify-content-around'>
            <div>
              <a href="/"><h2 className="text-color3"><b>invuelto</b>.com</h2></a>
            </div>
            <div className="mt-4">
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://facebook.com/invuelto">{showImages ? <img alt="redes" src='../static/images/fb.png'/> : <div />}</a>
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://linkedin.com/in/invuelto">{showImages ? <img alt="redes" src='../static/images/in.png'/> : <div />}</a>
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://instagram.com/invuelto">{showImages ? <img alt="redes" src='../static/images/insta.png'/> : <div />}</a>
              <a className="ml-3" target="__blank" rel="noopener noreferrer" href="https://twitter.com/invuelto">{showImages ? <img alt="redes" src='../static/images/twitter.png'/> : <div />}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__social-container">
      </div>
    </div>
    <img alt="decorado" className="footer__circle2" src="../static/images/circle-security2.png" />
    <img className="deco6" src="/static/images/vueltos/circle-2.svg" alt="decorado" />
  </div>
  <a href="/terminos-y-condiciones"><p className="text-color3 text-center mb-5">Términos y condiciones</p></a>
  {showImages ? <img alt="decorado" className="footer__circle2" src="../static/images/circle-security2.png" /> : <div />}

</div>
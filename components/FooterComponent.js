export default ({showImages}) => <div className="footer__container">
  {showImages?<img alt="decorado" className="footer__circle1" src="../static/images/circle-security1.png" />: <div/>}

  <div className="footer__elements-container container">
    <div className="footer__sign">
      <h2><b>invuelto</b>.com</h2>
    </div>
    <div className="footer__social-container">
      <h3 className="footer__follow-us">Seguinos</h3>
      <div className='footer__social'>
        <a target="__blank" rel="noopener noreferrer" href="https://facebook.com/invuelto">{showImages? <img alt="redes" src='../static/images/fb.png'></img>:<div/>}</a>
        <a target="__blank" rel="noopener noreferrer" href="https://linkedin.com/in/invuelto">{showImages? <img alt="redes" src='../static/images/in.png'></img>:<div/>}</a>
        <a target="__blank" rel="noopener noreferrer" href="https://instagram.com/invuelto">{showImages? <img alt="redes" src='../static/images/insta.png'></img>:<div/>}</a>
        <a target="__blank" rel="noopener noreferrer" href="https://twitter.com/invuelto">{showImages? <img alt="redes" src='../static/images/twitter.png'></img>:<div/>}</a>
      </div>
    </div>
  </div>
  <a href="/terminos-y-condiciones"><p className="text-color3 text-center mb-5">Términos y condiciones</p></a>
  {showImages? <img alt="decorado" className="footer__circle2" src="../static/images/circle-security2.png" />:<div/>}

</div>
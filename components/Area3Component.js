import BlogPreview from "./BlogPreview";

export default ({showImages}) => 
  (<div className="area3__container container" id="academia-del-ahorro">
  <h2><b>Conocé nuestra academia del ahorro</b></h2>
  <h3 className="mt-5 text-primary">Te enseñamos cómo sacarle el</h3>
  <h3 className="text-primary mb-5 ">máximo provecho a tu plata.</h3>
  <div className='d-block d-md-flex justify-content-around mt-4'>
    <div className="microlink__container">
      <BlogPreview url="https://blog.invuelto.com/post/Cuanto-tengo-que-ahorrar-por-mes" showImages={showImages} />
    </div>
    <div className="microlink__container">
      <BlogPreview url="https://blog.invuelto.com/post/3-lecciones-para-manejar-mi-dinero-que-aprendi-tarde" showImages={showImages} />

    </div>
    <div className="microlink__container">
      <BlogPreview url="https://blog.invuelto.com/post/4-reglas-basicas-para-manejar-tu-plata" showImages={showImages} />
    </div>

  </div>

</div>)
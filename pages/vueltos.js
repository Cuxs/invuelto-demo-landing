import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import SecondaryButton from "../components/SecondaryButton";
import '../sass/main.scss';
import '../sass/_odometer.scss';
import VideoContainer from '../components/VideoContainer';
const Odometer = dynamic(import('react-odometerjs'), {
  ssr: false,
  loading: () => 0
});

const Vueltos = () => {
  const [count, setCount] = useState(0)

  return (<div>
    <div className="container text-center">
      <div className="vueltos__jumbotron d-flex justify-content-between flex-lg-row flex-md-column flex-column">
        <div className="vueltos__jumbotron--images">
          <img src="/static/images/formas-01.svg" className="vueltos__image1" alt="decorado" />
          <img src="/static/images/formas-02.svg" className="vueltos__image2" alt="decorado" />
          <img src="/static/images/pig-enamorado.png" className="vueltos__image3" alt="decorado" />
        </div>
        <div className="vueltos__jumbotron--text">
          <h2 className="mb-3">La solución a los problemas de cambios y redondeo </h2>
          <SecondaryButton>Comenzar</SecondaryButton>
        </div>
      </div>
      <div>
        <h2 className="text-primary text-center">¡<Odometer theme="plaza" auto value={count} format="(ddd)" animation="count" /> VUELTOS DADOS!</h2>
      </div>
      <VideoContainer videoId="2g811Eo7K8U"
        title="Quiero mi vuelto"
        subtitle="para usuarios"
        text1="Tu vuelto a tu celu por sms"
        text2="¿No tenés cuenta? Activala gratis."
        text3="Revisá como crecen día a día tus vueltos" />
      <SecondaryButton>Empezá a ahorrar</SecondaryButton>
      <VideoContainer videoId="dQw4w9WgXcQ"
        title="Quiero dar vueltos"
        subtitle="para negocios"
        text1="Vueltos de cualquier dígito ($1,00; 12,33 ó 9,76)"
        text2="Acreditación automática a tus clientes con o sin cuenta"
        text3="Ver y revisar vueltos con dos clicks" />
      <SecondaryButton>Activá tu alcancía</SecondaryButton>
    </div>


  </div>)
}
export default Vueltos;
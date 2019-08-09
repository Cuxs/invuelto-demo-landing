import React, { Fragment } from 'react'
import ReactMarkdown from "react-markdown";
import terms from "../components/terms";
import Head from '../components/head'
import Nav from '../components/nav'
import '../sass/_variables.scss';
import '../sass/_terms.scss';

export default () =>
  <Fragment>
    <Head title="Preguntas frecuentes" description="Queremos darte una mano para que consigas ahorrar, cuidamos tu plata de la inflación ya que tus ahorros generan intereses a
tu favor. Vos elegís el monto y la forma de ingresar dinero." url="www.invuelto.com" />
    <Nav></Nav>
    <div className="terms__container container">
    <ReactMarkdown source={terms()} />
    </div>
  </Fragment>
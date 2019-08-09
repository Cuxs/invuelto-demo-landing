import React, { Fragment } from 'react'
import ReactMarkdown from "react-markdown";
import terms from "../components/terms";
import Head from '../components/head'
import Nav from '../components/nav'
import '../sass/_variables.scss';
import '../sass/_terms.scss';

export default () =>
  <Fragment>
    <Head title="Invuelto, tu alcancía digital" description="Cuidamos tu plata de la inflación y te ayudamos a ahorrar." url="www.invuelto.com" />
    <Nav></Nav>
    <div className="terms__container container">
    <ReactMarkdown source={terms()} />
    </div>
  </Fragment>
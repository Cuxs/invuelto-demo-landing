import React, {Fragment} from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import '../sass/main.scss';
import Jumbotron from '../components/Jumbotron';
import IntroComponent from '../components/IntroComponent';
import HowToComponent from '../components/HowToComponent';
import Area1Component from '../components/Area1Component';
import Area2Component from '../components/Area2Component';
import Area3Component from '../components/Area3Component';
import SecurityComponent from '../components/SecurityComponent';
import PricingComponent from '../components/PricingComponent';
import FooterComponent from '../components/FooterComponent';
const Home = () => (
  <Fragment>
    <Head title="Invuelto, tu alcancía digital" description="Cuidamos tu plata de la inflación y te ayudamos a ahorrar." url="www.invuelto.com" />
    <Nav></Nav>
    <Jumbotron/>
    <IntroComponent/>
    <HowToComponent/>
    <Area1Component/>
    <Area2Component/>
    <Area3Component/>
    <SecurityComponent/>
    <PricingComponent/>
    <FooterComponent/>
   </Fragment>
)

export default Home

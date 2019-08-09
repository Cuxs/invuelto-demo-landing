import React, { Fragment, useState } from 'react'
import { Waypoint } from 'react-waypoint';
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
const Home = () => {
  const [group1, toggleVisibilityGroup1] = useState(true)
  const [group2, toggleVisibilityGroup2] = useState(false)
  const [group3, toggleVisibilityGroup3] = useState(false)
  const [group4, toggleVisibilityGroup4] = useState(false);

  return (
    <Fragment>
      <Head title="Invuelto, tu alcancía digital" description="Queremos darte una mano para que consigas ahorrar, cuidamos tu plata de la inflación ya que tus ahorros generan intereses a
tu favor. Vos elegís el monto y la forma de ingresar dinero." url="www.invuelto.com" />
      <Nav></Nav>
      {group1 ?
        <Fragment>
          <Jumbotron />
          <IntroComponent />
        </Fragment>
        : <div />
      }
      <Waypoint
        onEnter={() => toggleVisibilityGroup2(true)}
      />

      {group2 ?
        <Fragment>
          <HowToComponent />
          <Waypoint
            onEnter={() => toggleVisibilityGroup3(true)}
          />
          <Area1Component />
        </Fragment>
        : <div />
      }

      {group3 ?
        <Fragment>
          <Area2Component />
          <Waypoint
            onEnter={() => toggleVisibilityGroup4(true)}
          />
          <Area3Component />
        </Fragment>
        : <div />
      }

      {group4 ?
        <Fragment>
          <SecurityComponent />
          <PricingComponent />
          <FooterComponent />
        </Fragment> :
        <div />
      }

    </Fragment>
  )
}

export default Home

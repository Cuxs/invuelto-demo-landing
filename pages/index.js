import React, { Fragment, useState } from 'react'
import { Waypoint } from 'react-waypoint';
import Swipe from 'react-easy-swipe';
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
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);

  return (
    <Fragment>
          <Swipe onSwipeLeft={() =>toggleSideDrawer(false)}>
        <Head title="Invuelto, tu alcancía digital" description="Desarrollamos una herramienta con la que ahora sí vas a poder ahorrar, cuidamos tu plata de la inflación ya que tus ahorros generan intereses a
  tu favor. Vos elegís el monto y la forma de ingresar dinero." url="www.invuelto.com" />
        <Nav open={sideDrawerOpen} toggle={toggleSideDrawer}></Nav>
        {group1 ?
          <Fragment>
            <Jumbotron />
            <IntroComponent />
            <Waypoint
              onEnter={() => toggleVisibilityGroup2(true)}
            />
            <Area1Component />
          </Fragment>
          : <div />
        }
        <Waypoint
          onEnter={() => toggleVisibilityGroup2(true)}
        />

        {group2 ?
          <Fragment>
            <Waypoint
              onEnter={() => toggleVisibilityGroup3(true)}
            />
            <HowToComponent />
            <Area2Component />
          </Fragment>
          : <div />
        }
        <Waypoint
            onEnter={() => toggleVisibilityGroup3(true)}
        />

        {group3 ?
          <Fragment>
            <Waypoint
              onEnter={() => toggleVisibilityGroup4(true)}
            />
            <Area3Component />
            <SecurityComponent />
          </Fragment>
          : <div />
        }
        <Waypoint
            onEnter={() => toggleVisibilityGroup4(true)}
        />

        {group4 ?
          <Fragment>
            <PricingComponent />
            <FooterComponent />
          </Fragment> :
          <div />
        }
        </Swipe>
      </Fragment>
        

  )
}

export default Home

import React, {Fragment} from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import PrimaryButton from '../components/PrimaryButton'
import SpecialButton from '../components/SpecialButton'
import SecondaryButton from '../components/SecondaryButton'
import '../sass/main.scss';
import Jumbotron from '../components/Jumbotron';
import IntroComponent from '../components/IntroComponent';
import HowToComponent from '../components/HowToComponent';
import Area1Component from '../components/Area1Component';
import Area2Component from '../components/Area2Component';
import Area3Component from '../components/Area3Component';
import SecurityComponent from '../components/SecurityComponent';
const Home = () => (
  <Fragment>
    <Nav></Nav>
    <Jumbotron/>
    <IntroComponent/>
    <HowToComponent/>
    <Area1Component/>
    <Area2Component/>
    <Area3Component/>
    <SecurityComponent/>
   </Fragment>
)

export default Home

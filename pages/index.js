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
const Home = () => (
  <Fragment>
    <Nav></Nav>
    <Jumbotron></Jumbotron>
    <IntroComponent/>
    <HowToComponent/>
   </Fragment>
)

export default Home

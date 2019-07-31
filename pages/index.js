import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import PrimaryButton from '../components/PrimaryButton'
import SpecialButton from '../components/SpecialButton'
import SecondaryButton from '../components/SecondaryButton'
import '../sass/main.scss';
import Jumbotron from '../components/Jumbotron';
const Home = () => (
  <div>
    <Nav></Nav>
    <Jumbotron></Jumbotron>
   </div>
)

export default Home

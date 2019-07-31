import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import PrimaryButton from '../components/PrimaryButton'
import SpecialButton from '../components/SpecialButton'
import SecondaryButton from '../components/SecondaryButton'
import '../sass/main.scss';
const Home = () => (
  <div className="container d-flex justify-content-around mt-5">
    <PrimaryButton bold="Activá" noBold="tu alcancía" />
    <SpecialButton >Quiero mi vuelto </SpecialButton>
    <SecondaryButton>Ingresá</SecondaryButton>

   </div>
)

export default Home

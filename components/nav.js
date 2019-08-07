import React, { useState } from 'react'
import Link from 'next/link'
import Toolbar from './Toolbar';
import SideDrawer from './Toolbar/SideDrawer';
import Backdrop from './Toolbar/Backdrop';
import SecondaryButton from './SecondaryButton';

const Nav = () => {
  const [sideDrawerOpen, toggleSideDrawer] = useState(false);
  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={() => toggleSideDrawer(!sideDrawerOpen)} />
  }
  return (
    <nav>
      <div>
        <Toolbar drawerClickHandler={() => toggleSideDrawer(!sideDrawerOpen)} />
        <SideDrawer show={sideDrawerOpen} click={()=>toggleSideDrawer(!sideDrawerOpen)} />
        {backdrop}
      </div>
    </nav>
  )
}

export default Nav

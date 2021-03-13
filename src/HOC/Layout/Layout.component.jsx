import React from 'react';
import SideDrawer from '../../Navigation/SideDrawer.component';

const Layout = ({children}) => (
  <>
    <SideDrawer />
    <main>
      {children}
    </main>
  </>
);

export default Layout;
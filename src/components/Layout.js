import React from 'react';
import Header from './Header';
import Info from './CharacterInfo/Info';

const Layout = (props) => (
  <div>
    <Header />
    <div>
      <Info />
      {/*<GameField />*/}
    </div>
  </div>
);

export default Layout;
import React, { ReactElement } from 'react';

import Header from '@components/Header';

const Home: React.FC = (): ReactElement => (
  <div>
    <Header />
    <h1>Hello world!</h1>
  </div>
);

export default Home;

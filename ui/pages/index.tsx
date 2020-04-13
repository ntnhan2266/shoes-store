import React, { ReactElement } from 'react';

import Header from '@components/commons/Header';
import MetaTag from '@components/commons/MetaTag';

const Home: React.FC = (): ReactElement => (
  <div>
    <MetaTag title="a" description="" image="" url="" />
    <Header />
    <h1>Hello world!</h1>
  </div>
);

export default Home;

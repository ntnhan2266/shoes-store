import React, { ReactElement } from 'react';

import MainLayout from '@layouts/MainLayout';
import MetaTag from '@components/commons/MetaTag';

const Home: React.FC = (): ReactElement => (
  <div>
    <MetaTag title="a" description="" image="" url="" />
    <MainLayout>
      <h1>Hello</h1>
    </MainLayout>
  </div>
);

export default Home;

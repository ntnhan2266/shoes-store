import React, { ReactElement } from 'react';

import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';

const MainLayout: React.FC<any> = (props: any): ReactElement => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

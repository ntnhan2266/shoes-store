import React, { ReactElement } from 'react';

import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import RegisterMail from '@components/commons/RegisterMail';

const MainLayout: React.FC<any> = (props: any): ReactElement => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <RegisterMail />
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

// eslint-disable jsx-props-no-spreading
import App, { AppInitialProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { I18nextProvider } from 'react-i18next';

import '@assets/styles/main.scss';

import makeStore from '@store/index';
import i18next from '@utils/i18n';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props as any;
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <Component {...pageProps} />
        </I18nextProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);

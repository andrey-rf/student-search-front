import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'reakit';

import DefaultTheme from '@libs/styled-components/defaultTheme';
import { GlobalStyle } from '@libs/styled-components/globalStyle';

const App: NextPage<AppProps> = props => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Gerenciamento de Alunos</title>
      </Head>

      <Provider>
        <DefaultTheme>
          <GlobalStyle />
          <Component {...pageProps} />
        </DefaultTheme>
      </Provider>
    </>
  );
};

export default App;

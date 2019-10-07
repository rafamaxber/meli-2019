import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../components/Reset/style';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    const { styleTags } = this.props;

    return (
      <html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <GlobalStyle />
          { styleTags }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

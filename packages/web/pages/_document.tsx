import * as React from "react";

import Document, {
  Head,
  Main,
  NextDocumentContext,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface DocumentProps {
  styleTags: Array<React.ReactElement<{}>>;
  language: string;
}

class MyDocument extends Document<DocumentProps> {
  public static getInitialProps({ renderPage }: NextDocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags,
    };
  }

  public render() {
    const { styleTags, language } = this.props;

    return (
      <html lang={language}>
        <Head>
          {styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,400,700|Titillium+Web"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;

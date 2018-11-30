import * as React from "react";

import App, { Container, DefaultAppIProps } from "next/app";
import { ThemeProvider } from "../theme/styled";
import { GlobalStyle, theme } from "../theme/theme";

type MyAppProps = DefaultAppIProps;

class MyApp extends App<MyAppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;

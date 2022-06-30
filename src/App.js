import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/default";

import GlobalStyles from "./assets/styles/GlobalStyles";

//import { Container } from "./assets/styles/Container";

import RoutesApp from "./routes/RoutesApp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <>
          <RoutesApp />
        </>
      </>
    </ThemeProvider>
  );
}

export default App;

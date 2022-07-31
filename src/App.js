import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/default";

import GlobalStyles from "./assets/styles/GlobalStyles";

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

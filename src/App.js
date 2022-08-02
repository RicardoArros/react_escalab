import { ThemeProvider } from "styled-components";

import theme from "./assets/themes/default";

import GlobalStyles from "./assets/styles/GlobalStyles";

import RoutesApp from "./routes/RoutesApp";

import CartContextProvider from "./context/CartContext";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <CartContextProvider>
          <RoutesApp />
        </CartContextProvider>
      </>
    </ThemeProvider>
  );
}

export default App;

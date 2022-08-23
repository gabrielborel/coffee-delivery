import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />

      <GlobalStyle />
    </BrowserRouter>
  );
};

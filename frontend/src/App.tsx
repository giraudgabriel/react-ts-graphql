import { Fragment } from "react";
import { RouterComponent } from "./router";
import GlobalStyle from "./styles/global";

function App() {
  return <Fragment>
    <GlobalStyle />
    <RouterComponent />
  </Fragment>;
}

export default App;

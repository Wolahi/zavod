import React from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesMap from "./module/provider/RoutesMap.tsx";

import "./styles/App.scss";

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <RoutesMap />
    </BrowserRouter>
  );
};

export default App;

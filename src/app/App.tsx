import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.scss";

import Layout from "@/app/ui/Layout/ui/Layout";

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;

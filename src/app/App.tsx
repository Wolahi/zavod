import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./styles/App.scss";

import AuthProvider from "@/app/module/provider/AuthProvider.tsx";
import Layout from "@/app/ui/Layout/ui/Layout";

const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

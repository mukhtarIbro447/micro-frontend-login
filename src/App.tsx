import React from 'react'
import ReactDOM from "react-dom";
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import Footer from './components/Footer'

import "./index.scss";

const App = () => (
  <>
  <Header title={"Login page"}/>
  <div className=" bg-gray-300 mt-10 text-3xl mx-auto max-w-6xl">
    <LoginPage />
  </div>
    <Footer title={"Login page"}/>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));

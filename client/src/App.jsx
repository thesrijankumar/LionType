import React from "react";
import Header from "./components/Header";
import Words from "./components/Words";
import Speed from "./components/Speed";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Speed />
      <Words />
      <Footer />
    </div>
  )
}

export default App;
import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "../components";
import Router from "../router/router";

import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

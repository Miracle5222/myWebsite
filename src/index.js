import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById("root")
);

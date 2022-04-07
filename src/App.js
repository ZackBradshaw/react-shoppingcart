import "./App.css";

import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/cart" exact element={<Cart />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

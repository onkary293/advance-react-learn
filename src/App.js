import logo from "./logo.svg";
import "./App.css";
import Formfeed from "./components/Formfeed";
import Listele from "./components/Listele";
import Formsed from "./components/Formsed";
import CompoA from "./components/CompoA";

import Home from "./components/Home";

import { Routes,Route,Link } from "react-router-dom";
import Form from "./components/Formsed";
import {UserProvider} from "./components/userContext";
import UseEffectsHook from "./components/UseEffectsHook";
import FetchData from "./components/Fetchdata";
import UseReduce from "./components/UseReduce";
import UseRef from "./components/UseRef";




// const topdessert = data.map((dessert) => {
//   return {
//     content: `${dessert.title}-${dessert.description}`,
//     price: dessert.price,
//   };
// });
function App() {
  // console.log(topdessert);
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav className="navbar">
        <div className="navItems">
          <Link to="/home" className="navbaritems">
            Home
          </Link>
          <Link to="/list" className="navbaritems">
            List
          </Link>
          <Link to="/formsed" className="navbaritems">
            Form
          </Link>
          <Link to="/feed" className="navbaritems">
            Feed Back
          </Link>
          <Link to="/useHook" className="navbaritems">
            UseEffectHook
          </Link>
          <Link to="/fetchdata" className="navbaritems">
            FetchData
          </Link>
          <Link to="/usereducer" className="navbaritems">
            UseReducerHook
          </Link>
          <Link to="/useref" className="navbaritems">
            UseRef
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<Listele />} />
        <Route path="/formsed" element={<Formsed />} />
        <Route path="/feed" element={<Formfeed />} />
        <Route path="/useHook" element={<UseEffectsHook />} />
        <Route path="/fetchdata" element={<FetchData />} />
        <Route path="/usereducer" element={<UseReduce />} />
        <Route path="/useref" element={<UseRef />} />
      </Routes>
      <UserProvider value="Joy">{/* <CompoA /> */}</UserProvider>
    </div>
  );
}

export default App;

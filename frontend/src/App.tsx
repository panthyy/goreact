import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
function Hello() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;

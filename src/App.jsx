import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/HomePage/Homepage";

function App() {
  return (
    <Router>
      <Route exact path="/" components={Home}></Route>
    </Router>
  );
}

export default App;

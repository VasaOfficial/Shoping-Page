import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
    </Router>
  );
}
export default App;

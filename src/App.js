import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ListPriority from "./components/ListPriority";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/list-priority" element={<ListPriority />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




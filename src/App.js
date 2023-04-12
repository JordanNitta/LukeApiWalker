import { Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import Display from "./pages/Display";
function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/:search/:id" element={<Display />}/>
      </Routes>
    </div>
  );
}

export default App;

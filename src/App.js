import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;

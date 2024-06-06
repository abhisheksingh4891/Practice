import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Homepage from "./Pages/Homepage";
import Register from "./Pages/Register";

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;

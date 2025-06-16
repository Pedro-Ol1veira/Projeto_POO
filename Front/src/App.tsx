import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterStudent from "./Components/RegisterStudent/RegisterStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterStudent />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

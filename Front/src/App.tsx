import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterStudent from "./Components/RegisterStudent/RegisterStudent";
import { useStudent } from "./Context/studentContext";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const {student} = useStudent();
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!student ? <RegisterStudent /> : <Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

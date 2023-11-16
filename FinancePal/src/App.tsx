import { RegisterForm } from "./components/RegisterForm"
import DataTable from "./components/MUITable/table"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css" //Temporário 

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<RegisterForm />} />
        <Route path="/main" element={<DataTable/>} />
      </Routes>
    </Router>
  )
}

export default App

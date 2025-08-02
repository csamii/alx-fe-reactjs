import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from "./components/Sample";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

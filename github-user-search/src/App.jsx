import Sample from "./components/Sample";
import {BrowserRouter, Routes, Route} from "react-router"


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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

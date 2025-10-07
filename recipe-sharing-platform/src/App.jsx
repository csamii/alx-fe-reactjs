import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe_list" element={<RecipeList />} />
        <Route path="/add_recipe" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
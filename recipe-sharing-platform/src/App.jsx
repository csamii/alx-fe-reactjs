import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { BlogPostDetail } from './components/BlogPostDetail';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
        <Route path="/add_recipe" element={<AddRecipeForm />} />
        <Route path="/recipe_list" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
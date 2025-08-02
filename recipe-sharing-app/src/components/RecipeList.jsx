// RecipeList component
import { useRecipeStore } from './recipeStore';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const favorites = useRecipeStore(state => state.favorites);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    console.log(favorites)
    const isFavorite = (id) => favorites.some(fav => fav.id === id);

    {/* Display recipe based on search term */}
    const recipesToDisplay = searchTerm.trim() === ''
        ? recipes
        : filteredRecipes;

    {/* Toggle add and remove favorite */}
    const toggleFavorite = (recipe) => {
        if (isFavorite(recipe.id)) {
            removeFavorite(recipe.id);
        } else {
            addFavorite(recipe);
        }
    };

    return (
        <div>
            <SearchBar />
            {/*{recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                    <p>{recipe.description}</p>
                </div>
            ))}*/}
            {recipesToDisplay.map(recipe => {
                return (
                    <div key={recipe.id}>
                        <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                        <p>{recipe.description}</p>
                        <button onClick={() => toggleFavorite(recipe)}>
                            {isFavorite(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default RecipeList;
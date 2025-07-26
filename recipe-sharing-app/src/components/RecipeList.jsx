// RecipeList component
import { useRecipeStore } from './recipeStore';
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const favorites = useRecipeStore(state => state.favorites);
    console.log(favorites)
    const toggleFavorite = useRecipeStore(state => state.toggleFavorite);
    const recipesToDisplay = searchTerm.trim() === ''
        ? recipes
        : filteredRecipes;

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
                const isFavorited = favorites.includes(recipe.id);

                return (
                    <div key={recipe.id}>
                        <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                        <p>{recipe.description}</p>
                        <button onClick={() => toggleFavorite(recipe.id)}>
                            {isFavorited ? '💖 Unfavorite' : '🤍 Favorite'}
                        </button>
                    </div>
                );
            })}
            {/*
            {recipesToDisplay.map(recipe => (
                <div key={recipe.id}>
                    <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
                    <p>{recipe.description}</p>
                    <button onClick={() => toggleFavorite(recipe.id)}>
                        {isFavorited ? '💖 Unfavorite' : '🤍 Favorite'}
                    </button>
                </div>
            ))} */}
        </div>
    );
};

export default RecipeList;
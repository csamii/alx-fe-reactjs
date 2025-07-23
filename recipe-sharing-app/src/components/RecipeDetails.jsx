// RecipeDetails component
import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === parseInt(id))
    );

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
        </div>
    );
};

export default RecipeDetails;
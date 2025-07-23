import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipe }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe(recipe.id, { title, description });
        setTitle('');
        setDescription('');
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Recipe</h3>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditRecipeForm;
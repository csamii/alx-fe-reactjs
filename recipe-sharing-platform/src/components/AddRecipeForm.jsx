// AddRecipeForm component
import { useState } from 'react';
import {useRecipeStore} from './recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description });
        setTitle('');
        setSteps('');
        setIngredients('');
        setDescription('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = "Recipe title is required";
        if (!formData.summary.trim()) newErrors.summary = "Recipe summary is required";
        if (!formData.cookTime.trim()) newErrors.cookTime = "Cook time is required";
        if (!formData.servings.trim()) newErrors.servings = "Number of servings is required";
        if (!formData.difficulty) newErrors.difficulty = "Difficulty level is required";
        if (formData.ingredients.filter(ing => ing.trim()).length === 0) {
        newErrors.ingredients = "At least one ingredient is required";
        }
        if (formData.instructions.filter(inst => inst.trim()).length === 0) {
        newErrors.instructions = "At least one instruction is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    if (validateForm()) {
        console.log("Success");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipeForm;
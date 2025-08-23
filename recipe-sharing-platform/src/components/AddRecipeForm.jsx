import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Button from "./ui/Button";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";;
import { Textarea } from "./ui/TextArea";
import { Select } from "./ui/Select";
import { Badge } from "./ui/Badge";
import { Alert, AlertDescription } from "./ui/Alert";
import { Plus, X, Upload, Save, AlertCircle, ChefHat, Image as ImageIcon, List, Tag } from "lucide-react";



const  AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    tags: [],
    ingredients: [""],
    instructions: [""],
  });

  const [newTag, setNewTag] = useState("");
  const [errors, setErrors] = useState({});

  const difficultyOptions = ["Easy", "Medium", "Hard"];

  const popularTags = [
    "Vegetarian", "Vegan", "Gluten-Free", "Quick & Easy", "Healthy", 
    "Comfort Food", "Italian", "Asian", "Mexican", "Breakfast", 
    "Lunch", "Dinner", "Dessert", "Appetizer", "Main Course"
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Recipe title is required";
    if (!formData.description.trim()) newErrors.description = "Recipe description is required";
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData(prev => ({ ...prev, ingredients: newIngredients }));
    if (errors.ingredients) {
      setErrors(prev => ({ ...prev, ingredients: "" }));
    }
  };

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, ""]
    }));
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const newIngredients = formData.ingredients.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, ingredients: newIngredients }));
    }
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...formData.instructions];
    newInstructions[index] = value;
    setFormData(prev => ({ ...prev, instructions: newInstructions }));
    if (errors.instructions) {
      setErrors(prev => ({ ...prev, instructions: "" }));
    }
  };

  const addInstruction = () => {
    setFormData(prev => ({
      ...prev,
      instructions: [...prev.instructions, ""]
    }));
  };

  const removeInstruction = (index) => {
    if (formData.instructions.length > 1) {
      const newInstructions = formData.instructions.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, instructions: newInstructions }));
    }
  };

  const addTag = (tag) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tag]
      }));
    }
    setNewTag("");
  };

  const removeTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
      recipes.push(formData);
      localStorage.setItem("recipes", JSON.stringify(recipes));
      setFormData({
        title: "",
        description: "",
        image: "",
        cookTime: "",
        servings: "",
        difficulty: "",
        tags: [],
        ingredients: [""],
        instructions: [""],
      });
    } else {
      console.log("Error sending data");
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Create New Recipe</h1>
            <p className="text-muted-foreground">
              Share your culinary creation with the RecipeBox community
            </p>
          </div>
        </div>

        {Object.keys(errors).length > 0 && (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-500 ml-8">
              Please fix the following errors before submitting your recipe.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Recipe Title *</Label>
                  <Input
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Give your recipe a catchy name..."
                    className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500 mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your recipe and what makes it special..."
                    rows={3}
                    className={errors.description ? "border-red-500" : ""}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500 mt-1">{errors.description}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="cookTime">Cook Time *</Label>
                    <Input
                      id="cookTime"
                      value={formData.cookTime}
                      onChange={(e) => handleInputChange("cookTime", e.target.value)}
                      placeholder="e.g., 30 minutes"
                      className={errors.cookTime ? "border-red-500" : ""}
                    />
                    {errors.cookTime && (
                      <p className="text-sm text-red-500 mt-1">{errors.cookTime}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="servings">Servings *</Label>
                    <Input
                      id="servings"
                      value={formData.servings}
                      onChange={(e) => handleInputChange("servings", e.target.value)}
                      placeholder="e.g., 4 people"
                      className={errors.servings ? "border-red-500" : ""}
                    />
                    {errors.servings && (
                      <p className="text-sm text-red-500 mt-1">{errors.servings}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="difficulty">Difficulty *</Label>
                    <Select
                        value={formData.difficulty}
                        onChange={(e) => handleInputChange("difficulty", e.target.value)}
                        className={errors.difficulty ? "border-red-500" : ""}
                        >
                        <option value="" disabled>
                            Select difficulty
                        </option>
                        {difficultyOptions.map((option) => (
                            <option key={option} value={option}>
                            {option}
                            </option>
                        ))}
                    </Select>
                    {errors.difficulty && (
                      <p className="text-sm text-red-500 mt-1">{errors.difficulty}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Recipe Image
                </CardTitle>
                <CardDescription>
                  Add a mouth-watering photo of your finished dish
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="image-upload"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input
                        id="image-upload"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>

                  {formData.image && (
                    <div className="aspect-video w-full rounded-lg overflow-hidden">
                      <img
                        src={formData.image}
                        alt="Recipe preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Ingredients *
                </CardTitle>
                <CardDescription>
                  List all ingredients (measurements if any)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={ingredient}
                      onChange={(e) => handleIngredientChange(index, e.target.value)}
                      placeholder={`Ingredient ${index + 1}...`}
                      className="flex-1"
                    />
                    {formData.ingredients.length > 1 && (
                      <Button
                        type="button"
                        className="border-2"
                        onClick={() => removeIngredient(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {errors.ingredients && (
                  <p className="text-sm text-red-500">{errors.ingredients}</p>
                )}
                <Button
                  onClick={addIngredient}
                  className="w-full border hover:bg-slate-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Ingredient
                </Button>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <List className="h-5 w-5" />
                  Instructions *
                </CardTitle>
                <CardDescription>
                  Step-by-step cooking instructions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {formData.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <Textarea
                      value={instruction}
                      onChange={(e) => handleInstructionChange(index, e.target.value)}
                      placeholder={`Step ${index + 1}...`}
                      rows={2}
                      className="flex-1"
                    />
                    {formData.instructions.length > 1 && (
                      <Button
                        type="button"
                        className="border"
                        onClick={() => removeInstruction(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {errors.instructions && (
                  <p className="text-sm text-red-500">{errors.instructions}</p>
                )}
                <Button
                  type="button"
                  onClick={addInstruction}
                  className="w-full border hover:bg-slate-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Step
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  Tags
                </CardTitle>
                <CardDescription>
                  Help others discover your recipe
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add a tag..."
                    onKeyPress={(e) => e.key === "Enter" && addTag(newTag)}
                  />
                  <Button
                    type="button"
                    onClick={() => addTag(newTag)}
                    disabled={!newTag.trim()}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} className="flex items-center gap-1 border-black">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-500"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Popular tags:</p>
                  <div className="flex flex-wrap gap-1">
                    {popularTags.filter(tag => !formData.tags.includes(tag)).slice(0, 6).map((tag) => (
                      <Button
                        className="border-2 hover:bg-slate-200"
                        key={tag}
                        type="button"
                        onClick={() => addTag(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleSubmit} className="w-full bg-black text-white">
                  <Save className="h-4 w-4 mr-2" />
                  Create Recipe
                </Button>
                <p className="text-xs text-muted-foreground">
                  By creating, you agree to share your recipe with the RecipeBox community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipeForm;
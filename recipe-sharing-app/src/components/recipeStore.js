import {create} from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [], //initialized recipe array
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  // Add Recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  // Display Recipes
  setRecipes: (recipes) => set({ recipes }),

  // Update Recipe
  updateRecipe: (id, editRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...editRecipe } : recipe
      ),
    })),

  // Delete Recipes
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Search for Recipes 
  setSearchTerm: (term) => {
    const allRecipes = get().recipes;
    const filtered = allRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    set({
      searchTerm: term,
      filteredRecipes: filtered,
    });
  },

  // addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  addFavorite: (recipe) => set(state => (
    state.favorites.find(fav => fav.id === recipe.id)
      ? {}
      : { favorites: [...state.favorites, recipe] }
  )),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(recipe => recipe.id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));
import {create} from 'zustand'

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (id, editRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...editRecipe } : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  setSearchTerm: (term) => {
    const allRecipes = get().recipes;
    const filtered = allRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );

    set({
      searchTerm: term,
      filteredRecipes: filtered,
    });
}
  /*setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => 
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),*/
}));
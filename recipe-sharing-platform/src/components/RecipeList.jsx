import { useState, useEffect, useRef } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Button from './ui/Button';
import { Input } from "./ui/Input";
// import { Badge } from "./ui/Badge";
import { Search, TrendingUp, Filter, RefreshCw  } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/Tabs";
import data from '../data.json';
import RecipeGrid from "./utils/RecipeGrid";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedDietary, setSelectedDietary] = useState("all");
  // Original data from storage/JSON
  const [allRecipes, setAllRecipes] = useState([]); 
  // The list of recipes that match the current search/filters (the *full* filtered list)
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  // The recipes currently shown on the screen (the *paginated* filtered list)
  const [visibleRecipes, setVisibleRecipes] = useState([]); 
  const [page, setPage] = useState(1);
  const recipesPerPage = 4;
  const loadMoreRef = useRef(null);
  const [loadBtn, setLoadBtn] = useState(true);
  const [loading, setLoading] = useState(false);

  // --- EFFECT 1: Load data from localStorage on mount ---
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    const initialRecipes = (storedRecipes && storedRecipes.length > 0) ? storedRecipes : data;
    
    if (!storedRecipes || storedRecipes.length === 0) {
      localStorage.setItem("recipes", JSON.stringify(data));
    }

    setAllRecipes(initialRecipes);
    setFilteredRecipes(initialRecipes); // Initially, filtered list is the full list
  }, []);

  useEffect(() => {
    if (allRecipes.length === 0) return;

    const newFilteredRecipes = allRecipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesDifficulty =
        selectedDifficulty === "all" || recipe.difficulty === selectedDifficulty;

      let matchesDietary = true;
      if (selectedDietary === "vegetarian") {
        matchesDietary =
          recipe.tags.some((tag) => tag.toLowerCase().includes("vegetarian")) ||
          recipe.title.toLowerCase().includes("salad") ||
          recipe.title.toLowerCase().includes("pasta");
      } else if (selectedDietary === "healthy") {
        matchesDietary =
          recipe.tags.some((tag) => tag.toLowerCase().includes("healthy")) ||
          recipe.title.toLowerCase().includes("salad") ||
          recipe.title.toLowerCase().includes("grilled");
      } else if (selectedDietary === "quick") {
        // Assuming cookTime is a string like "30 min" or "1 hour"
        const cookTimeMinutes = parseInt(recipe.cookTime);
        matchesDietary = cookTimeMinutes < 30; // Check if less than 30 minutes
      } else if (selectedDietary === "comfort") {
        matchesDietary = recipe.tags.some((tag) => tag.toLowerCase().includes("comfort"));
      }

      return matchesSearch && matchesDifficulty && matchesDietary;
    });

    // CRITICAL FIX: Reset the page to 1 whenever filters change.
    // This ensures the pagination starts from the beginning of the new filtered list.
    setPage(1); 
    setFilteredRecipes(newFilteredRecipes);

  }, [allRecipes, searchTerm, selectedDifficulty, selectedDietary]); // Removed 'page' from dependencies

  // --- EFFECT 3: Pagination Logic (Paging on the filtered set) ---
  // Runs when filteredRecipes (due to filter change) or page (due to intersection observer) changes.
  useEffect(() => {
    if (filteredRecipes.length === 0) {
      setVisibleRecipes([]);
      setLoadBtn(false);
      return;
    }
    const end = page * recipesPerPage;
    // Slice from the *filtered* list, not the original 'allRecipes'
    const newVisible = filteredRecipes.slice(0, end); 
    setVisibleRecipes(newVisible);

    // Update load button state based on the filtered list's total length
    if (newVisible.length >= filteredRecipes.length) {
        setLoadBtn(false);
    } else {
        setLoadBtn(true);
    }
  }, [page, filteredRecipes, recipesPerPage]); // Changed dependency from 'recipes' to 'filteredRecipes'

  // --- EFFECT 4: Intersection Observer Logic (Handles infinite scroll) ---
  // This remains mostly the same, depending only on 'loadBtn' to observe/unobserve.
  useEffect(() => {
    if (!loadMoreRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && loadBtn && !loading) { // Also check !loading to prevent multiple page increases
          setLoading(true);
          // Delay to simulate loading time
          setTimeout(() => {
            setPage((prev) => prev + 1);
            setLoading(false);
          }, 1500);
        }
      },
      { threshold: 1.0 }
    );
    
    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loadBtn, loading]); // Added 'loading' to deps to avoid stale closure state

  
  // --- Rest of the component logic (remains mostly the same) ---
  
  const difficulties = ["all", "Easy", "Medium", "Hard"];

  const dietaryFilters = [
    { id: "all", label: "All Recipes" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "healthy", label: "Healthy" },
    { id: "quick", label: "Quick (Under 30min)" },
    { id: "comfort", label: "Comfort Food" }
  ];

  // These use the *full* list for demonstration on the tabs
  const trendingRecipes = allRecipes.slice(0, 2); 
  const recentRecipes = allRecipes.slice(2, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Recipe Collection</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collection of delicious recipes from home cooks around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-amber-700" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <div className="flex gap-2 flex-wrap justify-center items-center">
              <span className="text-sm text-muted-foreground">Difficulty:</span>
                {difficulties.map((level) => (
                  <Button
                    key={level}
                    className={`border-2 ${
                      selectedDifficulty === level
                      ? "bg-orange-500 text-white border-orange-800"
                      : "hover:bg-orange-200"
                    }`}
                    onClick={() => setSelectedDifficulty(level)}
                  >
                  {level}
                  </Button>
                ))}
            </div>
          </div>
            
          {/* Dietary */}
          <div className="flex gap-2 flex-wrap justify-center items-center">
            <span className="text-sm text-muted-foreground">Dietary:</span>
            {dietaryFilters.map((filter) => (
              <Button
                key={filter.id}
                className={
                  `border-2 ${
                    selectedDietary === filter.id
                    ? "bg-orange-500 text-white border-orange-800"
                    : "hover:bg-orange-200"
                  }`}
                onClick={() => setSelectedDietary(filter.id)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 h-8">
            <TabsTrigger value="all">All Recipes</TabsTrigger>
            <TabsTrigger value="trending">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-4 w-4 mr-1" /> Trending
              </div>
            </TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {visibleRecipes.length} of {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? "s" : ""}
              </p>
            </div>
            {visibleRecipes.length > 0 ? (
              <RecipeGrid recipesToShow={visibleRecipes} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No recipes found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  className="bg-black text-white" 
                  onClick={() => { 
                    setSearchTerm("");
                    setSelectedDifficulty("all");
                    setSelectedDietary("all"); 
                  }}>
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Infinite Scroll Trigger */}
            {loadBtn && visibleRecipes.length > 0 ? (
              <div ref={loadMoreRef} className="h-10 flex flex-col justify-center items-center text-gray-500 py-4">
                {loading ? (
                  // Show spinner when loading is true
                  <div className="flex items-center pt-[15px] gap-2 text-orange-500">
                    <RefreshCw className="size-8 animate-spin" />
                  </div>
                ) : (
                  // Show prompt when loadBtn is true, but not currently loading
                  <span className="text-sm"></span>
                )}
              </div>
            ) : (
              // Only show this message if loadBtn is false AND we have recipes (all loaded)
              !loadBtn && filteredRecipes.length > 0 && (
                <div className="text-center py-4 text-muted-foreground">
                  All filtered recipes loaded.
                </div>
              )
          )}
          </TabsContent>
          <TabsContent value="trending" className="mt-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold">Trending This Week</h2>
              </div>
              <p className="text-muted-foreground">
                The most popular recipes that everyone's talking about
              </p>
            </div>
            <RecipeGrid recipesToShow={trendingRecipes} />
          </TabsContent>
          <TabsContent value="recent" className="mt-8">
            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Recently Added</h2>
                <p className="text-muted-foreground">Fresh recipes just added by our community</p>
            </div>
            <RecipeGrid recipesToShow={recentRecipes} />
          </TabsContent>
        </Tabs>

        {/* Stats */}
        <section className="mt-8 py-12 bg-muted/30 rounded-2xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">Recipe Collection Stats</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10,240</div>
                <p className="text-muted-foreground">Total Recipes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">127</div>
                <p className="text-muted-foreground">New This Week</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">45K+</div>
                <p className="text-muted-foreground">Recipe Views</p>
              </div>
            </div>
          </div>
        </section>
      </div>
        <Footer />
    </div>
  );
}

export default RecipeList;
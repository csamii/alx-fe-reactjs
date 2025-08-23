import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Button from './ui/Button';
import { Input } from "./ui/Input";
import { Badge } from "./ui/Badge";
import { Clock, Users, Star, Search, TrendingUp, Filter, Heart } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/Tabs";
import data from '../data.json';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedDietary, setSelectedDietary] = useState("all");

  const dietaryFilters = [
    { id: "all", label: "All Recipes" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "healthy", label: "Healthy" },
    { id: "quick", label: "Quick (Under 30min)" },
    { id: "comfort", label: "Comfort Food" }
  ];

  const trendingRecipes = data.slice(0, 2);
  const recentRecipes = data.slice(2, 4);

  const filteredRecipes = data.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      matchesDietary = recipe.cookTime.includes("15") || recipe.cookTime.includes("25");
    } else if (selectedDietary === "comfort") {
      matchesDietary = recipe.tags.some((tag) => tag.toLowerCase().includes("comfort"));
    }

    return matchesSearch && matchesDifficulty && matchesDietary;
  });

  const RecipeGrid = ({ recipesToShow }) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipesToShow.map((recipe) => (
        <Card key={recipe.id} className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="text-xs bg-slate-100">
                {recipe.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs">{recipe.rating}</span>
              </div>
            </div>
            <CardTitle className="text-lg mb-2 text-black">{recipe.title}</CardTitle>
            <CardDescription className="text-xs text-slate-500 mb-3 line-clamp-2">
              {recipe.summary}
            </CardDescription>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                <span>{recipe.servings}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {recipe.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} className="text-xs bg-teal-100">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link to={`/recipe/${recipe.id}`}>
                <Button className="w-full text-sm bg-black text-white">
                View Recipe
                </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>

            <div className="flex gap-2 flex-wrap justify-center items-center">
              <span className="text-sm text-muted-foreground">Difficulty:</span>
                {["all", "Easy", "Medium", "Hard"].map((level) => (
                    <Button
                    key={level}
                    className={`border-2 ${
                        selectedDifficulty === level
                        ? "bg-slate-800 text-white border-slate-800"
                        : "hover:bg-slate-200"
                    }`}
                    onClick={() => setSelectedDifficulty(level)}
                    >
                    {level}
                    </Button>
                ))}
            </div>
          </div>

          <div className="flex gap-2 flex-wrap justify-center items-center">
            <span className="text-sm text-muted-foreground">Dietary:</span>
            {dietaryFilters.map((filter) => (
              <Button
                key={filter.id}
                className={`border-2 ${
                        selectedDietary === filter.id
                        ? "bg-slate-800 text-white border-slate-800"
                        : "hover:bg-slate-200"
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
          <TabsList className="grid w-full grid-cols-4 h-8">
            <TabsTrigger value="all">All Recipes</TabsTrigger>
            <TabsTrigger value="trending">
                <div className="flex items-center justify-center"><TrendingUp className="h-4 w-4 mr-1" /> Trending</div></TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="favorites">
                <div className="flex items-center justify-center"><Heart className="h-4 w-4 mr-1" /> Favorites</div></TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? "s" : ""}
              </p>
            </div>
            {filteredRecipes.length > 0 ? (
              <RecipeGrid recipesToShow={filteredRecipes} />
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

          <TabsContent value="favorites" className="mt-8">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-red-500 fill-red-500" />
                <h2 className="text-xl font-bold">Community Favorites</h2>
              </div>
              <p className="text-muted-foreground">The highest-rated recipes loved by our community</p>
            </div>
            <RecipeGrid recipesToShow={data.filter((r) => r.rating >= 4.7)} />
          </TabsContent>
        </Tabs>

        {/* Stats */}
        <section className="mt-16 py-12 bg-muted/30 rounded-2xl">
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
    </div>
  );
}

export default RecipeList;
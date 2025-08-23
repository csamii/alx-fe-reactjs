import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json';
import Button from './ui/Button';
import { Badge } from './ui/Badge';
import { Avatar, AvatarFallback } from './ui/Avatar';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Clock, Users, Star, Heart, Share2, Bookmark, ThumbsUp } from "lucide-react";
import Footer from './Footer';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeList = data.find(item => item.id === parseInt(id));
    setRecipe(recipeList);
  }, [id]);

  if (!recipe) return <p className="p-4 text-red text-lg">Recipe not found.</p>;

  const reviews = [
    {
      id: 1,
      name: "Jennifer M.",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely delicious! My family loved this recipe. The instructions were clear and easy to follow. Will definitely make again!",
      helpful: 24,
    },
    {
      id: 2,
      name: "David K.",
      rating: 4,
      date: "1 week ago",
      comment:
        "Great recipe overall. I added a bit more seasoning to my taste, but the base recipe was perfect. Cooking time was spot on.",
      helpful: 18,
    },
    {
      id: 3,
      name: "Maria S.",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "This has become our family's go-to recipe! So flavorful and the kids ask for it every week. Thank you for sharing!",
      helpful: 31,
    },
  ];

  const relatedRecipes = data.filter(
    (r) =>
      r.id !== recipe.id &&
      r.tags.some((tag) => recipe.tags.includes(tag)),
  ).sort(() => Math.random() - 0.5).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Actions */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/">
            <Button
              className="pl-0"
              title="Back to Recipes"
            />
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 px-24 mb-12">
        {/* Main Recipe Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Recipe Header */}
          <div>
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-6">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className='bg-teal-200'>
                  {recipe.difficulty}
                </Badge>
              <div className="flex items-center gap-1 text-xs">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">
                  {recipe.rating}
                </span>
                <span className="text-muted-foreground text-sm">
                  (7 reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <Clock className="h-4 w-4" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <Users className="h-4 w-4" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {recipe.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.map((tag) => (
                  <Badge key={tag} className='bg-slate-300'>
                    {tag}
                  </Badge>
                ))}
              </div>
            <p className="text-sm text-muted-foreground">
              Recipe by{" "}
              <span className="font-medium">
                {recipe.author}
              </span>
            </p>
          </div>

          {/* Ingredients */}
          <Card className='shadow-md'>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recipe.ingredients.map(
                  (ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">
                        {ingredient}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className='shadow-md'>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {recipe.instructions.map(
                  (instruction, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                    >
                      <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-4 flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed">
                        {instruction}
                      </p>
                     </li>
                  ),
                )}
              </ol>
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Reviews & Ratings
                <Button
                  title={reviews.length}
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="text-xs bg-slate-200">
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-sm">
                              {review.name}
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                                    />
                                  ),
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground">
                                {review.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground ml-11">
                        {review.comment}
                      </p>
                      <div className="flex items-center gap-4 ml-11">
                        <Button className="h-auto p-0 text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          Helpful ({review.helpful})
                        </Button>
                      </div>
                      {review.id !== reviews[reviews.length - 1].id}
                    </div>
                  ))}
                </div>
              </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recipe Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Save This Recipe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-black text-white p-2 hover:bg-primary">
                <Heart className="h-4 w-4 mr-2" />
                Add to Favorites
              </Button>
              <Button className="w-full bg-black text-white p-2 hover:bg-primary">
                <Bookmark className="h-4 w-4 mr-2" />
                Save to Collection
              </Button>
              <Button className="w-full bg-black text-white p-2 hover:bg-primary">
                <Share2 className="h-4 w-4 mr-2" />
                Share Recipe
              </Button>
            </CardContent>
          </Card>

          {/* Related Recipes */}
          {relatedRecipes.length > 0 && (
            <Card>
                <CardHeader>
                  <CardTitle>Related Recipes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedRecipes.map((relatedRecipe) => (
                    <div
                      key={relatedRecipe.id}
                      className="flex gap-3 hover:bg-muted/50 p-2 rounded-lg -m-2">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={relatedRecipe.image}
                          alt={relatedRecipe.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm leading-tight mb-1">
                          {relatedRecipe.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{relatedRecipe.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{relatedRecipe.cookTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent> 
              </Card>
          )}
        </div>
      </div>

      {/* Recipe Footer */}
      <div className="mt-12 pt-8 border-t border-border px-16 pb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground mb-1">
              Enjoyed this recipe? Leave a review to help
              others!
            </p>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">
                {recipe.rating} stars
              </span>
              <span className="text-sm text-muted-foreground">
                • {reviews.length} reviews
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="bg-slate-100 hover:bg-slate-300">
              Write Review
            </Button>
            <Button className="bg-slate-900 text-white hover:bg-slate-500">
              View More Recipes
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RecipeDetail;
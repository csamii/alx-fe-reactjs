import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json';
import Button from './ui/Button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Clock, Users, Star } from "lucide-react";
import Footer from './Footer';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeList = data.find(item => item.id === parseInt(id));
    setRecipe(recipeList);
  }, [id]);

  if (!recipe) return <p className="p-4 text-red text-lg">Recipe not found.</p>;

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
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">
                  {recipe.rating}
                </span>
                <span className="text-muted-foreground text-sm">
                  (7 reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
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
          {/*<Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Reviews & Ratings
                <Button
                  title={reviews.length}
                />
              </CardTitle>
            </CardHeader>
          </Card>*/}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recipe Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Save This Recipe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-black text-white p-2 hover:bg-primary"
                title="Add to Favorites" />
              <Button className="w-full bg-black text-white p-2 hover:bg-primary"
                title="Save to Collection" />
              <Button
                className="w-full bg-black text-white p-2 hover:bg-primary"
                title="Share Recipe" />
            </CardContent>
          </Card>

          {/* Related Recipes */}
          {/*{relatedRecipes.length > 0 && (
            <Card>
                <CardHeader>
                  <CardTitle>Related Recipes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedRecipes.map((relatedRecipe) => (
                    <div
                      key={relatedRecipe.id}
                      className="flex gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg -m-2"
                      onClick={() =>
                        onRecipeSelect?.(relatedRecipe)
                      }
                    >
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
          )}*/}
        </div>
      </div>

      {/* Recipe Footer */}
      {/*<div className="mt-12 pt-8 border-t border-border">
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
            <Button title="Write Review" />
            <Button 
              title="View More Recipes" />
          </div>
        </div>
      </div>*/}
      <Footer />
    </div>
  )
}

export default RecipeDetail
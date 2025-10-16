import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Clock, Users, Star, } from 'lucide-react';
import Button from '../ui/Button';


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
                <CardTitle className="text-lg mb-2 text-black">{recipe.title.length > 18 ? recipe.title.slice(0, 21) + "..." : recipe.title}</CardTitle>
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

export default RecipeGrid;
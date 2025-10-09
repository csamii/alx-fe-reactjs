import { Clock, Users, Star, ChefHat, Lightbulb, Award } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from 'react-router-dom';


const Header = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);
    }, []);

    const cookingTips = [
        {
            icon: <ChefHat className="h-6 w-6 text-white" />,
            title: "Setting Things Up",
            tip: "Always prep all your ingredients before you start cooking. It makes the process smoother and more enjoyable."
        },
        {
            icon: <Lightbulb className="h-6 w-6 text-white" />,
            title: "Taste as You Go",
            tip: "Season throughout the cooking process, not just at the end. This builds layers of flavor in your dishes."
        },
        {
            icon: <Award className="h-6 w-6 text-white" />,
            title: "Quality Ingredients",
            tip: "Use the best ingredients you can afford. Fresh herbs and good quality oils make a significant difference."
        }
    ];

    const testimonials = [
        {
            name: "Bruce Wayne",
            role: "Home Chef",
            content: "RecipeBox has transformed my cooking! I've discovered so many amazing recipes that my family loves. The community is incredibly supportive and helpful.",
            rating: 5
        },
        {
            name: "Wally West",
            role: "Food Blogger",
            content: "As someone who writes about food, I'm impressed by the quality of recipes here. Every dish I've tried has been perfectly tested and delicious.",
            rating: 4
        },
        {
            name: "Ichimaru Gin",
            role: "Busy Parent",
            content: "The quick meal filters are a lifesaver for weeknight dinners. I can find healthy, tasty recipes that take 30 minutes or less. Highly recommend!",
            rating: 5
        }
    ];


  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <section className="relative text-white py-32 sm:py-48 text-center">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('assets/recipe-bg.jpg')] bg-cover bg-center" aria-hidden="true"></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/70 to-amber-500/70" aria-hidden="true"></div>
            {/* Content */}
            <div className="relative container mx-auto px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Discover & Share Amazing Recipes
                </h1>
                <p className="mt-4 text-xl sm:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                Find a world of delicious flavors and culinary inspiration.
                </p>
                <div className="relative w-full max-w-lg mt-8 flex flex-col sm:flex-row gap-4 justify-center mx-auto">
                    <Link 
                        to={`/recipe_list/`}
                    >
                        <Button
                            title="Browse Recipe"
                            className="px-8 py-3 text-lg bg-black border-white text-white hover:bg-white hover:text-black"
                        />
                    </Link>
                    <Link 
                        to={`/blog/`}
                    >
                        <Button
                            title="Learn More"
                            className="px-8 py-3 text-lg bg-black border-white text-white hover:bg-white hover:text-black"
                        />
                    </Link>
                </div>
            </div>
        </section>
        {/* Features Section */}
        <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 max-sm:text-2xl">Why Choose RecipeBox?</h2>
                    <p className="text-lg text-slate-900 max-sm:text-sm">
                    The perfect platform for food enthusiasts of all levels
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 font-mono font-bolder">Community Driven</h3>
                        <p className="text-slate-900 max-sm:text-sm">
                            Discover recipes shared by passionate home cooks from around the world
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 font-mono font-bolder">Quick & Easy</h3>
                        <p className="text-slate-900 max-sm:text-sm">
                            Find recipes that fit your schedule, from 15-minute meals to weekend projects
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium mb-2 font-mono font-bolder">Highly Rated</h3>
                        <p className="text-slate-900 max-sm:text-sm">
                            Every recipe is tested and rated by our community for guaranteed deliciousness
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Featured Recipes */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 max-sm:text-lg">Featured Recipes</h2>
                    <p className="text-lg max-sm:text-[15px]">
                    Hand-picked favorites from our community
                    </p>
                </div>
                <div className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {recipes.slice(0, 3).map((recipe) => (
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
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span>{recipe.rating}</span>
                                </div>
                            </div>
                            <CardTitle className="mb-2 font-semibold">{recipe.title}</CardTitle>
                            <CardDescription className="mb-4 text-slate-700 max-sm:text-sm">
                                {recipe.summary}
                            </CardDescription>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{recipe.cookTime}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>{recipe.servings} servings</span>
                                </div>
                            </div>
                            <div className="">
                                <Link to={`/recipe/${recipe.id}`}>
                                    <Button 
                                        className="w-full px-8 py-3 text-sm bg-myBlack border-white text-white hover:bg-myBlack2 hover:text-white"
                                        title="View Recipe" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link 
                        to={`/recipe_list/`}
                    >
                        <Button
                            className="px-8 py-3 text-lg bg-[#343333] text-white hover:bg-black hover:text-white"
                            title="View All Recipes"/>
                    </Link>
                </div>
            </div>
        </section>

        {/* Cooking Tips */}
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 max-sm:text-lg">Pro Cooking Tips</h2>
                    <p className="text-lg max-sm:text-[15px]">
                    Level up your cooking game with expert advice from our community
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {cookingTips.map((tip, index) => (
                    <Card key={index} className="text-center p-6">
                        <div className="bg-black  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        {tip.icon}
                        </div>
                        <h3 className="text-xl font-medium mb-3">{tip.title}</h3>
                        <p className="text-lg max-sm:text-[15px]">{tip.tip}</p>
                    </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 max-sm:text-lg">What Our Community Says</h2>
                    <p className="text-lg text-lg max-sm:text-[15px]">
                    Real stories from home cooks who love RecipeBox
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                    <Card key={index} className="px-2 py-6 sm:p-6">
                        <CardContent className="p-0">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="max-sm:text-[14px] mb-4 italic">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <p className="font-medium">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Header
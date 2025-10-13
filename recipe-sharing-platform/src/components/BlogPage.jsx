import { useState } from "react";
// import { blogPosts, blogCategories, BlogPost } from "../data/blogPosts";
import { blogPosts, blogCategories,  } from "../BlogPost";
import { Input } from "./ui/Input";
import Button from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Card, CardContent, CardHeader } from "./ui/Card";
import { Search, Clock, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const popular = ["Baking", "Knife Skills","Fermentation", "World Cuisine", "Seasonal Cooking", "Meal Prep", "Healthy Eating", "Food Science"];
  // Sort by date, newest first
  const sortedPosts = [...filteredPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-4"
        initial={{ opacity: 0, y: 50 }}  // start hidden and slightly down
        whileInView={{ opacity: 1, y: 0 }} // fade + slide up when in view
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers only once
    >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover cooking tips, techniques, and stories from our community of
            food lovers. From mastering knife skills to exploring world
            cuisines, we've got you covered.
          </p>
        </div>
      </motion.div>

      <div 
        className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                />
            </div>

            {/* Category Filters */}
            <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 50 }}  // start hidden and slightly down
                whileInView={{ opacity: 1, y: 0 }} // fade + slide up when in view
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // triggers only once
            >
                {blogCategories.map((category) => (
                    <Button
                        key={category}
                        className={`cursor-pointer px-4 py-2 border-2 hover:bg-slate-500 hover:text-white ${
                            selectedCategory === category
                                ? "bg-slate-500 text-white border-slate-500"
                                : "hover:bg-slate-500 hover:text-white border-gray-300 text-gray-700"
                            }`}
                        onClick={() => setSelectedCategory(category)}>
                            {category}
                    </Button>
                ))}
            </motion.div>
        </div>

        {/* Blog Posts Grid */}
        {sortedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blog posts found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <motion.Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}  // start hidden and slightly down
                whileInView={{ opacity: 1, y: 0 }} // fade + slide up when in view
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }} // triggers only once
              >
                <Link to={`/blog/${post.id}`}>
                    <div className="aspect-video overflow-hidden bg-muted">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    </div>
                    <CardHeader>
                    <Badge className="w-fit mb-2 bg-gradient-to-br from-orange-50 to-amber-50">
                        {post.category}
                    </Badge>
                    <h3 className="group-hover:text-black transition-colors font-bold">
                        {post.title}
                    </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    <p className="text-slate-600 line-clamp-3 text-sm">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime} min read</span>
                        </div>
                        <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.publishedAt)}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t">
                        <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex items-center gap-1 text-sm">
                        <User className="h-3 w-3" />
                        <span>{post.author.name}</span>
                        </div>
                    </div>
                    </CardContent>
                </Link>
              </motion.Card>
            ))}
          </div>
        )}

        {/* Featured Topics */}
        <motion.div 
            className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8"
            initial={{ opacity: 0, y: 50 }}  // start hidden and slightly down
            whileInView={{ opacity: 1, y: 0 }} // fade + slide up when in view
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // triggers only once
        >
          <h2 className="mb-6">Popular Topics</h2>
          <div className="flex flex-wrap gap-2">
            {popular.map((topic) => (
                <Button 
                    key={topic}
                    className="cursor-pointer hover:bg-white transition-colors border-2"
                    onClick={() => setSearchQuery(topic)}
                >
                {topic}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-8 md:p-12 text-white text-center">
          <h2 className="text-white mb-4">Never Miss a Post</h2>
          <p className="mb-6 max-w-2xl mx-auto opacity-90">
            Subscribe to our newsletter and get the latest cooking tips,
            recipes, and stories delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-foreground"
            />
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
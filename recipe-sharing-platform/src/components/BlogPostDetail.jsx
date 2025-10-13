import { useState, useEffect } from "react";
import { blogPosts } from "../BlogPost";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { Badge } from "./ui/Badge";
import { Link, useParams } from "react-router-dom";


export function BlogPostDetail() {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    console.log(blogPosts)
    
    useEffect(() => {
        // find the post with matching id
        const foundPost = blogPosts.find((item) => item.id === id);
        setPost(foundPost);
    }, [id]);

    if (!post) {
        return <p className="text-center mt-8">Post not found.</p>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        });
    };

  // Convert markdown-style content to HTML-like structure
  const renderContent = (content) => {
    const lines = content.split("\n");
    const elements = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.match(/^\d+\./)) {
        // Numbered list item
        const nextLines = [];
        let j = i;
        while (j < lines.length && lines[j].match(/^\d+\./)) {
          nextLines.push(lines[j]);
          j++;
        }
        elements.push(
          <ol key={key++} className="list-decimal list-inside mb-4 space-y-2">
            {nextLines.map((item, idx) => (
              <li key={idx}>{item.replace(/^\d+\.\s*/, "")}</li>
            ))}
          </ol>
        );
        i = j - 1;
      } else if (line.startsWith("- ")) {
        // Bullet list
        const nextLines = [];
        let j = i;
        while (j < lines.length && lines[j].startsWith("- ")) {
          nextLines.push(lines[j]);
          j++;
        }
        elements.push(
          <ul key={key++} className="list-disc list-inside mb-4 space-y-2">
            {nextLines.map((item, idx) => (
              <li key={idx}>{item.replace(/^- /, "")}</li>
            ))}
          </ul>
        );
        i = j - 1;
      } else if (line.trim() === "") {
        // Empty line
        continue;
      } else {
        // Regular paragraph
        elements.push(
          <p key={key++} className="mb-4">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <Link to={"/blog/"}>
                 Back to Blog
            </Link>
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[21/9] max-h-[500px] overflow-hidden bg-muted">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Badge */}
        <Badge className="mb-4 bg-slate-200">
          {post.category}
        </Badge>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl mb-6">{post.title}</h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <hr className="mt-8 mb-8" />

        {/* Excerpt */}
        <div className="text-lg text-slate-600 mb-8 italic border-l-4 border-black pl-4">
          {post.excerpt}
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none text-sm">
          {renderContent(post.content)}
        </div>

        <hr className="mt-8 mb-8" />

        {/* Tags */}
        <div className="flex items-start gap-3 mb-12">
          <Tag className="h-4 w-4 mt-1 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-100 rounded-lg p-6 md:p-8">
          <div className="flex items-start gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h3 className="mb-2 font-bold">About {post.author.name}</h3>
              <p className="text-muted-foreground text-sm">
                {post.author.name} is a passionate food writer and chef who
                loves sharing knowledge and inspiring home cooks around the
                world. With years of experience in professional kitchens and
                food journalism, they bring both technical expertise and
                creative flair to every article.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-white mb-4">Enjoyed this post?</h2>
          <p className="mb-6 opacity-90">
            Share it with your fellow food enthusiasts or subscribe to our
            newsletter for more great content.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-white text-orange-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              Share Article
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

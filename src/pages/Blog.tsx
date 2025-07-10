
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "React Applications",
      excerpt: "Learn best practices for structuring React applications that can grow with your team and requirements. Explore component architecture, state management, and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "10 min read",
      category: "React",
      tags: ["React", "Architecture", "Performance"],
      featured: true,
      image: "📚"
    },
    {
      title: "Mastering CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to modern CSS layout techniques. Understand when to use Grid vs Flexbox and how to create responsive designs that work across all devices.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Layout", "Responsive Design"],
      featured: true,
      image: "🎨"
    },
    {
      title: "Node.js Performance Optimization",
      excerpt: "Dive deep into Node.js performance optimization strategies. Learn about profiling, memory management, and scaling techniques for production applications.",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Node.js",
      tags: ["Node.js", "Performance", "Backend"],
      featured: true,
      image: "⚡"
    },
    {
      title: "Understanding TypeScript Generics",
      excerpt: "Master TypeScript generics to write more flexible and reusable code. Learn advanced type manipulation and constraint techniques.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Advanced", "Types"],
      featured: false,
      image: "🔧"
    },
    {
      title: "API Design Best Practices",
      excerpt: "Essential principles for designing robust, maintainable APIs. Cover RESTful design, error handling, versioning, and documentation strategies.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "API",
      tags: ["API", "REST", "Backend"],
      featured: false,
      image: "🌐"
    },
    {
      title: "Modern JavaScript Features",
      excerpt: "Explore the latest JavaScript features and how they can improve your code. From optional chaining to dynamic imports and beyond.",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "JavaScript",
      tags: ["JavaScript", "ES2023", "Modern"],
      featured: false,
      image: "🚀"
    }
  ];

  const categories = ["All", "React", "JavaScript", "CSS", "Node.js", "TypeScript", "API"];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Thoughts on web development, programming best practices, and the latest in tech.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-white/20 text-white hover:bg-white/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {post.image}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-blue-500/20 text-blue-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                    >
                      Read More 
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="text-4xl mb-3">{post.image}</div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 text-sm line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to my newsletter to get the latest articles and insights delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;

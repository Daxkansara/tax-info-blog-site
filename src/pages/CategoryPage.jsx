
    import React, { useEffect, useState } from "react";
    import { useParams, Link } from "react-router-dom";
    import { motion } from "framer-motion";
    import { ArrowLeft } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import PostCard from "@/components/PostCard";
    import Sidebar from "@/components/Sidebar";
    import AdBanner from "@/components/AdBanner";
    import { posts } from "@/data/posts";

    const CategoryPage = () => {
      const { categoryId } = useParams();
      const [categoryPosts, setCategoryPosts] = useState([]);
      const [isLoading, setIsLoading] = useState(true);

      // Format category name for display (e.g., income-tax -> Income Tax)
      const formatCategoryName = (id) => {
        if (!id) return "";
        return id
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

      const categoryDisplayName = formatCategoryName(categoryId);

      useEffect(() => {
        // Filter posts by category, comparing formatted names
        const filtered = posts.filter(
          post => formatCategoryName(post.category.toLowerCase().replace(/\s+/g, '-')) === categoryDisplayName
        );

        // Simulate loading
        setTimeout(() => {
          setCategoryPosts(filtered);
          setIsLoading(false);
        }, 300); // Reduced loading time

        // Scroll to top when category changes
        window.scrollTo(0, 0);
      }, [categoryId, categoryDisplayName]);


      if (isLoading) {
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse space-y-4 w-full md:w-2/3">
                <div className="h-8 bg-muted rounded w-1/2"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-2/3"
            >
              {/* Back Button */}
              <div className="mb-6">
                <Button variant="outline" asChild>
                  <Link to="/categories" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" /> All Topics
                  </Link>
                </Button>
              </div>

              {/* Category Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{categoryDisplayName}</h1>
                <p className="text-muted-foreground">
                  Explore our collection of articles about {categoryDisplayName}.
                </p>
              </div>

              {/* Ad Banner */}
              <div className="mb-8">
                <AdBanner position="horizontal" />
              </div>

              {/* Posts Grid */}
              {categoryPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryPosts.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/20 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    We don't have any articles in this category yet. Check back soon!
                  </p>
                  <Button asChild>
                    <Link to="/blog">Browse All Articles</Link>
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      );
    };

    export default CategoryPage;
  
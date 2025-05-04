
    import React from "react";
    import { Link } from "react-router-dom";
    import { motion } from "framer-motion";
    import { Calendar, Clock } from "lucide-react";
    import { Badge } from "@/components/ui/badge";
    import { Card, CardContent, CardFooter } from "@/components/ui/card";

    const PostCard = ({ post, index }) => {
      const formatCategoryForUrl = (categoryName) => {
        if (!categoryName) return "general";
        return categoryName.toLowerCase().replace(/\s+/g, '-');
      };

      const categoryUrl = formatCategoryForUrl(post?.category);
      const imageKeywords = post?.category ? `${post.category.toLowerCase()},tax,accounting` : 'business,office,desk';
      // Use post ID or index for a more stable "random" image per card
      const imageUrl = `https://source.unsplash.com/random/400x225/?${imageKeywords}&sig=${post?.id || index}`;

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
            <Link to={`/post/${post?.id || "sample-post"}`} className="overflow-hidden block aspect-video">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                alt={post?.imageDescription || `${post?.title || "Blog post"} thumbnail`}
                src={imageUrl}
                key={imageUrl} // Add key to help React differentiate images
               />
            </Link>

            <CardContent className="pt-6 flex-grow">
              <div className="flex flex-wrap gap-2 mb-3">
                 <Link to={`/category/${categoryUrl}`}>
                    <Badge variant="secondary" className="hover:bg-secondary/80">
                      {post?.category || "General"}
                    </Badge>
                 </Link>
              </div>

              <Link to={`/post/${post?.id || "sample-post"}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors line-clamp-2">
                  {post?.title || "Sample Article Title"}
                </h3>
              </Link>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post?.excerpt || "This is a sample excerpt for the blog post. It gives a brief overview of the content."}
              </p>
            </CardContent>

            <CardFooter className="pt-0 border-t flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post?.date || "May 2, 2025"}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post?.readTime || "5 min read"}</span>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default PostCard;
  
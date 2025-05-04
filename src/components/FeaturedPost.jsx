
    import React from "react";
    import { Link } from "react-router-dom";
    import { motion } from "framer-motion";
    import { Calendar, Clock, User } from "lucide-react";
    import { Badge } from "@/components/ui/badge";
    import { Button } from "@/components/ui/button";
    import { useTranslation } from 'react-i18next';

    const FeaturedPost = ({ post }) => {
      const { t } = useTranslation();

      const formatCategoryForUrl = (categoryName) => {
        if (!categoryName) return "general";
        return categoryName.toLowerCase().replace(/\s+/g, '-');
      };

      const categoryUrl = formatCategoryForUrl(post?.category);
      const imageKeywords = post?.category ? `${post.category.toLowerCase()},business,finance` : 'business,finance,office';
      const imageUrl = `https://source.unsplash.com/random/1200x500/?${imageKeywords}&sig=${post?.id || 'featured'}`; // Added sig for consistency

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-xl shadow-lg group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

          <img
            className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            alt={post?.imageDescription || post?.title || "Featured blog post image"}
            src={imageUrl}
            key={imageUrl} // Add key to force re-render if URL changes significantly
           />

          <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <Link to={`/category/${categoryUrl}`}>
                <Badge variant="secondary" className="bg-primary/90 hover:bg-primary">
                  {post?.category || "General"}
                </Badge>
              </Link>
              <Badge variant="outline" className="bg-black/30 text-white border-white/20">
                {t('featuredPost.featured')}
              </Badge>
            </div>

            <h2 className="text-3xl font-bold mb-3 leading-tight">
              {post?.title || "Sample Featured Article Title"}
            </h2>

            <p className="mb-4 text-white/90 line-clamp-2">
              {post?.excerpt || "This is a sample excerpt for the featured blog post. It gives a brief overview of the content."}
            </p>

            <div className="flex items-center text-sm text-white/80 mb-4 flex-wrap gap-y-2">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{post?.author || "Admin"}</span>
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post?.date || "May 2, 2025"}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post?.readTime || "5 min read"}</span>
              </div>
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link to={`/post/${post?.id || "featured-post"}`}>
                {t('postCard.readArticle')}
              </Link>
            </Button>
          </div>
        </motion.div>
      );
    };

    export default FeaturedPost;
  
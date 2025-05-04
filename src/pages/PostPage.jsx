
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CommentSection from "@/components/CommentSection";
import Sidebar from "@/components/Sidebar";
import AdBanner from "@/components/AdBanner";
import { posts } from "@/data/posts";
import { useToast } from "@/components/ui/use-toast";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find the post with the matching ID
    const foundPost = posts.find(p => p.id === postId);
    
    // Simulate loading
    setTimeout(() => {
      setPost(foundPost);
      setIsLoading(false);
    }, 500);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [postId]);
  
  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy to clipboard
    toast({
      title: "Link copied!",
      description: "The article link has been copied to your clipboard.",
    });
  };
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-64"></div>
            <div className="h-4 bg-muted rounded w-32"></div>
            <div className="h-4 bg-muted rounded w-48"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
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
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </Button>
          </div>
          
          {/* Post Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">
                {post.category}
              </Badge>
              {post.tags && post.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center flex-wrap gap-y-2 text-muted-foreground mb-6">
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img  
              className="w-full h-auto object-cover"
              alt={`${post.title} featured image`}
             src="https://images.unsplash.com/photo-1620886434979-5cc4ddc31858" />
          </div>
          
          {/* Post Content */}
          <div 
            className="blog-content mb-8 prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Mid-article Ad */}
          <div className="my-12">
            <AdBanner position="horizontal" />
          </div>
          
          {/* Share Button */}
          <div className="mb-8">
            <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Share This Article
            </Button>
          </div>
          
          <Separator className="my-8" />
          
          {/* Author Bio */}
          <div className="bg-muted/30 rounded-lg p-6 mb-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
              <img  
                className="w-full h-full object-cover"
                alt={`${post.author} profile picture`}
               src="https://images.unsplash.com/photo-1598994975562-07d0d752f66d" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-muted-foreground mb-4">
                {post.author} is an experienced writer and industry expert with over 10 years of experience in the field. They specialize in creating insightful content that helps readers navigate complex topics.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Follow</Button>
                <Button size="sm">View All Articles</Button>
              </div>
            </div>
          </div>
          
          {/* Comments Section */}
          <CommentSection />
        </motion.div>
        
        {/* Sidebar */}
        <div className="w-full md:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

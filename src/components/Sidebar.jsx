
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AdBanner from "@/components/AdBanner";

// Sample popular posts
const popularPosts = [
  {
    id: "popular-1",
    title: "The Future of Remote Work: Trends to Watch in 2025",
    date: "Apr 30, 2025",
    category: "Business"
  },
  {
    id: "popular-2",
    title: "How to Build a Sustainable Content Strategy",
    date: "Apr 25, 2025",
    category: "Marketing"
  },
  {
    id: "popular-3",
    title: "10 Essential Tools for Digital Productivity",
    date: "Apr 22, 2025",
    category: "Technology"
  },
  {
    id: "popular-4",
    title: "Understanding Web 3.0: A Beginner's Guide",
    date: "Apr 18, 2025",
    category: "Technology"
  }
];

// Sample tags
const tags = [
  "Marketing", "SEO", "Content Strategy", "Social Media", 
  "Analytics", "AI", "Machine Learning", "E-commerce", 
  "Productivity", "Remote Work", "Leadership", "Startups"
];

const Sidebar = () => {
  return (
    <div className="space-y-8">
      {/* Ad Banner */}
      <AdBanner position="vertical" />
      
      {/* Popular Posts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Popular Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.id}>
              {index > 0 && <Separator className="my-3" />}
              <div>
                <Link 
                  to={`/post/${post.id}`}
                  className="font-medium hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                  <span>{post.date}</span>
                  <Badge variant="outline">{post.category}</Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Link to="/category/technology" className="text-sm hover:text-primary transition-colors">
              Technology
            </Link>
            <Link to="/category/business" className="text-sm hover:text-primary transition-colors">
              Business
            </Link>
            <Link to="/category/marketing" className="text-sm hover:text-primary transition-colors">
              Marketing
            </Link>
            <Link to="/category/lifestyle" className="text-sm hover:text-primary transition-colors">
              Lifestyle
            </Link>
            <Link to="/category/health" className="text-sm hover:text-primary transition-colors">
              Health
            </Link>
            <Link to="/category/travel" className="text-sm hover:text-primary transition-colors">
              Travel
            </Link>
          </div>
        </CardContent>
      </Card>
      
      {/* Tags */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                <Badge variant="secondary" className="hover:bg-secondary/80">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* About */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            BlogSpot is your source for insightful articles, news, and professional content across various industries and topics.
          </p>
          <Link 
            to="/about"
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            Learn more about us
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;

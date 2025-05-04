
    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import PostCard from "@/components/PostCard";
    import Sidebar from "@/components/Sidebar";
    import { Input } from "@/components/ui/input";
    import { Button } from "@/components/ui/button";
    import { Badge } from "@/components/ui/badge";
    import { Search } from "lucide-react";
    import { posts } from "@/data/posts";
    import { useTranslation } from 'react-i18next';

    const BlogPage = () => {
      const { t } = useTranslation();
      const [searchQuery, setSearchQuery] = useState("");
      const [selectedCategory, setSelectedCategory] = useState("");

      const categories = [...new Set(posts.map(post => post.category))];

      const filteredPosts = posts.filter(post => {
        const matchesSearch = searchQuery === "" ||
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));

        const matchesCategory = selectedCategory === "" ||
          post.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
      });


      const handleSearch = (e) => {
        e.preventDefault();
      };

      return (
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold mb-6">{t('blogPage.title')}</h1>

                {/* Search and Filter */}
                <div className="mb-8">
                  <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                    <Input
                      type="search"
                      placeholder={t('nav.searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-grow"
                    />
                    <Button type="submit">
                      <Search className="h-4 w-4 mr-2" />
                      {t('blogPage.search')}
                    </Button>
                  </form>

                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedCategory === "" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory("")}
                    >
                      {t('blogPage.allTopics')}
                    </Badge>
                    {categories.map(category => (
                      <Badge
                        key={category}
                        variant={selectedCategory.toLowerCase() === category.toLowerCase() ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Posts Grid */}
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post, index) => (
                      <PostCard key={post.id} post={post} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">{t('blogPage.noArticlesFound')}</h3>
                    <p className="text-muted-foreground">
                      {t('blogPage.noArticlesDesc')}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      );
    };

    export default BlogPage;
  
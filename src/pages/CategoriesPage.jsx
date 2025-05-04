
import React from "react";
import { motion } from "framer-motion";
import CategoryList from "@/components/CategoryList";
import AdBanner from "@/components/AdBanner";

const CategoriesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Categories</h1>
        <p className="text-muted-foreground mb-8">
          Browse our articles by category to find the content that interests you most.
        </p>
        
        {/* Ad Banner */}
        <div className="mb-12">
          <AdBanner position="horizontal" />
        </div>
        
        {/* Categories Grid */}
        <CategoryList />
      </motion.div>
    </div>
  );
};

export default CategoriesPage;

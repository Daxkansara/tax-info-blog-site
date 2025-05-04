
import React from "react";
import { motion } from "framer-motion";

const AdBanner = ({ position = "horizontal" }) => {
  // This is a placeholder for Google AdSense
  // In a real implementation, you would use the actual AdSense code
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`ad-container ${
        position === "horizontal" ? "w-full h-[120px]" : "w-full md:w-[300px] h-[250px]"
      }`}
    >
      <div className="flex items-center justify-center h-full border border-dashed border-muted-foreground/50 rounded-lg bg-muted/50">
        <p className="text-muted-foreground text-sm">
          Advertisement Space
          <br />
          <span className="text-xs">
            (Replace with Google AdSense code)
          </span>
        </p>
      </div>
    </motion.div>
  );
};

export default AdBanner;

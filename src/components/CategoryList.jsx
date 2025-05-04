
    import React from "react";
    import { Link } from "react-router-dom";
    import { motion } from "framer-motion";

    const categories = [
      {
        id: "tax-planning",
        name: "Tax Planning",
        count: 15,
        color: "from-blue-500 to-indigo-600",
        icon: "💰" // Changed icon
      },
      {
        id: "gst",
        name: "GST",
        count: 18,
        color: "from-green-500 to-emerald-600",
        icon: "🧾" // Changed icon
      },
      {
        id: "accounting",
        name: "Accounting",
        count: 20,
        color: "from-purple-500 to-pink-600",
        icon: "📊" // Changed icon
      },
      {
        id: "business-setup",
        name: "Business Setup",
        count: 12,
        color: "from-red-500 to-orange-600",
        icon: "🚀" // Changed icon
      },
      {
        id: "compliance",
        name: "Compliance",
        count: 25,
        color: "from-yellow-500 to-amber-600",
        icon: "✅" // Changed icon
      }
    ];

    const CategoryList = ({ limit }) => {
      const displayCategories = limit ? categories.slice(0, limit) : categories;

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={`/category/${category.id}`}
                className="block h-full"
              >
                <div className={`bg-gradient-to-r ${category.color} rounded-lg p-6 text-white h-full hover:shadow-lg transition-shadow flex flex-col justify-between`}>
                  <div>
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                  </div>
                  <p className="text-white/80 mt-2">{category.count} articles</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      );
    };

    export default CategoryList;
  
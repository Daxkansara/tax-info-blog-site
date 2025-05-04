
    import React from "react";
    import { Link } from "react-router-dom";
    import { motion } from "framer-motion";
    import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import FeaturedPost from "@/components/FeaturedPost";
    import PostCard from "@/components/PostCard";
    import CategoryList from "@/components/CategoryList";
    import Newsletter from "@/components/Newsletter";
    import AdBanner from "@/components/AdBanner";
    import { posts } from "@/data/posts";
    import { useTranslation } from 'react-i18next';

    const HomePage = () => {
      const { t } = useTranslation();
      const featuredPost = posts[0];
      const recentPosts = posts.slice(1, 4);

      return (
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section with Featured Post */}
          <section className="mb-16">
            <FeaturedPost post={featuredPost} />
          </section>

          {/* Ad Banner */}
          <section className="mb-16">
            <AdBanner position="horizontal" />
          </section>

          {/* Recent Posts Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">{t('homePage.recentArticles')}</h2>
              <Button variant="outline" asChild>
                <Link to="/blog" className="flex items-center gap-2">
                  {t('homePage.viewAll')} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">{t('homePage.exploreTopics')}</h2>
              <Button variant="outline" asChild>
                <Link to="/categories" className="flex items-center gap-2">
                  {t('homePage.allTopics')} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <CategoryList limit={3} />
          </section>

          {/* Newsletter Section */}
          <section className="mb-16">
            <Newsletter />
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('homePage.whyChoose')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('homePage.expertGuidance')}</h3>
                <p className="text-muted-foreground">
                  {t('homePage.expertGuidanceDesc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('homePage.actionableTips')}</h3>
                <p className="text-muted-foreground">
                  {t('homePage.actionableTipsDesc')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-card rounded-lg p-6 shadow-sm border"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t('homePage.complianceFocused')}</h3>
                <p className="text-muted-foreground">
                  {t('homePage.complianceFocusedDesc')}
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      );
    };

    export default HomePage;
  
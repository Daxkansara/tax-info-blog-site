
    import React, { useState } from "react";
    import { Link } from "react-router-dom";
    import { Menu, X, Search } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { motion, AnimatePresence } from "framer-motion";
    import LanguageSwitcher from "@/components/LanguageSwitcher"; // Import LanguageSwitcher
    import { useTranslation } from 'react-i18next'; // Import useTranslation

    const Navbar = () => {
      const { t } = useTranslation(); // Initialize useTranslation hook
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState("");

      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
      };

      return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/24a57a2d-55d4-45eb-92b1-5ac6c3367b21/4aa311df46a6929cfd63c820e634dd73.jpg" alt="Tax Innovation Logo" className="h-8 w-auto" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hidden sm:inline">
                  {t('siteName')}
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/" className="text-foreground hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
                <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
                  {t('nav.topics')}
                </Link>
                 <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                  {t('nav.services')}
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </nav>

              {/* Search Bar & Language Switcher */}
              <div className="hidden md:flex items-center space-x-2">
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="search"
                    placeholder={t('nav.searchPlaceholder')}
                    className="w-[200px] lg:w-[250px] pr-8" // Adjusted width
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
                <LanguageSwitcher /> {/* Add LanguageSwitcher */}
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden">
                 <LanguageSwitcher /> {/* Add LanguageSwitcher for mobile */}
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={toggleMenu}
                 >
                   {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                 </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-background border-b border-border"
              >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                  <form onSubmit={handleSearch} className="relative">
                    <Input
                      type="search"
                      placeholder={t('nav.searchPlaceholder')}
                      className="w-full pr-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                  <Link
                    to="/"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.home')}
                  </Link>
                  <Link
                    to="/categories"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.topics')}
                  </Link>
                   <Link
                    to="/services"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.services')}
                  </Link>
                  <Link
                    to="/about"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.about')}
                  </Link>
                  <Link
                    to="/contact"
                    className="text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.contact')}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      );
    };

    export default Navbar;
  
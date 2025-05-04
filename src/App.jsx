
    import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import { Toaster } from "@/components/ui/toaster";
    import Navbar from "@/components/Navbar";
    import Footer from "@/components/Footer";
    import HomePage from "@/pages/HomePage";
    import BlogPage from "@/pages/BlogPage";
    import PostPage from "@/pages/PostPage";
    import CategoryPage from "@/pages/CategoryPage";
    import CategoriesPage from "@/pages/CategoriesPage";
    import AboutPage from "@/pages/AboutPage";
    import ContactPage from "@/pages/ContactPage";
    import AdvertisePage from "@/pages/AdvertisePage";
    import ServicesPage from "@/pages/ServicesPage"; // Import the new ServicesPage
    import NotFoundPage from "@/pages/NotFoundPage";

    const App = () => {
      return (
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/post/:postId" element={<PostPage />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/services" element={<ServicesPage />} /> {/* Add route for ServicesPage */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/advertise" element={<AdvertisePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      );
    };

    export default App;
  

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const AdvertisePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-6">Advertise With Us</h1>
        <p className="text-muted-foreground mb-12">
          Reach our engaged audience of professionals, entrepreneurs, and enthusiasts through strategic advertising on BlogSpot.
        </p>
        
        <div className="mb-12 rounded-xl overflow-hidden">
          <img  
            className="w-full h-auto object-cover"
            alt="Digital advertising concept"
           src="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
        </div>
        
        <div className="prose prose-lg max-w-none mb-12">
          <h2>Why Advertise on BlogSpot?</h2>
          <p>
            BlogSpot offers a unique opportunity to connect with a highly engaged audience interested in technology, business, marketing, and more. Our blog is optimized for Google AdSense and provides excellent visibility for brands looking to reach decision-makers and influencers in their industries.
          </p>
          
          <h3>Our Audience</h3>
          <p>
            Our readers are primarily professionals, entrepreneurs, and enthusiasts who are actively seeking information to help them succeed in their fields. They are decision-makers with purchasing power and influence within their organizations.
          </p>
          
          <ul>
            <li><strong>Monthly Visitors:</strong> 100,000+</li>
            <li><strong>Page Views:</strong> 250,000+</li>
            <li><strong>Demographics:</strong> 65% aged 25-45, 70% professionals</li>
            <li><strong>Industries:</strong> Technology, Business, Marketing, Health, Lifestyle</li>
          </ul>
          
          <h2>Advertising Options</h2>
          <p>
            We offer various advertising options to suit different marketing goals and budgets:
          </p>
          
          <h3>Display Advertising</h3>
          <p>
            Place your banner ads in strategic locations throughout our blog, including the homepage, category pages, and article pages. We support various standard IAB ad sizes and can work with you to optimize placement for maximum visibility.
          </p>
          
          <h3>Sponsored Content</h3>
          <p>
            Share your expertise and promote your brand through high-quality sponsored articles written by our team or provided by you (subject to our editorial guidelines). Sponsored content is clearly labeled as such to maintain transparency with our readers.
          </p>
          
          <h3>Newsletter Advertising</h3>
          <p>
            Reach our subscribers directly through ads in our weekly newsletter. This option provides excellent visibility and engagement with our most dedicated readers.
          </p>
          
          <h3>Google AdSense Integration</h3>
          <p>
            Our blog is fully optimized for Google AdSense, making it easy to include your ads in our content through Google's advertising platform. This option provides flexibility and targeting capabilities to reach your specific audience.
          </p>
          
          <h2>Our Advertising Principles</h2>
          <p>
            We believe in maintaining the trust of our readers while providing value to our advertisers. Our advertising principles include:
          </p>
          
          <ul>
            <li><strong>Transparency:</strong> All sponsored content and advertisements are clearly labeled.</li>
            <li><strong>Relevance:</strong> We only accept advertisements that are relevant to our audience.</li>
            <li><strong>Quality:</strong> All advertisements must meet our quality standards and not detract from the user experience.</li>
            <li><strong>Balance:</strong> We maintain a balance between content and advertisements to ensure a positive user experience.</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-4">Basic Package</h3>
            <p className="text-3xl font-bold mb-6">$499<span className="text-sm font-normal text-muted-foreground">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Standard banner ad placement</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>1 sponsored article per month</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Basic performance reporting</span>
              </li>
            </ul>
            <Button className="w-full">Get Started</Button>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg border border-primary relative">
            <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Popular
            </div>
            <h3 className="text-xl font-bold mb-4">Premium Package</h3>
            <p className="text-3xl font-bold mb-6">$999<span className="text-sm font-normal opacity-80">/month</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5" />
                <span>Premium ad placement (all pages)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5" />
                <span>2 sponsored articles per month</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5" />
                <span>Newsletter ad inclusion</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5" />
                <span>Detailed performance analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 mr-2 mt-0.5" />
                <span>Social media promotion</span>
              </li>
            </ul>
            <Button variant="secondary" className="w-full">Get Started</Button>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <h3 className="text-xl font-bold mb-4">Enterprise Package</h3>
            <p className="text-3xl font-bold mb-6">Custom<span className="text-sm font-normal text-muted-foreground"> pricing</span></p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Custom ad strategy</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Unlimited sponsored content</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Priority placement in all channels</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Advanced targeting options</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Contact Us</Button>
          </div>
        </div>
        
        <div className="bg-muted/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Contact our advertising team to discuss your marketing goals and how we can help you reach our audience. We'll work with you to create a customized advertising plan that meets your needs and budget.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Our Ad Team</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdvertisePage;

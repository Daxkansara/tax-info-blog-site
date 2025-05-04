
    import React from "react";
    import { motion } from "framer-motion";
    import { Button } from "@/components/ui/button";
    import { Link } from "react-router-dom";
    import { Mail, Phone, MapPin } from "lucide-react";

    const AboutPage = () => {
      return (
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">About Tax Innovation</h1>

            <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
              <img
                className="w-full h-auto object-cover"
                alt="Tax Innovation Office or Team"
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              <h2>Our Mission</h2>
              <p>
                At Tax Innovation (Jatin Soni & Associates), our mission is to simplify the complexities of taxation and accounting for individuals and businesses. We strive to provide expert guidance, innovative solutions, and actionable insights that empower our clients to achieve financial success while ensuring compliance. We are dedicated to "Making Taxes Saving You Time & Money".
              </p>

              <h2>Our Story</h2>
              <p>
                Founded by Jatin Soni, Tax Innovation was established with the goal of offering comprehensive tax consultancy and professional accounting services. Recognizing the challenges faced by businesses in navigating the ever-changing tax landscape, we set out to build a firm focused on clarity, accuracy, and client success.
              </p>
              <p>
                From our offices in Modasa, we serve a diverse clientele, helping them with everything from income tax filing and GST compliance to business setup and financial planning. Our commitment to leveraging technology and staying updated with the latest regulations allows us to provide efficient and effective solutions.
              </p>

              <h2>Our Team</h2>
              <p>
                Led by Jatin Soni, our team comprises dedicated professionals with expertise in various facets of taxation, accounting, and business advisory. We work collaboratively to provide holistic support tailored to each client's unique needs.
              </p>

              <h2>Our Values</h2>
              <ul>
                <li><strong>Integrity:</strong> Upholding the highest ethical standards in all our dealings.</li>
                <li><strong>Accuracy:</strong> Ensuring precision and correctness in all financial and tax matters.</li>
                <li><strong>Client-Centricity:</strong> Putting our clients' needs and success at the forefront.</li>
                <li><strong>Innovation:</strong> Continuously seeking better ways to serve our clients and simplify processes.</li>
                <li><strong>Knowledge:</strong> Staying updated with the latest laws and regulations to provide informed advice.</li>
              </ul>

              <h2>Our Services</h2>
              <p>
                We offer a wide range of services to meet your tax and accounting needs. Visit our <Link to="/services">Services</Link> page for a detailed overview.
              </p>
            </div>

            <div className="bg-muted/30 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6">
                Get in touch with us for expert advice and support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start gap-3">
                   <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold">Email</h3>
                     <a href="mailto:jatinsoni@taxinnovation.in" className="text-muted-foreground hover:text-primary transition-colors">jatinsoni@taxinnovation.in</a>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold">Phone</h3>
                     <a href="tel:+919601551074" className="text-muted-foreground hover:text-primary transition-colors">+91 96015 51074</a>
                   </div>
                 </div>
                 <div className="flex items-start gap-3 md:col-span-2">
                   <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                   <div>
                     <h3 className="font-semibold">Head Office</h3>
                     <p className="text-muted-foreground">
                       D-O 45, APMC Market, Dhugarwada Road, MODASA - 383315.
                     </p>
                     <h3 className="font-semibold mt-2">Branch Office</h3>
                     <p className="text-muted-foreground">
                       5-23, Gopivallabh-A, Opp. I.T.I., Malpur Road, MODASA - 383315. (Dist. Aravalli)
                     </p>
                   </div>
                 </div>
              </div>
               <div className="mt-6">
                 <h3 className="font-semibold mb-2">Office Hours</h3>
                 <p className="text-muted-foreground">Monday to Friday: 9:00 AM to 6:30 PM</p>
                 <p className="text-muted-foreground">Saturday: 9:00 AM to 5:00 PM (Sunday Off)</p>
               </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Professional Help</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      );
    };

    export default AboutPage;
  
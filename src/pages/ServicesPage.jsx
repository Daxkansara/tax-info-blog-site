
    import React from "react";
    import { motion } from "framer-motion";
    import { Check } from "lucide-react";
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Link } from "react-router-dom";

    const services = [
      {
        category: "Accounting Services",
        items: [
          "Accounting Service",
          "Computerised Account",
          "US Accounting",
          "US Bank Reconciliation",
          "CMA Report",
        ],
      },
      {
        category: "Taxation Services",
        items: [
          "Income Tax Filing Work",
          "Notice Reply (Income Tax)",
          "Tax Planning",
          "Refund Tax",
          "GST Registration - Filling - Audit - Notice Reply",
          "TDS Filing",
          "TCS Filing",
        ],
      },
      {
        category: "Audit & Assurance",
        items: [
          "Tax Audit",
          "Internal Audit",
          "Statutory Audit",
        ],
      },
      {
        category: "Business Support & Registration",
        items: [
          "Business Support",
          "FSSAI Registration (Food License)",
          "Dhiran - MSME Registration",
          "PAN Card Application",
          "TAN Card Application",
          "Company Registration",
        ],
      },
      {
        category: "Finance & Reporting",
        items: [
          "Project Finance Report",
          "Loan File Preparation",
        ],
      },
    ];

    const ServicesPage = () => {
      return (
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
            <p className="text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Tax Innovation offers a comprehensive suite of services designed to meet the diverse needs of individuals and businesses. Explore how we can help you manage your finances, ensure compliance, and achieve growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((serviceCategory, index) => (
                <motion.div
                  key={serviceCategory.category}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{serviceCategory.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {serviceCategory.items.map((item) => (
                          <li key={item} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Finances?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Let our experts handle the complexities of tax and accounting so you can focus on growing your business.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Contact Us for a Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      );
    };

    export default ServicesPage;
  
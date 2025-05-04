
    import React, { useState } from "react";
    import { motion } from "framer-motion";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { Textarea } from "@/components/ui/textarea";
    import { useToast } from "@/components/ui/use-toast";
    import { Mail, Phone, MapPin, Clock } from "lucide-react";

    const ContactPage = () => {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      const [isSubmitting, setIsSubmitting] = useState(false);
      const { toast } = useToast();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
          toast({
            title: "Message sent!",
            description: "Thank you for your message. We'll get back to you soon.",
          });

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });

          setIsSubmitting(false);
        }, 1500);
      };

      return (
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Contact Tax Innovation</h1>
            <p className="text-muted-foreground mb-12">
              We're here to help with your tax, accounting, and business needs. Reach out via the form or use our contact details.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  For inquiries & support
                </p>
                <a href="mailto:jatinsoni@taxinnovation.in" className="text-primary hover:underline break-all">
                  jatinsoni@taxinnovation.in
                </a>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Direct line for assistance
                </p>
                <a href="tel:+919601551074" className="text-primary hover:underline">
                  +91 96015 51074
                </a>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                 <p className="text-muted-foreground mb-1 text-sm">Head Office:</p>
                 <address className="not-italic text-primary text-sm mb-2">
                   D-O 45, APMC Market,<br/>Dhugarwada Road, MODASA - 383315.
                 </address>
                 <p className="text-muted-foreground mb-1 text-sm">Branch Office:</p>
                 <address className="not-italic text-primary text-sm">
                   5-23, Gopivallabh-A, Opp. I.T.I.,<br/>Malpur Road, MODASA - 383315.
                 </address>
              </div>
            </div>

             <div className="bg-muted/30 rounded-xl p-6 mb-12 text-center">
               <div className="flex items-center justify-center gap-2 mb-2">
                 <Clock className="h-5 w-5 text-primary" />
                 <h3 className="text-xl font-semibold">Office Hours</h3>
               </div>
               <p className="text-muted-foreground">Monday to Friday: 9:00 AM - 6:30 PM</p>
               <p className="text-muted-foreground">Saturday: 9:00 AM - 5:00 PM (Sunday Off)</p>
             </div>


            <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>

                <div className="bg-muted hidden md:block">
                  <img
                    className="w-full h-full object-cover"
                    alt="Tax Innovation Office"
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    };

    export default ContactPage;
  
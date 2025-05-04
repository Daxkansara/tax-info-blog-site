
    import React from "react";
    import { Link } from "react-router-dom";
    import { Separator } from "@/components/ui/separator";
    import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
    import { useTranslation } from 'react-i18next';

    const Footer = () => {
      const { t, i18n } = useTranslation();
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-background border-t">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link to="/" className="inline-block">
                   <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/24a57a2d-55d4-45eb-92b1-5ac6c3367b21/4aa311df46a6929cfd63c820e634dd73.jpg" alt="Tax Innovation Logo" className="h-10 w-auto mb-2" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {t('siteName')}
                  </span>
                </Link>
                <p className="text-muted-foreground">
                  {t('tagline')}
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:jatinsoni@taxinnovation.in" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t('nav.topics')}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/category/income-tax" className="text-muted-foreground hover:text-primary transition-colors">
                      Income Tax
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/gst" className="text-muted-foreground hover:text-primary transition-colors">
                      GST
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/accounting" className="text-muted-foreground hover:text-primary transition-colors">
                      Accounting
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/business-setup" className="text-muted-foreground hover:text-primary transition-colors">
                      Business Setup
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/compliance" className="text-muted-foreground hover:text-primary transition-colors">
                      Compliance
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
                <ul className="space-y-2">
                   <li>
                    <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                      {t('nav.services')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      {t('nav.about')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      {t('nav.contact')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                      {t('footer.privacy')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                      {t('footer.terms')}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">{t('footer.newsletterTitle')}</h3>
                <p className="text-muted-foreground mb-4">
                  {t('footer.newsletterPrompt')}
                </p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder={t('nav.searchPlaceholder')}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
                  >
                    {t('footer.subscribe')}
                  </button>
                </form>
              </div>
            </div>

            <Separator className="my-8" />

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                {t('footer.copyright', { year: currentYear })}
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  
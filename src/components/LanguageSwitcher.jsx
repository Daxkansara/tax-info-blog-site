
    import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Globe } from 'lucide-react';
    import { Button } from "@/components/ui/button";
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";

    const languages = [
      { code: 'en', name: 'English' },
      { code: 'hi', name: 'हिन्दी' },
      { code: 'gu', name: 'ગુજરાતી' },
    ];

    const LanguageSwitcher = () => {
      const { i18n } = useTranslation();

      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Change language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={i18n.resolvedLanguage === lang.code ? 'bg-accent' : ''}
              >
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    };

    export default LanguageSwitcher;
  
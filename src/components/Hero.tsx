import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Phone, Download, ExternalLink } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center hero-gradient px-4 py-16">
      <div className="container mx-auto max-w-4xl text-center">
        <Card className="p-8 md:p-12 elegant-shadow backdrop-blur-sm bg-card/95 smooth-transition hover:glow-shadow">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('hero.name')}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
                {t('hero.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <a 
                href="mailto:lawrencefandango@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail className="w-4 h-4" />
                {t('hero.email')}
              </a>
              <a 
                href="https://github.com/Bedtimestory9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-transition"
              >
                <Github className="w-4 h-4" />
                {t('hero.github')}
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                {t('hero.phone')}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="hero-gradient border-0 text-white font-semibold px-8 py-3 smooth-transition hover:scale-105"
              >
                {t('hero.learnMore')}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-3 smooth-transition"
              >
                <Download className="w-4 h-4 mr-2" />
                {t('hero.downloadResume')}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
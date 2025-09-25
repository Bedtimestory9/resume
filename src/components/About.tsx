import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const techStack = [
    "React",
    "React Native", 
    "TypeScript",
    "Tanstack Query",
    "Shadcn UI",
    "Material UI",
    "VueJS",
    "Phoenix Framework",
    "Elixir",
    "Linux"
  ];

  return (
    <section id="about" className="py-20 px-4 subtle-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="p-8 elegant-shadow smooth-transition hover:glow-shadow">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('about.subtitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.intro')}
              </p>

              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">{t('about.education')}</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Guangdong Pharmaceutical University</strong> (2013-2017)
                </p>
                <p className="text-sm text-muted-foreground">English Major</p>
                <p className="text-sm text-muted-foreground">Computer Science Second Degree</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 elegant-shadow smooth-transition hover:glow-shadow">
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('about.skills')}</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-tech/10 text-tech border-tech/20 hover:bg-tech/20 smooth-transition bounce-transition hover:scale-110"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
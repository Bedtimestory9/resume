import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      company: t('experience.companies.ibm.company'),
      position: t('experience.companies.ibm.title'),
      period: t('experience.companies.ibm.duration'),
      location: t('experience.companies.ibm.location'),
      description: t('experience.companies.ibm.description'),
      projects: [
        {
          name: "Flight Scheduling Optimization System",
          responsibilities: [
            "Front end development, including building flight scheduling panel UI components and API integration",
            "Full-stack debugging, including log construction and optimization, JSON extraction and troubleshooting, and database query debugging",
            "Front end performance maintenance, including maintenance of the UI library Artifact, reusable component upkeep, and render optimization"
          ]
        },
        {
          name: "Flight Maintenance Checkup App",
          responsibilities: [
            "Developed a cross-platform (iOS / Android) mobile app using React Native",
            "Designed and implemented key features such as maintenance flight search, filtering, and bookmarking",
            "Built a user authentication system: supporting both local guest authentication and email-based registration, combined with hash-based encryption for data security"
          ]
        }
      ],
      techStack: ["React", "React Native", "Fastify", "MongoDB", "NodeJS", "Material UI", "Python"]
    },
    {
      company: t('experience.companies.liansheng.company'),
      position: t('experience.companies.liansheng.title'), 
      period: t('experience.companies.liansheng.duration'),
      location: t('experience.companies.liansheng.location'),
      description: t('experience.companies.liansheng.description'),
      projects: [
        {
          name: "Electronic Components eCommerce Website",
          responsibilities: [
            "Refactored a monolithic Vue codebase into React",
            "Implemented multi-language support",
            "SEO optimization, including meta tag optimization and formatting based on Google crawler validation",
            "Frontend development, including marketplace layout and responsive web design"
          ]
        },
        {
          name: "Data User Dashboard Mobile End",
          responsibilities: [
            "Optimize React Native app performance, including component re-usability, interactive focus display, state management, and logical separation of static vs. dynamic features",
            "Collaborated with UI/UX team to unify mobile design standards, optimize interaction, and enhance user experience",
            "Participate in mobile containerized deployment and environment setup, covering Android/iOS builds, CI/CD integration, API gateway debugging, and data migration"
          ]
        }
      ],
      techStack: ["React", "React Native", "TypeScript", "ExpressJS", "Docker"]
    },
    {
      company: t('experience.companies.goldsource.company'),
      position: t('experience.companies.goldsource.title'),
      period: t('experience.companies.goldsource.duration'), 
      location: t('experience.companies.goldsource.location'),
      description: t('experience.companies.goldsource.description'),
      projects: [
        {
          name: "Company Website & Backend System",
          responsibilities: [
            "Designed product category table structure, creating a multi-level, many-to-many relational model for electronic components",
            "Built a NodeJS backend, including APIs, middleware setup and optimization, and server deployment",
            "Designed and implemented company pages, including responsive web design"
          ]
        }
      ],
      techStack: ["jQuery", "JavaScript", "ExpressJS"]
    },
    {
      company: t('experience.companies.lilt.company'),
      position: t('experience.companies.lilt.title'),
      period: t('experience.companies.lilt.duration'),
      location: t('experience.companies.lilt.location'),
      description: t('experience.companies.lilt.description'),
      projects: [
        {
          name: "Translation & Project Management",
          responsibilities: [
            "Produced export freight documents, including cargo review and preparation of English shipping documents",
            "Conference interpretation, including simultaneous interpretation for key clients, as well as translation of legal and technical documents",
            "Translation project management, including project assignment, delivery, and evaluation",
            "Translation review, including error categorization and correction"
          ]
        }
      ],
      techStack: []
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 elegant-shadow smooth-transition hover:glow-shadow">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 className="w-5 h-5" />
                      <h3 className="text-2xl font-bold">{exp.company}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-accent">{exp.position}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                {exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-tech/30 text-tech hover:bg-tech/10 smooth-transition"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="bg-muted/30 p-6 rounded-lg">
                      <h5 className="text-lg font-semibold text-foreground mb-3">{project.name}</h5>
                      <div className="space-y-2">
                        {project.responsibilities.map((resp, respIndex) => (
                          <div key={respIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{resp}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
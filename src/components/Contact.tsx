import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Phone, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 hero-gradient">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          <p className="text-white/90 mt-6 text-lg">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </div>

        <Card className="p-8 md:p-12 elegant-shadow backdrop-blur-sm bg-card/95">
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="mailto:lawrencefandango@gmail.com"
              className="group"
            >
              <div className="text-center p-6 rounded-lg smooth-transition hover:bg-muted/50 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 smooth-transition">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-2">Send me a message</p>
                <p className="text-primary font-medium text-sm">lawrencefandango@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://github.com/Bedtimestory9"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="text-center p-6 rounded-lg smooth-transition hover:bg-muted/50 hover:scale-105">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 smooth-transition">
                  <Github className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground text-sm mb-2">View my projects</p>
                <p className="text-accent font-medium text-sm flex items-center justify-center gap-1">
                  Bedtimestory9 <ExternalLink className="w-3 h-3" />
                </p>
              </div>
            </a>

            <div className="group">
              <div className="text-center p-6 rounded-lg smooth-transition hover:bg-muted/50 hover:scale-105">
                <div className="w-16 h-16 bg-tech/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tech/20 smooth-transition">
                  <Phone className="w-8 h-8 text-tech" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm mb-2">Give me a call</p>
                <p className="text-tech font-medium text-sm">+86 13112231647</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="hero-gradient border-0 text-white font-semibold px-8 py-3 smooth-transition hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
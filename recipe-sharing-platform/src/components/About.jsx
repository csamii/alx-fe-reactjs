import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Button from "./ui/Button";
import { Badge } from "./ui/Badge";
import Footer from "./Footer";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Heart, Users, Clock, Star, ChefHat, Globe, Award, Calendar, MapPin, Mail } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About({ onPageChange }) {
  const teamImage = "https://images.unsplash.com/photo-1665088127661-83aeff6104c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGluZ3JlZGllbnRzJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTUzNTYzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const chefImage = "https://images.unsplash.com/photo-1678626667639-de9c676e8222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU1MzY0NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Head Chef",
      bio: "Former Michelin-starred restaurant chef with 15 years of culinary experience. Passionate about making gourmet cooking accessible to everyone.",
      image: chefImage,
      location: "San Francisco, CA"
    },
    {
      name: "Marcus Rodriguez",
      role: "Community Manager",
      bio: "Food blogger and cookbook author who believes in the power of community to inspire great cooking. Manages our recipe curation process.",
      image: chefImage,
      location: "Austin, TX"
    },
    {
      name: "Emma Thompson",
      role: "Recipe Developer",
      bio: "Culinary school graduate specializing in healthy, family-friendly recipes. Tests every recipe to ensure perfect results in home kitchens.",
      image: chefImage,
      location: "Portland, OR"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Sarah started RecipeBox as a personal blog to share family recipes passed down through generations."
    },
    {
      year: "2020",
      title: "Community Growth",
      description: "Reached 1,000 registered users and launched our first community recipe contest during the pandemic."
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Officially launched RecipeBox platform with user-generated content and recipe rating system."
    },
    {
      year: "2022",
      title: "Mobile Expansion",
      description: "Released mobile app and introduced video cooking tutorials from community members."
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded to international markets and now serve over 100 countries with localized content."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced AI-powered recipe suggestions and dietary restriction filters for personalized experiences."
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Best Food Platform",
      organization: "Digital Food Awards",
      description: "Recognized for outstanding user experience and community engagement"
    },
    {
      year: "2023",
      title: "People's Choice Award",
      organization: "Food & Tech Summit",
      description: "Voted by users as their favorite recipe sharing platform"
    },
    {
      year: "2024",
      title: "Innovation in Food Tech",
      organization: "Culinary Technology Institute",
      description: "Awarded for pioneering community-driven recipe development"
    }
  ];

  const faqs = [
    {
      question: "Is RecipeBox really free to use?",
      answer: "Yes! RecipeBox is completely free. We believe great recipes should be accessible to everyone. There are no hidden fees, premium subscriptions, or paywalls."
    },
    {
      question: "Do I need to register to view recipes?",
      answer: "Not at all! You can browse, search, and view any recipe without creating an account. Registration is only needed if you want to submit your own recipes or save favorites."
    },
    {
      question: "How do you ensure recipe quality?",
      answer: "Every recipe is tested by our culinary team and community members before publication. We also have a rating system where users can review recipes and share their cooking experiences."
    },
    {
      question: "Can I submit my own recipes?",
      answer: "Absolutely! We encourage community contributions. You can submit recipes through our simple form, and they'll be reviewed by our team before publication."
    },
    {
      question: "Are the nutritional facts accurate?",
      answer: "Our nutritional information is calculated using professional food databases and reviewed by certified nutritionists. However, values may vary based on specific ingredients used."
    },
    {
      question: "Do you offer cooking classes or tutorials?",
      answer: "While we don't offer formal classes, many of our recipes include step-by-step photos and video tutorials created by community members and our culinary team."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About RecipeBox
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We believe that great food brings people together. RecipeBox is a community-driven platform 
            where home cooks share their favorite recipes, cooking tips, and culinary adventures with the world.
          </p>
          <div className="aspect-video max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src={teamImage}
              alt="Fresh ingredients and cooking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To make cooking accessible, enjoyable, and social for everyone, regardless of skill level or background.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why We Created RecipeBox</h3>
              <p className="text-muted-foreground mb-4">
                Cooking is one of humanity's oldest and most essential skills, yet many people feel intimidated 
                by it in today's fast-paced world. We wanted to create a space where anyone could discover 
                delicious recipes, learn new techniques, and share their own culinary creations.
              </p>
              <p className="text-muted-foreground mb-6">
                Our platform removes barriers by being completely free and open to everyone. No registration 
                required, no paywalls, just pure passion for great food and cooking.
              </p>
              <Button onClick={() => onPageChange('recipes')} size="lg">
                Explore Recipes
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <ChefHat className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-medium mb-2">Expert Recipes</h4>
                <p className="text-sm text-muted-foreground">
                  Curated by passionate home cooks
                </p>
              </Card>
              <Card className="text-center p-6">
                <Heart className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-medium mb-2">Made with Love</h4>
                <p className="text-sm text-muted-foreground">
                  Every recipe tested in real kitchens
                </p>
              </Card>
              <Card className="text-center p-6">
                <Globe className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-medium mb-2">Global Cuisine</h4>
                <p className="text-sm text-muted-foreground">
                  Flavors from around the world
                </p>
              </Card>
              <Card className="text-center p-6">
                <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h4 className="font-medium mb-2">Community</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with fellow food lovers
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate food lovers behind RecipeBox
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="secondary">{member.role}</Badge>
                  </div>
                  <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{member.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.bio}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From a simple blog to a global community
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline">{event.year}</Badge>
                    <h3 className="text-lg font-medium">{event.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Proud to be recognized by the culinary and tech communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <Badge variant="outline" className="mb-2">{award.year}</Badge>
                <h3 className="font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{award.organization}</p>
                <p className="text-sm">{award.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">RecipeBox by the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of home cooks who have already discovered their new favorite recipes
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Recipes Shared</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Cooks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Passion for Food</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe cooking is an art form that nourishes both body and soul. Every recipe 
                  on our platform is shared with genuine love for great food.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our community of home cooks is at the heart of everything we do. We foster an 
                  environment of sharing, learning, and celebrating culinary achievements together.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quality & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every recipe is tested and rated by real home cooks. We maintain high standards 
                  to ensure you can trust the recipes you find on our platform.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about RecipeBox
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              <Mail className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Footer />
    </div>
  );
}
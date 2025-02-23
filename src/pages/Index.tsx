
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Rocket, Computer, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary-light to-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Welcome to EvolveIndex Agency
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Evolve Your Digital Presence
              <br />
              <span className="text-primary">With Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From Digital Marketing to Web Development, Graphic Design, and SEO,
              we've got your brand covered.
            </p>
            <Button
              className="mt-8 px-8 py-6 bg-primary hover:bg-primary-dark text-white rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Do Best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 hover-scale"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              Let's Evolve Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At EvolveIndex Agency, we're passionate about helping businesses thrive in the digital era.
              Our team of experts combines creativity with technical expertise to deliver outstanding results.
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Evolve?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with us and let's start your digital transformation journey.
          </p>
          <Button
            className="bg-white text-primary hover:bg-gray-100 transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth and engagement across all digital channels."
  },
  {
    icon: Computer,
    title: "Web Development",
    description: "Custom websites and applications built with cutting-edge technologies."
  },
  {
    icon: Rocket,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve your online visibility and rankings."
  },
  {
    icon: Users,
    title: "Brand Strategy",
    description: "Comprehensive brand development to establish your unique market position."
  }
];

export default Index;

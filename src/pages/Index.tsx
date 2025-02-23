
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Globe, 
  Rocket, 
  Computer, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  ArrowUpRight 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-white to-primary-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Welcome to EvolveIndex Agency
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight">
              Evolve Your Digital Presence
              <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                With Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              From Digital Marketing to Web Development, Graphic Design, and SEO,
              we've got your brand covered.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button
                className="px-8 py-6 bg-primary hover:bg-primary-dark text-white rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full text-lg font-semibold transition-all duration-300"
              >
                Learn More
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold">Our Services</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">What We Do Best</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive digital solutions tailored to your business needs,
                helping you stay ahead in the digital landscape.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-8 hover-scale"
              >
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button variant="link" className="text-primary p-0 hover:text-primary-dark">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-semibold">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Transform Your Business with Our Expertise
              </h2>
              <p className="text-gray-600">
                We combine innovation with proven strategies to deliver exceptional results
                for our clients. Our approach is built on three core principles:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-primary-light/20 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-semibold">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-8">
              Let's Evolve Together
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At EvolveIndex Agency, we're passionate about helping businesses thrive in the digital era.
              Our team of experts combines creativity with technical expertise to deliver outstanding results.
              With years of experience and a commitment to innovation, we're your trusted partner in digital transformation.
            </p>
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center text-white mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Evolve?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Get in touch with us and let's start your digital transformation journey.
                  Our team is ready to help you achieve your goals.
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white text-center"
                >
                  <info.icon className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="opacity-90">{info.detail}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 text-lg px-8 py-6"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
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

const benefits = [
  {
    title: "Data-Driven Approach",
    description: "We make decisions based on thorough analysis and real-world data to ensure optimal results."
  },
  {
    title: "Innovative Solutions",
    description: "Our team stays ahead of industry trends to provide cutting-edge solutions."
  },
  {
    title: "Dedicated Support",
    description: "We're committed to your success with 24/7 support and regular consultations."
  }
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Team Experts" }
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@evolveindex.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+1 (555) 123-4567"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "123 Innovation St, Tech City"
  }
];

export default Index;


import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ariful@example.com",
      description: "Send me an email anytime!"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 123 456 789",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", color: "hover:text-gray-300" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
    { icon: Mail, name: "Email", url: "#", color: "hover:text-green-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Project Discussion"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-blue-500/20 p-3 rounded-lg">
                              <Icon className="text-blue-400" size={24} />
                            </div>
                            <div>
                              <h3 className="text-white font-semibold text-lg">{info.title}</h3>
                              <p className="text-blue-400 font-medium">{info.value}</p>
                              <p className="text-gray-400 text-sm mt-1">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.url}
                            className={`flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                          >
                            <Icon size={20} />
                            <span className="text-sm font-medium">{social.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Availability Status */}
              <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Available for Work</h3>
                  <p className="text-gray-300 text-sm">
                    Currently accepting new projects and collaborations. Let's create something amazing together!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you need a simple website or a complex web application, I'm here to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Schedule a Call
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Ariful
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Full Stack Developer & Creative Problem Solver
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                I craft digital experiences with modern technologies, turning ideas into elegant solutions.
                Passionate about clean code, user experience, and continuous learning.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View My Work <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Github size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Linkedin size={32} />
              </a>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Mail size={32} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">Frontend Development</h3>
              <p className="text-gray-400">Creating responsive and interactive user interfaces with modern frameworks.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Backend Development</h3>
              <p className="text-gray-400">Building robust server-side applications and APIs with scalable architecture.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-400 text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Full Stack Solutions</h3>
              <p className="text-gray-400">End-to-end development from concept to deployment with modern tools.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

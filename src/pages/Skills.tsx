
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, experience: "3+ years" },
        { name: "JavaScript/TypeScript", level: 90, experience: "4+ years" },
        { name: "Vue.js", level: 85, experience: "2+ years" },
        { name: "HTML5/CSS3", level: 95, experience: "5+ years" },
        { name: "Tailwind CSS", level: 90, experience: "2+ years" },
        { name: "SASS/SCSS", level: 80, experience: "3+ years" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, experience: "3+ years" },
        { name: "Express.js", level: 85, experience: "3+ years" },
        { name: "Python", level: 82, experience: "2+ years" },
        { name: "Django", level: 78, experience: "2+ years" },
        { name: "REST APIs", level: 90, experience: "3+ years" },
        { name: "GraphQL", level: 75, experience: "1+ years" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      skills: [
        { name: "MongoDB", level: 85, experience: "3+ years" },
        { name: "PostgreSQL", level: 80, experience: "2+ years" },
        { name: "MySQL", level: 82, experience: "3+ years" },
        { name: "Firebase", level: 88, experience: "2+ years" },
        { name: "AWS", level: 75, experience: "1+ years" },
        { name: "Docker", level: 70, experience: "1+ years" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 92, experience: "4+ years" },
        { name: "VS Code", level: 95, experience: "5+ years" },
        { name: "Webpack", level: 78, experience: "2+ years" },
        { name: "Jest", level: 80, experience: "2+ years" },
        { name: "Figma", level: 85, experience: "3+ years" },
        { name: "Postman", level: 88, experience: "3+ years" }
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "React Developer Certification", issuer: "Meta", year: "2022" },
    { name: "Full Stack Web Development", issuer: "freeCodeCamp", year: "2021" },
    { name: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2021" }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Navigation />
      
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3 text-2xl">
                    <span className="text-3xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                              {skill.experience}
                            </Badge>
                            <span className="text-gray-300 text-sm">{skill.level}%</span>
                          </div>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-white/10"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                    <h3 className="text-white font-semibold mb-2">{cert.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">{cert.issuer}</p>
                    <Badge className="bg-blue-500/20 text-blue-300">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skill Summary */}
          <section>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Professional Summary</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
                  <p className="text-gray-300">Technologies Mastered</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;

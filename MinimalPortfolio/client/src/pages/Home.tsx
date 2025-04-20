import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { personalInfo, projects, skills, experiences, education, certifications } from "@/data";
import ProjectCard from "@/pages/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Home() {
  // Filter skills by category
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const databaseSkills = skills.filter(skill => skill.category === 'database');
  const devOpsSkills = skills.filter(skill => skill.category === 'devops');
  const testingSkills = skills.filter(skill => skill.category === 'testing');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  // Section animation
  const SectionAnimation = ({ children, id }: { children: React.ReactNode, id: string }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.1 });
    
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    
    return (
      <motion.section
        id={id}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
      >
        {children}
      </motion.section>
    );
  };

  // Contact form handling
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here in a real implementation
    alert("Thank you for your message. I'll get back to you soon!");
  };

  return (
    <>
      <Header personalInfo={personalInfo} />
      
      <main>
        {/* Hero Section */}
        <SectionAnimation id="home">
          <div className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <motion.p 
                    className="text-[#777777] mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Hello, I'm
                  </motion.p>
                  <motion.h1 
                    className="text-5xl md:text-6xl font-bold mb-6 text-black"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {personalInfo.name}
                  </motion.h1>
                  <motion.h2 
                    className="text-2xl md:text-3xl font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {personalInfo.title}
                  </motion.h2>
                  <motion.p 
                    className="text-[#777777] text-lg mb-8 leading-relaxed max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {personalInfo.shortBio}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <a href="#projects" className="px-6 py-3 bg-black text-white hover:bg-[#333333] transition-colors">
                      View Projects
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-black hover:bg-[#EEEEEE] transition-colors">
                      Get in Touch
                    </a>
                  </motion.div>
                </div>
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <motion.div 
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img 
                      src="/profile.png" 
                      alt="Matteo Rossato" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SectionAnimation>

        {/* Projects Section */}
        <SectionAnimation id="projects">
          <div className="py-20 bg-[#EEEEEE]">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-2 text-black">Projects</h2>
              <p className="text-[#777777] mb-12 max-w-2xl">
                A collection of my most significant work that demonstrates my technical skills and problem-solving capabilities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href={personalInfo.githubLink} 
                  className="inline-flex items-center gap-2 text-[#333333] hover:text-black transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View more projects on GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </SectionAnimation>

        {/* Skills Section */}
        <SectionAnimation id="skills">
          <div className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-2 text-black">Skills & Technologies</h2>
              <p className="text-[#777777] mb-12 max-w-2xl">My technical toolkit and areas of expertise.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-black">Technical Skills</h3>
                  
                  <div className="space-y-6">
                    {/* Frontend */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-black">Frontend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((skill, index) => (
                          <SkillBadge key={index} name={skill.name} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Backend */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-black">Backend Development</h4>
                      <div className="flex flex-wrap gap-2">
                        {backendSkills.map((skill, index) => (
                          <SkillBadge key={index} name={skill.name} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Databases */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-black">Databases & Storage</h4>
                      <div className="flex flex-wrap gap-2">
                        {databaseSkills.map((skill, index) => (
                          <SkillBadge key={index} name={skill.name} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-black">Tools & Practices</h3>
                  
                  <div className="space-y-6">
                    {/* DevOps */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-black">DevOps & Deployment</h4>
                      <div className="flex flex-wrap gap-2">
                        {devOpsSkills.map((skill, index) => (
                          <SkillBadge key={index} name={skill.name} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Testing */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-black">Testing</h4>
                      <div className="flex flex-wrap gap-2">
                        {testingSkills.map((skill, index) => (
                          <SkillBadge key={index} name={skill.name} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Other Skills */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-black">Other Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {otherSkills.map((skill, index) => (
                          <SkillBadge key={index} name={skill.name} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionAnimation>

        {/* About Section */}
        <SectionAnimation id="about">
          <div className="py-20 bg-[#EEEEEE]">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-2 text-black">About Me</h2>
              <p className="text-[#777777] mb-12 max-w-2xl">A little background on who I am and what I do.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <h3 className="text-xl font-semibold mb-6 text-black">{personalInfo.name}</h3>
                  
                  <div className="space-y-4 text-[#777777]">
                    {personalInfo.longBio.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4 text-black">Experience</h4>
                    
                    <div className="space-y-6">
                      {experiences.map((experience, index) => (
                        <div key={index} className="border-l-2 border-[#777777] pl-6 py-2">
                          <p className="text-sm text-[#777777]">{experience.period}</p>
                          <h5 className="text-lg font-medium text-black">{experience.position}</h5>
                          <p className="text-[#333333]">{experience.company}</p>
                          <p className="text-[#777777] mt-2">{experience.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="bg-white p-6 border border-[#EEEEEE]">
                    <h4 className="text-lg font-medium mb-6 text-black">Education</h4>
                    
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index}>
                          <p className="text-sm text-[#777777]">{edu.period}</p>
                          <h5 className="text-lg font-medium text-black">{edu.degree}</h5>
                          <p className="text-[#333333]">{edu.institution}</p>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="text-lg font-medium mb-4 mt-8 text-black">Certifications</h4>
                    
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 mt-0.5 text-[#777777]" />
                          <div>
                            <p className="font-medium text-[#333333]">{cert.name}</p>
                            <p className="text-sm text-[#777777]">{cert.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <a 
                        href={personalInfo.resumeLink} 
                        className="block w-full py-3 bg-black text-white text-center hover:bg-[#333333] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionAnimation>

        {/* Contact Section */}
        <SectionAnimation id="contact">
          <div className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-2 text-black">Get In Touch</h2>
              <p className="text-[#777777] mb-12 max-w-2xl">
                Interested in working together? Feel free to reach out through any of these channels.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div>
                      <Label htmlFor="name" className="block mb-2 text-[#333333]">Name</Label>
                      <Input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 border border-[#EEEEEE] focus:border-[#333333] outline-none transition-colors" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="block mb-2 text-[#333333]">Email</Label>
                      <Input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 border border-[#EEEEEE] focus:border-[#333333] outline-none transition-colors" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="block mb-2 text-[#333333]">Subject</Label>
                      <Input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-3 border border-[#EEEEEE] focus:border-[#333333] outline-none transition-colors" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="block mb-2 text-[#333333]">Message</Label>
                      <Textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-4 py-3 border border-[#EEEEEE] focus:border-[#333333] outline-none transition-colors" 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto px-8 py-3 bg-black text-white hover:bg-[#333333] transition-colors"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
                
                <div>
                  <div className="bg-[#EEEEEE] p-8">
                    <h3 className="text-xl font-semibold mb-6 text-black">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#777777]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <p className="font-medium text-black">Email</p>
                          <a 
                            href={`mailto:${personalInfo.email}`} 
                            className="text-[#777777] hover:text-[#333333] transition-colors"
                          >
                            {personalInfo.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#777777]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <p className="font-medium text-black">Phone</p>
                          <a 
                            href={`tel:${personalInfo.phone}`} 
                            className="text-[#777777] hover:text-[#333333] transition-colors"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#777777]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-medium text-black">Location</p>
                          <p className="text-[#777777]">{personalInfo.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-12 mb-6 text-black">Connect With Me</h3>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={personalInfo.githubLink} 
                        aria-label="GitHub" 
                        className="p-2 border border-[#EEEEEE] hover:bg-black hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href={personalInfo.linkedinLink} 
                        aria-label="LinkedIn" 
                        className="p-2 border border-[#EEEEEE] hover:bg-black hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href={personalInfo.twitterLink} 
                        aria-label="Twitter" 
                        className="p-2 border border-[#EEEEEE] hover:bg-black hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      
                      <a 
                        href={personalInfo.codepenLink} 
                        aria-label="CodePen" 
                        className="p-2 border border-[#EEEEEE] hover:bg-black hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionAnimation>
      </main>
      
      <Footer />
    </>
  );
}

'use client'

import { useState } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-600">Durga Prasad Thota</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Durga Prasad Thota
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-8">
              Software Engineer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Specializing in Test Automation, AI Integration, and Quality Assurance. 
              Building scalable automation frameworks and AI-powered testing solutions 
              that reduce manual effort by 60% and improve early bug detection by 35%.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                View Projects
              </a>
              <a href="#contact" className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate Software Engineer with over 2 years of experience in test automation 
                and quality assurance. I specialize in building robust automation frameworks that 
                streamline testing processes and improve software quality.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My expertise lies in Java-Selenium automation, AI-powered testing solutions, and 
                CI/CD integration. I've successfully reduced manual testing effort by 50% and 
                improved early bug detection by 35% through innovative automation strategies.
              </p>
              <p className="text-lg text-gray-600">
                I'm committed to continuous learning and staying updated with the latest testing 
                technologies and methodologies to deliver high-quality software solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-gray-600">Reduction in Testing Time</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">35%</div>
                <div className="text-gray-600">Improved Bug Detection</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Test Cases Created</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-gray-600">Reduced Production Bugs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded mr-3"></div>
                <h3 className="text-xl font-semibold">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'SQL', 'DB2', 'MySQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-green-600 rounded mr-3"></div>
                <h3 className="text-xl font-semibold">Testing & Automation</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Selenium WebDriver', 'JUnit', 'TestNG', 'API Testing', 'Manual Testing', 'Test Automation'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded mr-3"></div>
                <h3 className="text-xl font-semibold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Postman', 'Power BI', 'Tableau', 'Ansible', 'Agile/Scrum'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold">Software Engineer</h3>
                  <p className="text-blue-600 text-lg">Capgemini</p>
                  <p className="text-gray-600">Hyderabad, IN • Jul 2021 - Dec 2023</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-blue-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <p>Developed robust Java-Selenium automation framework, reducing testing time by 50% during production releases</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-green-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <p>Led end-to-end testing of Multi-Factor Authentication (MFA) feature, ensuring security and functionality validation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-purple-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <p>Collaborated with developers to resolve critical defects, reducing post-release issues by 20%</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-orange-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <p>Supported CI/CD operations using UrbanCode Deploy across Windows, Linux, and AIX environments</p>
                </div>
                <div className="flex items-start">
                  <div className="w-5 h-5 bg-red-600 rounded mr-3 mt-1 flex-shrink-0"></div>
                  <p>Created 500+ manual and automated test cases, achieving 40% reduction in production bugs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 group hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">AI-Augmented Test Automation Framework</h3>
                <p className="text-gray-600 mb-4">
                  Built an AI-powered automation framework using Selenium and OpenAI APIs to auto-generate 
                  test cases and simulate complex user scenarios. Integrated with CI/CD pipelines for 
                  continuous testing and used Power BI for defect trend analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Selenium', 'OpenAI API', 'Java', 'Power BI', 'CI/CD'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold text-blue-600">Impact:</span>
                  <span className="ml-2">60% reduction in manual effort, 35% improvement in early bug detection</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 group hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">Extendable Modular Test Automation Framework</h3>
                <p className="text-gray-600 mb-4">
                  Designed and developed a scalable test automation framework using Selenium WebDriver 
                  and Java to streamline end-to-end web application testing. The framework supported 
                  data-driven testing with reusable components and custom reporting.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Selenium WebDriver', 'Java', 'Data-Driven Testing', 'Custom Reporting', 'CI/CD'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold text-blue-600">Impact:</span>
                  <span className="ml-2">High test coverage, reduced maintenance, faster agile releases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              <span>📧</span>
              <span>Email</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              <span>🐙</span>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Durga Prasad Thota. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 
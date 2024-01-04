import React from "react"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"

const projects = [
  {
    name: "myDE",
    technologies: ["React", "NodeJS", "Express", "JWT", "Docker", "Microservices", "Heroku", "MongoDB Atlas"],
    description:[
        "Developed a versatile web-based code editor supporting 5 programming languages (Python, C++, Java, Rust, JavaScript) using a microservice architecture with a NodeJS backend and React frontend.",
        "Seamlessly handled user-submitted code and data through Express APIs, and efficiently managed data in a MongoDB Atlas database.",
        "Leveraged Docker for efficient code execution, created and utilized pre-built images and stored them on Docker Hub.",
        "Integrated robust security features, like limiting Docker CPU/memory usage, rate-limiting, JWT authentication, and  XSS prevention.",
        "Conducted load testing with up to 10,000 concurrent requests and benchmarked a P95 latency of 1100ms."
    ],
    github: "https://github.com/noumxn/myDE",
  },
  {
    name: "Web-A11y",
    technologies: ["NodeJS", "JSDOM", "Axios", "Mocha", "Chai", "Github Workflows", "JavaScript", "HTML", "CSS"],
    description: [
        "Developed a NodeJS tool for AA level WCAG 2.2 compliance, leveraging JSDOM for efficient HTML content manipulation on webpages.",
        "Achieved 70% coverage on accessibility issues, enhancing user experience and expanding the potential userbase by 10%.",
        "Utilized the Mocha testing framework and the Chai assertion library for reliable testing and implemented Github Workflows for seamless integration and continuous testing, ensuring reliability and accuracy of accessibility assessment.",
        "Devised a severity ranking system for accessibility issues, facilitating efficient prioritization and resolution of high-impact issues.",
    ],
    github: "https://github.com/noumxn/web-a11y",
  },
  {
    name: "PrioriQ",
    technologies: ["MongoDB", "NodeJS", "Express", "JavaScript", "Handlebars", "jQuery", "Ajax", "HTML", "CSS"],
    description: [
      "Engineered a robust Express-powered distributed Task Management web application with a NodeJS backend and a MongoDB database.",
      "Implemented a sophisticated ‘Priority Based Preemptive Scheduling’ algorithm to automate and optimize task prioritization.",
      "Streamlined decision-making by dynamically prioritizing tasks based on their priority and deadlines, reducing prioritization time by 50%.",
      "Developed collaborative features that facilitate team communication and task coordination increasing team efficiency by 10%."
    ],
    github: "https://github.com/noumxn/prioriq",
  },
  {
    name: "pybc",
    technologies: ["Python", "AST", "typing"],
    description: [
      "Leveraged Python to create a custom programming language like ‘bc’ for high precision calculations.",
      "Implemented an efficient lexer for tokenizing input expressions and a parser with Abstract Syntax Trees for expression interpretation.",
      "Constructed an evaluator supporting interactive execution with advanced math operations and arbitrary precision."
    ],
    github: "https://github.com/noumxn/pybc",
  },
]

interface TechnologyBubbleProps {
  technology: string;
  colorClass: string;
}

const TechnologyBubble: React.FC<TechnologyBubbleProps> = ({ technology, colorClass }) => {
  return (
    <span className={`inline-block ${colorClass} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}>
      {technology}
    </span>
  );
};

const colorClasses = [
  "bg-blue-300",
  "bg-green-300",
  "bg-red-300",
  "bg-yellow-200",
  "bg-purple-300",
  "bg-pink-300",
  "bg-indigo-300",
];

const getRandomColorClass = () => {
  return colorClasses[Math.floor(Math.random() * colorClasses.length)];
};

const ProjectsSection = () => {
  return (
    <section id="projects">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <h1 className="my-10 font-bold text-6xl">
        Projects
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <div className="flex flex-wrap mt-3">
                      {project.technologies.map((tech, techIdx) => (
                        <TechnologyBubble key={techIdx} technology={tech} colorClass={getRandomColorClass()} />
                      ))}
                    </div>
                      {project.description.map((desc, id) => {
                        return (
                            <p key={id} className="text-xl leading-7 mt-3 mb-3 text-neutral-600 dark:text-neutral-300">
                                • {desc}
                            </p>
                        )
                      })}
                    <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} passHref legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform cursor-pointer">
                        <BsGithub size={30} />
                      </a>
                    </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection

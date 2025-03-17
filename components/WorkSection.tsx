import React from "react"
import SlideUp from "./SlideUp"

const experience = [
  {
    company: "RecruitEye",
    position: "Software Engineer",
    technologies: ["Node.js", "JSDoc", "React", "Vite", "Express", "Python", "Flask", "NGINX", "OpenAI", "MongoDB Atlas", "PostgreSQL", "EC2", "Lambda", "S3", "Go", "Rust"],
    description: [
        "Led the development lifecycle of 5 core services for the AI job-board platform, making architectural, design, and development decisions. Collaborated with cross-functional teams to enhance system performance and efficiency.",
        "Developed AI-powered Resume and Cover Letter Generation services with 25+ dynamic, ATS-friendly LaTeX templates. Used LLMs with LangChain for resume parsing and data extraction, content creation, job-specific customization. Implemented CloudFront to cache PDFs, reducing latency by 70%, and integrated S3 for storage.",
        "Constructed an ETL pipeline to ingest 6.1 million daily job postings. Optimized MongoDB Atlas with partitioned collections to enhance query performance and scaling, reducing manual intervention by 95%.",
        "Engineered robust architecture for the pipeline using Lambda, S3, and a dedicated MongoDB cluster, achieving 99.9% uptime and reliability across workflows by aligning uptime with fault-tolerant workflows. Leveraged AWS Step Functions and CloudWatch for comprehensive monitoring, automatic retries, and seamless error handling.",
        "Streamlined job data operations with Go, using goroutines for concurrent bulk updates and partitioned MongoDB collections, enabling over 300K+ daily job updates in under 10 minutes and peak memory usage below 1GB.",
    ],
  },
  {
    company: "Stevens Institute of Technology",
    position: "Graduate Course Assistant",
    technologies: ["Python", "Node.js", "TypeScript", "Puppeteer", "Axios", "MongoDB", "Canvas API"],
    description: [
        "Automated submission preprocessing and grading using Node.js, Puppeteer, Axios, and MongoDB, efficiently handling over 250 student submissions.",
        "Engineered a custom Typescript-based assertion library to integrate with grading scripts.",
        "Reduced grading time from 100-120 hours to a few minutes weekly by efficiently integrating the Canvas API with the grading solution.",
        "Designed course assignments to facilitate and optimal learning experience for students.",
        "Provided student support through Office Hours and Slack, addressing course-related inquiries, and clarifying key concepts.",
    ],
  },
  {
    company: "CodeKindle",
    position: "Software Engieer",
    technologies: ["Node.js", "JSDoc", "Express", "PostreSQL", "NGINX", "Jest", "D3.js", "AWS", "CircleCI", "RabbitMQ", "Redis"],
    description: [
        "Collaborated in the development of a Employee Experience Platform, supporting feedback submissions, pulse surveys, and anonymous Q&A, enabling over 12,000 employees to engage continuously.",
        "Designed and implemented highly customizable survey templates with dynamic question branching using React. Integrated D3.js to build interactive dashboards with comparative analytics, increasing usage by 45%.",
        "Architected a microservice backend with Node.js, Express, and RabbitMQ, ensuring seamless communication across services. Utilized PostgreSQL and Redis caching, achieving a P95 response time of 950ms.",
        "Conducted integration and E2E tests with Jest, and Cypress, achieving 99% code coverage and robust stability.",
    ],
  },
  {
    company: "SecureDrop",
    position: "Open Source Contributor",
    technologies: ["Python", "JavaScript", "GnuPG", "Docker"],
    description: [
        "Revamped SecureDrop's security signature verification process, leveraging Python and JavaScript for backend enhancements.",
        "Boosted application performance while downloading browsers by 30% through Docker-based deployment optimizations and substituting the gpg verification tool with gpgv and keyring.",
        "Contributed to a significant reduction in dependencies and streamlined operations, elevating security, and operational efficiency.",
    ],
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

const WorkSection = () => {
  return (
    <section id="experience">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <h1 className="my-10 font-bold text-6xl">
        Work Experience
      </h1>
      <div className="flex flex-col space-y-28">
        {experience.map((experience, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8">
                    <h1 className="text-4xl font-bold mb-6">{experience.company}</h1>
                    <em className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-300">
                      {experience.position}
                    </em>
                    <div className="flex flex-wrap mt-3">
                      {experience.technologies.map((tech, techIdx) => (
                        <TechnologyBubble key={techIdx} technology={tech} colorClass={getRandomColorClass()} />
                      ))}
                    </div>
                      {experience.description.map((desc, id) => {
                        return (
                            <p key={id} className="text-xl leading-7 mt-3 mb-3 text-neutral-600 dark:text-neutral-300">
                                • {desc}
                            </p>
                        )
                      })}
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

export default WorkSection

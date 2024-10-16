import React from "react"
import SlideUp from "./SlideUp"

const experience = [
  {
    company: "RecruitEye",
    position: "Software Engineer",
    technologies: ["Node.js", "JSDoc", "React", "Vite", "Express", "Python", "Flask", "NGINX", "OpenAI", "MongoDB Atlas", "PostgreSQL", "EC2", "Lambda", "S3", "Go", "Rust"],
    description: [
        "Led the development lifecycle of the RecruitEye platform, making all architecture, design, and development decisions. Mentored 2 junior software engineers, providing guidance and fostering growth within the team.",
        "Architected a microservices platform on AWS (S3, Lambda, EC2) to ensure scalability and reliability, optimizing system performance. Reduced latency by 40% through API Gateway load balancing, enhancing responsiveness.",
        "Implemented CI/CD pipelines, reducing deployment time by 50%, streamlining the release process. Increased code coverage to 85% through automated testing frameworks (unit, integration, E2E), improving code reliability.",
        "Reduced cloud infrastructure costs by 20% through strategic changes while maintaining performance.",
        "Negotiated a 50% reduction in the procurement costs of job post data with major aggregators saving us $20,000 per annum, lowering operational expenses. Processed 6 million job postings daily via an automated AWS Lambda pipeline, indexing the database to improve filtering speeds for expired jobs.",
        "Collaborated with cross-functional teams to enhance system performance, job-matching algorithms, and UI/UX, driving system efficiency."
    ],
  },
  {
    company: "Stevens Institute of Technology",
    position: "Course Assistant",
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
    technologies: ["Node", "Express", "PostreSQL", "NGINX", "Mocha", "Chai", "D3.js", "EC2", "CircleCI"],
    description: [
        "Collaborated in the development of a Employee Survey Tool, enabling over 12,000 employees to submit feedback.",
        "Designed and implemented user-friendly survey templates using React. Utilized D3.js to create interactive dashboards, allowing users to access survey statistics and analysis, increasing in dashboard usage by 30%.",
        "Developed the backend with Node.js and Express for seamless integration with a PostgreSQL database to store and retrieve survey responses and user data, achieving a P95 response time of less than 1200 ms",
        "Conducted thorough testing using Mocha and Chai, achieving a code coverage of 90% on unit tests and ensuring high reliability and stability of the application. Doc",
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

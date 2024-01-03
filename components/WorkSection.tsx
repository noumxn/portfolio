import React from "react"
import SlideUp from "./SlideUp"

const experience = [
  {
    company: "Stevens Institute of Technology",
    position: "Course Assistant",
    technologies: ["Python", "NodeJS", "TypeScript", "Puppeteer", "Axios", "MongoDB", "Canvas API"],
    description: [
        "Collaborate in designing assignments to facilitate an optimal learning experience for students.",
        "Develop grading scripts for accurately assessing and evaluating submitted assignments, reducing grading time from approximately 100 - 120 hours to a few minutes weekly for ~240 submissions.",
        "Conduct Office Hours and monitored Slack, actively assisting students by answering questions about their assignments, projects, as well as addressing any queries pertaining to course concepts and topics.",
    ],
  },
  {
    company: "SecureDrop",
    position: "Open Source Contributor",
    technologies: ["Python", "JavaScript", "GnuPG", "Docker"],
    description: [
        "Improved security requirements by updating the signature verification process in the SecureDrop project.",
        "Upgraded performance of application by 30% while downloading various browsers, by using the lighter and more efficient gpgv verification tool along with keyring instead of gpg.",
        "Achieved more efficient verification process, improved security, and reduced dependencies as a result.",
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

"use client"
import React from "react"
import { Link } from "react-scroll"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2">
          <h1 className="text-8xl font-bold mt-6 md:mt-0 md:text-8xl">Hi, I&#39;m Nouman!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          Interested in what I do? Have a look around!
          </p>
          <Link
            to="experience"
            className="inline-block mr-5 text-neutral-100 font-semibold px-6 py-3 bg-gray-500 rounded shadow hover:bg-gray-600"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Work Experience
          </Link>
          <Link
            to="projects"
            className="inline-block mr-5 text-neutral-100 font-semibold px-6 py-3 bg-gray-500 rounded shadow hover:bg-gray-600"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <a
            href="/resume.pdf"
            className="inline-block mr-5 mt-5 text-neutral-100 font-semibold px-6 py-3 bg-gray-500 rounded shadow hover:bg-gray-600"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

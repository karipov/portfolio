import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
  stack: string[];
}

interface ProjectProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg shadow-md border">
          <img
            className="w-full rounded-t-lg aspect-[2/1]"
            src={project.image}
          />
          <div className="text-xl md:text-2xl m-3 font-bold">
            {project.title}
          </div>
          <p className="text-base m-3 text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

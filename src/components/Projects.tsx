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
        <div
          key={index}
          className="rounded-lg shadow-md border dark:border-gray-600 dark:bg-slate-700 hover:opacity-80"
        >
          <img
            className="w-full border-b dark:border-gray-600 rounded-t-lg aspect-[2/1]"
            src={project.image}
            alt={project.title}
          />
          <div className="text-xl md:text-2xl m-4 font-bold">
            {project.title}
          </div>
          <p className="text-base m-4 text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}

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
    <div className="grid">
      {projects.map((project, index) => (
        <div key={index}>{project.title}</div>
      ))}
    </div>
  );
}

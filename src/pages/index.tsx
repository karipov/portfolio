import type { NextPage } from "next";

import Feed from "../components/Feed";
import AboutMe from "../components/AboutMe";
import Section from "../components/Section";
import Projects from "../components/Projects";

import projects from "../data/projects.json";

const Home: NextPage = () => {
  return (
    <Feed>
      <AboutMe />

      <Section title="Projects">
        <Projects projects={projects} />
      </Section>
    </Feed>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";

import Feed from "../components/Feed";
import AboutMe from "../components/AboutMe";

const Home: NextPage = () => {
  return (
    <Feed>
      <AboutMe />
    </Feed>
  );
};

export default Home;

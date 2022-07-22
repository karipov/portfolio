import type { NextPage } from "next";

const AboutMe: NextPage = () => {
  return (
    <div>
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Hi! My name is Komron.
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mt-2">
        I&apos;m a sophomore at Brown University studying Computer Science. In
        my free time, I build things.
      </p>
    </div>
  );
};

export default AboutMe;

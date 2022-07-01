import React from "react";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
           I am <span className="font-bold text-red-200">JAGJIT SINGH</span> I am from Ambala ( Haryana ). I am a crative, hard working and smart working persion. I have 1.5 years frontend developer experience and have worked on technologies like Html CSS and Bootstrap. But now I work with newer technologies including React js, Node js, Mongodb, and Express js as well as tailwindcss, metrial ui and chakra ui to improve the ui design.Ever since the interest in coding has started, the desire to learn more and more new technologies has started waking up. 
          </p>
          <br />
          <p className="text-xl~">
            To pursue a carrier with a company having a global vision, which
            encourages creativity and offers an opportunity to learn and develop
            as a person, successful in professional as well as in personal life.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

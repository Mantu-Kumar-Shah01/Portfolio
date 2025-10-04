import React from 'react';

const About = () => {
  return (
    <section className="text-white bg-gray-400 shadow-lg py-16 px-6 md:px-16 lg:px-20 w-full " id="about">

      {/* Heading */}
      <h3 className="text-3xl mt-16 font-bold mb-4 text-center text-black">
        About Me
      </h3>
      <div className="bg-teal-600 rounded-full w-20 h-1 mx-auto my-3"></div>

      {/* About Text */}
      <div className="bg-white text-gray-500 font-light shadow-md rounded-xl py-8 px-6 md:px-16 lg:px-32 mt-10">
        <p>
          I am <span className="font-light text-black under">Mantu Kumar Shah</span>, a B.Tech student in Computer Science Engineering passionate about web development and software engineering. I have experience in full-stack web development, working with technologies like <span className="font-semibold text-black/70">HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and Bootstrap</span>.
        </p>

        <p className="mt-4">
          My projects include frontend and backend development, API integration, and cloud deployment, giving me practical experience in building scalable applications. I have also worked with JavaScript, Python, and database management.
        </p>

        <p className="mt-4">
          Beyond coding, I am passionate about chess, which has strengthened my analytical thinking, problem-solving, and strategic planning. I enjoy studying chess strategies and continuously improving my gameplay.
        </p>

        <p className="mt-4">
          I am eager to learn emerging technologies, take on challenges, and grow as a developer while contributing to impactful projects.
        </p>

        {/* Skills Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12 text-gray-700">

          {/* Frontend */}
          <div className="w-full md:w-1/3 border-l-4 border-gray-800 bg-white rounded-2xl shadow-md px-6 py-6 flex flex-col items-center text-center">
            <h2 className="font-semibold text-lg text-black">Frontend Development</h2>
            <p className="font-light mt-2">
              Creating responsive, user-friendly interfaces with modern frameworks
            </p>
          </div>

          {/* Backend */}
          <div className="w-full md:w-1/3 border-l-4 border-gray-800 bg-white rounded-2xl shadow-md px-6 py-6 flex flex-col items-center text-center">
            <h2 className="font-semibold text-lg  text-black">Backend Development</h2>
            <p className="font-light mt-2">
              Building robust APIs and server-side applications
            </p>
          </div>

          {/* Problem Solving */}
          <div className="w-full md:w-1/3 border-l-4 border-gray-800 bg-white rounded-2xl shadow-md px-6 py-6 flex flex-col items-center text-center">
            <h2 className="font-semibold text-lg  text-black">Problem Solving</h2>
            <p className="font-light mt-2">
              Turning complex challenges into elegant solutions
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;

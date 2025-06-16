import React from 'react';

const About = () => {
    return (
        <div className="w-full min-h-screen bg-black text-white px-6 md:px-32 py-20" id="about">
            <h2 className="text-4xl font-bold mb-8 border-b-2 border-pink-400 inline-block">About Me</h2>

            {/* Career Objective */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-pink-400 mb-4">Career Objective</h3>
                <p className="text-lg leading-relaxed text-gray-300">
                    To channel my enthusiasm and expand my skill set through a challenging role.
                    Eager to embrace new opportunities, I am committed to maintaining a strong work ethic,
                    meeting deadlines, and contributing to the success of the organization.
                </p>
            </div>

            {/* Education Timeline */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-pink-400 mb-6">Education</h3>
                <div className="relative border-l-2 border-pink-400 pl-6">

                    {/* Education Item 1 */}
                    <div className="mb-10">
                        <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-2 top-1"></div>
                        <h4 className="text-xl font-semibold">Rajalakshmi Engineering College</h4>
                        <p className="text-sm text-gray-400">B.E. Computer Science Engineering (2022 - 2026)</p>
                        <p className="mt-1 text-gray-300">Current pre-final year student actively exploring tech and real-world projects.</p>
                    </div>

                    {/* Education Item 2 */}
                    <div className="mb-10">
                        <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-2 top-1"></div>
                        <h4 className="text-xl font-semibold">[Your Higher Secondary School]</h4>
                        <p className="text-sm text-gray-400">HSC - [Year]</p>
                        <p className="mt-1 text-gray-300">Completed higher secondary with a focus on mathematics and computer science.</p>
                    </div>

                    {/* Add more if needed */}

                </div>
            </div>

            {/* Skills - Optional */}
            {/* 
      <div>
        <h3 className="text-2xl font-semibold text-pink-400 mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4 text-gray-300">
          <span className="bg-gray-800 px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-full">UI/UX</span>
        </div>
      </div>
      */}
        </div>
    );
};

export default About;

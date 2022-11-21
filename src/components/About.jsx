import React from "react";


const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#500] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#0a192f] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#500">
                About
              </p>
            </div>
     
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Brett Starrett, nice to meet you. Check out some of my work.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Forward-thinking Software Engineer with experience working productively in dynamic environments. Proud team player focused on achieving project objectives with speed and accuracy. Gifted at translating basic client requirements into technical development plans. Communicates productively with both technical and non-technical personnel and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
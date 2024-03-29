import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center  justify-center py-5">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="ONE OF THE PROJECT"
          description="loremldgknlkdnglkdnlkdfndslkfnlskdnflkdnflkanfl alnflkadnflkanflkas"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="TWO OF THE PROJECT"
          description="loremldgknlkdnglkdnlkdfndslkfnlskdnflkdnflkanfl alnflkadnflkanflkas"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="ONE OF THE PROJECT"
          description="loremldgknlkdnglkdnlkdfndslkfnlskdnflkdnflkanfl alnflkadnflkanflkas"
        />
      </div>
    </div>
  );
};

export default Projects;

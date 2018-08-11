// ProjectList.js
import React from 'react';
import Project from './project';

const ProjectList = (props) => {
  const projectNodes = props.data.map(project => (
    <Project
      headerTop={project.headerTop}
      headerBottom={project.headerBottom}
      description={project.description}
      liveURL={project.liveURL}
      theme={project.theme}
      image={project.image}
      type={project.type}
    />
  ));
  return (
    <div className="case-items">
      <h2 className="section-header">


        Projects.
</h2>
      {projectNodes}
    </div>
  );
};

export default ProjectList;

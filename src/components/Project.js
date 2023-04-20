import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Project.css';

const Project = ({ title, description, imageUrl, projectId }) => {
  const handleClick = () => {
    window.location.replace(`/${projectId}`);
  };

  return (
    <Link to={{ pathname: `/${projectId}`, search: `id=${projectId}` }} onClick={handleClick}  style={{textDecoration: 'none'}}>
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
              <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
    </Link>
  );
};


export default withRouter(Project);

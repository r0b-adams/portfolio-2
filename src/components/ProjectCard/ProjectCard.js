import "./ProjectCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import ProjectModal from "../ProjectModal/ProjectModal";

const ProjectCard = (props) => {
  return (
    <>
      <div className="card transparent">
        <div className="card-image hoverable transparent">
          <img
            className="modal-trigger"
            data-target={props.id}
            src={props.imgsrc}
            alt=""
          />
        </div>
        <div className="card-stuff">
          <span className="card-title">{props.name}</span>
          <div className="card-icons card-title">
            <a href={props.appURL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>

            <a href={props.repoURL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

      <ProjectModal
        key={props.name}
        id={props.id}
        name={props.name}
        desc={props.desc}
        role={props.role}
        tech={props.tech}
        appURL={props.appURL}
        repoURL={props.repoURL}
        imgsrc={props.imgsrc}
      />
    </>
  );
};

export default ProjectCard;

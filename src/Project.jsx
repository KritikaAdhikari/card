import React from "react";
function Project(props){
    return(
        <div className="card">
            <img className="project-card" src={props.url} alt="project image"/>
            <h2>{props.name}</h2>
            <p className="cause">{props.cause}</p>
          
            <button>Donate Now</button>
            
          
            </div>
        
    );
}

export default Project;


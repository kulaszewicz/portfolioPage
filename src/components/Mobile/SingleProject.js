import React from 'react'


const SingleProject = (props) => (
    <div>
        <a href={props.link} target="_blank"><h4>{props.title}</h4>
        <img src={props.img} alt={'projectImg'} className="project-img"/></a>
        <h5 className={props.projectState}>{props.projectState}</h5>
        <p className="project-text">{props.paragraph}
        </p>
    </div>
);

SingleProject.defaultProps = {
    title: '',
    img: undefined,
    projectState: 'completed',
    paragraph: ''
};

export default SingleProject
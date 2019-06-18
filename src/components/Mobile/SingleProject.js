import React from 'react'


const SingleProject = (props) => (
    <div>
        <a href="projects/kamir/index.html" target="_blank"><h4>{props.title}</h4></a>
        <img src={props.img} alt={'kamirImg'} className="project-img"/>
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
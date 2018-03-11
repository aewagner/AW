import React, { Component } from "react";
import Card from "../Card";
import testImages from '../../projects.json';
import './Projects.css';

let imagesArr = testImages;
// let idArr;

class Projects extends Component {

    state = {
        images: [],
    };

    componentDidMount = () => {
        let shuffledImages;

        for (let i = imagesArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArr[i], imagesArr[j]] = [imagesArr[j], imagesArr[i]];
        }
        shuffledImages = imagesArr;

        this.setState({ images: shuffledImages});




    };

    render() {
        return (
            <div className='wrapper'>
                {this.state.images.map(image => (
                    <Card

                        id={image.id}
                        key={image.id}
                        title={image.title}
                        image={image.image}
                        alt={image.alt}
                        github={image.github}
                        live={image.live}
                    />
                ))}
            </div>
        )
    }
}


export default Projects;
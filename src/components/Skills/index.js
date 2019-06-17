import React,{Component} from 'react';
import './styles.css'

class Skills extends Component{
    render(){
        return(
            <section id="sectionSkills">
                <h1>Algumas Habilidades</h1>
                <div className="row">
                    <ul> 
                        <li>Java EE</li>
                        <li>Spring</li>
                        <li>Redes</li>
                        <li>Linux</li>
                    </ul>
                    <ul>
                        <li>Hibernate</li>
                        <li>JPA</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <ul>
                        <li>JavaScript</li>
                        <li>Jenkins</li>
                        <li>Bootstrap</li>
                        <li>GIT</li>
                    </ul>
                    <ul>
                        <li>Rest</li>
                        <li>MYSQL</li>
                        <li>JSF</li>
                        <li>Nginx</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Skills;
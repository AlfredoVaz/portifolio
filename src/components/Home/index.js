import React,{Component} from 'react';
import './styles.css'
import minhaFoto from '../../assets/minhaFoto.JPG'
import curriculo from '../../assets/AlfredoVaz.pdf'

class Home extends Component{
    render(){
        return(
            <section className="row">
                <div className="column col-lg-6 col-md-12" align= "center">
                    <div>
                        <img src={minhaFoto} id="minhaFoto"/>
                    </div>
                    <div>
                        <button className="btn" id="buttonCV"><a href={curriculo} download={curriculo}>Download CV</a></button>
                    </div>
                </div>
                <div className="column col-lg-6 col-md-12">
                    <ul>
                        <h4>Interesses</h4>
                        <li>Segurança da Informação</li>
                        <li>Desenvolvimento Web</li>
                        <li>Redes</li>
                        <h4>Idiomas</h4>
                        <li>Portugues - Nativo</li>
                        <li>Ingles - Basico</li>
                        <h4>Formação</h4>
                        <li>Ensino Médio - Completo</li>
                        <li>Ensino Superior - Cursando</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Home;
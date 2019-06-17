import React,{Component} from 'react';
import './styles.css'
import geovanaGarcia from '../../assets/geovanaGarcia.JPG'
import videoMaker from '../../assets/videoMaker.jpg'


class Jobs extends Component{
    render(){
        return(
            <section id="sectionJobs">
                <h1>Projetos</h1>
                <h5>Aqui alguns trabalhos desenvolvidos!</h5>
                <div className="central row">
                    <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                        <div id="divGirl">
                            <img className="imageBlogs" src={geovanaGarcia}></img>
                        </div>
                        <div>
                            <br/><h6>Geovana Garcia</h6>
                        </div>
                        <div>
                            <p>Trabalho para a matéria de Programação Web onde repliquei um site feito em React apenas com HTML E CSS</p>
                        </div>
                        <button className="btn buttonBlogs"><a target="blank" href="https://www.geovannagarcia.com.br/">Site original</a></button>
                        <button className="btn buttonBlogs"><a target="blank" href="https://alfredovaz.github.io/siteGeovanaGarcia/">Site replicado</a></button>
                    </div>
                    <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                        <div id="divGirl">
                            <img className="imageBlogs" src={videoMaker}></img>
                        </div>
                        <div>
                            <br/><h6>Video Maker</h6>
                        </div>
                        <div>
                            <p>O curso do Filipe Deschamps te ensina a produzir 4 robos que juntos produzem videos automatizados</p>
                        </div>
                        <button className="btn buttonBlogs"><a target="blank" href="https://github.com/AlfredoVaz/video-maker">Veja o projeto</a></button>
                        <button className="btn buttonBlogs"><a target="blank" href="https://www.youtube.com/watch?v=kjhu1LEmRpY&list=PLMdYygf53DP4YTVeu0JxVnWq01uXrLwHi">Veja o curso</a></button>
                    </div>
                </div>

            </section>
        )
    }
}

export default Jobs;
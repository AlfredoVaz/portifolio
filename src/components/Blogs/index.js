import React,{Component} from 'react';
import './styles.css'
import girlgif from '../../assets/girlgif.gif'
import fight from '../../assets/fight.jpg'
import perfect from '../../assets/feitoMelhor.png'

class Blogs extends Component{
    render(){
        return(
            <section id="sectionBlogs">
                <h1>Blogs</h1>
                <h5>Aqui algumas paginas que eu recomendaria a qualquer um</h5>
                <div className="central row">
                    <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                        <div id="divGirl">
                            <img className="imageBlogs" src={perfect}></img>
                        </div>
                        <div>
                            <br/><h6>Feito é melhor que perfeito</h6>
                        </div>
                        <div>
                            <p>Em momentos da minha vida não conseguia efetuar minhas tarefas dentro dos prazos, 
                            em muitas das vezes prazos determinados por mim mesmo.</p>
                        </div>
                        <button className="btn buttonBlogs"><a target="blank" href="http://www.allanperon.com.br/feito-e-melhor-que-perfeito/">Clique Aqui</a></button>
                    </div>

                    <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                        <div id="divGirl">
                            <img className="imageBlogs" src={girlgif}></img>
                        </div>
                        <div>
                            <br/><h6>LoFi Hip-Hop</h6>
                        </div>
                        <div>
                            <p>Quer saber quais musicas eu estava ouvindo enquanto desenvolvia esse portifólio? Da uma olhada na Radio LoFi Hip-Hop!</p>
                        </div>
                        <button className="btn buttonBlogs"><a target="blank" href="https://www.youtube.com/watch?v=hHW1oY26kxQ">Clique Aqui</a></button>
                    </div>

                    <div className=" row col-lg-3 col-md-4 threeBlogs imgBlackWhite">
                        <div id="divGirl">
                            <img className="imageBlogs" src={fight}></img>
                        </div>
                        <div>
                            <br/><h6>McGregor x Mayweather</h6>
                        </div>
                        <div>
                            <p>Como uma luta de UFC pode nos mostrar estratégidas usadas em E-commerce e Marketplace!</p>
                        </div>
                        <button className="btn buttonBlogs"><a target="blank" href="https://www.ecommercebrasil.com.br/artigos/luta-milionaria-floyd-conor/">Clique Aqui</a></button>
                    </div>

                </div>
            </section>
        )
    }
}

export default Blogs;
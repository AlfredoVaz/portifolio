import React,{Component} from 'react';
import './styles.css'

class Biography extends Component{
    render(){
        return(
            <section id="sectionBiography">
                <h1>Sobre mim</h1>
                <div className="central row">
                    <div className=" row col-lg-3 col-md-5 biography text-justify">
                        <div>
                            <br/><h4>Biografia</h4>
                        </div>
                        <div>
                            <p>Sempre gostei de criar e saber como as coisas funcionam. <br/>Em 2013 tive a oportunidade de fazer o Ensino Médio na ETEC Pedro D'Arcádia Neto 
                                que me concedeu maiores chances de entrar em uma universidade pública, 
                                felizmente após me formar, ingressei no curso de Engenharia de Software na UTFPR - Cornélio Procópio.</p>
                        </div>
                    </div>
                    <div className=" row col-lg-3 col-md-5 biography text-justify">
                        <div>
                            <br/><h4>Profissão</h4>
                        </div>
                        <div>
                            <p>Em Julho de 2017 tive a minha primeira oportunidade na área de TI, uma vaga de estágio na VSM Informática de Assis, 
                                trabalhei durante um ano efetuando implantações de E-commerce e mais nove meses no desenvolvimento do mesmo produto. <br/>Durante esse 
                                período ganhei experiência com servidores linux, redes e desenvolvimento Java</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Biography;
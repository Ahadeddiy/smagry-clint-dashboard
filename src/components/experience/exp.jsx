import React from "react";
import './exp.css';
import { BsFillPatchCheckFill } from "react-icons/bs";

const Exp = () => {
    return(
        <section id="exp">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
               <div className="ecperience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content" >
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                           <div>
                           <h4>JavaScript</h4>
                            <small className="text-light">Experienced</small>
                           </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>Git</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>React.js</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>

                   </div> 
                   <div className="ecperience__backend">
                    <h3>Other Skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>Git</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>Three.js</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div><h4>IOT</h4>
                            <small className="text-light">Intermediate</small></div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>WordPress</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>Figma</h4>
                            <small className="text-light">Intermediate</small>
                            </div>
                        </article>


                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon"/>
                            <div>
                            <h4>MS Office</h4>
                            <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                    

                   </div>
            </div>
        </section>
    )
}

export default Exp;
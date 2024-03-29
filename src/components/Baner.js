import React from "react";
import PathTop from "./PathTop";
import PathBottom from "./PathBottom";


const Baner = (props) => {
    return (
        <div>
            <section className='baner' style={{  backgroundImage: `url(${[props.image]})`}}>
                <PathTop />
                    
                    <div className={`${props.background ? 'baner-background ' : ''}`}>
                        <div>
                            {props.text1? <p>{props.text1}</p> : null}
                            {props.text2? <h1>{props.text2}</h1> : null}
                            <div/>
                        </div>
                    </div>
                <PathBottom />
            </section>
        </div>
    );
}


export default Baner;
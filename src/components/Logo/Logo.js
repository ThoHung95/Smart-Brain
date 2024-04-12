import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt 
                className="Tilt br2 shadow-2 parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <div className="inner-element">
                    <div>
                        <img alt='brain pic' src={brain}/>
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;

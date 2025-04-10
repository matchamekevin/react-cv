import React from 'react';
import Navigation from '../components/Navigation';

const Accueil = () => {
    return (
        <div className="Accueil">
            <Navigation/>
            <div className="AccueilContent">
                <div className="content">
                    <h1>MATCHAME Gnati Kevin</h1>
                    <h2>Developpeur Front-end</h2>
                    <div className="pdf">
                        <a href="./im/CV.pdf" target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
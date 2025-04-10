import React from 'react';
import { NavLink } from 'react-router-dom';

const Introuvable = () => {
    return (
        <div className="introuvable">
            <div className="introuvableContent">
                <h3>Désolé cette page n'existe pas !</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Introuvable;
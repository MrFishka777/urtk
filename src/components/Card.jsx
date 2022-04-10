import React from 'react';
import curved from '../assets/img/curved-images/curved14.jpg';
import '../css/style.css';
import '../assets/css/nucleo-icons.css';
import '../assets/css/nucleo-svg.css';
import '../assets/css/soft-ui-dashboard.css';

const Card = ({ children, title, subtitle }) => {
	return (
	<section className="min-vh-100 mb-8">
    <div className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg" style={{ backgroundImage: `url(${curved})`}}>
      <span className="mask bg-gradient-dark opacity-6"/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 text-center mx-auto">
            <h1 className="text-white mb-2 mt-5">{title}</h1>
            <p className="text-lead text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
        { children }
  </section>
	);
};

export default Card;
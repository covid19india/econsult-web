import React, {useState, useEffect} from 'react';
import * as Icon from 'react-feather';
import TNC from './tnc'
import {Link} from 'react-router-dom';

function StartConsultation(props) {
  
  return (
    <React.Fragment>
    <div className="Home">
        <h3>Please read the below terms and conditions and accept below</h3>
        
        <TNC></TNC>
        <div>
            <Link to="/tawkto" className="button econsult-button">
                        <Icon.Play />
                        <span>Accept and continue&nbsp;</span>
                        </Link>
        
        </div>
        </div>
        </React.Fragment>
  );
}

export default StartConsultation;

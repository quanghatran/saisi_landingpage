import React from 'react'

import Logo from '../../../../assets/images/logo_to.png';
import Line from '../../../../assets/images/LineMinhTriet.png';
import MinhTrietText from '../../../../assets/images/MinhTrietText.png';
import IntroMinhTriet from '../../../../assets/images/IntroNhanSinh.png';
import BackgroundImage from '../../../../assets/images/BackgroundNhanSinh.png';
import CircleNumberic from '../../../../assets/images/CircleNumberic.png';
import MinhTrietText2 from '../../../../assets/images/MinhTrietText2.png';

import './IntroBanner.css';

function IntroBanner(props) {
    return (
        <div className="IntroBanner">
            <div className="IB-baclground"><img src={BackgroundImage} alt="img"/></div>
            <div className="IB-body">
                <div className="IB-logo"><img src={Logo} alt="logo"/></div>
                <div className="IB-line"><img src={Line} alt="img"/></div>
                <div className="IB-line IB-Title"><img src={MinhTrietText} alt="img"/></div>
                <div className="IB-line"><img src={Line} alt="img"/></div>
                <div className="IB-intro"><img src={IntroMinhTriet} alt="img"/></div>
                <div className="IB-CircleNUmberic"><img src={CircleNumberic} alt="img"/></div>
                <div className="IB-intro2"><img src={MinhTrietText2} alt="img"/></div>
            </div>  
        </div>
    )
}

IntroBanner.propTypes = {

}

export default IntroBanner


import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import ClearIcon from '@material-ui/icons/Clear';

import Logo from '../../../../assets/images/logo_to.png';
import Line from '../../../../assets/images/LineMinhTriet.png';
import MinhTrietText from '../../../../assets/images/MinhTrietText.png';
import IntroMinhTriet from '../../../../assets/images/IntroNhanSinh.png';
import BackgroundImage from '../../../../assets/images/BackgroundNhanSinh.png';
import CircleNumberic from '../../../../assets/images/CircleNumberic.png';
import MinhTrietText2 from '../../../../assets/images/MinhTrietText2.png';

import './ VerticalBanner.css';

function  VerticalBanner(props) {
    const history = useHistory();
    const [isDisplay, setIsDisplay] = useState(true);

    const handleClose = () => {
        setIsDisplay(false);
    }

    const redirect = () => {
        history.push('/gioi-thieu-minh-triet-nhan-sinh')
    }

    return (
        <div className="VerticalBanner">
            {
                isDisplay &&
                <div className="Stiky">
                    <div  className="Clear-icon" onClick={handleClose}>
                        <ClearIcon style={{color:"#fff", zIndex:3}}/>
                    </div>
                    <div className="VB-background"><img src={BackgroundImage} alt="img"/></div>
                    <div className="VB-body" onClick={redirect}>
                        <div className="VB-logo"><img src={Logo} alt="logo"/></div>
                        <div className="VB-line"><img src={Line} alt="img"/></div>
                        <div className="VB-line VB-Title"><img src={MinhTrietText} alt="img"/></div>
                        <div className="VB-line"><img src={Line} alt="img"/></div>
                        <div className="VB-intro"><img src={IntroMinhTriet} alt="img"/></div>
                        <div className="VB-CircleNUmberic"><img src={CircleNumberic} alt="img"/></div>
                        <div className="VB-intro2"><img src={MinhTrietText2} alt="img"/></div>
                    </div>  
                </div> 
            }
            {
                isDisplay &&
                <div className="VerticalBannerMobile">
                    <ClearIcon
                        className="Clear-icon" 
                        onClick={handleClose}
                        style={{color:"#fff", zIndex:3}}
                    />
                    <div className="VBM-background"><img src={BackgroundImage} alt="img"/></div>
                    <div className="VBM-body" onClick={redirect}>
                        <div className="VBM-logo"><img src={Logo} alt="logo"/></div>
                        <div className="VBM-line"><img src={Line} alt="img"/></div>
                        <div className="VBM-line VB-Title"><img src={MinhTrietText} alt="img"/></div>
                        <div className="VBM-line"><img src={Line} alt="img"/></div>
                        <div className="VBM-CircleNUmberic"><img src={CircleNumberic} alt="img"/></div>
                    </div> 
                </div>
            }
            
        </div>
    )
}

 VerticalBanner.propTypes = {

}

export default  VerticalBanner


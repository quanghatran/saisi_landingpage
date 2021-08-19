import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@farbenmeer/react-spring-slider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import './SliderBanner.css';

const useStyles = makeStyles((theme) => ({
	iconControl: {
		fontSize:"28px",
        color:"#fff"
	},
	[theme.breakpoints.down('760')]: {
		iconControl:{
			fontSize:"22px"
		}
	},
    [theme.breakpoints.down('600')]: {
		iconControl:{
			fontSize:"18px"
		}
	},
}));

function SliderBanner(props) {
    const {images} = props;
    const classes = useStyles();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const delayTime = setInterval(() => {
            setIndex(index => index + 1);
        },4000);

        return () => clearInterval(delayTime);
        
    },[]);

    const nextSlideHandle = () => {
        setIndex(index => index+1);
    }
    const prevSlideHandle = () => {
        setIndex(index => index-1);
    }
    
    const handleClick = (index) => {
        return () => {
            setIndex(index);
        }
    }

    return (
        <div className="SliderBanner">
            <div className="SB-body">
                <Slider activeIndex={index}>
                    {
                        images.map((image, index) => (
                            <img src={image} alt="slide" key={index}/>
                        ))
                    }
                </Slider>
                <div className="btn_prev" onClick={prevSlideHandle}><ChevronLeftIcon className={classes.iconControl}/></div>
                <div className="btn_next" onClick={nextSlideHandle}><ChevronRightIcon className={classes.iconControl}/></div>
            </div>
            <ul>
                {
                    images.map((image, indexSlide) => {
                        if(indexSlide === index%images.length){
                            return <li className="focus-slide" onClick={handleClick(indexSlide)}></li>
                        }
                        return <li onClick={handleClick(indexSlide)}></li>
                    })
                }
            </ul>
        </div>
    )
}

export default SliderBanner;

import React, {useState} from 'react';
import CarouselItem from "./CarouselItem";
import {Icon, Image} from 'semantic-ui-react'

import icon_1 from '../../Assets/Image/icon/icon.png'
import icon_2 from '../../Assets/Image/icon/icon2.png'
import icon_3 from '../../Assets/Image/icon/icon3.png'
import arrow_left from '../../Assets/Image/icon/arrow_left.png'
import arrow_right from '../../Assets/Image/icon/arrow_right.png'

const styles = {
    button_next: {
        width: "66px",
        height: "66px",
        borderRadius: "33px",
        border: "2px solid #9ca7be",
        backgroundColor: "#39404d",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 27 + "%",
        left: -40 + "px",
        bottom: 0,
        right: 0,
    },
    button_prev: {
        width: "66px",
        height: "66px",
        borderRadius: "33px",
        border: "2px solid #9ca7be",
        backgroundColor: "#39404d",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        top: 28 + "%",
        left: 98 + "%",
        bottom: 0,
        right: 0,
    },
    flex: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

function Carousels() {
    const [images, setImages] = useState([
        <CarouselItem text={`Hashrate`} title={`37.2 T/Hs`} color={`#fb6c86`} icon={icon_1}/>,
        <CarouselItem text={`Active Miners`} title={`60454`} color={`#737aff`} icon={icon_2}/>,
        <CarouselItem text={`Workers`} title={`23975`} color={`#7cf1ab`} icon={icon_3}/>,
    ]);

    const [currentImageIdx, setCurrentImagIdx] = useState(0);

    const prevSlide = () => {
        const resetToVeryBack = currentImageIdx === 0;
        const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;
        setCurrentImagIdx(index);
    };

    const nextSlide = () => {
        const resetIndex = currentImageIdx === images.length - 1;
        const index = resetIndex ? 0 : currentImageIdx + 1;
        setCurrentImagIdx(index);
    };

    const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 3);

    const imageSourcesToDisplay = activeImageSourcesFromState.length < 3
        ? [...activeImageSourcesFromState, ...images.slice(0, 3 - activeImageSourcesFromState.length)]
        : activeImageSourcesFromState;

    return (
        <div style={styles.flex}>
            <button style={styles.button_next} onClick={prevSlide}>
                {/*<Icon name={`angle left`} size={`big`} color={`#9ca7be`}/>*/}
                <Image src={arrow_left}/>
            </button>
            {imageSourcesToDisplay.map((item, index) =>
                <div style={{transition: "ease 4s"}} key={index}>
                    {item}
                </div>
            )}
            <button style={styles.button_prev} onClick={nextSlide}>
                {/*<Icon name={`angle right`} size={`big`} color={`#9ca7be`}/>*/}
                <Image src={arrow_right}/>
            </button>
        </div>
    );
};

export default Carousels;
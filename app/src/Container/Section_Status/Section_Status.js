import React from 'react';
import Title from "../../Components/Title/Title";
import Carousels from "../../Components/Carousel/Carousel";

const styles = {
    section_status: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}

function Section_Status() {
    return (
        <div style={styles.section_status}>
            <Title
                h1={`Status`}
                text1={`Shardpool`}
                text3={`Status`}
                color={`#fff`}
                fontSize_h1={`120px`}
                fontSize_h2={`64px`}
                self={`center`}
            />
            <Carousels/>
        </div>
    )
}

export default Section_Status
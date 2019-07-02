import React from 'react';
import Title from "../../Components/Title/Title";

const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    itemFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
}


function Section_News() {
    return(
        <div>
            <Title
                text1={`News`}
                color={`#fff`}
                fontSize_h2={`44px`}
                self={`flex-Start`}
            />
        </div>
    )
}

export default Section_News
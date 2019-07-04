import React from 'react';
import Title from "../../Components/Title/Title";
import News from "../../Components/News/News";

const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    itemFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
};


function Section_News() {
    return (
        <div style={styles.flex}>
            <Title
                text1={`News`}
                color={`#fff`}
                fontSize_h2={`44px`}
                self={`flex-Start`}
            />
            <div style={styles.itemFlex}>
                <News
                    borderTopNumber={`1px`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`1px`}
                    borderRightNumber={`1px`}
                    imageLetter={`A`}
                    title={`22 April 2019`}
                    text={`Pirl network has a problem. The network 
                    has been split in more than 5 chains. 
                    We are waiting for Pirl devs to solve the 
                    issue.`}
                    relative={`relative`}
                    backgroundColor={`#737aff`}
                    className1={`NewsItemBox`}
                    className2={`NewsItem`}
                />
                <News
                    borderTopNumber={`1px`}
                    borderBottomNumber={`1px`}
                    imageLetter={`n`}
                    title={`22 April 2019`}
                    text={`Pirl network has a problem. The network 
                    has been split in more than 5 chains. 
                    We are waiting for Pirl devs to solve the 
                    issue.`}
                    relative={`relative`}
                    backgroundColor={`#fb6c86`}
                    className1={`NewsItemBox`}
                    className2={`NewsItem`}
                />
                <News
                    borderTopNumber={`1px`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`1px`}
                    borderRightNumber={`1px`}
                    imageLetter={`C`}
                    title={`22 April 2019`}
                    text={`Pirl network has a problem. The network 
                    has been split in more than 5 chains. 
                    We are waiting for Pirl devs to solve the 
                    issue.`}
                    backgroundColor={`#0088ff`}
                    className2={`NewsItem`}
                />

            </div>
        </div>
    )
}

export default Section_News
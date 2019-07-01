import React from 'react';
import Title from "../../Components/Title/Title";
import Card_Charts from "../../Components/Card_Charts";
import Card_Info from "../../Components/Card_Info/Card_Info";

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

function Section_Features() {

    return (
        <div style={styles.flex}>
            <Title
                h1={`Features`}
                text1={`Features`}
                color={`#fff`}
                fontSize_h1={`120px`}
                fontSize_h2={`64px`}
            />
            <div style={styles.itemFlex}>
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#5e3a4f`}
                    BackColor={`#262635`}
                    color1={`#5e3a4f`}
                    color2={`#262635`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#333454`}
                    BackColor={`#2f3454`}
                    color1={`#333454`}
                    color2={`#2f3454`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={``}
                    BackColor={``}
                    color1={``}
                    color2={``}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#243243`}
                    BackColor={`#3b4278`}
                    color1={`#243243`}
                    color2={`#3b4278`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={``}
                    BackColor={``}
                    color1={``}
                    color2={``}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#4c6d47`}
                    BackColor={`#2b3532`}
                    color1={`#4c6d47`}
                    color2={`#2b3532`}
                />
                <Card_Info
                    text1={`Regular payouts`}
                    text2={`every 2 hors`}
                    text3={`Fees`}
                    text4={`- 1,0% for PPLNS and 1,5% for SOLO `}
                    title={`2hrs`}
                    title2={`1%-1,5%`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={'#362d31'}
                    BackColor={'#27262d'}
                    color1={'#362d31'}
                    color2={'#27262d'}
                />
                <Card_Info
                    text1={`Paid to miners`}
                    text2={``}
                    text3={`Miners`}
                    text4={`Online`}
                    title={`$28.81M`}
                    title2={`8121`}
                />
            </div>
        </div>

    )

}

export default Section_Features
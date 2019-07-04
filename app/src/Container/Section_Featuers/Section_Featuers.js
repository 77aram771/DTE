import React from 'react';
import Title from "../../Components/Title/Title";
import Card_Charts from "../../Components/Card_Charts/Card_Charts";
import Card_Info from "../../Components/Card_Info/Card_Info";

const styles = {
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    itemFlex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
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
                self={`center`}
            />
            <div style={styles.itemFlex}>
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#ff6d87`}
                    BackColor={`#2b2836`}
                    color1={`#5e3a4f`}
                    color2={`#262635`}
                    dataNumber={[15, 11, 15, 17, 16, 23, 20]}
                    position={`relative`}
                    borderTopNumber={`0`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`1px`}
                    borderRightNumber={`0`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#6b52a8`}
                    BackColor={`#38365c`}
                    color1={`#333454`}
                    color2={`#2f3454`}
                    dataNumber={[65, 59, 63, 51, 60, 64, 65]}
                    position={`relative`}
                    borderTopNumber={`0`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`0`}
                    borderRightNumber={`0`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#4a73a5`}
                    BackColor={`#4a539e`}
                    color1={`#243243`}
                    color2={`#3b4278`}
                    dataNumber={[45, 50, 51, 45, 41, 43, 45]}
                    borderTopNumber={`0`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`0`}
                    borderRightNumber={`1px`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#59814f`}
                    BackColor={`#363c35`}
                    color1={`#343d35`}
                    color2={`#2b3532`}
                    dataNumber={[65, 59, 80, 81, 60, 64, 65]}
                    position={`relative`}
                    borderTopNumber={`0`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`1px`}
                    borderRightNumber={`0`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#6b4741`}
                    BackColor={`#a95e59`}
                    color1={`#3f2f36`}
                    color2={`#3f3035`}
                    dataNumber={[65, 59, 80, 81, 60, 64, 65]}
                    position={`relative`}
                    borderTopNumber={`0`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`0`}
                    borderRightNumber={`0`}
                />

                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={`#497e79`}
                    BackColor={`#3d6574`}
                    color1={`#293f41`}
                    color2={`#16364b`}
                    dataNumber={[65, 59, 80, 81, 60, 64, 65]}
                    borderTopNumber={`0`}
                    borderBottomNumber={`1px`}
                    borderLeftNumber={`0`}
                    borderRightNumber={`1px`}
                />

                <Card_Info
                    text1={`Regular payouts`}
                    text2={`every 2 hors`}
                    text3={`Fees`}
                    text4={`- 1,0% for PPLNS and 1,5% for SOLO `}
                    title={`2hrs`}
                    title2={`1%-1,5%`}
                    borderTopNumber={`0`}
                    borderBottomNumber={`0`}
                    borderLeftNumber={`1px`}
                    borderRightNumber={`0`}
                />
                <Card_Charts
                    title={`Ethash`}
                    number={`2.25`}
                    measurementUnit={`TH/s`}
                    LineColor={'#0787c2'}
                    BackColor={'#134061'}
                    color1={'#16374b'}
                    color2={'#16344b'}
                    dataNumber={[65, 59, 80, 81, 60, 64, 65]}
                    borderTopNumber={`0`}
                    borderBottomNumber={`0`}
                    borderLeftNumber={`0`}
                    borderRightNumber={`0`}
                />
                <Card_Info
                    text1={`Paid to miners`}
                    text2={``}
                    text3={`Miners`}
                    text4={`Online`}
                    title={`$28.81M`}
                    title2={`8121`}
                    borderTopNumber={`0`}
                    borderBottomNumber={`0`}
                    borderLeftNumber={`0`}
                    borderRightNumber={`1px`}
                />
            </div>
        </div>

    )

}

export default Section_Features
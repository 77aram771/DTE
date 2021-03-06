import React, {useState, useEffect, useContext, useReducer} from 'react'
import 'fomantic-ui-css/semantic.css';
import {Container} from 'semantic-ui-react';
import Headers from "./Container/Header/Header";
import Section_Status from "./Container/Section_Status/Section_Status";
import Section_Features from "./Container/Section_Featuers/Section_Featuers";
import Section_News from "./Container/Section_News/Section_News";
import Section_Other from "./Container/Section_Other/Section_Other";


function App() {
    return (
        <Container>
            <Headers/>
            <Section_Status/>
            <Section_Features/>
            <Section_News/>
            <Section_Other/>
        </Container>

    );
}

export default App;
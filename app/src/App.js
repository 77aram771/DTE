import React from 'react'
import 'fomantic-ui-css/semantic.css';
import {Container} from 'semantic-ui-react';
import Headers from "./Container/Header/Header";
import Section_Status from "./Container/Section_Status/Section_Status";



function App() {
    return (

        <Container>
            <Headers/>
            <Section_Status/>
        </Container>

    );
}

export default App;
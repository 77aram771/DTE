import React from 'react'
import 'fomantic-ui-css/semantic.css';
import {Container} from 'semantic-ui-react';
import Headers from "./Container/Header/Header";
import SearchInput from "./Components/Search/Search";

const styles = {
    borders: {
        border: '1px solid red'
    }
};

function App() {
    return (

        <Container style={styles.borders}>
            <Headers/>
        </Container>

    );
}

export default App;
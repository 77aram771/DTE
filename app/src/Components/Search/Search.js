import React from 'react'
import {Input} from 'semantic-ui-react'

const styles = {
    input: {
        backgroundColor: 'rgba(0, 0, 0, -0.5)'
    }
};

function SearchInput() {
    return (
        <Input
            icon='search'
            placeholder='Miner address or node key'
            size='mini'
            iconPosition='left'
            style={styles.input}
            color='#fff'
        />
    )
}

export default SearchInput
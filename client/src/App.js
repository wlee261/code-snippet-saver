import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SnippetList from './components/SnippetList';
import AddSnippet from './components/AddSnippet';
import { getSnippets } from './actions/snippets'
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
    const dispatch = useDispatch();
    const [currentID, setCurrentID] = useState(null);
    const [snippetData, setSnippetData] = useState({ language: '', description: '', code: '', tags: '', folder: ''});

    useEffect(() => {
        dispatch(getSnippets());
    }, [currentID, dispatch]);

    return(
        <Container>
            <Row>
                <Col>
                    <AddSnippet snippetData={snippetData} setSnippetData={setSnippetData}/>
                </Col>
            </Row>
            <Row>
                <SnippetList currentID={currentID} setCurrentID={setCurrentID} snippetData={snippetData} setSnippetData={setSnippetData}/>
            </Row>
            
        </Container>
    )
}

export default App;
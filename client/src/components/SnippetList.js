import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'

import Snippet from './Snippet';

const SnippetList = ({ currentID, setCurrentID, snippetData, setSnippetData }) => {
    const snippets = useSelector((state) => state.snippets);

    return(
        <Row xs={1} md={2} className="g-4">
            {snippets.map((snippet) => (
                <Col>
                    <Snippet snippet={snippet} currentID={currentID} setCurrentID={setCurrentID} snippetData={snippetData} setSnippetData={setSnippetData} />
                </Col>
            ))}
        </Row>
    )
}


export default SnippetList;
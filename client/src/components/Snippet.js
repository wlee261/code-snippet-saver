import React, { useState } from 'react';

import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { CopyBlock, dracula } from 'react-code-blocks';
import { Trash } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux'

import { updateSnippet, deleteSnippet } from '../actions/snippets';

const Snippet = ({ snippet, currentID, setCurrentID, snippetData, setSnippetData }) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const clear = () => {
        setSnippetData({ language: '', description: '', code: '', tags: '', folder: '' })
    }
    const handleEditClick = () => {
        setShow(true);
        setCurrentID(snippet._id);
        setSnippetData({...snippetData, tags: snippet.tags, code: snippet.code, description: snippet.description})
    }
    const handleClose = () => {
        clear();
        setShow(false);
    }
    const handleSave = () => {
        dispatch(updateSnippet(currentID, snippetData));
        setShow(false);
        setCurrentID(0);
        clear();
    }

    return(
        <>
            <Card style={{ width: '40rem' }}>
                    <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Text>{snippet.folder}</Card.Text>
                                </Col>
                                <Col>
                                    <Button onClick={() => dispatch(deleteSnippet(snippet._id))}>
                                        <Trash />
                                    </Button >
                                    <Button onClick={ handleEditClick }>Edit</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Card.Text>{snippet.language}</Card.Text>
                                <Card.Text>{snippet.tags}</Card.Text>
                                <CopyBlock
                                        text={snippet.code}
                                        language={snippet.language}
                                        theme={dracula}
                                        codeblock
                                />
                                <Card.Text>{snippet.description}</Card.Text>
                            </Row>
                    </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Code Snippet</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="editTags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control as="textarea" value={snippetData.tags} onChange={(e) => setSnippetData({...snippetData, tags: e.target.value})}>{snippet.tags}</Form.Control>
                        </Form.Group>
                        <Form.Group controlId="editSnippet">
                            <Form.Label>Code Snippet</Form.Label>
                            <Form.Control as="textarea" rows={8} value={snippetData.code} onChange={(e) => setSnippetData({...snippetData, code: e.target.value})}>{snippet.code}</Form.Control>
                        </Form.Group>
                        <Form.Group controlId="editDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" value={snippetData.description} onChange={(e) => setSnippetData({...snippetData, description: e.target.value})}>{snippet.description}</Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        
    )
}

export default Snippet;
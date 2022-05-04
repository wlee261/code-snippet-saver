import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Accordion, Form, Button } from 'react-bootstrap';

import { createSnippet } from '../actions/snippets';

const AddSnippet = ({ snippetData, setSnippetData }) => {
    const dispatch = useDispatch();

    const clear = () => {
        setSnippetData({ language: '', description: '', code: '', tags: '', folder: '' })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createSnippet(snippetData));
        clear();
    }

    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Add a new snippet</Accordion.Header>
                <Accordion.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formCodeSnippet">
                            <Form.Label>Snippet</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Add your code snippet" value={snippetData.code} onChange={(e) => setSnippetData({ ...snippetData, code: e.target.value })}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select the language of your snippet</Form.Label>
                            <Form.Select onChange={(e) => setSnippetData({ ...snippetData, language: e.target.value })}>
                                    <option>Plain Text</option>
                                    <option value="python">Python</option>
                                    <option value="javascript">Javascript</option>
                                    <option value="cpp">C++</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control placeholder="Add a description for your code snippet" value={snippetData.description} onChange={(e) => setSnippetData({ ...snippetData, description: e.target.value })}/>
                        </Form.Group>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control placeholder="Add tags to your snippet, seperated by commas" value={snippetData.tags} onChange={(e) => setSnippetData({ ...snippetData, tags: e.target.value })}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select a folder for this snippet to go in</Form.Label>
                            <Form.Select onChange={(e) => setSnippetData({ ...snippetData, folder: e.target.value })}>
                                <option>No folder</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit">Submit</Button> 
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default AddSnippet;
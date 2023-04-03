import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../App';
import AddSnippet from '../components/AddSnippet';

configure({ adapter: new Adapter() });

const mockStore = configureStore()
let store, wrapper

it("renders correctly", () => {
    store = mockStore()
    shallow(<Provider store={store}><App /></Provider>);
})


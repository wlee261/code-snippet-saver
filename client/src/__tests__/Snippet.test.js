import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { shallow, mount, configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import Snippet from '../components/Snippet';

configure({ adapter: new Adapter() });

const mockStore = configureStore()
let store, wrapper

it("renders correctly", () => {
    store = mockStore()
    const tree = renderer
      .create(<Snippet />)
      .toJSON();
    expect(tree).toMatchSnapshot();
})


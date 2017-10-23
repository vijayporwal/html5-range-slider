import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'code';

import AppComponent from './../src/Components/AppComponent';

describe('<AppComponent />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = null;
    });

    it('it render main wrapper', () => {
        wrapper = shallow(<AppComponent />);
        expect(wrapper.text()).to.equal('<styled.div />');
    });

    afterEach(() => {
        wrapper.unmount();
    });
});

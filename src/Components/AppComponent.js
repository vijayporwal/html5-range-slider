import React from 'react';
import RangeSlider from './RangeSliderComponent';

/** Importing css for the components */
import { MainContainer } from './CSS/AppComponentCss';

class AppComponent extends React.Component {
    render () {
        return (
            <MainContainer>
                <RangeSlider />
            </MainContainer>
        );
    }
}

export default AppComponent;

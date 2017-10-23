import React from 'react';

const RangeSlider = class RangeSliderComponent extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			minValue: 100,
			maxValue: 10000,
			defaultValue: 10000,
			defaultStep: 100
		};
		this.sliderChangeHandler = this.sliderChangeHandler.bind(this);
	}
	sliderChangeHandler(e) {
		this.setState({
			defaultValue: e.target.value
        });
        console.log('Range slider change event!');
	}
	render() {
		let sliderData = this.state;

		return (
            <div className="">
                <span>{sliderData.minValue}</span>
                <input type="range"
                    min={sliderData.minValue}
                    max={sliderData.maxValue}
                    value={sliderData.defaultValue}
                    step={sliderData.defaultStep}
                    onChange={this.sliderChangeHandler} />
                <span>{sliderData.defaultValue}</span>
            </div>
        );
	}
};

export default RangeSlider;

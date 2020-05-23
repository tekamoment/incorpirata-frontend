import React, { Component } from "react";

import { Box } from "rebass";
import { Label, Input, Slider } from "@rebass/forms";

class ValueFieldSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldValue: props.defaultValue,
      sliderValue: props.defaultValue,
      step: props.step,
      minValue: props.minValue,
      maxValue: props.maxValue
    };
  }

  sliderChange = event => {
    const val = event.target.value;

    this.setState({
      fieldValue: val,
      sliderValue: val
    });

    this.props.onChange(val);
  };

  inputChange = event => {
    const val = event.target.value;

    if (!isNaN(val)) {
      console.log(`INput changed: ${val}`);
      // const parsedValue = parseInt(val, 10)
      const parsedValue = val;
      if (parsedValue > this.state.max) {
        this.setState({
          fieldValue: this.state.max,
          sliderValue: this.state.max
        });
        this.props.onChange(this.state.max);
      } else if (parsedValue <= this.state.min) {
        this.setState({
          fieldValue: this.state.min,
          sliderValue: this.state.min
        });
        this.props.onChange(this.state.min);
      } else {
        this.setState({
          fieldValue: parsedValue,
          sliderValue: parsedValue
        });
        this.props.onChange(parsedValue);
      }
    } else {
      this.setState({ fieldValue: "" });
    }
  };

  render() {
    return (
      <Box>
        <Label htmlFor={this.props.field}>{this.props.label}</Label>
        <Input
          id={this.props.field}
          name={this.props.field}
          type="number"
          value={this.state.fieldValue}
          placeholder={this.props.placeholder}
          onChange={this.inputChange}
          onFocus={() => this.setState({ step: 1 })}
        />
        <Slider
          id="percent"
          name="percent"
          step={this.state.step}
          defaultValue={this.state.sliderValue}
          onChange={this.sliderChange}
        />
      </Box>
    );
  }
}

export default ValueFieldSlider;

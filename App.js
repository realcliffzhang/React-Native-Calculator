import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

export default class ReactCalculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
    }
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  _renderInputButtons() {
    // Initialize empty list of views
    let views = [];

    // Loop through each row
    for (let i = 0; i < inputButtons.length; i++) {

      // Select row
      let row = inputButtons[i];
      let inputRow = [];

      // Loop through each element in the current row
      for (let j = 0; j < row.length; j++) {

        // Select element
        let input = row[j];
        inputRow.push(<InputButton highlight={this.state.selectedSymbol === input} value={input} onPress={this._onInputButtonPressed.bind(this, input)} key={i + '-' + j} />);
      }
      views.push(<View style={Style.inputRow} key={'row-' + i}>{inputRow}</View>)
    }
    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num) {
    let newInput = (this.state.inputValue * 10) + num;

    this.setState({
      inputValue: newInput
    })
  }

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '-':
      case '+':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
        });
        break;

      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;

    }
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
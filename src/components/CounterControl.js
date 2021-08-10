import React, { Component } from 'react'

export default class CounterControl extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.props.clicked}>{this.props.label}</button>
      </div>
    )
  }
}

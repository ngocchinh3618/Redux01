import React, { Component } from 'react'

export default class CounterOutput extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        Current Counter: {this.props.value}
        
      </div>
    )
  }
}

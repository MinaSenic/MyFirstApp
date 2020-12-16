import React, { Component } from 'react';

export default class Ul extends Component {
    render () {
  
    return (
      <div>
         <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        
          <ul className="Selection">
            {this.props.variable.map (function (item) {
              return (
                <li>
                  {item}
                  </li>
              )})}
            </ul>
    </div>)
    }
}
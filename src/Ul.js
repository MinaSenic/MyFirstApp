import React, { Component } from 'react';
export default class Ul extends Component {
  
  constructor (props){
    super(props);
    this.state = {
      startingNumber: this.props.startingNumber,
      className: (this.props.startingNumber%2 == 0) ? "CrvenoDugme": "PlavoDugme"
    };
  } 

  render () {
    console.log("Render " + this.props.name);

    return (
      <div>
         <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <p>{this.state.startingNumber}</p>

          <button  className={this.state.className}
          title="Increase Value"
          onClick={(event) => this.setState({
            startingNumber: ++this.state.startingNumber,
            className:(this.state.className=="CrvenoDugme") ? "PlavoDugme": "CrvenoDugme"
            
          })}
          >Povecaj vrednost</button>

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
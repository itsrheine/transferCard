import React from 'react';
import BARTmap from '../assets/BART-System-Map-API.png'

class Routes extends React.Component {
  state = {
    name: '',
    direction: '',
    num_stns: '',
  }

  handleChange = (event) => {
    const routeId = event.target.value;
    fetch('https://cors-anywhere.herokuapp.com/http://api.bart.gov/api/route.aspx?cmd=routeinfo&route=' + routeId + '&key=MW9S-E7SL-26DU-VV8V&json=y')
      .then(response => response.json())
      .then(response => {
        let { name, direction, num_stns } = response.root.routes.route;

        console.log(response)

        this.setState({
          name, direction, num_stns
        })

      });
  }
  
  render() {
    const { name, direction, num_stns } = this.state;


    return (
    <div className="container-map">
      <div className="map">
        <img className="bartmap" src={BARTmap} alt="map"/>
      </div>
          
      <div className="container container-mobile ">
        <div className="custom-select">
          <select onChange={this.handleChange}>
            <option value="" disabled selected>Choose your route</option>
            <option value="1">ANTC-SFIA</option>
            <option value="2">SFIA-ANTC</option>
            <option value="3">BERY-RICH</option>
            <option value="4">RICH-BERY</option>
            <option value="5">BERY-DALY </option>
            <option value="6">DALY-BERY</option>
            <option value="7">RICH-MLBR</option>
            <option value="8">MLBR-RICH</option>
          </select>
        </div>
        <div className="bg">
          <div className="result">
            <div>
              <h1>Route: </h1>
              <h1>{name}</h1>
            </div>
            <div className="stations">
              <h3>Direction: {direction}</h3>
              <h3>Number of Stations: {num_stns}</h3>
            </div>
          </div>
        </div>       
      </div>
    </div>
    );
  }
}

export default Routes;